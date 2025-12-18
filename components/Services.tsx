
import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-slate-950/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            Mes Offres
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Solutions <span className="gradient-text">Premium</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Une approche centrée sur la performance technique et l'expérience utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[3rem] border-white/5 hover:border-blue-500/30 transition-all flex flex-col group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3 ${
                service.color === 'blue' ? 'bg-blue-600 shadow-blue-500/20' : 
                service.color === 'purple' ? 'bg-purple-600 shadow-purple-500/20' : 
                'bg-pink-600 shadow-pink-500/20'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-2">{service.title}</h3>
              <p className="text-blue-400 font-bold mb-8 uppercase text-xs tracking-widest">{service.price}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold text-sm group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2">
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass p-16 rounded-[4rem] border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <h3 className="text-4xl font-bold mb-8 tracking-tight">Mon <span className="text-blue-500">Processus</span> de Travail</h3>
               <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                 Chaque projet est une équation que je résous avec méthode et créativité. De l'audit initial à l'optimisation finale.
               </p>
               <div className="flex items-center gap-4 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20">
                 <ShieldCheck className="w-10 h-10 text-blue-500" />
                 <div>
                   <p className="font-bold">Garantie Qualité</p>
                   <p className="text-xs text-slate-400">Support technique inclus pendant 3 mois.</p>
                 </div>
               </div>
             </div>
             <div className="space-y-6">
               {PROCESS_STEPS.map((step, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="text-4xl font-black text-white/10 group-hover:text-blue-500/30 transition-colors">{step.step}</div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                     <p className="text-sm text-slate-400 font-light">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
