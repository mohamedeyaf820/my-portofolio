
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatWithMohamed } from '../geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant virtuel de Mohamed. Posez-moi une question sur ses compétences ou son parcours." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithMohamed(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-[90vw] md:w-96 glass-effect border border-white/10 rounded-3xl shadow-2xl flex flex-col z-50 transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ maxHeight: '600px', height: '80vh' }}>
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm">Assistant de Mohamed</p>
              <p className="text-[10px] text-blue-400 font-medium">En ligne • IA</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'glass-effect text-slate-300 rounded-tl-none border border-white/5'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-effect p-3 rounded-2xl rounded-tl-none border border-white/5">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez une question..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-blue-500 transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
