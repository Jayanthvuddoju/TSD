import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Share2, Camera, Video, ArrowRight, ChevronDown
} from 'lucide-react';
import Button from '../components/Button';
import Grainient from '../components/Grainient/Grainient';

export default function ContactUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const [selectedSubject, setSelectedSubject] = React.useState("General Inquiry");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subjects = [
    "General Inquiry",
    "Tech Solutions",
    "Staffing Services",
    "SAP Consulting",
    "Other"
  ];

  const contactInfo = [
    {
      title: "Email Us",
      value: "info@tech-sd.com",
      icon: Mail,
      link: "mailto:info@tech-sd.com"
    },
    {
      title: "Call Us",
      value: "+60 3481 32521",
      icon: Phone,
      link: "tel:+60348132521"
    },
    {
      title: "Visit Us",
      value: "KL Sentral, Kuala Lumpur",
      icon: MapPin,
      link: "https://goo.gl/maps/xyz"
    }
  ];

  const socialIcons = [
    { Icon: Share2, label: "LinkedIn" },
    { Icon: Camera, label: "Instagram" },
    { Icon: Send, label: "Twitter" },
    { Icon: Video, label: "YouTube" }
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

      <div className="relative z-10 pt-28 pb-24">
        
        {/* 1. HERO SECTION */}
        <section className="w-full py-20 lg:py-28 bg-transparent text-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold tracking-wider uppercase mb-8 border border-brand-teal/20"
            >
              Get In Touch
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-8"
            >
              Let's Start a <span className="text-brand-teal">Conversation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Have a question about our services or want to explore how we can work together? Our team is here to help you navigate your technology journey.
            </motion.p>
          </div>
        </section>

        {/* 2. CONTACT CONTENT SECTION */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Form */}
              <motion.div 
                variants={fadeInUp} 
                initial="initial" 
                whileInView="whileInView"
                className="bg-[#03211f]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">Send us a Message</h2>
                  <p className="text-white/60">We usually respond within 24 hours.</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-brand-teal/50 focus:outline-none focus:ring-1 focus:ring-brand-teal/50 text-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-brand-teal/50 focus:outline-none focus:ring-1 focus:ring-brand-teal/50 text-white transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Contact Number</label>
                      <input 
                        type="tel" 
                        placeholder="+60 12-345 6789" 
                        className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-brand-teal/50 focus:outline-none focus:ring-1 focus:ring-brand-teal/50 text-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Subject</label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-brand-teal/50 focus:outline-none focus:ring-1 focus:ring-brand-teal/50 text-white transition-all flex items-center justify-between text-left cursor-pointer"
                        >
                          <span className={selectedSubject ? "text-white" : "text-white/50"}>
                            {selectedSubject}
                          </span>
                          <ChevronDown 
                            size={20} 
                            className={`text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-teal' : ''}`} 
                          />
                        </button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute left-0 right-0 mt-2 bg-[#021817]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden py-2"
                            >
                              {subjects.map((sub, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedSubject(sub);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full px-6 py-3.5 text-left transition-all flex items-center justify-between text-sm ${
                                    selectedSubject === sub 
                                      ? 'bg-brand-teal/20 text-brand-teal font-semibold' 
                                      : 'text-white/80 hover:bg-brand-teal/10 hover:text-white'
                                  }`}
                                >
                                  <span>{sub}</span>
                                  {selectedSubject === sub && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_#1ca89d]" />
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="Tell us about your project or inquiry..." 
                      className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-brand-teal/50 focus:outline-none focus:ring-1 focus:ring-brand-teal/50 text-white transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <Button variant="primary" className="w-full py-5 text-lg flex items-center justify-center gap-3 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
              
              {/* Right Column: Info & Details */}
              <div className="space-y-12">
                
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, idx) => {
                    const IconComp = info.icon;
                    return (
                      <motion.a 
                        key={idx}
                        href={info.link}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        className="group p-8 bg-[#03211f]/40 backdrop-blur-md border border-white/10 rounded-[2rem] hover:border-brand-teal/50 transition-all duration-500"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                          <IconComp size={24} />
                        </div>
                        <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">{info.title}</h3>
                        <p className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">{info.value}</p>
                      </motion.a>
                    );
                  })}
                  
                  <motion.div 
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="p-8 bg-brand-teal/10 backdrop-blur-md border border-brand-teal/30 rounded-[2rem] flex flex-col justify-center"
                  >
                    <div className="flex gap-4">
                      {socialIcons.map(({ Icon, label }, i) => (
                        <a key={i} href="#" title={label} className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-white hover:bg-brand-teal hover:text-black transition-all">
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                    <p className="text-white/60 mt-4 text-sm font-medium uppercase tracking-wider">Follow our journey</p>
                  </motion.div>
                </div>
                
                {/* Office Address Card */}
                <motion.div 
                  variants={fadeInUp} 
                  initial="initial" 
                  whileInView="whileInView"
                  className="bg-[#03211f]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12"
                >
                  <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-4">
                    <MapPin className="text-brand-teal" />
                    Our Headquarters
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xl text-white/80 leading-relaxed">
                      Tech Solutions & Development Sdn. Bhd.<br />
                      2B-21-1B, Plaza Sentral, Jalan Stesen Sentral 5<br />
                      KL Sentral, 50470 Kuala Lumpur, Malaysia
                    </p>
                    <div className="pt-6">
                      <Button variant="secondary" className="flex items-center gap-2 group text-white hover:text-brand-teal">
                        Get Directions
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Visual Element / Map Placeholder */}
                  <div className="mt-10 h-48 w-full rounded-2xl bg-black/40 border border-white/5 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center animate-ping" />
                      <div className="absolute w-4 h-4 rounded-full bg-brand-teal shadow-[0_0_20px_#1ca89d]" />
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
