import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="font-label text-sm uppercase tracking-widest text-primary">
          Selected Projects
        </h2>
        <div className="h-px flex-grow bg-outline-variant/30"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <img
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 flex gap-2">
                {project.tech.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="font-label text-[10px] uppercase bg-surface-container-highest/80 backdrop-blur-md px-3 py-1 rounded-full text-on-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-3xl font-headline font-bold mb-2 group-hover:text-${project.color} transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm max-w-sm">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-dim transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    GitHub
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-dim transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className={`p-3 border border-outline-variant rounded-full group-hover:bg-${project.color} group-hover:border-${project.color} group-hover:text-on-primary transition-all`}>
                <span className="material-symbols-outlined">north_east</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
