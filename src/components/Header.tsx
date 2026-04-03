import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#000080] text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
            alt="Kaushik Caterers Logo" 
            className="h-12 w-12 rounded-full border-2 border-white object-cover"
            referrerPolicy="no-referrer"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Kaushik Caterers</h1>
            <p className="text-[10px] opacity-80 uppercase tracking-widest">Since 1985 • Event Planner</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="/services.html" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="/gallery.html" className="hover:text-yellow-400 transition-colors">Gallery</a>
          <a href="/ai-planner.html" className="hover:text-yellow-400 transition-colors">AI Planner</a>
          <a href="/about.html" className="hover:text-yellow-400 transition-colors">About Us</a>
          <a href="/contact.html" className="hover:text-yellow-400 transition-colors">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-white/10 pt-4">
          <a href="/" className="hover:text-yellow-400 transition-colors px-2">Home</a>
          <a href="/services.html" className="hover:text-yellow-400 transition-colors px-2">Services</a>
          <a href="/gallery.html" className="hover:text-yellow-400 transition-colors px-2">Gallery</a>
          <a href="/ai-planner.html" className="hover:text-yellow-400 transition-colors px-2">AI Planner</a>
          <a href="/about.html" className="hover:text-yellow-400 transition-colors px-2">About Us</a>
          <a href="/contact.html" className="hover:text-yellow-400 transition-colors px-2">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
