
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none"></div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Ils me font <span className="gradient-text">Confiance</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          La satisfaction client est le moteur de ma rigueur technique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 1,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass p-10 rounded-[3rem] border border-white/5 relative group cursor-default"
          >
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <Quote className="w-12 h-12 text-blue-500/10 absolute top-10 right-10 group-hover:text-blue-500/30 transition-all" />
            <p className="text-slate-300 text-lg italic mb-10 leading-relaxed relative z-10">
              "{t.content}"
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-xl shadow-blue-500/20">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white text-lg">{t.name}</p>
                <p className="text-[10px] text-blue-400 uppercase font-black tracking-[0.2em]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
