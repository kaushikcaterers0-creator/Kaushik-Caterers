import Layout from './components/Layout';
import { motion } from 'motion/react';
import { Utensils, Award, Users, Calendar, Star, Quote, ArrowRight, Camera } from 'lucide-react';
import { galleryImages } from './data/gallery';

// Select 4 random images for highlights
const galleryHighlights = galleryImages.slice(0, 4);

const homeServices = [
  {
    title: "Birthday Parties",
    description: "Make your special day unforgettable with our vibrant catering and decor.",
    image: "https://i.ibb.co/fVx9rdpj/Whats-App-Image-2026-04-02-at-09-44-20-1.jpg"
  },
  {
    title: "Kitty Parties",
    description: "Elegant and fun setups for your social gatherings.",
    image: "https://i.ibb.co/tpKK2m3C/Whats-App-Image-2026-04-02-at-09-44-52.jpg"
  },
  {
    title: "Corporate/School Parties",
    description: "Professional catering and planning for formal events.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Anniversary",
    description: "Celebrate years of togetherness with premium service.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Wedding",
    description: "Grand wedding planning and catering for your big day.",
    image: "https://i.ibb.co/1fS5nMrk/Whats-App-Image-2026-04-02-at-09-46-57-2.jpg"
  },
  {
    title: "Bhandara",
    description: "Traditional large-scale community feast catering.",
    image: "https://i.ibb.co/93nrJLcD/Whats-App-Image-2026-04-02-at-09-55-35.jpg"
  }
];

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Local Resident",
    text: "Kaushik Caterers is a great place! The food is fresh and very tasty. You get good quantity for a reasonable price. It's child-friendly, so families will love it. The ambience is nice and welcoming.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Priya Verma",
    role: "Corporate Client",
    text: "We had an office party catered by Kaushik Caterers, and it was flawless from start to end. The staff was professional, the setup was neat, and the biryani had everyone going for seconds!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Rahul Kapoor",
    role: "Groom",
    text: "Kaushik Caterers never fails to impress—booked them for our wedding and they delivered beyond expectations. Clean presentation, flavorful dishes, and live catering were spot on.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Anjali Gupta",
    role: "Home Maker",
    text: "The best catering service in Dehradun. Their attention to detail and authentic flavors are unmatched. Highly recommended for any family function!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <Layout bgColor="bg-red-700">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-0 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" 
            alt="Banquet Hall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Status Line inside Hero - Above Title */}
          <div className="inline-flex items-center gap-3 bg-[#D4AF37] text-white px-6 py-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-xl border border-white/20 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            High-Quality premium service
          </div>

          <h2 className="text-5xl md:text-8xl font-bold mb-2 drop-shadow-2xl leading-tight">Crafting Moments<br />That Last Forever</h2>
          <p className="text-lg md:text-2xl mb-4 opacity-90 font-medium max-w-3xl mx-auto leading-relaxed">
            Since 1985, we've been the heart of celebrations in Dehradun and across India. 
            Exquisite taste, impeccable service, and 41+ years of trust.
          </p>

          {/* Customer Rating */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-white font-bold text-xl">4.9/5</p>
            <p className="text-xs uppercase tracking-widest opacity-70 font-bold">Customer Rating</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact.html" className="bg-yellow-400 text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl transform hover:scale-105">
              Plan Your Event
            </a>
            <a href="/services.html" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <img 
            src="https://i.ibb.co/HpgBBvkM/Whats-App-Image-2026-04-02-at-12-43-06.jpg" 
            alt="Promotional Banner" 
            className="w-full h-auto rounded-2xl shadow-2xl border-4 border-yellow-400/20"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Stats Section - Now Red Background */}
      <section className="py-16 px-6 bg-red-800 border-y border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">41+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/70">Years of Trust</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">2500+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/70">Catering Capacity</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">4000+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/70">Events Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/70">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section - Now Red Background */}
      <section className="py-24 px-6 bg-red-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Specializations</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                  <a href="/services.html" className="inline-flex items-center gap-2 text-red-700 font-bold text-sm hover:gap-3 transition-all">
                    Visit us <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.a 
              href="/services.html"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-yellow-400 text-red-900 px-12 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-xl"
            >
              View all Services
            </motion.a>
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="py-24 px-6 bg-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-yellow-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Camera size={20} /> Visual Journey
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Recent Event Highlights</h2>
            </div>
            <a 
              href="/gallery.html" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold border border-white/20 transition-all flex items-center gap-2"
            >
              View More in Gallery <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryHighlights.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </h4>
                  <p className="text-yellow-400 text-xs uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Now Red Background */}
      <section className="py-24 px-6 bg-red-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-yellow-400 font-bold uppercase tracking-widest mb-2">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-white/10 relative"
              >
                <Quote className="absolute top-6 right-8 text-gray-100" size={60} />
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-red-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Ready to make your event legendary?</h2>
          <p className="text-lg opacity-80 mb-10">Contact Rahul Kaushik today for a customized quote and expert planning.</p>
          <a href="/contact.html" className="bg-yellow-400 text-red-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl inline-block">
            Visit us
          </a>
        </div>
      </section>
    </Layout>
  );
}
