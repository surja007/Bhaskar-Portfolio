import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/experience';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
          Professional Experience
        </h2>
      </motion.div>

      <div className="relative border-l border-outline-variant/30 ml-4 pl-12 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Timeline Node */}
            <div className={`absolute -left-[57px] top-0 w-3 h-3 rounded-full bg-${exp.color} ring-4 ring-${exp.color}/20 ring-offset-4 ring-offset-surface group-hover:scale-125 transition-transform`}></div>

            <div className="glass-card p-8 rounded-xl border border-outline-variant/15 shadow-2xl transition-all duration-500 hover:border-primary/40 group-hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface tracking-tight">
                    {exp.title}
                  </h3>
                  <p className={`font-label text-sm text-${exp.color} tracking-wide uppercase mt-1`}>
                    {exp.company}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md bg-surface-container-highest text-on-surface-variant font-label text-[10px] uppercase">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
                <p>{exp.description}</p>

                {exp.achievements && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[14px] mt-1 text-primary-dim">
                          terminal
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.project && (
                  <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                    <p className={`font-label text-[10px] uppercase tracking-widest text-${exp.color} mb-2`}>
                      Featured Project
                    </p>
                    <h4 className="text-on-surface font-bold mb-1">{exp.project.name}</h4>
                    <p className="text-xs italic">{exp.project.description}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Philosophy Quote */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-32 py-24 border-y border-outline-variant/10 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <p className="text-3xl md:text-4xl font-headline italic font-light tracking-tight text-on-surface leading-snug">
            "Code is a canvas where logic meets empathy. I build systems that don't just work—they
            resonate with the architecture of human intent."
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-primary/30"></div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
              Technical Philosophy
            </span>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Experience;
