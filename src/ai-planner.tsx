import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Trash2, Copy, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'ai';
  content: string;
}

function AIPlannerPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hello! I'm your AI Event Planner from Kaushik Caterers. How can I help you plan your special occasion today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are an expert event planner for Kaushik Caterers (since 1985, based in Dehradun). Help the user plan their event. Mention our specialties like Biryani, live catering, and professional staff if relevant. User says: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a helpful, professional, and creative event planner for Kaushik Caterers. Your goal is to help users plan their events (weddings, birthdays, corporate, etc.) by providing catering and decor ideas. Keep responses concise and engaging.",
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearChat = () => {
    setMessages([{ role: 'ai', content: "Chat cleared. How else can I help you plan your event?" }]);
  };

  return (
    <Layout bgColor="bg-slate-950">
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto h-[calc(100vh-80px)] flex flex-col">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-3 bg-yellow-400 rounded-full mb-4 shadow-[0_0_30px_rgba(250,204,21,0.4)]"
          >
            <Sparkles className="text-slate-900" size={32} />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-2">AI Event Planner</h2>
          <p className="text-slate-400">Plan your dream event with our intelligent assistant</p>
        </div>

        <div className="flex-grow bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 border-2 border-yellow-400 overflow-hidden">
                <img 
                  src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
                  alt="Kaushik Caterers" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Kaushik Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-2 text-slate-400 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5"
              title="Clear Chat"
            >
              <Trash2 size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-yellow-400' : 'bg-red-600'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-slate-900" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className="space-y-2">
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                      msg.role === 'user' 
                        ? 'bg-yellow-400 text-slate-900 rounded-tr-none' 
                        : 'bg-slate-800 text-slate-100 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <button 
                        onClick={() => copyToClipboard(msg.content)}
                        className="text-[10px] text-slate-500 hover:text-yellow-400 flex items-center gap-1 transition-colors uppercase font-bold tracking-widest"
                      >
                        <Copy size={10} /> Copy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your event..."
                className="w-full bg-slate-800 border border-white/10 text-white rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-yellow-400/50 transition-all placeholder:text-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-yellow-400 text-slate-900 rounded-xl hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:hover:bg-yellow-400"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-3 uppercase tracking-widest font-bold">
              Powered by Kaushik AI • Since 1985
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<AIPlannerPage />);
}
