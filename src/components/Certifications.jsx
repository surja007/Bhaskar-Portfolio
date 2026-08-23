import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certifications, achievements, categories } from '../data/certifications';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertifications = activeCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Credentials & Recognition
        </h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold">Certifications</h3>
        <p className="text-on-surface-variant mt-4 max-w-2xl">
          Continuous learning across AI, cloud technologies, cybersecurity, and full-stack development.
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 overflow-x-auto pb-4"
      >
        <div className="flex gap-3 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-on-primary-fixed shadow-[0_0_20px_rgba(163,166,255,0.3)]'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <AnimatePresence mode="popLayout">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all border border-transparent hover:border-outline-variant/20 hover:shadow-[0_0_20px_rgba(163,166,255,0.1)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-${cert.color} group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{cert.icon}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-[9px] uppercase tracking-wider">
                  {cert.date}
                </span>
              </div>

              <h4 className="text-lg font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </h4>
              
              <p className="text-sm text-primary-dim font-label uppercase tracking-wide mb-3">
                {cert.issuer}
              </p>

              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-[8px] uppercase tracking-widest">
                  {cert.category}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                  verified
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-label text-sm uppercase tracking-widest text-primary">
            Achievements & Experience
          </h3>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group"
            >
              <div className={`w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center text-${achievement.color} mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{achievement.icon}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h4>
              
              {achievement.event && (
                <p className="text-sm text-secondary-dim font-label uppercase mb-1">
                  {achievement.event}
                </p>
              )}
              
              <p className="text-sm text-on-surface-variant mb-2">
                {achievement.organization}
              </p>
              
              {achievement.description && (
                <p className="text-xs text-on-surface-variant italic mt-3 pt-3 border-t border-outline-variant/10">
                  {achievement.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 glass-card p-8 rounded-xl border border-outline-variant/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-headline font-bold text-primary mb-2">
              {certifications.length}+
            </div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Certifications
            </div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-secondary mb-2">
              {categories.length - 1}
            </div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Categories
            </div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-tertiary mb-2">
              3
            </div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Achievements
            </div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-primary-dim mb-2">
              2025
            </div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Active Year
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
