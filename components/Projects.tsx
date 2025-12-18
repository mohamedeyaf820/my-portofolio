
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Filter, Sparkles, X, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  
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
            Une sélection rigoureuse de mes travaux les plus emblématiques.
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
              onClick={() => setSelectedProject(project)}
              className="group glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl bg-slate-900/40 cursor-pointer"
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
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-blue-400" />
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl glass rounded-[3rem] border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-white z-20 hover:bg-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 relative bg-slate-900 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center overflow-y-auto">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{selectedProject.category}</span>
                <h3 className="text-4xl font-black mb-8 leading-tight">{selectedProject.title}</h3>
                
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex-1 py-4 bg-white text-black rounded-2xl font-black text-center hover:bg-blue-600 hover:text-white transition-all">VOIR LE PROJET</a>
                  <a href="#" className="flex-1 py-4 glass border-white/10 rounded-2xl font-black text-center hover:bg-white/10 transition-all">DOSSIER PDF</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
