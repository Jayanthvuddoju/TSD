import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Layers, ShieldAlert, Cloud, Code2, Cpu, Headphones, 
  ArrowRight, CheckCircle2, Globe, Activity, Terminal, 
  Settings, Lock, Server, Check, Zap, HelpCircle, Network, Shield
} from 'lucide-react';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';
import Grainient from '../components/Grainient/Grainient';

export default function TechSolutions() {
  const { openModal } = useModal();
  const [activeDevTab, setActiveDevTab] = useState('frontend');

  const fadeInUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const solutions = [
    {
      id: "ai",
      num: "01",
      title: "AI & Advanced Technologies",
      icon: Brain,
      desc: "Artificial intelligence is no longer a future technology — it's a present competitive advantage. TSD helps businesses design, build, and deploy AI solutions that automate repetitive work, surface actionable insights, and create smarter customer and operational experiences.",
      deliverables: [
        "AI strategy and roadmap consulting",
        "Machine learning model development and deployment",
        "Natural Language Processing (NLP) applications",
        "AI-powered business process automation",
        "Computer vision and predictive analytics",
        "Generative AI integration and LLM implementation"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Hugging Face", "Python"]
    },
    {
      id: "sap",
      num: "02",
      title: "ERP / SAP Solutions",
      icon: Layers,
      desc: "SAP is the world's leading enterprise resource planning platform — and getting it right is critical. TSD brings deep SAP expertise combined with a customer-first approach, helping organizations implement SAP, migrate to S/4HANA, and extract maximum value from their enterprise investment. Our strategy is aligned with your full digital transformation journey — not just your IT roadmap.",
      subsections: [
        {
          name: "SAP Implementation & Consulting",
          desc: "Full-cycle SAP implementation from blueprinting and design to configuration, testing, go-live, and post-go-live support — with both functional and technical depth."
        },
        {
          name: "SAP S/4HANA Migration",
          desc: "Expert migration from SAP ECC to SAP S/4HANA — ensuring data integrity, process continuity, and minimal disruption through every milestone."
        },
        {
          name: "SAP Value Discovery Workshop",
          desc: "An audit-style engagement to identify opportunities, understand your current SAP landscape, and define the right path forward — before you commit to a full program."
        },
        {
          name: "System Integration",
          desc: "Connect SAP seamlessly with your CRM, e-commerce, HR, and third-party systems for a unified data environment that eliminates silos."
        },
        {
          name: "SAP Managed Services",
          desc: "Ongoing post-go-live support, optimization, and administration — so your team can focus on the business while we handle the system."
        }
      ],
      modules: ["SAP FI/CO", "SAP MM", "SAP SD", "SAP PP", "SAP HCM", "SAP PM", "SAP BW/BI", "SAP SuccessFactors", "SAP Ariba", "SAP S/4HANA Cloud"],
      deliveryModels: ["Onsite–Offshore", "Right Shore", "Factory Model", "Managed Services"]
    },
    {
      id: "cybersecurity",
      num: "03",
      title: "Cybersecurity",
      icon: ShieldAlert,
      desc: "Cyber threats are growing more sophisticated, frequent, and costly every year. A single breach can cost millions in losses, regulatory penalties, and reputational damage. TSD helps organizations build a security posture that makes them a hard target — not just on paper, but in practice. From initial risk assessments to ongoing security operations, we provide end-to-end cybersecurity services designed for the realities of today's threat landscape.",
      subsections: [
        {
          name: "Security Assessment & Auditing",
          desc: "Comprehensive evaluation of your current security posture — identifying vulnerabilities, gaps, and risk exposure before attackers do."
        },
        {
          name: "Penetration Testing",
          desc: "Ethical hacking exercises that simulate real-world attack scenarios, testing your people, processes, and technology under controlled conditions."
        },
        {
          name: "Identity & Access Management (IAM)",
          desc: "Design and implement robust IAM frameworks to ensure the right people have the right access — and nothing more. Expertise in CyberArk, SailPoint, and Azure AD."
        },
        {
          name: "Compliance Management",
          desc: "Navigate complex regulatory requirements with expert guidance — from ISO 27001 and GDPR to Malaysia's PDPA and Singapore's MAS TRM."
        },
        {
          name: "Security Operations Center (SOC)",
          desc: "24/7 monitoring, detection, and response capabilities — either fully managed or as an augmentation to your in-house team."
        },
        {
          name: "Incident Response & Recovery",
          desc: "When a breach occurs, every minute counts. Our incident response team moves fast to contain, investigate, and recover — minimizing damage and downtime."
        }
      ],
      frameworks: ["ISO 27001", "NIST CSF", "GDPR", "Malaysia PDPA", "PCI-DSS", "SOC 2", "MAS TRM (Singapore)", "BNM RMiT (Malaysia)"]
    },
    {
      id: "cloud",
      num: "04",
      title: "Cloud Computing",
      icon: Cloud,
      desc: "Cloud infrastructure is the foundation of a modern, scalable enterprise. TSD manages the full cloud journey — from initial migration strategy through to ongoing optimization and management — across the world's leading platforms.",
      deliverables: [
        "Cloud readiness assessment and migration planning",
        "Infrastructure-as-Code (IaC) setup and automation",
        "Multi-cloud and hybrid cloud architecture design",
        "Cloud cost optimization and FinOps",
        "Disaster recovery and business continuity planning",
        "Ongoing cloud management and monitoring"
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Kubernetes", "Docker", "Terraform"]
    },
    {
      id: "development",
      num: "05",
      title: "Development & Integration",
      icon: Code2,
      desc: "Great software moves businesses forward. TSD's development teams build web and mobile applications from the ground up, and integrate them seamlessly into your existing enterprise ecosystem — from CRM and ERP to third-party APIs and data platforms.",
      deliverables: [
        "Custom web application development",
        "Mobile application development (iOS, Android, Cross-Platform)",
        "API development and third-party integration",
        "Legacy system modernization",
        "E-commerce platform development",
        "DevOps pipeline setup and CI/CD automation"
      ],
      techStack: {
        frontend: ["React", "Angular", "Vue.js", "Next.js"],
        backend: ["Node.js", "Python (Django, Flask)", "PHP (Laravel)", "Ruby on Rails"],
        mobile: ["Swift", "Kotlin", "React Native", "Flutter"],
        database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
      }
    },
    {
      id: "blockchain",
      num: "06",
      title: "Blockchain & Web3 Solutions",
      icon: Cpu,
      desc: "Distributed ledger technology is reshaping industries from finance to supply chain. TSD's blockchain practice helps enterprises explore, pilot, and implement solutions that add transparency, security, and efficiency to their operations.",
      deliverables: [
        "Blockchain strategy and feasibility consulting",
        "Smart contract development and auditing",
        "Decentralized application (dApp) development",
        "Tokenization and digital asset solutions",
        "Web3 integration with enterprise systems",
        "Private and consortium blockchain networks"
      ],
      technologies: ["Ethereum", "Hyperledger", "Solidity", "Polygon", "Web3.js", "IPFS"]
    },
    {
      id: "managed-services",
      num: "07",
      title: "Managed Services & Support",
      icon: Headphones,
      desc: "Keep your technology running at peak performance without the overhead of managing it in-house. TSD's managed services team provides proactive monitoring, maintenance, and support across your entire technology stack — 24/7.",
      deliverables: [
        "24/7 infrastructure monitoring and alerting",
        "Helpdesk and end-user support",
        "Patch management and system updates",
        "Performance tuning and capacity planning",
        "Vendor management and SLA oversight",
        "IT governance and reporting"
      ],
      slaOptions: [
        {
          name: "Standard",
          desc: "Business hours coverage with guaranteed response times. Ideal for non-critical systems.",
          time: "8/5 support"
        },
        {
          name: "Enhanced",
          desc: "Extended hours coverage with accelerated escalation matrices. Perfect for production support.",
          time: "16/7 support"
        },
        {
          name: "Mission-Critical",
          desc: "Proactive 24/7 engineering monitoring, instant incident response, and dedicated account manager.",
          time: "24/7/365 support"
        }
      ]
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
        <div className="absolute inset-0 bg-[#063330]/35" />
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
              Technology Solutions That Drive <span className="text-brand-teal">Real Business Outcomes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10"
            >
              From AI and cloud to SAP, cybersecurity, and custom development — TSD delivers the technical depth and hands-on expertise your transformation demands.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                className="text-lg px-10 py-4 shadow-2xl hover:shadow-brand-teal/50"
                onClick={() => openModal("Book a Free Consultation")}
              >
                Book a Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="w-full py-16 bg-transparent px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="relative overflow-hidden group bg-[#03211f]/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 sm:p-16 transition-all duration-700 flex flex-col md:flex-row items-center gap-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-brand-teal/40"
            >
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10 shrink-0">
                <Network className="text-brand-teal w-16 h-16 mb-4 animate-pulse" />
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
                  One Partner.<br/>The Full<br/>Technology Stack.
                </h2>
              </div>
              <div className="md:w-2/3 text-lg sm:text-xl text-white/80 leading-relaxed space-y-6">
                <p>
                  Modern businesses need more than point solutions — they need an integrated technology partner who can see the full picture. TSD brings together expertise across AI, enterprise systems, cybersecurity, cloud, development, blockchain, and managed services under one roof.
                </p>
                <p>
                  That means less coordination overhead for you, and better, more cohesive outcomes for your business, backed by deep regional delivery experience across Southeast Asia.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. QUICK NAVIGATOR SHOWCASE */}
        <section className="w-full py-12 bg-transparent px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white/70">Quick-Explore Our Solutions</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {solutions.map((sol) => {
                const SolIcon = sol.icon;
                return (
                  <button
                    key={sol.id}
                    onClick={() => scrollToSection(sol.id)}
                    className="flex flex-col items-center justify-center p-6 bg-[#03211f]/60 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-teal/60 hover:shadow-[0_0_20px_rgba(28,168,157,0.3)] transition-all duration-300 text-center group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-3 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-black transition-all duration-300">
                      <SolIcon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-tight">
                      {sol.title.split(' ')[0] === 'AI' || sol.title.split(' ')[0] === 'ERP' ? sol.title : sol.title.split(' & ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. DETAILED ALTERNATING SOLUTIONS */}
        <div className="w-full py-16 space-y-32 px-4 sm:px-6 lg:px-8">
          
          {solutions.map((sol, index) => {
            const SolIcon = sol.icon;
            const isEven = index % 2 === 0;

            return (
              <section 
                key={sol.id} 
                id={sol.id} 
                className="max-w-7xl mx-auto relative scroll-mt-24"
              >
                <div className="absolute -top-12 -left-12 text-[10rem] font-bold text-white/[0.02] select-none font-heading leading-none hidden lg:block">
                  {sol.num}
                </div>

                <motion.div 
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className={`flex flex-col lg:flex-row items-stretch gap-12`}
                >
                  
                  {/* Left Column - Core Info */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-start relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/30 shadow-[0_0_20px_rgba(28,168,157,0.1)]">
                        <SolIcon size={28} />
                      </div>
                      <span className="text-lg font-bold text-brand-teal font-heading tracking-wider">SOLUTION {sol.num}</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
                      {sol.title}
                    </h2>
                    
                    <p className="text-lg text-white/80 leading-relaxed mb-8">
                      {sol.desc}
                    </p>

                    {/* Left content technology badges (If present and NOT dev stack tab) */}
                    {sol.technologies && (
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Core Technologies</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {sol.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3.5 py-1.5 bg-[#03211f]/60 backdrop-blur-md rounded-full border border-white/10 hover:border-brand-teal/40 transition-all duration-300 text-sm font-medium text-white/90 hover:shadow-[0_0_10px_rgba(28,168,157,0.15)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Left content for ERP modules cover summary */}
                    {sol.modules && (
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">SAP Modules We Cover</h4>
                        <div className="flex flex-wrap gap-2">
                          {sol.modules.map((mod) => (
                            <span 
                              key={mod}
                              className="px-3 py-1 bg-black/35 rounded-md border border-white/5 hover:border-brand-teal/30 text-xs font-semibold text-white/80 hover:text-white transition-all"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Deep-Dive Interactive Visual Cards */}
                  <div className="w-full lg:w-7/12 flex">
                    <div className="w-full bg-[#03211f]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-brand-teal/30 transition-all duration-500">
                      
                      {/* Subsections rendering (for SAP & Cybersecurity) */}
                      {sol.subsections && (
                        <div className="space-y-6 flex-grow">
                          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white border-b border-white/10 pb-3">
                            Key Areas of Expertise
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sol.subsections.map((sub, idx) => (
                              <div 
                                key={idx} 
                                className="p-5 bg-black/30 rounded-2xl border border-white/5 hover:border-brand-teal/20 transition-all duration-300 group/sub"
                              >
                                <h4 className="text-base font-bold text-white mb-2 group-hover/sub:text-brand-teal transition-colors">
                                  {sub.name}
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                  {sub.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Render Delivery Models for SAP specifically */}
                          {sol.deliveryModels && (
                            <div className="pt-4 border-t border-white/10">
                              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">Delivery Models</h4>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {sol.deliveryModels.map((model) => (
                                  <div 
                                    key={model}
                                    className="px-4 py-3 bg-[#03211f]/60 rounded-xl border border-white/5 text-center text-sm font-bold text-white/95"
                                  >
                                    {model}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Render Compliance Frameworks for Cybersecurity specifically */}
                          {sol.frameworks && (
                            <div className="pt-4 border-t border-white/10">
                              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                                <Shield size={16} className="text-brand-teal" /> Compliance Frameworks Supported
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {sol.frameworks.map((fw) => (
                                  <span 
                                    key={fw}
                                    className="px-3.5 py-1.5 bg-black/40 rounded-full border border-brand-teal/20 text-xs font-semibold text-brand-teal"
                                  >
                                    {fw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Deliverables Rendering (Standard list styled elegantly with icons) */}
                      {sol.deliverables && !sol.techStack && (
                        <div className="space-y-6 flex-grow">
                          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white border-b border-white/10 pb-3">
                            What We Deliver
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sol.deliverables.map((deliv, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-300"
                              >
                                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} />
                                <span className="text-base text-white/80 leading-snug">{deliv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Custom Technology Tabs for Development & Integration */}
                      {sol.techStack && (
                        <div className="space-y-6 flex-grow flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white border-b border-white/10 pb-3">
                            Full-Stack Development Expertise
                          </h3>
                          
                          {/* Tabs selector */}
                          <div className="flex border-b border-white/10 pb-3 overflow-x-auto gap-2">
                            {Object.keys(sol.techStack).map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setActiveDevTab(tab)}
                                className={`px-4 py-2 text-sm font-bold uppercase rounded-lg transition-all capitalize whitespace-nowrap cursor-pointer ${
                                  activeDevTab === tab
                                    ? 'bg-brand-teal text-black shadow-lg shadow-brand-teal/20'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                {tab}
                              </button>
                            ))}
                          </div>

                          {/* Tab Content */}
                          <div className="flex-grow py-4 min-h-[160px]">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeDevTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-2 sm:grid-cols-2 gap-3"
                              >
                                {sol.techStack[activeDevTab].map((tech) => (
                                  <div 
                                    key={tech}
                                    className="flex items-center gap-3 px-4 py-3 bg-black/35 rounded-xl border border-white/5 hover:border-brand-teal/20 transition-all duration-300"
                                  >
                                    <div className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                                    <span className="text-sm font-semibold text-white/90">{tech}</span>
                                  </div>
                                ))}
                              </motion.div>
                            </AnimatePresence>
                          </div>

                          {/* Development Deliverables list summary */}
                          <div className="pt-4 border-t border-white/10">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">Capabilities</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
                              {sol.deliverables.slice(0, 4).map((d) => (
                                <div key={d} className="flex items-center gap-2">
                                  <Check size={12} className="text-brand-teal shrink-0" />
                                  <span>{d}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SLA comparison block for Managed Services */}
                      {sol.slaOptions && (
                        <div className="space-y-6 flex-grow">
                          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white border-b border-white/10 pb-3">
                            Flexible Support Levels (SLA Options)
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {sol.slaOptions.map((sla, idx) => {
                              const isMax = sla.name === "Mission-Critical";
                              return (
                                <div 
                                  key={idx}
                                  className={`p-5 rounded-2xl flex flex-col justify-between border transition-all duration-300 ${
                                    isMax 
                                      ? 'bg-brand-teal/10 border-brand-teal shadow-[0_0_20px_rgba(28,168,157,0.15)]' 
                                      : 'bg-black/30 border-white/5 hover:border-white/20'
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="text-base font-bold text-white">{sla.name}</h4>
                                      {isMax && (
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                                      {sla.desc}
                                    </p>
                                  </div>
                                  <div className="pt-3 border-t border-white/10 text-xs font-bold text-brand-teal">
                                    {sla.time}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              </section>
            );
          })}

        </div>

        {/* 5. BOTTOM CTA SECTION */}
        <section 
          id="contact-cta" 
          className="w-full py-24 bg-transparent text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="p-10 sm:p-16 rounded-[3.5rem] bg-[#03211f] border border-brand-teal/30 shadow-[0_0_50px_rgba(28,168,157,0.15)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-all duration-700" />

              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our consultants will help you identify the solutions with the highest impact for your specific situation — at no cost.
              </p>
              
              <Button 
                variant="primary" 
                className="text-lg px-12 py-5 shadow-2xl hover:shadow-brand-teal/50 group/btn"
                onClick={() => openModal("Claim Your Free Consulting Session")}
              >
                Claim Your Free Consulting Session
                <ArrowRight className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
