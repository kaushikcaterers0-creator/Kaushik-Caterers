import React from 'react';
import { createRoot } from 'react-dom/client';
import ServiceCategoryPage from '../components/ServiceCategoryPage';
import '../index.css';

const services = [
  { title: "Barbecue catering", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", description: "Delicious grilled meats and vegetables for your outdoor events." },
  { title: "Brunch catering", image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop", description: "A perfect blend of breakfast and lunch options for your morning gatherings." },
  { title: "Buffet catering", image: "https://i.ibb.co/XxqbVWCD/Whats-App-Image-2026-04-03-at-14-14-08.jpg", description: "A wide variety of cuisines served in a self-service buffet style." },
  { title: "Corporate catering", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", description: "Professional food services for business meetings and corporate events." },
  { title: "Dinner catering", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop", description: "Elegant dinner menus for your formal and informal gatherings." },
  { title: "Event catering", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", description: "Comprehensive catering solutions for events of all sizes." },
  { title: "Graduation catering", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", description: "Celebrate your academic milestones with our special graduation menus." },
  { title: "Party catering", image: "https://i.ibb.co/HD97QRNZ/Whats-App-Image-2026-04-03-at-09-50-02-5.jpg", description: "Fun and flavorful food options for your private parties." },
  { title: "Personal chef catering", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", description: "A dedicated chef to prepare personalized meals for your small groups." },
  { title: "Private catering", image: "https://i.ibb.co/ZzyD1mfn/Whats-App-Image-2026-04-03-at-14-13-08.jpg", description: "Exclusive catering services for your private and intimate events." },
  { title: "Wedding catering", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", description: "Royal wedding feasts with traditional and modern cuisines." },
  { title: "Breakfast Catering", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop", description: "Start your day right with our delicious breakfast catering options." },
  { title: "Catering Buffet", image: "https://i.ibb.co/XxqbVWCD/Whats-App-Image-2026-04-03-at-14-14-08.jpg", description: "A grand buffet spread featuring multiple cuisines and flavors." },
  { title: "Dinner Catering", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop", description: "Exquisite dinner menus tailored to your event's theme." },
  { title: "Festivals Catering", image: "https://i.ibb.co/tT9QkTNT/Whats-App-Image-2026-04-03-at-14-14-07.jpg", description: "Traditional and festive food for large-scale celebrations." },
  { title: "Lunch Catering", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop", description: "Delicious and balanced lunch options for your office or event." },
  { title: "Vegetarian Catering", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop", description: "A wide range of delicious and healthy vegetarian dishes." }
];

function Page() {
  return (
    <ServiceCategoryPage 
      title="Catering Services" 
      description="Since 1985, we have been providing premium catering services across India. From intimate dinners to grand wedding feasts, we ensure every bite is a celebration of taste."
      services={services}
    />
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Page />);
}
