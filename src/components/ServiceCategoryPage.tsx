import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, X, MessageSquare } from 'lucide-react';

interface SubService {
  title: string;
  image: string;
  description: string;
}

interface ServiceCategoryPageProps {
  title: string;
  description: string;
  services: SubService[];
}

export default function ServiceCategoryPage({ title, description, services }: ServiceCategoryPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [cateringType, setCateringType] = useState(title);
  const [otherCateringType, setOtherCateringType] = useState('');

  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <Layout bgColor="bg-yellow-400">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <a 
            href="/services.html" 
            className="inline-flex items-center gap-2 text-red-900 font-bold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} /> Back to Services
          </a>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-red-900 mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-900/80 max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-red-900/10 group hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <h3 className="text-xl font-bold text-red-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={() => openModal(service.title)}
                  className="w-full bg-red-900 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} /> Enquiry Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="bg-red-900 p-8 text-white relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-6 top-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="text-3xl font-bold mb-2">Enquiry Form</h3>
                <p className="text-white/70">Interested in: <span className="text-yellow-400 font-bold">{selectedService}</span></p>
              </div>
              
              <form 
                action="https://formspree.io/f/xjgpovpe" 
                method="POST"
                className="p-8 space-y-4"
              >
                <input type="hidden" name="Service" value={selectedService} />
                <input type="hidden" name="Category" value={title} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      name="Name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required
                      name="Phone"
                      type="tel" 
                      placeholder="+91 0000000000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required
                    name="Email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Catering Type</label>
                    <select 
                      name="CateringType"
                      value={cateringType}
                      onChange={(e) => setCateringType(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                    >
                      <option value={title}>{title}</option>
                      <option value="Buffet">Buffet</option>
                      <option value="Live Counter">Live Counter</option>
                      <option value="Packed Meals">Packed Meals</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {cateringType === 'Other' && (
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Specify Type</label>
                      <input 
                        required
                        name="OtherCateringType"
                        type="text" 
                        value={otherCateringType}
                        onChange={(e) => setOtherCateringType(e.target.value)}
                        placeholder="Please specify..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Approx Persons</label>
                    <input 
                      name="Persons"
                      type="number" 
                      placeholder="50"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Description</label>
                  <textarea 
                    name="Message"
                    rows={3}
                    placeholder="Tell us more about your event..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-red-900/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-800 transition-all shadow-xl shadow-red-900/20"
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
