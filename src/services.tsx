import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Utensils, Music, Calendar, Star, Heart, PartyPopper } from 'lucide-react';

const serviceCards = [
  {
    title: "Catering Services",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    description: "Premium catering for all occasions with a focus on taste and hygiene."
  },
  {
    title: "Parties",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    description: "From birthdays to kitty parties, we make every celebration special."
  },
  {
    title: "Wedding/Anniversary",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    description: "Grand celebrations with exquisite decor and royal catering."
  },
  {
    title: "Decoration/Arrangements",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
    description: "Stunning floral and theme-based decorations for your events."
  },
  {
    title: "Bhandara",
    image: "https://i.ibb.co/93nrJLcD/Whats-App-Image-2026-04-02-at-09-55-35.jpg",
    description: "Traditional large-scale community feast catering with purity."
  },
  {
    title: "Music DJ",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop",
    description: "High-energy DJ and sound systems to keep the party going."
  },
  {
    title: "Get Together",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description: "Perfect arrangements for family and social gatherings."
  }
];

const checklistServices = [
  "DJ",
  "Venue Selection",
  "Live Music",
  "Decorator",
  "Live Performances",
  "Book Appointment"
];

function ServicesPage() {
  return (
    <Layout bgColor="bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-red-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 leading-relaxed"
          >
            Since 1985, Kaushik Caterers has been providing top-notch catering and event planning services across India.
          </motion.p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCards.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-3 group-hover:text-red-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features & Specialties */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Checklist */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8 flex items-center gap-3">
              <Star className="text-yellow-500" /> Premium Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {checklistServices.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:bg-red-50 transition-colors"
                >
                  <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                  <span className="font-bold text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Specialties */}
          <div className="space-y-12">
            {/* Staff */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group"
            >
              <Users className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-yellow-400" /> Professional Staff
              </h3>
              <p className="text-lg opacity-90">We provide both <strong>Male and Female Staff</strong>, trained to deliver impeccable service with a smile.</p>
            </motion.div>

            {/* Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-400 p-8 rounded-3xl shadow-xl"
              >
                <Utensils className="text-red-900 mb-4" size={32} />
                <h3 className="text-xl font-bold text-red-900 mb-2">Caterer Specialties</h3>
                <p className="text-red-900/80 font-medium">Our signature <strong>Biryani</strong> is a crowd favorite, prepared with authentic spices and premium rice.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl"
              >
                <PartyPopper className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Catering Offerings</h3>
                <p className="opacity-80">Experience the freshness with our <strong>Live Catering Service</strong> available for all types of events.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-red-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-xl opacity-80 mb-10">Let us handle the details while you enjoy your special moments.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact.html" className="bg-yellow-400 text-red-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl">
              Book Appointment
            </a>
            <a href="/ai-planner.html" className="bg-white/10 backdrop-blur-md border border-white/30 px-12 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Plan with AI
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<ServicesPage />);
}
