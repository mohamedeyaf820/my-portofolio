
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Filter, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const categories = ['Tous', 'Maintenance', 'Infographie', 'IA', 'Développement'];

  const filteredProjects = activeFilter === 'Tous' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Galerie de <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Une sélection rigoureuse de mes travaux les plus emblématiques, 
            triés par domaine d'expertise technique.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl border border-white/5 shadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 translate-y-[-2px]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl bg-slate-900/40"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn cursor-pointer">
                    Découvrir
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-blue-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
