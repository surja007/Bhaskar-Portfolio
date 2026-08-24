import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "emoji_events",
      title: "3rd Place Winner",
      subtitle: "Engineers' Day Hackathon 2025",
      color: "tertiary",
      description: "Usha Martin University"
    },
    {
      icon: "speed",
      title: "40% Performance Boost",
      subtitle: "Database Query Optimization",
      color: "primary",
      description: "Production System Enhancement"
    },
    {
      icon: "verified",
      title: "500+ Problems",
      subtitle: "Data Structures & Algorithms",
      color: "secondary",
      description: "Competitive Programming"
    },
    {
      icon: "code",
      title: "5+ Platforms",
      subtitle: "JWT Authentication Implementation",
      color: "primary-dim",
      description: "Secure Backend Systems"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
          Key Achievements
        </h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold">Highlights & Milestones</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all h-full flex flex-col">
              <div className={`w-14 h-14 rounded-full bg-${achievement.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className={`material-symbols-outlined text-${achievement.color} text-2xl`}>
                  {achievement.icon}
                </span>
              </div>
              
              <h4 className="text-xl font-headline font-bold mb-1 text-on-surface">
                {achievement.title}
              </h4>
              <p className={`text-sm text-${achievement.color} font-label uppercase tracking-wider mb-2`}>
                {achievement.subtitle}
              </p>
              <p className="text-xs text-on-surface-variant mt-auto">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
