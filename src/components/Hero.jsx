import { motion } from 'framer-motion';
import { techStack } from '../data/skills';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-8 py-24 md:py-40 flex flex-col items-start gap-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Headline Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-[-0.04em] leading-[0.95] text-on-surface"
            >
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
                Developer.
              </span>
              <span className="block mt-2">Building scalable MERN applications.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg md:text-xl text-on-surface-variant font-body leading-relaxed"
            >
              Computer Science student passionate about backend systems, APIs, and modern web
              technologies. Transforming complex logic into elegant, high-performance digital
              experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-bold rounded-lg hover:shadow-[0_0_30px_-5px_rgba(163,166,255,0.4)] transition-all duration-300 active:scale-95"
              >
                View My Projects
              </button>
              <a
                href="/resume.pdf"
                download="Bhaskar_Talukder_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-outline-variant/30 text-primary font-bold rounded-lg hover:bg-primary/5 transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                Download Resume
                <span className="material-symbols-outlined text-sm">download</span>
              </a>
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative aspect-square rounded-xl bg-surface-container-low overflow-hidden border border-outline-variant/20">
              <img
                alt="Bhaskar Talukder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/profile.jpeg"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-lg border border-outline-variant/10">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest">
                    Currently Coding
                  </span>
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                </div>
                <div className="mt-1 font-label text-sm text-on-surface">
                  Architecting Distributed Systems
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Bar & Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-12 pt-12 border-t border-outline-variant/10"
        >
          <div className="flex flex-col gap-6">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Connect With Me
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/bhaskar-talukder-0714792a2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-300"
              >
                <span className="material-symbols-outlined text-2xl">link</span>
              </a>
              <a
                href="https://github.com/surja007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-300"
              >
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-3 max-w-lg">
            {techStack.slice(0, 6).map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-surface-container-highest text-on-surface-variant font-label text-[10px] uppercase tracking-widest rounded-full border border-outline-variant/10"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
