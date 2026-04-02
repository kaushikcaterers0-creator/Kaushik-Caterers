import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';

const services = [
  {
    title: "Wedding Catering",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    description: "Grand wedding feasts with traditional and modern cuisines."
  },
  {
    title: "Birthday Parties",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop",
    description: "Fun and delicious menus for kids and adults alike."
  },
  {
    title: "Corporate Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description: "Professional catering for seminars, meetings, and office parties."
  },
  {
    title: "Kitty Parties",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop",
    description: "Elegant snacks and meals for your social gatherings."
  },
  {
    title: "Anniversaries",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop",
    description: "Celebrating your milestones with exquisite flavors."
  },
  {
    title: "Bhandara & Religious Events",
    image: "https://images.unsplash.com/photo-1563245332-692739e746e7?q=80&w=2070&auto=format&fit=crop",
    description: "Large scale traditional food service for religious gatherings."
  }
];

function ServicesPage() {
  return (
    <Layout bgColor="bg-sky-500">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">We offer a wide range of catering and event planning services tailored to your specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-sky-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServicesPage />
  </StrictMode>,
);
