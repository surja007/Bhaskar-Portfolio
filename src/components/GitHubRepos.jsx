import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GitHubRepos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/surja007/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-blue-600',
      Java: 'bg-red-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      React: 'bg-cyan-500',
      'C++': 'bg-pink-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-label text-sm uppercase tracking-widest text-primary">
            GitHub Activity
          </h2>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface-container-low border border-white/5 p-6 rounded-xl animate-pulse">
              <div className="h-6 bg-surface-container-high rounded mb-4"></div>
              <div className="h-12 bg-surface-container-high rounded mb-6"></div>
              <div className="h-4 bg-surface-container-high rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-label text-sm uppercase tracking-widest text-primary">
            GitHub Activity
          </h2>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="text-center text-on-surface-variant">
          <p>Unable to load GitHub repositories</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="font-label text-sm uppercase tracking-widest text-primary">
          GitHub Activity
        </h2>
        <div className="h-px flex-grow bg-outline-variant/30"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface-container-low border border-white/5 p-6 rounded-xl hover:shadow-[0_0_20px_rgba(163,166,255,0.1)] transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-xl">terminal</span>
              <h4 className="font-headline font-bold text-lg truncate group-hover:text-primary transition-colors">
                {repo.name}
              </h4>
            </div>

            <p className="text-xs text-on-surface-variant mb-6 h-12 overflow-hidden line-clamp-2">
              {repo.description || 'No description available'}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                    <span className="text-[10px] font-label uppercase">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="text-[10px] font-label">{repo.stargazers_count}</span>
                </div>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant">
                {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/surja007"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-outline-variant/30 text-primary font-label text-sm uppercase tracking-widest rounded-lg hover:bg-primary/5 transition-all"
        >
          View All Repositories
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubRepos;
