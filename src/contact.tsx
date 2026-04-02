import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function ContactPage() {
  return (
    <Layout bgColor="bg-[#8B008B]">
      <div className="py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl opacity-90">We'd love to hear from you. Let's plan your next event together.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Plan Your Event</h3>
              <form 
                action="https://formspree.io/f/mvzvrkzg" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input name="name" type="text" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" placeholder="+91 0000000000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input name="email" type="email" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" placeholder="example@gmail.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Persons Approx</label>
                    <input name="persons" type="number" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" placeholder="e.g. 200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select name="service" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none">
                      <option className="bg-magenta-900">Wedding</option>
                      <option className="bg-magenta-900">Birthday Party</option>
                      <option className="bg-magenta-900">Corporate Event</option>
                      <option className="bg-magenta-900">School Party</option>
                      <option className="bg-magenta-900">Anniversary</option>
                      <option className="bg-magenta-900">Bhandara</option>
                      <option className="bg-magenta-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Date</label>
                    <input name="date" type="date" required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea name="description" rows={4} required className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" placeholder="Tell us about your event requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-magenta-900 font-bold py-4 rounded-xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-xl">
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-yellow-400 p-3 rounded-2xl text-magenta-900">
                    <img 
                      src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
                      alt="Logo" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Contact Details</h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><MapPin size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Address</p>
                      <p className="opacity-80">Dwarika Puri, New Park Road, Gandhi Gram, Mdda Colony, Dehradun-248001, Uttarakhand</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><Phone size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Phone</p>
                      <p className="opacity-80">+91 9897159674</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><Mail size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Email</p>
                      <p className="opacity-80">kaushikcaterersuk@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><Clock size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Timing</p>
                      <p className="opacity-80">All Days (09:00 AM to 09:00 PM)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Business Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-60 uppercase text-xs tracking-widest">Founder</span>
                    <span className="font-bold">Rahul Kaushik</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-60 uppercase text-xs tracking-widest">GST Number</span>
                    <span className="font-bold">05BJTPK9335D1ZY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-60 uppercase text-xs tracking-widest">Established</span>
                    <span className="font-bold">1985</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
);
