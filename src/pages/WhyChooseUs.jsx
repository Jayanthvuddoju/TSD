import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Globe, Shield, Zap, TrendingUp, Users, 
  MapPin, Calendar, Layout, Award, ArrowRight,
  Landmark, Factory, PhoneCall, Heart, Fuel, Building2, ShoppingCart, Cpu
} from 'lucide-react';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';
import Grainient from '../components/Grainient/Grainient';

export default function WhyChooseUs() {
  const { openModal } = useModal();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const differentiators = [
    {
      title: "Expertise Across Industries",
      icon: Globe,
      desc: "Our consultants and engineers bring domain knowledge from banking and insurance to manufacturing, telecoms, healthcare, and government. We don't just understand technology — we understand your industry."
    },
    {
      title: "End-to-End Solutions",
      icon: Layout,
      desc: "From strategy and design to implementation, integration, and managed services — TSD handles the full technology lifecycle. One partner. Complete accountability."
    },
    {
      title: "Innovation-Driven Approach",
      icon: Zap,
      desc: "We actively invest in staying ahead of emerging technologies — AI, Web3, cloud-native architecture — so our clients benefit from what's next, not just what's now."
    },
    {
      title: "Security & Compliance First",
      icon: Shield,
      desc: "Security is embedded into everything we build, not bolted on at the end. Every solution we deliver is designed to meet the highest standards of data protection and regulatory compliance."
    },
    {
      title: "Scalability & Growth Focus",
      icon: TrendingUp,
      desc: "We design solutions that grow with your business — avoiding costly rework as you scale. Whether you're adding users, entering new markets, or acquiring companies, our architecture supports your ambitions."
    },
    {
      title: "Talent & Workforce Solutions",
      icon: Users,
      desc: "Beyond technology, we help you build the teams that drive it. Our staffing and executive search capabilities ensure you always have the human capital to execute your strategy."
    }
  ];

  const stats = [
    { label: "Founded", value: "2020", icon: Calendar },
    { label: "Headquarters", value: "Kuala Lumpur", icon: MapPin },
    { label: "Regions", value: "5 Countries", icon: Globe },
    { label: "Focus", value: "AI & SAP", icon: Award }
  ];

  const industries = [
    "Banking & Financial Services", "Insurance", "Manufacturing & Automotive",
    "Telecommunications", "Healthcare & Life Sciences", "Oil & Gas",
    "Government & Public Sector", "E-Commerce & Retail", "Technology Companies"
  ];

  const industryIcons = {
    "Banking & Financial Services": Landmark,
    "Insurance": Shield,
    "Manufacturing & Automotive": Factory,
    "Telecommunications": PhoneCall,
    "Healthcare & Life Sciences": Heart,
    "Oil & Gas": Fuel,
    "Government & Public Sector": Building2,
    "E-Commerce & Retail": ShoppingCart,
    "Technology Companies": Cpu
  };

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-8"
            >
              The TSD Difference — <span className="text-brand-teal">True Partnership</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              We're not just a technology vendor. We're a long-term partner invested in your success — bringing expertise, integrity, and innovation to every engagement.
            </motion.p>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-8">
                Built to Deliver. Committed to Your Growth.
              </h2>
              <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Since 2020, TSD has grown from a focused IT services firm into one of Malaysia's leading technology transformation partners. Our growth is a direct result of our clients' success — and that's exactly how we measure ours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. 6 KEY DIFFERENTIATORS */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">6 Key Differentiators</h2>
              <p className="text-xl text-white/60">What sets us apart from the rest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="group bg-[#03211f] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-brand-teal/50 hover:shadow-[0_0_30px_rgba(28,168,157,0.2)] transition-all duration-500 flex flex-col items-start"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-black transition-all duration-500 shadow-inner">
                      <IconComp size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. COMPANY SNAPSHOT */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="bg-[#03211f]/40 backdrop-blur-md rounded-[3rem] border border-white/10 p-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">Company Snapshot</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, idx) => {
                  const IconComp = stat.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="text-brand-teal mb-4">
                        <IconComp size={28} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/60 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. INDUSTRIES WE SERVE */}
        <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-12">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto mt-16">
                {industries.map((ind, idx) => {
                  const IconComp = industryIcons[ind] || Globe;
                  return (
                    <div 
                      key={idx}
                      className="group flex flex-col items-center gap-3 transition-transform duration-300 cursor-default"
                    >
                      <IconComp 
                        size={40} 
                        strokeWidth={1.5} 
                        className="text-brand-teal/70 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-300" 
                      />
                      <span className="text-lg font-heading font-semibold text-white/95 group-hover:text-brand-teal transition-colors duration-300">
                        {ind}
                      </span>
                    </div>
                  );
                })}
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
                Experience the TSD Difference
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Start with a free consulting session — no obligation, no pressure. Just an honest conversation about your technology challenges.
              </p>
              <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl hover:shadow-brand-teal/50 group" onClick={() => openModal("Claim Free Consulting")}>
                Claim Free Consulting
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
