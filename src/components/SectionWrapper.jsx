import { motion } from 'framer-motion';

export default function SectionWrapper({ 
  children, 
  id = '', 
  className = '', 
  theme = 'light' // 'light' | 'dark'
}) {
  const baseStyles = "py-20 md:py-32";
  const themeStyles = theme === 'dark' 
    ? "bg-primary text-white" 
    : "bg-background text-primary";

  return (
    <section id={id} className={`${baseStyles} ${themeStyles} ${className}`}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
