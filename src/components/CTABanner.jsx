import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 blur-3xl"></div>
        
        {/* Content */}
        <div className="relative glass-card border border-outline-variant/20 p-12 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest">
              Open for Opportunities
            </span>
            
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Amazing Together
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
              I'm always interested in hearing about new projects, job opportunities, 
              or collaborations. Whether you need a backend wizard, full-stack developer, 
              or just want to chat about tech—I'd love to connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-5 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-bold rounded-lg hover:shadow-[0_0_40px_rgba(163,166,255,0.5)] transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg"
              >
                Get In Touch
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              
              <a
                href="/resume.pdf"
                download="Bhaskar_Talukder_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-outline-variant/30 text-primary font-bold rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg"
              >
                Download Resume
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center items-center gap-6 mt-10 pt-10 border-t border-outline-variant/10">
              <p className="text-sm text-on-surface-variant font-label uppercase tracking-wider">
                Connect on:
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/bhaskar-talukder-0714792a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="material-symbols-outlined text-xl">link</span>
                </a>
                <a
                  href="https://github.com/surja007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <span className="material-symbols-outlined text-xl">terminal</span>
                </a>
                <a
                  href="mailto:surjagaming0@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-xl">email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
