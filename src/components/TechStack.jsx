import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStacks = [
    {
      category: "Frontend",
      color: "primary",
      icon: "web",
      technologies: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "JavaScript/ES6+", level: 90, icon: "📜" },
        { name: "TypeScript", level: 75, icon: "💠" },
      ]
    },
    {
      category: "Backend",
      color: "secondary",
      icon: "storage",
      technologies: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
      ]
    },
    {
      category: "DevOps & Tools",
      color: "tertiary",
      icon: "cloud",
      technologies: [
        { name: "Git/GitHub", level: 85, icon: "🔀" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Docker", level: 65, icon: "🐳" },
        { name: "REST APIs", level: 90, icon: "🔌" },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
          Technology Proficiency
        </h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold">Tech Stack Mastery</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techStacks.map((stack, stackIndex) => (
          <motion.div
            key={stackIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: stackIndex * 0.2 }}
            className="glass-card p-8 rounded-xl border border-outline-variant/10"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-full bg-${stack.color}/10 flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-${stack.color} text-xl`}>
                  {stack.icon}
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold">{stack.category}</h4>
            </div>

            {/* Technologies with Progress Bars */}
            <div className="space-y-6">
              {stack.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: stackIndex * 0.2 + techIndex * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium text-on-surface">{tech.name}</span>
                    </div>
                    <span className={`text-xs font-label text-${stack.color} font-bold`}>
                      {tech.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: stackIndex * 0.2 + techIndex * 0.1 + 0.3, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r from-${stack.color} to-${stack.color}-dim rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
          Also Familiar With
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Redux', 'Socket.io', 'GraphQL', 'JWT', 'System Design', 'Microservices', 'CI/CD', 'Agile'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              className="px-4 py-2 bg-surface-container-highest text-on-surface-variant font-label text-xs uppercase tracking-wider rounded-full border border-outline-variant/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
