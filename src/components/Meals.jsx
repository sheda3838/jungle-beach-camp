import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FoodCard from './common/FoodCard';

const MEALS_DATA = {
  breakfast: {
    title: 'Morning Freshness',
    description: 'Start your morning with fresh tropical flavors and warm island comfort.',
    bg: '/meals/bg/breakfast.jpg',
    items: [
      { id: 'b1', name: 'Bed Tea',        image: '/meals/breakfast/bed-tea.jpg' },
      { id: 'b2', name: 'String Hoppers', image: '/meals/breakfast/string-hoppers.jpg' },
      { id: 'b3', name: 'Pittu',          image: '/meals/breakfast/pittu.jpg' },
      { id: 'b4', name: 'Roti',           image: '/meals/breakfast/roti.jpg' },
      { id: 'b5', name: 'Sandwich',       image: '/meals/breakfast/sandwich.jpg' },
      { id: 'b6', name: 'Rice & Curry',   image: '/meals/breakfast/rice-and-curry.jpg' },
    ],
  },
  lunch: {
    title: 'Coastal Feast',
    description: 'Enjoy hearty local and coastal meals under the bright tropical sun.',
    bg: '/meals/bg/lunch.jpg',
    items: [
      { id: 'l1', name: 'Rice & Curry',    image: '/meals/lunch/rice-and-curry.jpg' },
      { id: 'l2', name: 'Chicken Rice',    image: '/meals/lunch/chiken-rice.jpg' },
      { id: 'l3', name: 'Chicken Noodles', image: '/meals/lunch/chiken-noodles.jpg' },
    ],
  },
  dinner: {
    title: 'Campfire Dining',
    description: 'Relax with comforting camp-style meals under the warm glow of the night.',
    bg: '/meals/bg/dinner.jpg',
    items: [
      { id: 'd1', name: 'Chicken Rice',    image: '/meals/dinner/chiken-rice.jpg' },
      { id: 'd2', name: 'Chicken Noodles', image: '/meals/dinner/chiken-noodles.jpg' },
    ],
  },
};

export default function Meals() {
  const [activeMeal, setActiveMeal] = useState('breakfast');
  const currentData = MEALS_DATA[activeMeal];

  return (
    <section id="meals" className="relative w-full h-[100dvh] flex flex-col justify-center bg-[#050a05] overflow-hidden pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12">
      
      {/* Preload ALL images (backgrounds & items) into RAM to completely eliminate click lag */}
      <div className="hidden">
        {Object.values(MEALS_DATA).map((meal) => (
          <React.Fragment key={meal.bg}>
            <img src={meal.bg} alt="preload bg" />
            {meal.items.map((item) => (
              <img key={item.id} src={item.image} alt="preload item" />
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: `url('${currentData.bg}')` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#06120b]/70 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06120b]/95 via-transparent to-[#06120b]/95 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#050a05_100%)] opacity-80 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between">

        {/* Heading & Tabs */}
        <div className="flex flex-col items-center text-center shrink-0 w-full max-w-[700px] mx-auto mb-4">
          <div className="inline-flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="w-8 h-[1px] bg-[#f0a850]" />
            <p className="font-sans text-[10px] md:text-xs font-bold text-[#f0a850] tracking-[0.3em] uppercase drop-shadow-md">
              Culinary Experience
            </p>
            <span className="w-8 h-[1px] bg-[#f0a850]" />
          </div>

          <div className="mb-4 md:mb-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-[#f5ead4] leading-tight mb-2 md:mb-4 drop-shadow-2xl">
              {currentData.title}
            </h2>
            <p className="font-sans text-[13px] md:text-[15px] lg:text-[16px] text-[#f5ead4]/80 leading-relaxed font-light drop-shadow-md px-2">
              {currentData.description}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center p-1.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {['breakfast', 'lunch', 'dinner'].map((meal) => (
              <button
                key={meal}
                onClick={() => setActiveMeal(meal)}
                className={`relative px-5 py-2 md:px-10 md:py-3.5 rounded-full font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeMeal === meal ? 'text-[#0a0f0a]' : 'text-white/60 hover:text-white'
                }`}
              >
                {activeMeal === meal && (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#f0a850] to-[#c87941] rounded-full shadow-[0_0_20px_rgba(240,168,80,0.3)]"
                  />
                )}
                <span className="relative z-10">{meal}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="w-full flex-1 flex flex-col justify-center min-h-0 overflow-y-auto md:overflow-visible hide-scrollbar pb-4 md:pb-0">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 ${
              currentData.items.length === 6 ? 'lg:grid-cols-6 lg:max-w-[1100px] mx-auto' :
              currentData.items.length === 5 ? 'lg:grid-cols-5 lg:max-w-[900px] mx-auto' :
              currentData.items.length === 3 ? 'lg:grid-cols-3 lg:max-w-[650px] mx-auto' :
              'lg:grid-cols-2 lg:max-w-[450px] mx-auto'
            } gap-3 md:gap-4 lg:gap-5 w-full`}
          >
            {currentData.items.map((item, index) => (
              <FoodCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
