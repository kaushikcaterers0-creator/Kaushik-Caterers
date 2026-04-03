import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Anniversary party planning", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop", description: "Celebrate your years of togetherness with our elegant anniversary planning." },
  { title: "Baby shower planning", image: "https://i.ibb.co/dwGKNVwd/Whats-App-Image-2026-04-03-at-14-23-32.jpg", description: "A heartwarming celebration to welcome the new arrival with joy." },
  { title: "Bar & bat mitzvah planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Specialized planning for traditional and modern religious milestones." },
  { title: "Birthday party planning", image: "https://i.ibb.co/whL5DM7D/Whats-App-Image-2026-04-03-at-14-24-52.jpg", description: "Fun and creative birthday parties for kids and adults alike." },
  { title: "Children's party planning", image: "https://i.ibb.co/9ksM8y3f/Whats-App-Image-2026-04-03-at-14-25-25.jpg", description: "Vibrant and engaging parties designed specifically for children." },
  { title: "Party planning", image: "https://i.ibb.co/HD97QRNZ/Whats-App-Image-2026-04-03-at-09-50-02-5.jpg", description: "Comprehensive planning for parties of all types and themes." },
  { title: "Retirement party planning", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "A respectful and celebratory send-off for your years of hard work." },
  { title: "Theme parties", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop", description: "Unique and immersive theme-based parties for any occasion." },
  { title: "Theme party", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop", description: "Specialized planning for your specific theme-based celebrations." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Party Planning" 
      description="From birthdays to retirements, we handle every detail of your party planning to ensure a stress-free and memorable celebration."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
