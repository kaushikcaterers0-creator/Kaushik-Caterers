import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, RefreshCcw } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIPlanner() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: "You are an expert event planner for Kaushik Caterers. Your goal is to help users plan their events (weddings, birthdays, corporate parties, etc.). Provide creative ideas for catering, decor, and scheduling. Be professional, helpful, and enthusiastic. Mention that Kaushik Caterers can handle all these aspects.",
        },
      });

      const modelText = response.text || "I'm sorry, I couldn't generate a plan right now. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Planner Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error: Unable to connect to the AI service. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-red-600 p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Sparkles size={24} className="text-yellow-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">AI Event Planner</h3>
            <p className="text-xs opacity-80">Powered by Kaushik Caterers Intelligence</p>
          </div>
        </div>
        <button 
          onClick={resetChat}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title="Reset Chat"
        >
          <RefreshCcw size={20} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50"
      >
        {messages.length === 0 && (
          <div className="text-center py-12 space-y-4">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Bot size={32} className="text-red-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Let's plan your perfect event!</h4>
            <p className="text-slate-600 max-w-xs mx-auto">
              Tell me what kind of event you're planning, the number of guests, and any specific themes or cuisines you're interested in.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-red-600 text-white' : 'bg-white border border-red-100 text-red-600'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-red-50 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-red-50 shadow-sm">
              <Loader2 size={16} className="animate-spin text-red-600" />
              <span className="text-sm text-slate-500">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-red-50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your event (e.g., Wedding for 500 guests...)"
            className="w-full bg-slate-50 border border-red-100 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-900"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          AI can make mistakes. Please verify important details with our team.
        </p>
      </div>
    </div>
  );
}
