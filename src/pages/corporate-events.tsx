import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Corporate and conference", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Professional planning for your corporate meetings and conferences." },
  { title: "Conference coordination", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Expert coordination for your business conferences." },
  { title: "Conference planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Comprehensive planning for your corporate conferences." },
  { title: "Corporate events", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Professional event planning for all your corporate needs." },
  { title: "Business Events", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Tailored event planning for your business meetings and gatherings." },
  { title: "Team building event coordination", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Engaging team building events to boost your team's morale." },
  { title: "Team building event planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Creative planning for your team building activities." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Corporate Events" 
      description="Professional and efficient event planning for all your corporate needs, from meetings to team building."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
