import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Trash2, Copy, Bot, User, Sparkles } from 'lucide-react';

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
  const [eventType, setEventType] = useState('Wedding');
  const [otherEventType, setOtherEventType] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Only scroll if we have more than the initial message
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    try {
      const response = await fetch("/api/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `You are an expert event planner for Kaushik Caterers (since 1985, based in Dehradun). Help the user plan their event. Mention our specialties like Biryani, live catering, and professional staff if relevant. User says: ${userMessage}`,
          systemInstruction: "You are a helpful, professional, and creative event planner for Kaushik Caterers. Your goal is to help users plan their events (weddings, birthdays, corporate, etc.) by providing catering and decor ideas. Keep responses concise and engaging.",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to AI server");
      }

      const data = await response.json();
      const aiResponse = data.text;
      
      if (!aiResponse) throw new Error("Empty response from AI");
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
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-4 bg-yellow-400 rounded-full mb-6 shadow-[0_0_40px_rgba(250,204,21,0.5)]"
          >
            <Sparkles className="text-slate-900" size={40} />
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-4">AI Event Planner</h2>
          <p className="text-slate-400 text-xl">Plan your dream event with our intelligent assistant</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden h-[700px] mb-20">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-yellow-400 overflow-hidden">
                <img 
                  src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
                  alt="Kaushik Caterers" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Kaushik Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-3 text-slate-400 hover:text-red-400 transition-colors rounded-xl hover:bg-white/5"
              title="Clear Chat"
            >
              <Trash2 size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-yellow-400' : 'bg-red-600'}`}>
                    {msg.role === 'user' ? <User size={20} className="text-slate-900" /> : <Bot size={20} className="text-white" />}
                  </div>
                  <div className="space-y-3">
                    <div className={`p-5 rounded-2xl text-base leading-relaxed shadow-lg ${
                      msg.role === 'user' 
                        ? 'bg-yellow-400 text-slate-900 rounded-tr-none' 
                        : 'bg-slate-800 text-slate-100 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <button 
                        onClick={() => copyToClipboard(msg.content)}
                        className="text-xs text-slate-500 hover:text-yellow-400 flex items-center gap-1.5 transition-colors uppercase font-bold tracking-widest"
                      >
                        <Copy size={12} /> Copy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-5 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your event..."
                className="w-full bg-slate-800 border border-white/10 text-white rounded-2xl py-5 pl-8 pr-16 text-lg focus:outline-none focus:border-yellow-400/50 transition-all placeholder:text-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-yellow-400 text-slate-900 rounded-xl hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:hover:bg-yellow-400"
              >
                <Send size={24} />
              </button>
            </div>
            <p className="text-xs text-slate-500 text-center mt-4 uppercase tracking-widest font-bold">
              Powered by Gemini
            </p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="bg-red-900 p-10 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Book Your Event</h3>
              <p className="text-white/70 text-lg">Fill out the form below and we'll get back to you shortly</p>
            </div>
            
            <form 
              action="https://formspree.io/f/mvzvrkzg" 
              method="POST"
              className="p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required
                    name="Name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    required
                    name="Phone"
                    type="tel" 
                    placeholder="+91 0000000000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  name="Email"
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Event Type</label>
                  <select 
                    name="EventType"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Religious">Religious</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {eventType === 'Other' && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Specify Event</label>
                    <input 
                      required
                      name="OtherEventType"
                      type="text" 
                      value={otherEventType}
                      onChange={(e) => setOtherEventType(e.target.value)}
                      placeholder="Please specify..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Approx Persons</label>
                  <input 
                    name="Persons"
                    type="number" 
                    placeholder="100"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="Message"
                  rows={4}
                  placeholder="Tell us more about your event requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-900/30 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-900 text-white py-5 rounded-[2rem] font-bold text-xl hover:bg-red-800 transition-all shadow-2xl shadow-red-900/20"
              >
                Send Enquiry
              </button>
            </form>
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
