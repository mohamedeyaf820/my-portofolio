
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, MapPin, ChevronRight, Sparkles, MonitorSmartphone, MousePointer2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-300, 300], [10, -10]);
  const rotateY = useTransform(dx, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#020617]">
      {/* Dynamic Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orbit top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.4, 1, 1.4],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orbit bottom-1/4 -right-20 w-[700px] h-[700px] bg-purple-600/20"
      ></motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Disponible pour de nouveaux défis</span>
          </motion.div>

          <h1 className="text-7xl md:text-[110px] font-black leading-[0.8] tracking-tighter text-white">
            Vision<br />
            <span className="gradient-text italic font-medium tracking-normal">Digitale</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            Expert en <span className="text-white font-bold">Solutions IT</span> & <span className="text-white font-bold">IA</span>. 
            Je transforme des concepts abstraits en infrastructures concrètes et designs mémorables.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black rounded-full font-black text-lg transition-all flex items-center gap-3 shadow-2xl shadow-white/10"
            >
              DÉCOUVRIR MES PROJETS
              <ChevronRight className="w-6 h-6" />
            </motion.a>
            
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all border-white/5"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: -5, backgroundColor: 'rgba(244, 114, 182, 0.1)' }}
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all border-white/5"
              >
                <Mail className="w-7 h-7" />
              </motion.a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 pt-10 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-t border-white/5">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-500" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2.5">
              <MonitorSmartphone className="w-4 h-4 text-purple-500" />
              IT & IA Spécialiste
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group lg:block hidden"
        >
          {/* Decorative Floating Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-44 h-44 glass rounded-3xl flex flex-col items-center justify-center z-20 border-white/20 shadow-2xl backdrop-blur-xl"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-blue-500/50">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Innovation</p>
            <p className="text-xl font-bold">IA Ready</p>
          </motion.div>
          
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600 to-pink-600 rounded-[4rem] blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative glass p-4 rounded-[4rem] border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-900">
               <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Tech Workspace"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-6 rounded-[2rem] border-white/20 backdrop-blur-2xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-black mb-1">Architecture de Demain</h3>
                  <p className="text-xs text-slate-300 font-medium">Design & Performance sans compromis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Dots */}
          <div className="absolute top-1/4 -left-6 flex flex-col gap-3">
             {[1,2,3].map(i => (
               <div key={i} className={`w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse`} style={{ animationDelay: `${i*0.5}s` }}></div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
