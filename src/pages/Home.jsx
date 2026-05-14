import { useState, useEffect } from 'react';
import { 
  ArrowRight, Shield, Globe, Code, Users, 
  Cpu, Database, Cloud, Hexagon, 
  Award, Infinity, Lightbulb, Lock, Heart,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';
import cybersecurityImage from '../assets/cybersecurity.png';
import aiImage from '../assets/AI.png';
import sapImage from '../assets/sap.png';
import cloudImage from '../assets/cloud.png';
import webImage from '../assets/web.png';
import blockchainImage from '../assets/blockchain.png';
import staffingImage from '../assets/staffing.png';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeProcess]);

  const services = [
    { 
      title: "AI & Advanced Technologies", 
      desc: "Harness artificial intelligence and machine learning to automate operations, generate insights, and accelerate decision-making across your business.", 
      icon: Cpu, 
      color: "teal",
      features: [
        "Custom Machine Learning Models",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics & Forecasting"
      ],
      bgImage: aiImage
    },
    { 
      title: "ERP / SAP Solutions", 
      desc: "Streamline enterprise operations with seamless SAP implementation, S/4HANA migration, and ongoing managed support tailored to your industry.", 
      icon: Database, 
      color: "blue",
      features: [
        "SAP S/4HANA Migrations",
        "Functional & Technical Consulting",
        "Custom ABAP Development",
        "24/7 Managed Application Support"
      ],
      bgImage: sapImage
    },
    { 
      title: "Cybersecurity", 
      desc: "Protect your assets, data, and reputation with robust security frameworks, compliance management, and proactive risk mitigation strategies.", 
      icon: Shield, 
      color: "purple",
      features: [
        "Vulnerability & Pen Testing",
        "Managed Detection & Response (MDR)",
        "Compliance Readiness (ISO, SOC2)",
        "Identity & Access Management (IAM)"
      ],
      bgImage: cybersecurityImage
    },
    { 
      title: "Cloud Computing", 
      desc: "Modernize your infrastructure with cloud migration, management, and optimization across AWS, Microsoft Azure, and Google Cloud platforms.", 
      icon: Cloud, 
      color: "blue",
      features: [
        "Multi-Cloud Architecture (AWS/Azure/GCP)",
        "DevOps & Infrastructure as Code (IaC)",
        "Cloud Migration & Modernization",
        "FinOps & Cost Optimization"
      ],
      bgImage: cloudImage
    },
    { 
      title: "Development & Integration", 
      desc: "Build powerful web and mobile applications and integrate them seamlessly into your existing systems for a unified digital experience.", 
      icon: Code, 
      color: "teal",
      features: [
        "Full-Stack Web & Mobile Development",
        "API & Microservices Architecture",
        "Legacy System Modernization",
        "Sleek UI/UX Design & Prototyping"
      ],
      bgImage: webImage
    },
    { 
      title: "Blockchain & Web3", 
      desc: "Explore and implement distributed ledger technologies that add transparency, security, and efficiency to enterprise operations.", 
      icon: Hexagon, 
      color: "purple",
      features: [
        "Smart Contract Engineering",
        "Enterprise Consortium Blockchains",
        "Decentralized App (dApp) Development",
        "Asset Tokenization Platforms"
      ],
      bgImage: blockchainImage
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      {/* 1. HERO SECTION */}
      <Hero />


      {/* 3. WHAT WE DO */}
      <section className="w-full py-24 bg-transparent relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold tracking-wider uppercase mb-6 border border-brand-teal/20">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              End-to-End Technology Solutions for the Modern Enterprise
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-white/85 leading-relaxed">
              <p>
                At TSD, we don't just implement technology — we transform the way your business operates. From AI-driven automation and SAP enterprise systems to cybersecurity, cloud infrastructure, and talent acquisition, we provide the complete technology backbone your organization needs to compete and lead.
              </p>
              <p>
                Whether you're a growing mid-market company or a large enterprise, our team of specialists delivers solutions that are secure, scalable, and aligned with your business goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES SNAPSHOT */}
      <section className="w-full py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row gap-8 w-full lg:h-[420px]">
              {[0, 1, 2].map((idx) => {
                const service = services[idx];
                const isHovered = hoveredIndex === idx;
                const isAnyHoveredInRow = hoveredIndex !== null && [0, 1, 2].includes(hoveredIndex);
                const isCompressed = isAnyHoveredInRow && !isHovered;
                return (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp} 
                    className={`h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered ? 'lg:flex-[2] flex-1' :
                      isCompressed ? 'lg:flex-[0.5] flex-1' : 'flex-1'
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card 
                      title={service.title} 
                      description={service.desc} 
                      icon={service.icon} 
                      accentColor={service.color} 
                      isCompressed={isCompressed}
                      isExpanded={isHovered}
                      features={service.features}
                      bgImage={service.bgImage}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row gap-8 w-full lg:h-[420px]">
              {[3, 4, 5].map((idx) => {
                const service = services[idx];
                const isHovered = hoveredIndex === idx;
                const isAnyHoveredInRow = hoveredIndex !== null && [3, 4, 5].includes(hoveredIndex);
                const isCompressed = isAnyHoveredInRow && !isHovered;
                return (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp} 
                    className={`h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered ? 'lg:flex-[2] flex-1' :
                      isCompressed ? 'lg:flex-[0.5] flex-1' : 'flex-1'
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card 
                      title={service.title} 
                      description={service.desc} 
                      icon={service.icon} 
                      accentColor={service.color} 
                      isCompressed={isCompressed}
                      isExpanded={isHovered}
                      features={service.features}
                      bgImage={service.bgImage}
                    />
                  </motion.div>
                );
              })}
            </div>
            
            {/* 7th Card spanning larger area */}
            <motion.div variants={fadeInUp} className="h-full md:col-span-2 lg:col-span-3 flex justify-center">
              <div className="group bg-[#03211f] backdrop-blur-xl backdrop-saturate-[150%] border-t border-l border-white/20 border-b border-r border-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_20px_rgba(28,168,157,0.3)] rounded-[16px] p-8 md:p-12 min-h-[300px] w-[80%] hover:w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-start relative overflow-hidden">
                
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `url(${staffingImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/10 shadow-inner shrink-0 text-brand-teal group-hover:scale-110 transition-transform duration-300">
                    <Users size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-white">Staffing & Workforce Solutions</h3>
                    <p className="text-white/80 leading-relaxed max-w-3xl">
                      Acquire top-tier technology talent with speed and precision through our AI-powered recruitment strategies and executive search capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. WHY TSD */}
      <section className="w-full py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Why Businesses Choose TSD</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
              Partnering with enterprise leaders to deliver secure, scalable, and innovative digital solutions.
            </p>
          </div>
          
          <div className="flex flex-col gap-12 max-w-5xl mx-auto relative pb-12">
            {[
              { title: "Proven Since 2020", desc: "One of Malaysia's fastest-growing technology firms, with a track record of successful digital transformations across multiple industries and geographies.", icon: Award, color: "text-brand-teal" },
              { title: "End-to-End Capability", desc: "From strategy and consulting to implementation and managed services — we handle every phase so you don't have to juggle multiple vendors.", icon: Infinity, color: "text-brand-blue" },
              { title: "Innovation-Driven", desc: "We stay ahead of emerging technologies so our clients always have access to the most current, effective solutions available.", icon: Lightbulb, color: "text-brand-purple" },
              { title: "Security & Compliance First", desc: "Every solution we build is designed with security embedded from the ground up — not as an afterthought.", icon: Lock, color: "text-brand-teal" },
              { title: "Regional Reach", desc: "Active across Malaysia, Singapore, India, Indonesia, and the Philippines, giving clients access to a broad talent pool and regional expertise.", icon: Globe, color: "text-brand-blue" },
              { title: "People-Centered Approach", desc: "Our team combines deep technical knowledge with genuine partnership — we succeed only when you succeed.", icon: Heart, color: "text-brand-purple" },
            ].map((point, i) => {
              const IconComp = point.icon;
              const stickyTop = `calc(120px + ${i * 100}px)`;
              return (
                <div 
                  key={i} 
                  className="sticky w-full z-10"
                  style={{ top: stickyTop, zIndex: i + 10 }}
                >
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-8 bg-[#03211f] backdrop-blur-2xl border-t border-l border-white/20 border-b border-r border-black/50 shadow-[0_25px_50px_rgba(0,0,0,0.9)] hover:border-brand-teal/40 transition-all duration-500"
                  >
                    <div className={`p-6 bg-black/50 rounded-2xl border border-white/10 shadow-inner shrink-0 ${point.color}`}>
                      <IconComp size={38} strokeWidth={1.5} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">0{i + 1} / WHY TSD</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">{point.title}</h4>
                      <p className="text-lg text-white/80 leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section id="process" className="w-full py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">How We Work With You</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
              A transparent, agile, and collaborative five-step journey to enterprise transformation.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 w-full min-h-[260px] lg:h-[280px]">
            {[
              { step: "01", title: "Discover", desc: "We start with a deep-dive consultation to understand your business challenges, goals, and current technology landscape." },
              { step: "02", title: "Design", desc: "Our experts craft a tailored technology roadmap and solution architecture designed specifically around your needs." },
              { step: "03", title: "Build", desc: "Our delivery teams implement your solution using agile methodologies, keeping you informed and involved throughout." },
              { step: "04", title: "Deploy", desc: "We manage go-live with precision, ensuring minimal disruption to your operations and a smooth transition." },
              { step: "05", title: "Optimize", desc: "Post-launch, we monitor, support, and continuously improve your solution as your business evolves." }
            ].map((process, i) => {
              const isActive = activeProcess === i;
              return (
                <motion.div 
                  key={i} 
                  variants={fadeInUp} 
                  onClick={() => setActiveProcess(i)}
                  className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-3xl cursor-pointer bg-[#03211f] backdrop-blur-2xl border-t border-l border-white/20 border-b border-r border-black/50 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_20px_rgba(28,168,157,0.3)] ${
                    isActive ? 'lg:flex-[3] flex-1 border-brand-teal shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_0_60px_rgba(28,168,157,0.9),0_20px_40px_rgba(0,0,0,0.8)]' : 'lg:flex-[1] flex-1 border-white/10'
                  }`}
                >
                  <div className="p-6 h-full flex flex-col justify-start">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-2xl transition-all duration-500 ${
                        isActive ? 'bg-brand-teal text-black shadow-[0_0_20px_rgba(28,168,157,0.5)] scale-110' : 'bg-black/50 text-brand-teal border border-brand-teal/30'
                      }`}>
                        {process.step}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className={`font-heading font-bold transition-all duration-500 ${
                        isActive ? 'text-3xl text-white mb-3' : 'text-xl text-white/80 whitespace-nowrap overflow-hidden text-ellipsis'
                      }`}>
                        {process.title}
                      </h4>

                      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        isActive ? 'max-h-40 opacity-100' : 'lg:max-h-0 lg:opacity-0 max-h-40 opacity-100'
                      }`}>
                        <p className="text-lg text-white/80 leading-relaxed">
                          {process.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1.5 bg-brand-teal shadow-[0_0_15px_#1ca89d]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER LOGO BAR */}
      <section className="w-full py-20 bg-transparent relative border-t border-border-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-4">TRUSTED REGIONALLY</h4>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-relaxed">
              Trusted by forward-thinking companies across Malaysia, Singapore, India, Indonesia, and the Philippines
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {[
              { name: "Enterprise Alpha", icon: Hexagon, color: "text-brand-teal" },
              { name: "GlobalTech", icon: Globe, color: "text-brand-blue" },
              { name: "Nexus Financial", icon: Infinity, color: "text-brand-purple" },
              { name: "Quantum Cloud", icon: Cloud, color: "text-brand-blue" },
              { name: "Apex Solutions", icon: Lightbulb, color: "text-brand-teal" }
            ].map((company, index) => {
              const IconComp = company.icon;
              return (
                <div 
                  key={index}
                  className="group flex items-center gap-3 px-6 py-4 bg-[#03211f]/40 backdrop-blur-md rounded-2xl border-t border-l border-white/10 border-b border-r border-black/40 shadow-md hover:border-brand-teal/40 hover:shadow-[0_0_20px_rgba(28,168,157,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <IconComp size={22} className={`${company.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-lg font-semibold tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>



      {/* 8. BOTTOM CTA SECTION */}
      <section className="w-full py-20 bg-transparent text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 drop-shadow-md">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your free consulting session today and discover how TSD can accelerate your digital journey.
          </p>
          <Button variant="primary" className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl">
            Claim Free Consulting
          </Button>
        </div>
      </section>

    </div>
  );
}
