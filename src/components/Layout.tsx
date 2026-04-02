import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  bgColor: string;
}

export default function Layout({ children, bgColor }: LayoutProps) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCurtainOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${bgColor} relative overflow-x-hidden`}>
      <AnimatePresence>
        {!isCurtainOpen && (
          <div className="fixed inset-0 z-[100] flex pointer-events-none">
            {/* Left Curtain */}
            <motion.div 
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-red-900 pointer-events-auto flex justify-end items-center border-r border-yellow-400/30"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-yellow-400 translate-x-1/2 z-10 flex items-center justify-center shadow-2xl">
                <img 
                  src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
                  alt="Logo Lock" 
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            </motion.div>
            {/* Right Curtain */}
            <motion.div 
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-red-900 pointer-events-auto border-l border-yellow-400/30"
            />
          </div>
        )}
      </AnimatePresence>

      <Header />
      
      {/* Marquee Section */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden whitespace-nowrap border-b border-black/10">
        <div className="inline-block animate-marquee font-bold text-sm uppercase tracking-wider">
          Welcome to Kaushik Caterers (since 1985) • Dehradun • PAN India Service • Quality & Taste Guaranteed • Welcome to Kaushik Caterers (since 1985) • Dehradun • PAN India Service • Quality & Taste Guaranteed • 
        </div>
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.link/cjfkqp" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us
        </span>
      </a>
    </div>
  );
}
