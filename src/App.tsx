import { useState } from 'react';
import Layout from './components/Layout';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Award, Users, Calendar, Star, Quote, ArrowRight, Camera, ChevronDown, HelpCircle } from 'lucide-react';
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
    name: "Shalini Abhishek",
    role: "7 reviews · 9 photos",
    text: "We wanted to thank you for making our 3 day's wedding function enjoyable. The food was remarkable and the staff was very well-timed, professional and cordial. Everything worked out perfectly. You achieved everything we were hoping for, a relaxed atmosphere and delicious food. Thankyou Rahul ji for your cooperation. The quality nd the taste of food plus the decoration was appreciated by whoever visited our function. Till now we had not come across anyone who could have done such a remarkable job.",
    image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Akshit Barthwal",
    role: "9 reviews · 2 photos",
    text: "No words are enough to describe the exceptional services provided by Kaushik caterers. We hired them for Sunderkand and my brother's mehendi & haldi ceremonies. They even managed the tent and decor apart from food. 1) The food was absolutely delicious at all events. Guests couldn't stop complementing the food taste. 2) The decor was awesome. We gave them pics from internet and they delivered what we required. 3) The rates were very competitive. We got a good bargain when compared to other event planners I talked to. 4) Rahul Kaushik is a very gentle and well-mannered person. He promptly accomodated our last-minute requests without complaining once. I can't thank him enough for making our events such a success. 10/5 stars.",
    image: "https://i.ibb.co/tP380hpW/Whats-App-Image-2026-04-05-at-21-37-19.jpg"
  },
  {
    name: "Ayush Rawat",
    role: "Local Guide · 19 reviews · 2 photos",
    text: "We booked Kaushik Ji Caterers for my brother’s wedding, and they did an outstanding job. They are our old and trusted caterers, and once again they managed everything confidently and smoothly. They were always open to suggestions and very cooperative throughout the event. The food was remarkably tasty and hygienic — every guest appreciated the quality and presentation. All the waiters were properly dressed, well-mannered, and highly professional. Highly recommended for anyone looking for reliable and quality catering services for weddings or special occasions. 👍",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Gurmeet Singh",
    role: "Local Guide · 20 reviews",
    text: "Kaushik Caterers deliver consistently high quality food with excellent taste, presentation & portion sizes. Their team is professional, well organized & punctual, making events smooth and hassle-free. Overall, they offer great value for money and are a reliable choice for weddings and family functions. We recommend kaishik caterers to everyone.",
    image: "https://i.ibb.co/sprV3w4H/Whats-App-Image-2026-04-05-at-21-36-07.jpg"
  },
  {
    name: "Sunidhi Istwal",
    role: "2 reviews · 2 photos",
    text: "One of the best catering service. Recently my sister got married and the entire function was at home from cocktail party /mehendi and haldi ceremony to wedding . The food was so delicious and the decorations was top notch . Each and Everything was very perfect. A huge Thanks to kaushik bhaiya and his entire crew for making my sister’s wedding day very special and i highly recommend kaushik catering service to all the people who wants the best catering service in town",
    image: "https://i.ibb.co/1JLhwHq0/Whats-App-Image-2026-04-05-at-21-34-23.jpg"
  }
];

const faqs = [
  {
    id: "faq-booking-advance",
    question: "How far in advance should we book your services?",
    answer: "We recommend booking as early as possible—typically 3 to 6 months in advance for grand weddings, Bhandaras, and major corporate events, especially during peak auspicious seasons. For smaller home events like birthdays or kitty parties, we can often accommodate bookings within 2 to 4 weeks depending on date availability.",
    category: "Booking"
  },
  {
    id: "faq-booking-process",
    question: "What is the booking process and payment schedule?",
    answer: "To lock in your date, we require an initial booking deposit and a signed event agreement. The remaining balance is structured in convenient installments, with the final payment due a few days prior to the event. We gladly accommodate last-minute guest count adjustments up to 72 hours before the service.",
    category: "Booking"
  },
  {
    id: "faq-pricing-calculation",
    question: "How is your catering and planning pricing calculated?",
    answer: "Our catering is charged transparently on a per-plate basis depending on your selected menu package (e.g., customized silver, gold, or royal packages). Event planning, floral decorations, and waterproof tent setups are quoted separately based on your specific theme choices, layout size, and custom requirements.",
    category: "Pricing"
  },
  {
    id: "faq-pricing-minimum",
    question: "Do you have a minimum guest count or order value requirement?",
    answer: "No event is too small or too large! We cater to intimate family kitty parties of 15-20 guests as well as grand multi-day wedding celebrations with over 1,500 guests. We design customized package options to deliver the best value and premium standard for any gathering size.",
    category: "Pricing"
  },
  {
    id: "faq-services-decor",
    question: "Do you handle event decoration, stage setups, and tents too?",
    answer: "Yes, absolutely! Kaushik Caterers is a comprehensive full-service event planner. Beyond our premium catering, we handle breathtaking floral designs, elegant entry themes, customized stages, sound systems, professional lighting, and complete premium tenting services.",
    category: "Services"
  },
  {
    id: "faq-services-diet",
    question: "Can you accommodate dietary restrictions and custom menus?",
    answer: "Yes, we pride ourselves on culinary customization. We specialize in strictly pure-vegetarian menus, traditional religious offerings (such as Bhandara foods made without onion or garlic), regional delicacies, and international starters. We also carefully accommodate allergies, vegan preferences, and specific dietary needs.",
    category: "Services"
  }
];

export default function App() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const filteredFaqs = activeFaqCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFaqCategory);

  return (
    <Layout bgColor="bg-red-50">
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
            <a href="/contact" className="bg-yellow-400 text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl transform hover:scale-105">
              Plan Your Event
            </a>
            <a href="/services" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <img 
            src="https://i.ibb.co/vxyMX26Z/Whats-App-Image-2026-07-12-at-08-40-35.jpg" 
            alt="Promotional Banner" 
            className="w-full h-auto rounded-2xl shadow-2xl border-4 border-yellow-400/20"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Stats Section - Now Baby Red Background */}
      <section className="py-16 px-6 bg-red-100 border-y border-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">41+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-600">Years of Trust</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">2500+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-600">Catering Capacity</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">4000+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-600">Events Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">100%</div>
              <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section - Now Baby Red Background */}
      <section className="py-24 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Specializations</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
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
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 leading-tight min-h-[4rem] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-700 mb-6">
                    {service.description}
                  </p>
                  <a href="/services" className="inline-flex items-center gap-2 text-red-700 font-bold text-xs md:text-sm hover:gap-3 transition-all">
                    Visit us <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.a 
              href="/services"
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
      <section className="py-24 px-6 bg-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Camera size={20} /> Visual Journey
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Recent Event Highlights</h2>
            </div>
            <a 
              href="/gallery" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2"
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

      {/* Testimonials Section - Now Baby Red Background */}
      <section className="py-24 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-red-600 font-bold uppercase tracking-widest mb-2">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
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

      {/* Frequently Asked Questions Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden" id="faq-section">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-red-600 font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <HelpCircle size={20} className="text-red-600" /> Customer Support
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-lg mx-auto">
              Got questions about booking, pricing, or our specialized catering and decor services? Find the answers below.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" id="faq-categories">
            {['All', 'Booking', 'Pricing', 'Services'].map((category) => (
              <button
                key={category}
                id={`faq-btn-${category.toLowerCase()}`}
                onClick={() => {
                  setActiveFaqCategory(category);
                  setExpandedFaqId(null);
                }}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  activeFaqCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4" id="faq-accordion-list">
            <AnimatePresence initial={false}>
              {filteredFaqs.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    id={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? 'border-yellow-400 bg-red-50/30 shadow-md shadow-red-50/10' 
                        : 'border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      type="button"
                      id={`${faq.id}-trigger`}
                      onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                      className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 text-base md:text-lg select-none gap-4"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 transition-all duration-300 rounded-full ${
                          isExpanded ? 'bg-red-600 scale-125' : 'bg-slate-300'
                        }`} />
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-500 transition-transform duration-300 shrink-0 ${
                          isExpanded ? 'rotate-180 text-red-600' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`${faq.id}-content`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm md:text-base pl-11 border-t border-dashed border-slate-100 mt-2">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Ready to make your event legendary?</h2>
          <p className="text-lg opacity-80 mb-10">Contact Rahul Kaushik today for a customized quote and expert planning.</p>
          <a href="/contact" className="bg-yellow-400 text-red-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl inline-block">
            Visit us
          </a>
        </div>
      </section>
    </Layout>
  );
}
