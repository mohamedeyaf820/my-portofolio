
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter gradient-text">Parlons de vos projets</h2>
        <p className="text-slate-400 text-center max-w-xl mb-12">
          Que ce soit pour une opportunité professionnelle ou un projet technique, je suis à votre écoute.
        </p>
        
        <div className="flex gap-6 mb-12">
          <a href={PERSONAL_INFO.linkedin} target="_blank" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-all text-blue-400 border-white/5">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-all text-pink-400 border-white/5">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm mb-2">&copy; {new Date().getFullYear()} Mohamed Faye. Tous droits réservés.</p>
          <p className="text-slate-600 text-xs">Conçu avec React & Gemini AI • Dakar, Sénégal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
