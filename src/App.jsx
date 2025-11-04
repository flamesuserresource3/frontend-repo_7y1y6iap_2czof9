import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import SkillsServices from './components/SkillsServices';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
        {/* Theme toggle */}
        <button
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          onClick={() => setIsDark((v) => !v)}
          className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-sm text-gray-800 shadow-lg backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/60 dark:text-gray-100"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:block">{isDark ? 'Light' : 'Dark'}</span>
        </button>

        <Hero />
        <SkillsServices />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
