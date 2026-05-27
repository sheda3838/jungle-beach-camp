import React from 'react';

import Button from './common/Button';
import WhatsAppButton from './common/WhatsAppButton';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#06120b]">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06120b]/30 to-[#06120b]/80 pointer-events-none" />


      {/* Huge Background Text */}
      <div className="absolute bottom-[40%] md:bottom-[48%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h1
          className="font-sans font-bold text-[#f5ead4]/30 tracking-widest whitespace-nowrap"
          style={{ fontSize: 'clamp(4rem, 14vw, 16rem)', lineHeight: 0.85 }}
        >
          STAY WILD
        </h1>
      </div>

      {/* Tent */}
      <div className="absolute -bottom-10 md:-bottom-[10%] left-1/2 -translate-x-1/2 z-10 w-[95%] md:w-[75%] lg:w-[60%] max-w-[1000px] pointer-events-none flex justify-center items-end">
        <img
          src="/tent.png"
          alt="Luxury beach camping tent"
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Bottom Left Content */}
      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-20 max-w-[420px]">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-[#f0a850]" />
          <p className="font-sans text-[11px] font-bold text-[#f0a850] tracking-[0.25em] uppercase">
            Luxury Beach Camping
          </p>
        </div>
        <h2 className="font-serif text-4xl md:text-[3.5rem] font-bold text-white leading-[1.1] mb-5 drop-shadow-lg">
          Escape Into<br />The Wild
        </h2>
        <p className="font-sans text-sm md:text-[15px] text-white/75 leading-relaxed font-light">
          Escape into nature with unforgettable beach camping experiences, tropical meals, and wild coastal adventures.
        </p>
      </div>

      {/* Bottom Right CTAs */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-20 flex flex-col sm:flex-row gap-3 items-end sm:items-center">
        <WhatsAppButton text="Book via WhatsApp" size="lg" />
        <Button href="#activities">Explore Camp</Button>
      </div>
    </section>
  );
}
