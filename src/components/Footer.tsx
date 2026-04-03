import { Phone, Mail, MapPin, Clock, ExternalLink, Map as MapIcon, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5D4037] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="https://i.ibb.co/FZb1htc/Whats-App-Image-2026-03-31-at-12-49-02-1.jpg" 
            alt="Kaushik Caterers Logo" 
            className="h-20 w-20 rounded-full border-2 border-white object-cover mb-4"
            referrerPolicy="no-referrer"
          />
          <h3 className="text-xl font-bold mb-2">Kaushik Caterers</h3>
          <p className="text-sm opacity-80 leading-relaxed text-center md:text-left mb-6">
            Providing premium catering and event planning services since 1985. 
            We make your special moments unforgettable with delicious food and impeccable service.
          </p>
          
          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/kaushikcaterers?igsh=eDNiMWI2YjNucDRi" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <div className="mt-auto">
            <p className="text-xs font-mono opacity-60">GST: 05BJTPK9335D1ZY</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services.html" className="hover:underline">Our Services</a></li>
            <li><a href="/gallery.html" className="hover:underline">Event Gallery</a></li>
            <li><a href="/about.html" className="hover:underline">About Our Legacy</a></li>
            <li><a href="/contact.html" className="hover:underline">Get in Touch</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-1" />
              <span>Dwarika Puri, New Park Road, Gandhi Gram, Mdda Colony, Dehradun-248001, Uttarakhand</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>+91 9897159674</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <span>kaushikcaterersuk@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="shrink-0" />
              <span>09:00 AM - 09:00 PM (All Days)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div className="rounded-xl overflow-hidden h-48 shadow-lg border-2 border-white/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.697486884025!2d78.032191!3d30.316494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3OMKwMDEnNTUuOSJF!5e0!3m2!1sen!2sin!4v1712046432000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaushik Caterers Location"
            ></iframe>
          </div>
          <a 
            href="https://www.google.com/maps/@30.316494,78.032191,15z?hl=en&entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs text-yellow-400 hover:underline"
          >
            <MapIcon size={14} /> Open in Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Kaushik Caterers. All rights reserved.</p>
        <p className="mt-2">
          Designed by{" "}
          <a 
            href="https://www.waltdesignsstudio.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 font-bold hover:underline inline-flex items-center gap-1"
          >
            Walt Designs & Studio <ExternalLink size={10} />
          </a>
        </p>
      </div>
    </footer>
  );
}
