import React from 'react';

const HIGHLIGHTS = [
  'Beach Camping',
  'Coastal Adventures',
  'Bonfire Nights'
];

export default function About() {
  return (
    <section id="about" className="relative w-full h-[100dvh] overflow-hidden flex items-center bg-[#050a05]">
      {/* ── Background Image ── */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about.png')" }} 
      />
      
      {/* ── Warm Cinematic Overlays ── */}
      {/* Deep jungle gradient fading from the left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120b]/95 via-[#06120b]/70 to-[#06120b]/10 z-0 pointer-events-none" />
      {/* Bottom gradient to seamlessly blend with next section if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06120b]/90 z-0 pointer-events-none" />
      {/* Soft warm glow mimicking morning/sunset light inside the tent */}
      <div className="absolute inset-0 bg-[#f0a850]/5 mix-blend-overlay z-0 pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-[500px] lg:max-w-[600px] animate-fade-in-up">
          
          {/* Small Label */}
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#f0a850]"></span>
            <p className="font-sans text-[11px] md:text-xs font-bold text-[#f0a850] tracking-[0.3em] uppercase drop-shadow-md">
              About The Camp
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#f5ead4] leading-[1.1] mb-6 drop-shadow-2xl">
            Between The Jungle & The Sea
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-[15px] md:text-[16px] text-[#f5ead4]/80 leading-relaxed font-light mb-10 drop-shadow-lg">
            Wake up to ocean breezes, tropical silence, and unforgettable nights beneath the stars. Jungle Beach Camp blends nature, comfort, and adventure into one peaceful coastal escape.
          </p>

          {/* Mini Highlights (Glassmorphism effect) */}
          <div className="flex flex-col gap-4 mb-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg w-fit">
            {HIGHLIGHTS.map((item, i) => (
              <div key={item} className="flex items-center gap-4 group cursor-default">
                <div className="w-2 h-2 rounded-full bg-transparent border border-[#f0a850] group-hover:bg-[#f0a850] group-hover:shadow-[0_0_10px_rgba(240,168,80,0.8)] transition-all" />
                <p className="font-sans text-sm md:text-[15px] font-medium text-[#f5ead4]/90 tracking-wide group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#explore"
            className="inline-block font-sans font-bold text-xs tracking-[0.15em] uppercase text-[#0a0f0a] bg-gradient-to-br from-[#f0a850] to-[#c87941] rounded-full px-10 py-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(200,121,65,0.4)] transition-all"
          >
            Explore More
          </a>

        </div>
      </div>
    </section>
  );
}
