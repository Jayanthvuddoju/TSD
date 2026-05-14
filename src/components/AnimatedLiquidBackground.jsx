import React, { useEffect, useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';

// --- Color parsing utility --- //
export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export function getShaderColorFromString(colorString, fallback = [0, 0, 0, 1]) {
  if (Array.isArray(colorString)) {
    if (colorString.length === 4) return colorString;
    if (colorString.length === 3) return [...colorString, 1];
    return getShaderColorFromString(fallback);
  }
  if (typeof colorString !== 'string') {
    return getShaderColorFromString(fallback);
  }

  let r, g, b, a = 1;
  if (colorString.startsWith('#')) {
    [r, g, b, a] = hexToRgba(colorString);
  } else if (colorString.startsWith('rgb')) {
    [r, g, b, a] = parseRgba(colorString);
  } else if (colorString.startsWith('hsl')) {
    [r, g, b, a] = hslaToRgba(parseHsla(colorString));
  } else {
    console.error('Unsupported color format:', colorString);
    return getShaderColorFromString(fallback);
  }
  return [clamp(r, 0, 1), clamp(g, 0, 1), clamp(b, 0, 1), clamp(a, 0, 1)];
}

function hexToRgba(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  if (hex.length === 6) {
    hex = hex + 'ff';
  }
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const a = parseInt(hex.slice(6, 8), 16) / 255;
  return [r, g, b, a];
}

function parseRgba(rgba) {
  const match = rgba.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);
  if (!match) return [0, 0, 0, 1];
  return [
    parseInt(match[1] ?? '0') / 255,
    parseInt(match[2] ?? '0') / 255,
    parseInt(match[3] ?? '0') / 255,
    match[4] === undefined ? 1 : parseFloat(match[4])
  ];
}

function parseHsla(hsla) {
  const match = hsla.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);
  if (!match) return [0, 0, 0, 1];
  return [
    parseInt(match[1] ?? '0'),
    parseInt(match[2] ?? '0'),
    parseInt(match[3] ?? '0'),
    match[4] === undefined ? 1 : parseFloat(match[4])
  ];
}

function hslaToRgba(hsla) {
  const [h, s, l, a] = hsla;
  const hDecimal = h / 360;
  const sDecimal = s / 100;
  const lDecimal = l / 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = lDecimal;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = lDecimal < 0.5 ? lDecimal * (1 + sDecimal) : lDecimal + sDecimal - lDecimal * sDecimal;
    const p = 2 * lDecimal - q;
    r = hue2rgb(p, q, hDecimal + 1 / 3);
    g = hue2rgb(p, q, hDecimal);
    b = hue2rgb(p, q, hDecimal - 1 / 3);
  }
  return [r, g, b, a];
}

// --- WebGL ShaderMount Class --- //
class ShaderMount {
  constructor(canvas, fragmentShader, uniforms = {}, webGlContextAttributes = {}, speed = 1, seed = 0) {
    this.canvas = canvas;
    this.gl = null;
    this.program = null;
    this.uniformLocations = {};
    this.fragmentShader = fragmentShader;
    this.rafId = null;
    this.lastFrameTime = 0;
    this.totalAnimationTime = seed;
    this.speed = speed;
    this.providedUniforms = uniforms;
    this.hasBeenDisposed = false;
    this.resolutionChanged = true;
    this.resizeObserver = null;

    const gl = canvas.getContext('webgl2', webGlContextAttributes);
    if (!gl) {
      throw new Error('WebGL2 is not supported by your browser');
    }
    this.gl = gl;
    this.initWebGL();
    this.setupResizeObserver();
    this.setSpeed(speed);

    this.canvas.setAttribute('data-paper-shaders', 'true');
  }

  initWebGL = () => {
    const program = createProgram(this.gl, vertexShaderSource, this.fragmentShader);
    if (!program) return;
    this.program = program;
    this.setupPositionAttribute();
    this.setupUniforms();
  };

  setupPositionAttribute = () => {
    const positionAttributeLocation = this.gl.getAttribLocation(this.program, 'a_position');
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
    this.gl.enableVertexAttribArray(positionAttributeLocation);
    this.gl.vertexAttribPointer(positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);
  };

  setupUniforms = () => {
    this.uniformLocations = {
      u_time: this.gl.getUniformLocation(this.program, 'u_time'),
      u_pixelRatio: this.gl.getUniformLocation(this.program, 'u_pixelRatio'),
      u_resolution: this.gl.getUniformLocation(this.program, 'u_resolution'),
      ...Object.fromEntries(
        Object.keys(this.providedUniforms).map(key => [key, this.gl.getUniformLocation(this.program, key)])
      )
    };
  };

  setupResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.canvas);
    this.handleResize();
  };

  handleResize = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    const newWidth = this.canvas.clientWidth * pixelRatio;
    const newHeight = this.canvas.clientHeight * pixelRatio;
    if (this.canvas.width !== newWidth || this.canvas.height !== newHeight) {
      this.canvas.width = newWidth;
      this.canvas.height = newHeight;
      this.resolutionChanged = true;
      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      this.render(performance.now());
    }
  };

  render = currentTime => {
    if (this.hasBeenDisposed) return;
    const dt = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;
    if (this.speed !== 0) {
      this.totalAnimationTime += dt * this.speed;
    }
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.program);
    this.gl.uniform1f(this.uniformLocations.u_time, this.totalAnimationTime * 0.001);

    if (this.resolutionChanged) {
      this.gl.uniform2f(this.uniformLocations.u_resolution, this.gl.canvas.width, this.gl.canvas.height);
      this.gl.uniform1f(this.uniformLocations.u_pixelRatio, window.devicePixelRatio || 1);
      this.resolutionChanged = false;
    }

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    if (this.speed !== 0) {
      this.requestRender();
    } else {
      this.rafId = null;
    }
  };

  requestRender = () => {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    this.rafId = requestAnimationFrame(this.render);
  };

  updateProvidedUniforms = () => {
    this.gl.useProgram(this.program);
    Object.entries(this.providedUniforms).forEach(([key, value]) => {
      const location = this.uniformLocations[key];
      if (location) {
        if (Array.isArray(value)) {
          switch (value.length) {
            case 2:
              this.gl.uniform2fv(location, value);
              break;
            case 3:
              this.gl.uniform3fv(location, value);
              break;
            case 4:
              this.gl.uniform4fv(location, value);
              break;
            default:
              if (value.length === 9) {
                this.gl.uniformMatrix3fv(location, false, value);
              } else if (value.length === 16) {
                this.gl.uniformMatrix4fv(location, false, value);
              } else {
                console.warn(`Unsupported uniform array length: ${value.length}`);
              }
          }
        } else if (typeof value === 'number') {
          this.gl.uniform1f(location, value);
        } else if (typeof value === 'boolean') {
          this.gl.uniform1i(location, value ? 1 : 0);
        } else {
          console.warn(`Unsupported uniform type for ${key}: ${typeof value}`);
        }
      }
    });
  };

  setSeed = newSeed => {
    const oneFrameAt120Fps = 1000 / 120;
    this.totalAnimationTime = newSeed * oneFrameAt120Fps;
    this.lastFrameTime = performance.now();
    this.render(performance.now());
  };

  setSpeed = (newSpeed = 1) => {
    this.speed = newSpeed;
    if (this.rafId === null && newSpeed !== 0) {
      this.lastFrameTime = performance.now();
      this.rafId = requestAnimationFrame(this.render);
    }
    if (this.rafId !== null && newSpeed === 0) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  };

  setUniforms = newUniforms => {
    this.providedUniforms = { ...this.providedUniforms, ...newUniforms };
    this.updateProvidedUniforms();
    this.render(performance.now());
  };

  dispose = () => {
    this.hasBeenDisposed = true;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.gl && this.program) {
      this.gl.deleteProgram(this.program);
      this.program = null;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.uniformLocations = {};
  };
}

// --- Shaders Source --- //
const vertexShaderSource = `#version 300 es
layout(location = 0) in vec4 a_position;

void main() {
  gl_Position = a_position;
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  if (!vertexShader || !fragmentShader) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
}

// --- Liquid Warp Fragment Shader --- //
export const PatternShapes = { Checks: 0, Stripes: 1, Edge: 2 };

export const warpFragmentShader = `#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define PI 3.141592653589793
#define TWO_PI 6.283185307179586

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;

// --- Presets Configurations --- //
export const templates = {
  TSD: {
    color1: '#020617',       // Deep Dark Navy
    color2: '#2a4c75ff',       // Brand Blue (metallic reflection)
    color3: '#14675872',       // Brand Teal (highlight)
    rotation: -50,
    proportion: 1,
    scale: 0.01,
    speed: 15,
    distortion: 0,
    swirl: 50,
    swirlIterations: 16,
    softness: 47,
    offset: -299,
    shape: 'Checks',
    shapeSize: 45
  },
  Prism: {
    color1: '#050505',
    color2: '#66B3FF',
    color3: '#FFFFFF',
    rotation: -50,
    proportion: 1,
    scale: 0.01,
    speed: 30,
    distortion: 0,
    swirl: 50,
    swirlIterations: 16,
    softness: 47,
    offset: -299,
    shape: 'Checks',
    shapeSize: 45
  },
  Lava: {
    color1: '#FF9F21',
    color2: '#FF0303',
    color3: '#000000',
    rotation: 114,
    proportion: 100,
    scale: 0.52,
    speed: 30,
    distortion: 7,
    swirl: 18,
    swirlIterations: 20,
    softness: 100,
    offset: 717,
    shape: 'Edge',
    shapeSize: 12
  },
  Plasma: {
    color1: '#B566FF',
    color2: '#000000',
    color3: '#000000',
    rotation: 0,
    proportion: 63,
    scale: 0.75,
    speed: 30,
    distortion: 5,
    swirl: 61,
    swirlIterations: 5,
    softness: 100,
    offset: -168,
    shape: 'Checks',
    shapeSize: 28
  },
  Pulse: {
    color1: '#66FF85',
    color2: '#000000',
    color3: '#000000',
    rotation: -167,
    proportion: 92,
    scale: 0,
    speed: 20,
    distortion: 54,
    swirl: 75,
    swirlIterations: 3,
    softness: 28,
    offset: -813,
    shape: 'Checks',
    shapeSize: 79
  },
  Vortex: {
    color1: '#000000',
    color2: '#FFFFFF',
    color3: '#000000',
    rotation: 50,
    proportion: 41,
    scale: 0.4,
    speed: 20,
    distortion: 0,
    swirl: 100,
    swirlIterations: 3,
    softness: 5,
    offset: -744,
    shape: 'Stripes',
    shapeSize: 80
  },
  Mist: {
    color1: '#050505',
    color2: '#FF66B8',
    color3: '#050505',
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: 'Edge',
    shapeSize: 48
  }
};

// --- React Component --- //
export default function AnimatedLiquidBackground({
  preset = 'TSD',
  speed,
  color1,
  color2,
  color3,
  radius = '0px',
  style = {},
  className = '',
  ...customProps
}) {
  const canvasRef = useRef(null);
  const shaderMountRef = useRef(null);
  const isInView = useInView(canvasRef, { once: false, amount: 0.05 });

  const values = useMemo(() => {
    return preset === 'custom'
      ? { ...customProps }
      : templates[preset] || templates.TSD;
  }, [preset, customProps]);

  // Merge custom overrides with preset defaults
  const finalColor1 = color1 || values.color1;
  const finalColor2 = color2 || values.color2;
  const finalColor3 = color3 || values.color3;
  const finalSpeed = speed !== undefined ? speed : values.speed;

  const uniforms = useMemo(() => {
    return {
      u_scale: values.scale ?? 0.5,
      u_rotation: values.rotation ?? 0,
      u_color1: getShaderColorFromString(finalColor1, [0.11, 0.75, 0.63, 1]), // brand-teal default
      u_color2: getShaderColorFromString(finalColor2, [0.16, 0.46, 0.83, 1]), // brand-blue default
      u_color3: getShaderColorFromString(finalColor3, [0.05, 0.11, 0.24, 1]), // dark-bg default
      u_proportion: (values.proportion ?? 50) / 100,
      u_softness: (values.softness ?? 100) / 100,
      u_distortion: (values.distortion ?? 12) / 50,
      u_swirl: (values.swirl ?? 30) / 100,
      u_swirlIterations: values.swirl === 0 ? 0 : (values.swirlIterations ?? 8),
      u_shapeScale: (values.shapeSize ?? 30) / 100,
      u_shape: PatternShapes[values.shape] ?? PatternShapes.Edge
    };
  }, [finalColor1, finalColor2, finalColor3, values]);

  const currentSpeed = useMemo(() => {
    if (isInView) {
      // standard cubic bezier [.65,0,.88,.77] speed scale factor
      const s = finalSpeed / 100;
      const easeSpeed = s * s * (3 - 2 * s);
      return easeSpeed * 5;
    }
    return 0; // Freeze simulation if element is scrolled completely out of view
  }, [isInView, finalSpeed]);

  const seed = useMemo(() => {
    return (values.offset ?? 0) * 10;
  }, [values.offset]);

  // Mount/Dismount lifecycle
  useEffect(() => {
    if (canvasRef.current) {
      try {
        shaderMountRef.current = new ShaderMount(
          canvasRef.current,
          warpFragmentShader,
          uniforms,
          { alpha: true, antialias: true },
          currentSpeed,
          seed
        );
      } catch (err) {
        console.error('Failed to initialize WebGL2 liquid shader:', err);
      }
    }

    return () => {
      if (shaderMountRef.current) {
        shaderMountRef.current.dispose();
        shaderMountRef.current = null;
      }
    };
  }, []);

  // Sync state changes with the running WebGL instance
  useEffect(() => {
    if (shaderMountRef.current) {
      shaderMountRef.current.setUniforms(uniforms);
    }
  }, [uniforms]);

  useEffect(() => {
    if (shaderMountRef.current) {
      shaderMountRef.current.setSpeed(currentSpeed);
    }
  }, [currentSpeed]);

  useEffect(() => {
    if (shaderMountRef.current) {
      shaderMountRef.current.setSeed(seed);
    }
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        borderRadius: radius,
        overflow: 'hidden',
        pointerEvents: 'none', // Allow cursor interactions to pass-through seamlessly
        ...style
      }}
    />
  );
}
