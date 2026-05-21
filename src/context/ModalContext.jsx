import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const ModalContext = createContext(null);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openModal = (title) => {
    setModalTitle(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
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

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#010c0b]/55 backdrop-blur-[6px] cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#021b19]/75 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 sm:p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.5)] max-w-lg w-full relative z-[1000] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 text-white/50 hover:text-white transition-colors w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="mb-5 pr-8">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1 leading-tight">
                  {modalTitle}
                </h2>
                <p className="text-white/60 text-xs">We usually respond within 24 hours.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-white/70 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-brand-teal/40 focus:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-teal/30 text-white transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-white/70 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-brand-teal/40 focus:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-teal/30 text-white transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-white/70 ml-1">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="+60 12-345 6789" 
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-brand-teal/40 focus:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-teal/30 text-white transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-white/70 ml-1">Subject</label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-brand-teal/40 focus:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-teal/30 text-white transition-all flex items-center justify-between text-left cursor-pointer text-sm"
                      >
                        <span className={selectedSubject ? "text-white" : "text-white/50"}>
                          {selectedSubject}
                        </span>
                        <ChevronDown 
                          size={16} 
                          className={`text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-teal' : ''}`} 
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-0 right-0 mt-1 bg-[#021817]/95 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl z-50 overflow-hidden py-1"
                          >
                            {subjects.map((sub, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  setSelectedSubject(sub);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left transition-all flex items-center justify-between text-xs ${
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

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/70 ml-1">Message</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about your project or inquiry..." 
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-brand-teal/40 focus:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-brand-teal/30 text-white transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <Button 
                  variant="primary" 
                  onClick={closeModal}
                  className="w-full py-3 text-sm flex items-center justify-center gap-3 group mt-1"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
