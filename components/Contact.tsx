
import React from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à <span className="text-blue-500">collaborer</span> ?</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Une urgence technique ? Un besoin en design ? Ou simplement envie d'échanger sur l'IA ? Contactez-moi directement.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-xl font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">WhatsApp / Tel</p>
                  <p className="text-xl font-bold">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Votre nom" 
                className="w-full glass border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full glass border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>
            <textarea 
              placeholder="Votre message..." 
              rows={5}
              className="w-full glass border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500/50 transition-all resize-none"
            ></textarea>
            <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-3">
              Envoyer le message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
