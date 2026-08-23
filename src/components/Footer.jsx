import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-outline-variant/20 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 font-label text-xs uppercase tracking-widest">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-on-surface-variant"
        >
          © {currentYear} Bhaskar Talukder. Built with Technical Elegance.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-8"
        >
          <a
            href="https://www.linkedin.com/in/bhaskar-talukder-0714792a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-all opacity-80 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/surja007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-all opacity-80 hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href="mailto:surjagaming0@gmail.com"
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-all opacity-80 hover:opacity-100"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary-dim/30 to-transparent mt-8"></div>
    </footer>
  );
};

export default Footer;
