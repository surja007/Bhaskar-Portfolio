import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const RATE_LIMIT_MS = 60000; // 1 minute between submissions

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Bot detection
    if (honeypot) return;

    // Rate limiting - prevent spam
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    if (timeSinceLastSubmit < RATE_LIMIT_MS) {
      const waitTime = Math.ceil((RATE_LIMIT_MS - timeSinceLastSubmit) / 1000);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: `Please wait ${waitTime} seconds before sending another message.`,
      });
      return;
    }
    
    setStatus({ loading: true, success: false, error: false, message: '' });

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log if variables are missing (only shows in browser console, not exposed to users)
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing:', {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey
      });
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Email configuration error. Please contact directly via email.',
      });
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you shortly.',
      });

      setLastSubmitTime(now);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email directly.',
      });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32"
      >
        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-[0.9] mb-8">
            Let's Build <br />
            <span className="bg-gradient-to-r from-primary to-primary-dim bg-clip-text text-transparent italic">
              Together.
            </span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
            Exploring the intersection of AI, robust architectures, and intuitive mobile
            experiences. Currently open for collaborations and high-impact engineering roles.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-end text-right">
          <div className="bg-surface-container-low p-8 rounded-xl w-full border-l-4 border-primary">
            <span className="font-label text-primary text-sm uppercase tracking-widest block mb-2">
              Location
            </span>
            <p className="text-2xl font-headline font-semibold">Ranchi, Jharkhand</p>
            <p className="text-on-surface-variant mt-2">Available for Global Remote Work</p>
            <div className="mt-6 flex justify-end gap-4">
              <span className="material-symbols-outlined text-primary-dim">location_on</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-12">
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Contact
            </h2>
            <h3 className="text-4xl font-headline font-bold">Get In Touch</h3>
          </div>

          <div className="glass-card p-10 rounded-xl transition-all border border-outline-variant/10 hover:shadow-[0_0_30px_rgba(163,166,255,0.15)]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              <div className="relative group">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength="100"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 text-on-surface placeholder:text-zinc-700 transition-all"
                  placeholder="John Doe"
                />
                <span className="absolute right-0 bottom-4 material-symbols-outlined text-zinc-700 group-focus-within:text-primary text-sm">
                  person
                </span>
              </div>

              <div className="relative group">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength="100"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 text-on-surface placeholder:text-zinc-700 transition-all"
                  placeholder="john@example.com"
                />
                <span className="absolute right-0 bottom-4 material-symbols-outlined text-zinc-700 group-focus-within:text-primary text-sm">
                  alternate_email
                </span>
              </div>

              <div className="relative group">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength="1000"
                  rows="4"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 text-on-surface placeholder:text-zinc-700 transition-all resize-none"
                  placeholder="Briefly describe your project or inquiry..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="font-label text-[10px] text-on-surface-variant/60 uppercase leading-tight max-w-[200px]">
                  Rate limited: 1 message per minute
                </p>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-bold py-4 px-10 rounded-md hover:shadow-[0_0_20px_rgba(163,166,255,0.4)] transition-all active:scale-95 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>

              {/* Status Messages */}
              {status.success && (
                <div className="p-4 bg-surface-container-high border-l-4 border-primary mt-6">
                  <p className="text-primary font-label text-sm uppercase">{status.message}</p>
                </div>
              )}

              {status.error && (
                <div className="p-4 bg-surface-container-high border-l-4 border-error mt-6">
                  <p className="text-error font-label text-sm uppercase">{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-12">
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Direct Contact
            </h2>
            <h3 className="text-4xl font-headline font-bold">Reach Out</h3>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-primary">email</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Email
                </span>
              </div>
              <a
                href="mailto:surjagaming0@gmail.com"
                className="text-lg text-on-surface hover:text-primary transition-colors"
              >
                surjagaming0@gmail.com
              </a>
            </div>

            <div className="glass-card p-6 rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-primary">link</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  LinkedIn
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/bhaskar-talukder-0714792a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-on-surface hover:text-primary transition-colors"
              >
                linkedin.com/in/bhaskar-talukder
              </a>
            </div>

            <div className="glass-card p-6 rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  GitHub
                </span>
              </div>
              <a
                href="https://github.com/surja007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-on-surface hover:text-primary transition-colors"
              >
                github.com/surja007
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Contact;
