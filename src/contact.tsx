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
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-magenta-400 transition-all" placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-magenta-400 transition-all" placeholder="+91 0000000000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-magenta-400 transition-all" placeholder="example@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-magenta-400 transition-all appearance-none">
                    <option className="bg-magenta-900">Wedding</option>
                    <option className="bg-magenta-900">Birthday Party</option>
                    <option className="bg-magenta-900">Corporate Event</option>
                    <option className="bg-magenta-900">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-magenta-400 transition-all" placeholder="Tell us about your event..."></textarea>
                </div>
                <button className="w-full bg-white text-magenta-900 font-bold py-4 rounded-xl hover:bg-magenta-50 transition-all flex items-center justify-center gap-2 shadow-xl">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl"><MapPin size={24} /></div>
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="opacity-80">Dwarika Puri, New Park Road, Gandhi Gram, Mdda Colony, Dehradun-248001, Uttarakhand</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl"><Phone size={24} /></div>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="opacity-80">+91 9897159674</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl"><Mail size={24} /></div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="opacity-80">kaushikcaterersuk@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl"><Clock size={24} /></div>
                    <div>
                      <p className="font-bold">Timing</p>
                      <p className="opacity-80">All Days (09:00 AM to 09:00 PM)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Business Information</h3>
                <div className="space-y-2">
                  <p><span className="font-bold">Owner:</span> Rahul Kaushik</p>
                  <p><span className="font-bold">GST:</span> 05BJTPK9335D1ZY</p>
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
