import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';
import { Phone, Mail, MapPin, Clock, Send, Users } from 'lucide-react';

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
                    <select name="service" className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none text-black font-medium">
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="School Party">School Party</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Bhandara">Bhandara</option>
                      <option value="Other">Other</option>
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
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><Users size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Name</p>
                      <p className="opacity-80 font-bold">Rahul Kaushik (Owner)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-yellow-400">WhatsApp</p>
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
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-yellow-400 group-hover:text-magenta-900 transition-colors"><MapPin size={24} /></div>
                    <div>
                      <p className="font-bold text-yellow-400">Address</p>
                      <p className="opacity-80">Dwarika Puri, New Park Road, Gandhi Gram, Mdda Colony, Dehradun-248001, Uttarakhand</p>
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
                    <span className="opacity-60 uppercase text-xs tracking-widest">Owner</span>
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
