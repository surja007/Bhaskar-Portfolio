import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
          Education & Achievements
        </h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold">Academic Background</h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 rounded-xl border border-outline-variant/15 h-full">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-on-surface tracking-tight">
                  B.Tech in Computer Science
                </h3>
                <p className="font-label text-sm text-primary tracking-wide uppercase mt-1">
                  Usha Martin University
                </p>
              </div>
              <span className="px-3 py-1 rounded-md bg-surface-container-highest text-on-surface-variant font-label text-[10px] uppercase">
                2022 - 2026
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Focused on Data Structures, Algorithms, System Design, and Full-Stack Development.
              Built multiple production-ready applications during coursework.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/10">
              <span className="material-symbols-outlined text-primary">school</span>
              <span className="text-xs text-on-surface-variant font-label uppercase tracking-wider">
                Bachelor of Technology
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="glass-card p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col justify-center">
              <div className="text-4xl font-headline font-bold text-primary mb-2">500+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                DSA Problems Solved
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col justify-center">
              <div className="text-4xl font-headline font-bold text-secondary mb-2">20+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Certifications
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col justify-center">
              <div className="text-4xl font-headline font-bold text-tertiary mb-2">110+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Projects Built
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col justify-center">
              <div className="text-4xl font-headline font-bold text-primary-dim mb-2">3+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Years Experience
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
