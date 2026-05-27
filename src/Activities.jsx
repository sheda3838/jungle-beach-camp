import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ACTIVITIES = [
  {
    id: 1,
    title: "Swimming",
    description: "Dive into the crystal-clear ocean waters. Safe, serene, and perfectly refreshing for a morning start.",
    cardImage: "/activities/swimming-card.jpg",
    bgImage: "/activities/bg/swimming.jpg"
  },
  {
    id: 2,
    title: "Snorkeling",
    description: "Discover the vibrant marine life hiding just beneath the tropical waves. A breathtaking underwater world.",
    cardImage: "/activities/snorkeling-card.jpg",
    bgImage: "/activities/bg/snorkeling.jpg"
  },
  {
    id: 3,
    title: "Boat Rides",
    description: "Sail across the horizon and experience the untouched coastal beauty from the tranquil waters.",
    cardImage: "/activities/boat rides-card.jpg",
    bgImage: "/activities/bg/boat-rides.jpg"
  },
  {
    id: 4,
    title: "Jungle Walks",
    description: "Immerse yourself in lush greenery, exotic wildlife, and untamed nature trails just steps away.",
    cardImage: "/activities/jungle walks-card.jpg",
    bgImage: "/activities/bg/jungle-walks.jpg"
  },
  {
    id: 5,
    title: "Sunset Exploration",
    description: "Watch the sky burst into fiery colors from the most spectacular vantage points on the beach.",
    cardImage: "/activities/sunset-exploration-card.jpg",
    bgImage: "/activities/bg/sunset-exploration.jpg"
  },
  {
    id: 6,
    title: "Beach Relaxing",
    description: "Unwind on pristine sands with the sound of waves washing your stress completely away.",
    cardImage: "/activities/beach-relaxation-card.jpg",
    bgImage: "/activities/bg/beach-relaxation.jpg"
  }
];

export default function Activities() {
  const [activeId, setActiveId] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const activeActivity = ACTIVITIES.find(a => a.id === activeId) || ACTIVITIES[0];

  const handleCardClick = (id, index) => {
    setActiveId(id);
    if (swiperInstance) {
      // Swiper uses the 'real index' when in loop mode
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section id="activities" className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-[#050a05] overflow-hidden pt-24 pb-12 lg:py-0">
      
      {/* ── Dynamic Cinematic Background ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeActivity.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${activeActivity.bgImage}')` }}
        />
      </AnimatePresence>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120b]/95 via-[#06120b]/70 to-[#06120b]/30 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06120b]/80 via-transparent to-[#06120b]/95 z-0 pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:min-h-[600px]">
        
        {/* Left Side: Title & Description */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center h-full px-6 md:px-12 lg:pl-20 xl:pl-28 pt-10 lg:pt-0 shrink-0">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#f0a850]"></span>
            <p className="font-sans text-[11px] md:text-xs font-bold text-[#f0a850] tracking-[0.3em] uppercase drop-shadow-md">
              Adventures Await
            </p>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeActivity.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-[#f5ead4] leading-[1.05] mb-6 drop-shadow-2xl">
                {activeActivity.title}
              </h2>
              <p className="font-sans text-[15px] md:text-[17px] text-[#f5ead4]/80 leading-relaxed font-light drop-shadow-lg max-w-[500px]">
                {activeActivity.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Bottom-Right Slider */}
        <div className="w-full lg:absolute lg:bottom-12 lg:right-0 lg:w-[55%] flex flex-col justify-end mt-12 lg:mt-0">
          <div className="w-full pl-6 md:pl-12 lg:pl-0">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={20}
              centeredSlides={false}
              grabCursor={true}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => {
                setActiveId(ACTIVITIES[swiper.realIndex].id);
              }}
              className="w-full"
            >
              {ACTIVITIES.map((activity, index) => {
                const isActive = activity.id === activeId;
                return (
                  <SwiperSlide key={activity.id} className="!w-auto py-4">
                    <div
                      onClick={() => handleCardClick(activity.id, index)}
                      className={`relative w-[150px] md:w-[180px] h-[220px] md:h-[260px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${
                        isActive 
                          ? 'scale-100 ring-1 ring-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' 
                          : 'scale-95 opacity-50 hover:opacity-80 hover:scale-[0.98]'
                      }`}
                    >
                      <img
                        src={activity.cardImage}
                        alt={activity.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-[#050a05] via-[#050a05]/20 to-transparent' : 'bg-[#050a05]/50 group-hover:bg-[#050a05]/30'}`} />
                      
                      {/* Card Label (Removed Numbers) */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className={`font-serif text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${isActive ? 'text-[#f5ead4] drop-shadow-md' : 'text-white/70'}`}>
                          {activity.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
}
