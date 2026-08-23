import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const ActivityTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activities, setActivities] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        // Fetch recent events
        const eventsResponse = await fetch('https://api.github.com/users/surja007/events/public?per_page=10');
        const events = await eventsResponse.json();

        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/surja007');
        const userData = await userResponse.json();

        // Process events into timeline activities
        const processedActivities = events.map(event => {
          const date = new Date(event.created_at);
          let action = '';
          let icon = 'commit';
          let color = 'primary';

          switch (event.type) {
            case 'PushEvent':
              action = `Pushed ${event.payload.commits?.length || 0} commit${event.payload.commits?.length !== 1 ? 's' : ''} to ${event.repo.name}`;
              icon = 'upload';
              color = 'primary';
              break;
            case 'CreateEvent':
              action = `Created ${event.payload.ref_type} in ${event.repo.name}`;
              icon = 'add_circle';
              color = 'secondary';
              break;
            case 'PullRequestEvent':
              action = `${event.payload.action} pull request in ${event.repo.name}`;
              icon = 'merge';
              color = 'tertiary';
              break;
            case 'IssuesEvent':
              action = `${event.payload.action} issue in ${event.repo.name}`;
              icon = 'bug_report';
              color = 'error';
              break;
            case 'WatchEvent':
              action = `Starred ${event.repo.name}`;
              icon = 'star';
              color = 'primary-dim';
              break;
            case 'ForkEvent':
              action = `Forked ${event.repo.name}`;
              icon = 'fork_right';
              color = 'secondary';
              break;
            default:
              action = `Activity in ${event.repo.name}`;
              icon = 'code';
              color = 'primary';
          }

          return {
            id: event.id,
            action,
            icon,
            color,
            date,
            repo: event.repo.name,
            type: event.type
          };
        });

        setActivities(processedActivities);
        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          gists: userData.public_gists
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    return Math.floor(seconds) + ' seconds ago';
  };

  if (loading) {
    return (
      <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-label text-sm uppercase tracking-widest text-primary">
            Activity Timeline
          </h2>
          <div className="h-px flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="glass-card p-8 rounded-xl animate-pulse">
          <div className="h-8 bg-surface-container-high rounded mb-4 w-1/3"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-surface-container-high rounded"></div>
            ))}
          </div>
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
          Activity Timeline
        </h2>
        <div className="h-px flex-grow bg-outline-variant/30"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1 space-y-4"
        >
          <div className="glass-card p-6 rounded-xl border border-outline-variant/10">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              GitHub Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">folder</span>
                  <span className="text-sm text-on-surface-variant">Repositories</span>
                </div>
                <span className="text-2xl font-headline font-bold text-primary">
                  {stats?.repos || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl">group</span>
                  <span className="text-sm text-on-surface-variant">Followers</span>
                </div>
                <span className="text-2xl font-headline font-bold text-secondary">
                  {stats?.followers || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl">person_add</span>
                  <span className="text-sm text-on-surface-variant">Following</span>
                </div>
                <span className="text-2xl font-headline font-bold text-tertiary">
                  {stats?.following || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Contribution Streak */}
          <div className="glass-card p-6 rounded-xl border border-outline-variant/10">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
              Contribution Graph
            </h3>
            <div className="text-center py-6">
              <div className="text-5xl font-headline font-bold text-primary mb-2">
                {activities.length}
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Recent Activities
              </div>
            </div>
            <a
              href="https://github.com/surja007"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center px-4 py-2 border border-outline-variant/30 text-primary font-label text-xs uppercase tracking-widest rounded-lg hover:bg-primary/5 transition-all"
            >
              View Full Profile
            </a>
          </div>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-8 rounded-xl border border-outline-variant/10">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              Recent Activity
            </h3>
            
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-outline-variant/20"></div>

              {activities.length === 0 ? (
                <div className="text-center py-8 text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50">code_off</span>
                  <p>No recent activity</p>
                </div>
              ) : (
                activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="relative flex gap-4 group"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-${activity.color} group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-xl">{activity.icon}</span>
                    </div>

                    {/* Activity Content */}
                    <div className="flex-1 pb-6">
                      <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/10 hover:border-primary/20 transition-all">
                        <p className="text-sm text-on-surface mb-2 leading-relaxed">
                          {activity.action}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-on-surface-variant font-label">
                            {getTimeAgo(activity.date)}
                          </span>
                          <span className={`px-2 py-1 rounded-full bg-surface-container-highest text-${activity.color} font-label text-[8px] uppercase tracking-wider`}>
                            {activity.type.replace('Event', '')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {activities.length > 0 && (
              <div className="mt-6 text-center">
                <a
                  href={`https://github.com/surja007?tab=activity`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dim transition-colors font-label text-xs uppercase tracking-widest"
                >
                  View All Activity
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* GitHub Contribution Heatmap Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 glass-card p-8 rounded-xl border border-outline-variant/10 overflow-hidden"
      >
        <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
          Contribution Graph
        </h3>
        <div className="bg-surface-container-low rounded-lg p-4 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/a3a6ff/surja007"
            alt="GitHub Contribution Graph"
            className="w-full opacity-80 hover:opacity-100 transition-opacity"
            style={{ minWidth: '800px' }}
          />
        </div>
        <p className="text-xs text-on-surface-variant text-center mt-4 font-label uppercase tracking-wider">
          Powered by GitHub API
        </p>
      </motion.div>
    </section>
  );
};

export default ActivityTimeline;
