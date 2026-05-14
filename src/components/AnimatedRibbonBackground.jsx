import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedRibbonBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* Layer 1: Dark base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #0F172A 40%, #111827 100%)'
        }}
      />

      {/* Layer 2: Large blurred animated ribbon gradients */}
      <div className="absolute inset-0 opacity-80 mix-blend-screen">
        {/* Teal Ribbon */}
        <motion.div
          animate={{
            x: ['-10%', '10%', '-5%', '-10%'],
            y: ['-20%', '0%', '-10%', '-20%'],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-[-10%] w-[70vw] h-[50vh] bg-[#1DBFA0] rounded-full blur-[140px] opacity-40 transform -rotate-12"
        />

        {/* Blue Ribbon */}
        <motion.div
          animate={{
            x: ['10%', '-10%', '5%', '10%'],
            y: ['10%', '-10%', '5%', '10%'],
            rotate: [-10, 0, 10, -10],
            scale: [0.9, 1.2, 1, 0.9],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vh] bg-[#2875D4] rounded-full blur-[150px] opacity-30 transform rotate-45"
        />

        {/* Purple Ribbon */}
        <motion.div
          animate={{
            x: ['0%', '15%', '-15%', '0%'],
            y: ['20%', '0%', '10%', '20%'],
            rotate: [15, -5, 5, 15],
            scale: [1.1, 0.9, 1.1, 1.1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] left-[20%] w-[80vw] h-[50vh] bg-[#7435CE] rounded-full blur-[160px] opacity-30 transform -rotate-12"
        />
      </div>

      {/* Layer 3: Soft reflective highlights */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] left-[30%] w-[40vw] h-[40vh] bg-[rgba(255,255,255,0.15)] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] right-[20%] w-[50vw] h-[30vh] bg-[rgba(255,255,255,0.15)] rounded-full blur-[120px]"
        />
      </div>

      {/* Layer 4: Subtle grain/noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 5: Very subtle vignette darkening edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(2, 6, 23, 0.7) 100%)'
        }}
      />
    </div>
  );
}
