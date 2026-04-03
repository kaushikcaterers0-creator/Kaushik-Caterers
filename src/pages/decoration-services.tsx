import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Decorations", image: "https://i.ibb.co/TxKTh07f/Whats-App-Image-2026-04-03-at-09-50-00-7.jpg", description: "Stunning floral and theme-based decorations for your events." },
  { title: "Event decor design", image: "https://i.ibb.co/TxKTh07f/Whats-App-Image-2026-04-03-at-09-50-00-7.jpg", description: "Customized decor designs to match your event's theme." },
  { title: "Event decor rental", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop", description: "A wide range of decor items available for rental for your events." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Decoration Services" 
      description="Stunning and creative decorations that transform your event space into a magical environment."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
