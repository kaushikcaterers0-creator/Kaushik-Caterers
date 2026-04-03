import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Religious & Religious event planning", image: "https://images.unsplash.com/photo-1563245332-692739e746e7?q=80&w=2070&auto=format&fit=crop", description: "Traditional and respectful planning for your religious gatherings." },
  { title: "Religious event planning", image: "https://images.unsplash.com/photo-1563245332-692739e746e7?q=80&w=2070&auto=format&fit=crop", description: "Comprehensive planning for your religious celebrations." },
  { title: "Bhandara", image: "https://i.ibb.co/93nrJLcD/Whats-App-Image-2026-04-02-at-09-55-35.jpg", description: "Traditional large-scale community feast catering with purity." },
  { title: "School event", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", description: "Fun and educational event planning for schools and colleges." },
  { title: "Outdoor event planning", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", description: "Creative planning for your outdoor celebrations." },
  { title: "Private event planning", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", description: "Exclusive planning for your private and intimate events." },
  { title: "Outdoor Events", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", description: "Specialized planning for your outdoor gatherings." },
  { title: "Event staffing", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Professional staff for your events to ensure a smooth operation." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Religious & Social Events" 
      description="Respectful and traditional planning for your religious events and social gatherings, ensuring every detail is handled with care."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
