
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Expertise <span className="text-blue-500">Technique</span></h2>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Une approche multidisciplinaire alliant hardware, software et intelligence artificielle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <div key={index} className="glass-effect p-8 rounded-3xl group hover:border-blue-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
