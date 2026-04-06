import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { Star, Quote, CheckCircle, Award, Users, Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

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

function AboutPage() {
  return (
    <Layout bgColor="bg-green-50">
      {/* Hero Section */}
      <div className="py-20 px-6 text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-red-900">Our Legacy</h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">41+</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500">Years of Legacy</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">4000+</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500">Events Done</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">100%</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500">Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">PAN</div>
                <div className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500">India Presence</div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-24 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 relative group cursor-pointer"
          >
            <img 
              src="https://i.ibb.co/39bkTk6k/Whats-App-Image-2026-04-05-at-08-50-21.jpg" 
              alt="Kaushik Caterers Banner" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </motion.div>

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
                  <div className="text-2xl font-bold text-red-600">1985</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">2500+</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Catering Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">PAN India</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Service Area</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-red-900">Our Core Values</h2>
              <p className="text-xl text-slate-600">The principles that guide our service and define our legacy.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all">
                <Award className="text-red-600 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4 text-slate-900">Quality First</h4>
                <p className="text-slate-600">We use only the freshest ingredients and premium materials for every event.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all">
                <Heart className="text-red-600 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4 text-slate-900">Customer Focused</h4>
                <p className="text-slate-600">Your satisfaction is our ultimate goal. We listen, adapt, and deliver.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all">
                <Users className="text-red-600 mb-6" size={48} />
                <h4 className="text-2xl font-bold mb-4 text-slate-900">Inclusive Service</h4>
                <p className="text-slate-600">Professional male and female staff ensuring comfort for all guests.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex flex-col gap-12 mb-24 bg-white p-8 md:p-12 rounded-[3rem] border border-green-100 shadow-2xl">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest mb-4">Why Choose Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Excellence in Every Detail & Flavor</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Fully Customizable Menu tailored to your preferences",
                  "Professional Male and Female Staff for seamless service",
                  "Live Catering Service with fresh preparation",
                  "Premium Tenting and Decoration solutions",
                  "41+ Years of expertise in event management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-slate-700">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-600 p-8 md:p-12 rounded-[2rem] text-white">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">Registered & Trusted</h4>
              <p className="text-lg mb-4 opacity-90">We are a fully compliant business with GST registration, ensuring transparency and professionalism in all our dealings.</p>
              <p className="text-lg font-bold">GSTIN Number: <span className="break-all">05BJTPK9335D1ZY</span></p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-red-600 font-bold uppercase tracking-widest mb-2">Testimonials</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
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
