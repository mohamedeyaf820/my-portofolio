
import React from 'react';
import { EDUCATION, EXPERIENCES } from '../constants';
import { GraduationCap, Briefcase, FileDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-slate-950/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: Bio & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/20">
              <CheckCircle2 className="w-3 h-3" />
              Profil Vérifié
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              L'excellence <br />
              <span className="gradient-text">Analytique</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-xl">
              Diplômé en <span className="text-white font-bold">Mathématiques</span>, je transpose la rigueur des nombres dans la flexibilité du code. Mon parcours atypique me permet de concevoir des solutions informatiques robustes, scalables et esthétiques.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="glass p-6 rounded-[2rem] border-white/5 group hover:bg-blue-500/5 transition-all">
                <p className="text-4xl font-black text-blue-500 mb-1">99%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Rigueur & Logique</p>
              </div>
              <div className="glass p-6 rounded-[2rem] border-white/5 group hover:bg-purple-500/5 transition-all">
                <p className="text-4xl font-black text-purple-500 mb-1">IA+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Expertise Prompting</p>
              </div>
            </div>

            {/* CV Download Button - Enhanced Design */}
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.preventDefault(); alert('Le CV PDF est en cours de génération... Merci de votre patience !'); }}
              className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-[2rem] font-black text-lg hover:shadow-2xl hover:shadow-blue-600/40 transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileDown className="w-6 h-6 animate-bounce" />
              TÉLÉCHARGER MON CV (PDF)
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Timeline Grid */}
          <div className="space-y-16">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-slate-300">Expériences Pro</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
                {EXPERIENCES.map((exp, index) => (
                  <div key={index} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-[46px] h-[46px] rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all z-10">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all border border-white/5">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black mb-3 inline-block">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-slate-200 text-sm font-medium mb-4">{exp.company}</p>
                      <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-purple-500 shadow-inner">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-slate-300">Formation</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-[46px] h-[46px] rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all z-10">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <div className="glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all border border-white/5">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black mb-3 inline-block">
                        {edu.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-slate-200 text-sm font-medium mb-4">{edu.school}</p>
                      <p className="text-slate-400 leading-relaxed text-sm">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
