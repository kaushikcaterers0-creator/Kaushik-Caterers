import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  bgColor: string;
}

export default function Layout({ children, bgColor }: LayoutProps) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCurtainOpen(true);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col ${bgColor} relative overflow-x-hidden`}>
      <AnimatePresence mode="wait">
        {!isCurtainOpen && (
          <div className="fixed inset-0 z-[100] flex pointer-events-none">
            {/* Left Curtain */}
            <motion.div 
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-red-900 pointer-events-auto border-r border-yellow-400/30"
            />
            {/* Right Curtain */}
            <motion.div 
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-red-900 pointer-events-auto border-l border-yellow-400/30"
            />
            {/* Logo Lock - Fades out independently with revolving dotted border */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-40 h-40 flex items-center justify-center"
            >
              {/* Revolving Dotted Border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dotted border-yellow-400 rounded-full"
              />
              <div className="w-32 h-32 rounded-full bg-white border-4 border-yellow-400 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.5)] relative z-10">
                <img 
                  src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
                  alt="Logo Lock" 
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </motion.div>
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

      {/* Excellence Box below Marquee */}
      <div className="bg-red-900 py-1 flex justify-center border-b border-yellow-400/20">
        <div className="inline-flex items-center gap-3 bg-white/10 text-white px-4 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/20 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          Excellance in services since 1985
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
        className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <img 
          src="https://i.ibb.co/84BWkwSv/whatsapp-app-round-icon-popular-messenger-social-media-logo-277909-873.avif" 
          alt="WhatsApp" 
          className="w-16 h-16 rounded-full shadow-2xl border-2 border-white"
          referrerPolicy="no-referrer"
        />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us
        </span>
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-8 z-50 bg-yellow-400 text-red-900 p-3 rounded-full shadow-2xl hover:bg-yellow-300 transition-colors flex items-center justify-center"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
