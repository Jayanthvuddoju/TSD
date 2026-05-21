import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import { useModal } from '../context/ModalContext';
import MagicRings from './MagicRings/MagicRings';

export default function Hero() {
  const { openModal } = useModal();
  // Stagger animation variants for text reveal
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#063330] overflow-hidden pt-24 pb-16">
      {/* High-Fidelity WebGL MagicRings Background */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-auto">
        <MagicRings
          color="#1ca89d"
          colorTwo="#0dfcd2"
          ringCount={6}
          speed={0.8}
          attenuation={8}
          lineThickness={2}
          baseRadius={0.3}
          radiusStep={0.09}
          scaleRate={0.08}
          opacity={0.85}
          blur={0}
          noiseAmount={0.03}
          rotation={15}
          ringGap={1.3}
          fadeIn={0.8}
          fadeOut={0.4}
          followMouse={true}
          mouseInfluence={0.2}
          hoverScale={1.15}
          parallax={0.04}
          clickBurst={true}
        />
      </div>


      {/* Hero Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          animate="visible"
          className="flex flex-col items-center space-y-8"
        >


          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-2xl"
          >
            Your Technology <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-brand blur-3xl opacity-40 rounded-xl"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-brand font-black">
                Transformation
              </span>
            </span> <br className="hidden sm:block" />
            Starts Here
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#94A3B8] font-sans font-light leading-relaxed max-w-2xl"
          >
            TSD partners with businesses across Southeast Asia to deliver AI, SAP, cybersecurity, cloud, and workforce solutions engineered for growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-6"
          >
            <Button 
              variant="primary" 
              className="text-md font-bold px-8 py-4 flex items-center justify-center gap-2 group relative overflow-hidden bg-gradient-brand hover:scale-105 transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(29,191,160,0.3)] text-white"
              onClick={() => openModal("Claim Free Consulting")}
            >
              Claim Free Consulting
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary" 
              className="text-md font-bold px-8 py-4 backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 rounded-xl"
            >
              Explore Services
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
