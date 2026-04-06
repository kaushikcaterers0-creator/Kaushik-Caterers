import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Plus, Minus, RotateCcw } from 'lucide-react';
import { packageImages } from './data/extra-gallery';

function PackagesPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setZoomScale(1);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setZoomScale(1);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % packageImages.length);
      setZoomScale(1);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + packageImages.length) % packageImages.length);
      setZoomScale(1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.5, 1));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
  };

  return (
    <Layout bgColor="bg-slate-50">
      <div className="pt-8 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-red-400/5 blur-3xl rounded-full -z-10" />
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold uppercase tracking-widest mb-2"
          >
            Exclusive Deals
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Our Packages
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-red-600 mx-auto rounded-full mb-12"
          />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose from our curated selection of packages designed to make your event truly special and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {packageImages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-xl border border-white/10 bg-slate-800">
                <img 
                  src={pkg.url} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-yellow-400 text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl text-center group-hover:text-yellow-400 transition-colors">
                {pkg.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[220] p-2 bg-white/10 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[220] flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <button onClick={handleZoomOut} className="text-white hover:text-yellow-400 transition-colors">
                <Minus size={24} />
              </button>
              <span className="text-white font-mono min-w-[3rem] text-center">{Math.round(zoomScale * 100)}%</span>
              <button onClick={handleZoomIn} className="text-white hover:text-yellow-400 transition-colors">
                <Plus size={24} />
              </button>
              <div className="w-px h-6 bg-white/20 mx-2" />
              <button onClick={resetZoom} className="text-white hover:text-yellow-400 transition-colors">
                <RotateCcw size={20} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[210] p-4 bg-white/5 rounded-full hover:bg-white/10"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[210] p-4 bg-white/5 rounded-full hover:bg-white/10"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-auto scrollbar-hide">
                <motion.img 
                  animate={{ scale: zoomScale }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  src={packageImages[selectedIndex].url} 
                  alt={packageImages[selectedIndex].title} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                  referrerPolicy="no-referrer"
                  drag={zoomScale > 1}
                  dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                />
              </div>
              
              <div className="absolute bottom-24 text-center w-full px-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white text-xl md:text-2xl font-bold bg-black/60 backdrop-blur-md px-8 py-3 rounded-full border border-yellow-400/30 inline-block shadow-2xl"
                >
                  {packageImages[selectedIndex].title}
                </motion.h3>
                <p className="text-white/50 text-sm mt-2 font-medium tracking-widest uppercase">
                  Image {selectedIndex + 1} of {packageImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<PackagesPage />);
}
