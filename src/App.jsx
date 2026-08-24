import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GitHubRepos from './components/GitHubRepos';
import ActivityTimeline from './components/ActivityTimeline';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Achievements />
      <Projects />
      <GitHubRepos />
      <ActivityTimeline />
      <Experience />
      <Education />
      <Certifications />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
