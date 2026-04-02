import Header from './Header';
import Footer from './Footer';
import { motion } from 'motion/react';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  bgColor: string;
}

export default function Layout({ children, bgColor }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>
      <Header />
      
      {/* Marquee Section */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden whitespace-nowrap border-b border-black/10">
        <div className="inline-block animate-marquee font-bold text-sm uppercase tracking-wider">
          Welcome to Kaushik Caterers (since 1985) • Dehradun • PAN India Service • Quality & Taste Guaranteed • Welcome to Kaushik Caterers (since 1985) • Dehradun • PAN India Service • Quality & Taste Guaranteed • 
        </div>
      </div>

      {/* Blinking Dot Line in Golden Box */}
      <div className="bg-white py-2 px-6 flex items-center justify-center border-b border-gray-100">
        <div className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg flex items-center gap-3 text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-lg border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Event Planning & Catering Service since 1985
        </div>
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
