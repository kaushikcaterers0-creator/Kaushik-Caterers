import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Wedding and engagement", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", description: "Comprehensive planning for your engagement and wedding day." },
  { title: "Weddings", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", description: "Grand wedding celebrations with royal catering and decor." },
  { title: "Wedding", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", description: "A perfect wedding celebration tailored to your specific needs." },
  { title: "Anniversary", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop", description: "Celebrate your years of togetherness with our elegant anniversary planning and catering." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Wedding Services" 
      description="Your wedding is a once-in-a-lifetime event, and we ensure it is nothing short of magical with our royal wedding services."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
