
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Services from './components/Services';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-white/10' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">MF</div>
            <span className={isScrolled ? 'opacity-100' : 'opacity-100'}>Mohamed<span className="text-blue-500">.</span></span>
          </div>
          
          <div className="hidden lg:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-all">Profil</a>
            <a href="#services" className="hover:text-blue-400 transition-all">Services</a>
            <a href="#projects" className="hover:text-blue-400 transition-all">Travaux</a>
            <a href="#skills" className="hover:text-blue-400 transition-all">Expertise</a>
            <a href="#contact" className="hover:text-blue-400 transition-all">Contact</a>
          </div>

          <a href="#contact" className="px-6 py-2.5 bg-white text-black text-sm font-black rounded-full hover:bg-blue-600 hover:text-white transition-all">
            Parlons-en
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Education />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
