import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Search, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';
import Grainient from '../components/Grainient/Grainient';


export default function StaffingServices() {
  const { openModal } = useModal();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const offerings = [
    {
      title: "Permanent Placement",
      icon: Users,
      desc: "End-to-end recruitment for full-time technology roles across software development, cybersecurity, cloud, ERP, data, and more. We take the time to understand your team culture and find candidates who fit — technically and culturally."
    },
    {
      title: "Contract & Project Staffing",
      icon: FileText,
      desc: "Flexible short and long-term contract professionals to augment your team for specific projects, peak periods, or specialized requirements — deployed quickly without compromising on quality."
    },
    {
      title: "Executive Search",
      icon: Search,
      desc: "Confidential, high-touch search for C-suite, VP, and Director-level technology leadership roles — handled with discretion, expertise, and a thorough understanding of what leadership excellence looks like in your sector."
    },
    {
      title: "AI-Driven Recruitment",
      icon: Cpu,
      desc: "Our AI-powered matching engine shortlists the most relevant candidates faster, reducing time-to-hire without compromising quality. Smarter sourcing means better results, delivered sooner."
    }
  ];

  const roles = [
    "Software Engineers & Developers", "Cloud Architects & Engineers", 
    "Data Scientists & AI/ML Engineers", "SAP Consultants & Functional Leads", 
    "Cybersecurity Analysts & Architects", "DevOps & Site Reliability Engineers", 
    "Business Analysts & Project Managers", "IT Directors & CTO/CIO Executives", 
    "IAM Specialists", "ERP Consultants", "QA & Test Engineers", "Network & Infrastructure Engineers"
  ];



  const processSteps = [
    { step: "01", title: "Briefing", desc: "We learn your role requirements, team culture, and business context in depth — because a great hire isn't just about skills, it's about fit." },
    { step: "02", title: "Sourcing", desc: "Our AI tools and regional network identify active and passive candidates who match your exact requirements, drawing from a talent pool built over years of regional recruiting." },
    { step: "03", title: "Screening", desc: "Technical assessments and behavioral interviews narrow the field to candidates who truly meet the bar — not just those who look good on paper." },
    { step: "04", title: "Presentation", desc: "You receive a curated shortlist with full candidate profiles, assessment summaries, and our honest recommendation on each candidate." },
    { step: "05", title: "Offer & Onboarding", desc: "We manage offer negotiations, coordinate references, and support a smooth onboarding process — ensuring the placement sticks." }
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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-8"
          >
            The Right Talent, Right When You Need It
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-10"
          >
            TSD's Staffing Services connect you with pre-vetted, high-performing technology professionals — fast. Powered by AI-driven recruitment and a deep regional network spanning Southeast Asia.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="primary" className="text-lg px-10 py-4 shadow-2xl hover:shadow-brand-teal/50" onClick={() => openModal("Discuss Your Hiring Needs")}>
              Discuss Your Hiring Needs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-8 text-center">
              Workforce Solutions Built for the Technology Age
            </h2>
            <div className="text-lg sm:text-xl text-white/80 space-y-6 max-w-4xl mx-auto leading-relaxed">
              <p>
                Finding the right technology talent is one of the most critical — and most challenging — aspects of running a modern business. At TSD, we've built a staffing practice specifically for the technology sector, combining AI-powered candidate matching with experienced human recruiters who understand what great looks like.
              </p>
              <p>
                We work with businesses across Malaysia, Singapore, India, Indonesia, and the Philippines to place permanent staff, contract professionals, and executive leaders across all technology domains.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER (4 CARDS) */}
      <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, idx) => {
              const IconComp = offering.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="group bg-[#03211f] backdrop-blur-2xl border-t border-l border-white/20 border-b border-r border-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.4)] hover:border-brand-teal/60 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_25px_rgba(28,168,157,0.4)] rounded-3xl p-8 sm:p-12 transition-all duration-700 flex flex-col justify-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <IconComp size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 tracking-wide">
                    {offering.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed flex-grow">
                    {offering.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ROLES WE RECRUIT */}
      <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-12">
              Technology Roles We Specialize In
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {roles.map((role, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-4 bg-[#03211f]/60 backdrop-blur-md rounded-full border border-white/10 hover:border-brand-teal/50 hover:shadow-[0_0_15px_rgba(28,168,157,0.3)] transition-all duration-300 text-base sm:text-lg text-white/90 font-medium"
                >
                  {role}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. OUR RECRUITMENT PROCESS */}
      <section className="w-full py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              How We Place the Right People
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {processSteps.map((proc, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-6 group transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal group-hover:bg-brand-teal group-hover:text-black flex items-center justify-center font-heading font-bold text-2xl transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(28,168,157,0.1)] group-hover:shadow-[0_0_25px_rgba(28,168,157,0.5)] group-hover:scale-105">
                  {proc.step}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{proc.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="w-full py-24 bg-transparent text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight">
            Let's Find Your Next Great Hire
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need one specialist or a full delivery team, TSD has the network and expertise to deliver — faster than you expect.
          </p>
          <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl hover:shadow-brand-teal/50" onClick={() => openModal("Start a Conversation")}>
            Start a Conversation
          </Button>
        </div>
      </section>

      </div>
    </div>
  );
}
