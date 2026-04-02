import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { Star, Quote, CheckCircle, Award, Users, Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

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

function AboutPage() {
  return (
    <Layout bgColor="bg-[#004d00]">
      {/* Hero Section */}
      <div className="py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Legacy</h2>
            <div className="h-1.5 w-24 bg-yellow-400 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">41+</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">Years of Legacy</div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">4000+</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">Events Done</div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">100%</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">Satisfaction</div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">PAN</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">India Presence</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Journey" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-yellow-400 p-8 rounded-3xl shadow-2xl text-green-900 max-w-xs">
                <Quote className="mb-4 opacity-50" size={32} />
                <p className="font-bold text-xl italic leading-tight mb-4">"A Tradition of Taste and Unmatched Service"</p>
                <p className="text-sm font-bold uppercase tracking-widest">- Rahul Kaushik, Owner</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">The Journey</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Tradition of Taste and Unmatched Service</h2>
              <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                <p>
                  Kaushik Caterers in Mdda Colony, Dehradun is a reputable catering company that offers exceptional catering services for a variety of events. With a team of skilled chefs and professional staff, the company is committed to providing high-quality catering services that are tailored to meet the needs and budget of clients.
                </p>
                <p>
                  Founded in 1985 with a simple mission: to provide the highest quality catering and event planning services that celebrate the rich culinary traditions of India. Over the past four decades, we have grown from a small local service in Dehradun to a premier event planning company serving clients across the country.
                </p>
                <p>
                  Led by our founder, we have successfully executed over 4000 events, ranging from intimate family gatherings to grand destination weddings. Our commitment to 100% customer satisfaction remains at the core of everything we do.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1985</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">2500+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Catering Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">PAN India</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Service Area</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl opacity-70">The principles that guide our service and define our legacy.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <Award className="text-yellow-400 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4">Quality First</h4>
                <p className="opacity-70">We use only the freshest ingredients and premium materials for every event.</p>
              </div>
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <Heart className="text-yellow-400 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4">Customer Focused</h4>
                <p className="opacity-70">Your satisfaction is our ultimate goal. We listen, adapt, and deliver.</p>
              </div>
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <Users className="text-yellow-400 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4">Inclusive Service</h4>
                <p className="opacity-70">Professional male and female staff ensuring comfort for all guests.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 bg-white/5 p-12 rounded-[3rem] border border-white/10">
            <div>
              <h3 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Why Choose Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Excellence in Every Detail & Flavor</h2>
              <ul className="space-y-6">
                {[
                  "Fully Customizable Menu tailored to your preferences",
                  "Professional Male and Female Staff for seamless service",
                  "Live Catering Service with fresh preparation",
                  "Premium Tenting and Decoration solutions",
                  "41+ Years of expertise in event management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <CheckCircle className="text-yellow-400 flex-shrink-0" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 p-12 rounded-[2rem] text-green-900">
              <h4 className="text-2xl font-bold mb-6">Registered & Trusted</h4>
              <p className="text-lg mb-8 opacity-90">We are a fully compliant business with GST registration, ensuring transparency and professionalism in all our dealings.</p>
              <div className="bg-green-900/10 p-6 rounded-2xl border border-green-900/20">
                <p className="text-sm uppercase tracking-widest font-bold opacity-60 mb-1">GSTIN Number</p>
                <p className="text-3xl font-black">05BJTPK9335D1ZY</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-yellow-400 font-bold uppercase tracking-widest mb-2">Testimonials</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                  <p className="text-gray-700 italic leading-relaxed text-sm">"{t.text}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
