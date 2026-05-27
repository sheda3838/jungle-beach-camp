import React from 'react';
import { motion } from 'framer-motion';

export default function FoodCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl md:rounded-[1.5rem] overflow-hidden cursor-pointer group bg-[#101511] border border-white/[0.04] shadow-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[#050a05]/20 group-hover:bg-[#050a05]/10 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a05]/95 via-[#050a05]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5">
        <h3 className="font-serif text-[14px] md:text-[16px] lg:text-lg font-bold text-[#f5ead4] leading-tight drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1">
          {item.name}
        </h3>
      </div>
    </motion.div>
  );
}
