import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-surface-container-highest border border-outline-variant/15">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
            Curriculum Vitae
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-on-surface">
          Architecting{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
            Scalable
          </span>{' '}
          <br />
          Digital Environments.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          A B.Tech graduate driven by the intersection of engineering precision and creative
          problem-solving in backend architectures.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative space-y-6">
              <h2 className="font-label text-xs uppercase tracking-widest text-primary">
                About Me
              </h2>
              <div className="space-y-5 text-on-surface-variant leading-relaxed">
                <p className="text-base">
                  My journey in technology began with a B.Tech degree in Computer Science at Usha Martin University (2022-2026), 
                  where I discovered a profound fascination for how complex systems communicate and scale. I don't just write 
                  code; I architect scalable ecosystems that empower users and businesses alike.
                </p>
                <p className="text-base">
                  Currently working as a <span className="text-primary font-semibold">Back End Developer at CODECRAFT INFOTECH</span>, 
                  I specialize in building mission-critical server-side components and microservices that handle high-concurrency 
                  traffic with minimal latency. My expertise spans the full MERN stack, with a particular focus on backend 
                  optimization and cloud-native architectures.
                </p>
                <p className="text-base">
                  I've successfully optimized database queries reducing response times by 40%, implemented secure JWT-based 
                  authentication across multiple platforms, and built production-ready applications during my internship at 
                  Ducat India. My approach is rooted in the belief that "Technical Elegance" is found at the balance of 
                  efficiency, security, and readability.
                </p>
                <p className="text-base">
                  Beyond coding, I'm passionate about competitive programming (500+ DSA problems solved), contributing to 
                  open-source projects, and staying updated with emerging technologies like Generative AI, DevOps practices, 
                  and modern JavaScript frameworks.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="pt-6 border-t border-outline-variant/10">
                <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'MERN Stack',
                    'Node.js',
                    'MongoDB',
                    'Express.js',
                    'React',
                    'REST APIs',
                    'PostgreSQL',
                    'AWS',
                    'System Design',
                    'Microservices',
                    'JWT Auth',
                    'Git/GitHub'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface text-xs font-label uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-headline font-bold text-primary mb-1">2+</div>
                  <div className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Years Coding
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-headline font-bold text-secondary mb-1">110+</div>
                  <div className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-headline font-bold text-tertiary mb-1">20+</div>
                  <div className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:sticky lg:top-32"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl group-hover:blur-[100px] transition-all duration-500 opacity-50"></div>
            
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full rounded-2xl bg-surface-container-low overflow-hidden border border-outline-variant/20 shadow-2xl">
              <img
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/profile.jpeg"
                alt="Bhaskar Talukder - Full Stack Developer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              
              {/* Info Badge */}
              <div className="absolute bottom-0 left-0 right-0 glass-card p-6 border-t border-outline-variant/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">
                      Full Stack Developer
                    </p>
                    <p className="text-lg text-on-surface font-bold">
                      Bhaskar Talukder
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-base">location_on</span>
                  <span>Ranchi, Jharkhand, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant mt-2">
                  <span className="material-symbols-outlined text-secondary text-base">work</span>
                  <span>CODECRAFT INFOTECH</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
