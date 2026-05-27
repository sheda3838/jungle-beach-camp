import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CinematicTransition({ children, zIndex }) {
  const containerRef = useRef(null);

  // Track the scroll progress of this specific section's layout position.
  // 'start start': when this card reaches the top of the viewport and sticks.
  // 'end start': when the NEXT card has fully slid up and covered this card.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // We simply fade IN a black overlay over the content as it gets covered.
  // This is 100x more performant and achieves the exact same cinematic depth.
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#050a05] before:absolute before:-top-16 before:left-0 before:right-0 before:h-16 before:bg-gradient-to-t before:from-[#050a05]/80 before:to-transparent before:pointer-events-none before:z-[100]" 
      style={{ zIndex }}
    >
      {children}
      
      {/* Hardware-accelerated lightweight overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[#050a05] pointer-events-none z-50"
      />
    </div>
  );
}
