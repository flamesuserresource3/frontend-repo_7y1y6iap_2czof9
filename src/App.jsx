import React from 'react';
import Hero from './components/Hero';
import SkillsServices from './components/SkillsServices';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <SkillsServices />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
