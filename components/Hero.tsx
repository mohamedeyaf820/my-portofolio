
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, MapPin, ChevronRight, Sparkles, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Dynamic Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orbit top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/30"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orbit bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/20"
      ></motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Innovateur de Solutions</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter">
            Architecte <br />
            <span className="gradient-text">Numérique</span>
          </h1>
          
          <p className="text-2xl text-slate-400 max-w-xl leading-relaxed font-medium">
            Moi, c'est <span className="text-white font-black underline decoration-blue-500 underline-offset-8">Mohamed Faye</span>. 
            Je fusionne rigueur mathématique et expertise IT pour bâtir le futur du numérique.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, x: 10 }}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-lg transition-all flex items-center gap-3 group shadow-2xl shadow-blue-600/40"
            >
              VOIR MES TRAVAUX
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 10 }}
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-blue-400 transition-colors border-white/10"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: -10 }}
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-pink-400 transition-colors border-white/10"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 pt-10 text-slate-500 text-xs font-black uppercase tracking-widest border-t border-white/5">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-3">
              <MonitorSmartphone className="w-4 h-4 text-purple-500" />
              Keur Massar, Cité Aïnoumady
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group lg:block hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full flex items-center justify-center animate-bounce duration-[3000ms] z-20">
            <Sparkles className="w-10 h-10 text-yellow-500" />
          </div>
          
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-[4rem] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative glass p-6 rounded-[3.5rem] border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Tech Portfolio"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl border-white/20 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-black text-blue-400 mb-2 uppercase tracking-[0.3em]">Signature Digitale</p>
                <h3 className="text-3xl font-black">Performance & Esthétique</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
