import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './index.css';

function AboutPage() {
  return (
    <Layout bgColor="bg-[#004d00]">
      <div className="py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Legacy Since 1985</h2>
              <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                <p>
                  Kaushik Caterers was founded in 1985 with a simple vision: to bring authentic, 
                  high-quality food to the celebrations of Dehradun. Over the last three decades, 
                  we have grown from a small family business into one of the most trusted names 
                  in event planning and catering.
                </p>
                <p>
                  Under the leadership of Rahul Kaushik, we continue to uphold the values of 
                  quality, hygiene, and exceptional service. Every event we manage is treated 
                  with the utmost care, ensuring that the host can enjoy their special day 
                  while we handle the details.
                </p>
                <p>
                  Our expertise spans across various cuisines, from traditional Indian flavors 
                  to contemporary global dishes. We take pride in our ability to cater to 
                  gatherings of all sizes, from intimate family dinners to grand weddings 
                  with thousands of guests.
                </p>
              </div>
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-green-400">35+</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400">5000+</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">Events Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Kitchen" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl text-green-900">
                <p className="font-bold text-xl italic">"Quality is our tradition."</p>
                <p className="text-sm">- Rahul Kaushik, Owner</p>
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
    <AboutPage />
  </StrictMode>,
);
