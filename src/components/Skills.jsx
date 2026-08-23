import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="font-label text-sm uppercase tracking-widest text-primary">
          Technical Expertise
        </h2>
        <div className="h-px flex-grow bg-outline-variant/30"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${category.span} glass-card rounded-xl p-8 border border-white/5 hover:bg-surface-container-high transition-all duration-300 group`}
          >
            <div className="flex justify-between items-start mb-12">
              <span className={`material-symbols-outlined text-${category.color} text-4xl group-hover:scale-110 transition-transform`}>
                {category.icon}
              </span>
              {index === 0 && (
                <span className="font-label text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">
                  Stack 01
                </span>
              )}
            </div>

            <h3 className="text-2xl font-headline font-bold mb-4">{category.title}</h3>

            {category.description && (
              <p className="text-on-surface-variant text-sm mb-6">{category.description}</p>
            )}

            {category.skills && (
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-label text-[10px] uppercase bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {category.items && (
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-[10px] text-on-surface-variant">{item.level}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Core CS Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-4 glass-card rounded-xl p-8 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-surface-container-high transition-all duration-300"
        >
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary-container text-5xl">
              account_tree
            </span>
            <div>
              <h3 className="text-2xl font-headline font-bold">Core Computer Science</h3>
              <p className="text-on-surface-variant text-sm">
                Data Structures & Algorithms (DSA), System Design, and OOPS.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-6 border-x border-white/5">
              <div className="text-2xl font-headline font-bold text-primary">500+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Problems
              </div>
            </div>
            <div className="text-center px-6">
              <div className="text-2xl font-headline font-bold text-secondary">A+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Logic
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
