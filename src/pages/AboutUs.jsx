import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, Target, Eye, Lightbulb, ShieldCheck, 
  Award, Users, Rocket, Mail, ArrowRight,
  Cpu, Database, Shield, Cloud, Code, Hexagon
} from 'lucide-react';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';
import Grainient from '../components/Grainient/Grainient';

export default function AboutUs() {
  const { openModal } = useModal();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const values = [
    {
      title: "Innovation",
      icon: Lightbulb,
      desc: "We embrace change, invest in emerging technologies, and constantly push the boundaries of what's possible for our clients."
    },
    {
      title: "Integrity",
      icon: ShieldCheck,
      desc: "We do what we say. Transparency, honesty, and accountability define every client relationship and every internal decision."
    },
    {
      title: "Excellence",
      icon: Award,
      desc: "Good enough is never good enough. We hold ourselves to the highest standards of delivery quality, client service, and professional conduct."
    },
    {
      title: "Partnership",
      icon: Users,
      desc: "We treat our clients as long-term partners, not transactions. Your success is our success — and we act accordingly."
    },
    {
      title: "Security",
      icon: Shield,
      desc: "Trust is the foundation of all technology. Security and compliance are non-negotiable principles in everything we build."
    }
  ];

  const specializations = [
    "Software Research & Development", "Managed IT Services", "IT Staffing & Talent Solutions",
    "Executive Search", "AI & Advanced Technologies", "SAP & Enterprise Systems",
    "Cybersecurity & Compliance", "Cloud Computing & Infrastructure", "Blockchain & Web3"
  ];

  return (
    <div className="w-full relative min-h-screen">
      {/* Page Background */}
      <div className="fixed inset-0 z-0">
        <Grainient
          color1="#158178"
          color2="#063330"
          color3="#1ca89d"
          timeSpeed={0.8}
          colorBalance={0.1}
          warpStrength={1.2}
          warpFrequency={3.5}
          warpSpeed={0.8}
          warpAmplitude={25}
          blendAngle={30}
          blendSoftness={0.25}
          rotationAmount={350}
          noiseScale={1.2}
          grainAmount={0.04}
          grainScale={2.5}
          grainAnimated={true}
          contrast={1.1}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.7}
        />
        <div className="absolute inset-0 bg-[#063330]/30" />
      </div>

      <div className="relative z-10 pt-28">
        
        {/* 1. HERO SECTION */}
        <section className="w-full py-20 lg:py-28 bg-transparent text-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold tracking-wider uppercase mb-8 border border-brand-teal/20"
            >
              Innovating Since 2020
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-8"
            >
              We Are TSD — <span className="text-brand-teal">Innovative</span> Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              Established in 2020 and growing fast, TSD is on a mission to make world-class technology transformation accessible to businesses across Southeast Asia.
            </motion.p>
          </div>
        </section>

        {/* 2. OUR STORY SECTION */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-8">
                  From Startup to <span className="text-brand-teal">Regional Leader</span>
                </h2>
                <div className="text-lg sm:text-xl text-white/80 space-y-6 leading-relaxed">
                  <p>
                    TSD — Tech Solutions & Development Sdn. Bhd. — was founded in October 2020 with a clear conviction: that businesses across Southeast Asia deserved access to the same quality of technology strategy and delivery that global enterprises enjoy.
                  </p>
                  <p>
                    In just a few years, we have grown from a small team of technology enthusiasts into one of Malaysia's fastest-growing IT services companies, with active client engagements across Malaysia, Singapore, India, Indonesia, and the Philippines.
                  </p>
                  <p>
                    Our growth reflects one simple truth: when clients experience TSD, they stay — and they refer others.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-teal/20 rounded-[2rem] blur-3xl" />
                <div className="relative bg-[#03211f] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <History size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">2020</div>
                        <div className="text-white/60">Founded in KL</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <Rocket size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">5+</div>
                        <div className="text-white/60">Countries Served</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <Users size={32} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">Fast</div>
                        <div className="text-white/60">Growing Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. MISSION & VISION SECTION */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto space-y-20">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 shadow-[0_0_20px_rgba(28,168,157,0.1)]">
                <Target size={40} />
              </div>
              <div>
                <h3 className="text-4xl font-heading font-bold text-white mb-4">Our Mission</h3>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                  To deliver cutting-edge technology solutions that drive business efficiency and growth — and to empower organizations with AI, cybersecurity, and enterprise solutions tailored to their unique needs.
                </p>
              </div>
            </motion.div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 shadow-[0_0_20px_rgba(28,168,157,0.1)]">
                <Eye size={40} />
              </div>
              <div>
                <h3 className="text-4xl font-heading font-bold text-white mb-4">Our Vision</h3>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                  To be a global leader in technology-driven business transformation, enabling organizations everywhere to innovate, scale, and secure their digital future with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. OUR VALUES SECTION */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-6 tracking-tight">Our Values</h2>
              <p className="text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto font-light">The principles that guide everything we do.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
              {values.map((value, idx) => {
                const IconComp = value.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="group relative flex flex-col items-start transition-all duration-500"
                  >
                    {/* Floating Background Glow on Hover */}
                    <div className="absolute -inset-8 rounded-[3rem] bg-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10" />
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(28,168,157,0.1)]">
                        <IconComp size={28} />
                      </div>
                      <div className="h-px w-12 bg-brand-teal/20 group-hover:w-20 transition-all duration-700" />
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold text-white mb-6 group-hover:text-brand-teal transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                      {value.desc}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-8 h-1 w-0 bg-brand-teal rounded-full group-hover:w-full transition-all duration-700 delay-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SPECIALIZATIONS SECTION */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-12">
                What We Specialize In
              </h2>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {specializations.map((spec, idx) => (
                  <div 
                    key={idx}
                    className="px-6 py-4 bg-[#03211f]/60 backdrop-blur-md rounded-full border border-white/10 hover:border-brand-teal/50 hover:shadow-[0_0_15px_rgba(28,168,157,0.3)] transition-all duration-300 text-base sm:text-lg text-white/90 font-medium cursor-default"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. BOTTOM CTA SECTION */}
        <section className="w-full py-24 bg-transparent text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="p-12 rounded-[3rem] bg-[#03211f] border border-brand-teal/30 shadow-[0_0_50px_rgba(28,168,157,0.15)]"
            >
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-6">
                Want to Know More?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                We'd love to share more about TSD and explore how we might work together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" className="text-lg px-12 py-5 flex items-center justify-center gap-2" onClick={() => openModal("Contact Us Today")}>
                  <Mail size={20} />
                  Contact Us Today
                </Button>
                <Button variant="secondary" className="text-lg px-12 py-5 flex items-center justify-center gap-2">
                  View Our Services
                  <ArrowRight size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
