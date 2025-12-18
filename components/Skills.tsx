
import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Cpu, Layout, Workflow, Sparkles } from 'lucide-react';

const TECH_LIST = [
  "React", "Tailwind CSS", "TypeScript", "Node.js", "Python", 
  "Adobe Suite", "Final Cut Pro", "Linux", "Docker", "Git", "LLMs", "Gemini"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-500/20"
          >
            <Cpu className="w-3.5 h-3.5" />
            Compétences Techniques
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Maîtrise de l'<span className="gradient-text">Écosystème</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
            Un mix stratégique entre rigueur mathématique, ingénierie logicielle et créativité visuelle.
          </p>
        </div>

        {/* Tech Marquee */}
        <div className="mb-24 py-10 border-y border-white/5 bg-white/[0.01]">
          <div className="marquee">
            <div className="marquee-content">
              {[...TECH_LIST, ...TECH_LIST].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 text-2xl font-black text-slate-600 hover:text-blue-500 transition-colors cursor-default whitespace-nowrap">
                  <Sparkles className="w-5 h-5 opacity-30" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                {skill.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Expertise Avancée</span>
                 <Workflow className="w-4 h-4 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
