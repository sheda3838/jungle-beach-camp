import React from 'react';

/**
 * ActivityCard
 * Single swipeable card inside the Activities carousel.
 *
 * Props:
 *  activity  { id, title, cardImage } — activity data object
 *  isActive  {boolean}               — whether this card is currently selected
 *  onClick   {function}              — called when card is clicked
 */
export default function ActivityCard({ activity, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative w-[150px] md:w-[180px] h-[220px] md:h-[260px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${
        isActive
          ? 'scale-100 ring-1 ring-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
          : 'scale-95 opacity-50 hover:opacity-80 hover:scale-[0.98]'
      }`}
    >
      <img
        src={activity.cardImage}
        alt={activity.title}
        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
          isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
        }`}
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isActive
            ? 'bg-gradient-to-t from-[#050a05] via-[#050a05]/20 to-transparent'
            : 'bg-[#050a05]/50 group-hover:bg-[#050a05]/30'
        }`}
      />

      {/* Card label */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3
          className={`font-serif text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
            isActive ? 'text-[#f5ead4] drop-shadow-md' : 'text-white/70'
          }`}
        >
          {activity.title}
        </h3>
      </div>
    </div>
  );
}
