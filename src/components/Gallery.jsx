import React from 'react';

export default function Gallery() {
  return (
    <section id="memories" className="relative w-full h-[100dvh] bg-[#050a05] overflow-hidden flex flex-col pt-8 pb-6 md:pt-12 md:pb-8">
      <style>
        {`
          .memories-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: minmax(100px, 1fr);
            gap: 12px;
          }
          @media (min-width: 1024px) {
            .memories-grid {
              height: 100%;
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(5, minmax(0, 1fr));
              grid-column-gap: 16px;
              grid-row-gap: 16px;
            }
            .div1 { grid-area: 1 / 1 / 3 / 2; }
            .div2 { grid-area: 3 / 1 / 6 / 2; }
            .div4 { grid-area: 1 / 2 / 5 / 3; }
            .div6 { grid-area: 1 / 3 / 5 / 4; }
            .div7 { grid-area: 1 / 4 / 3 / 5; }
            .div8 { grid-area: 3 / 4 / 6 / 5; }
            .div9 { grid-area: 5 / 2 / 6 / 3; }
            .div10 { grid-area: 5 / 3 / 6 / 4; }
          }
        `}
      </style>

      {/* Background Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.35] pointer-events-none z-0"
        style={{ backgroundImage: "url('/gallery.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06120b]/80 via-[#050a05]/40 to-[#06120b]/80 z-0 pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col">

        {/* Header */}
        <div className="mb-4 md:mb-6 shrink-0 mt-4 md:mt-2">
          <div className="inline-flex items-center gap-4 mb-2 md:mb-3">
            <span className="w-10 h-[1px] bg-[#f0a850]" />
            <p className="font-sans text-[10px] md:text-xs font-bold text-[#f0a850] tracking-[0.3em] uppercase drop-shadow-md">
              Memories From the Wild
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] font-bold text-[#f5ead4] leading-tight drop-shadow-2xl">
            Memories That Last Forever
          </h2>
        </div>

        {/* Grid */}
        <div className="memories-grid flex-1 min-h-0 w-full">
          {[1, 2, 4, 6, 7, 8].map((num) => (
            <div key={num} className={`div${num} relative group overflow-hidden rounded-xl md:rounded-2xl bg-white/5`}>
              <img
                src={`/gallery/g${num}.jpg`}
                alt={`Memory ${num}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#06120b]/30 group-hover:bg-[#f0a850]/10 transition-colors duration-500" />
            </div>
          ))}

          <div className="div9 flex rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <button className="w-full h-full bg-[#101511] border border-white/[0.04] text-[#f5ead4]/90 font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] lg:text-xs hover:bg-[#161d18] hover:border-white/10 hover:text-white transition-all flex items-center justify-center p-2">
              Latest Posts
            </button>
          </div>

          <div className="div10 flex rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <button className="w-full h-full bg-[#101511] border border-white/[0.04] text-[#f5ead4]/90 font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] lg:text-xs hover:bg-[#161d18] hover:border-white/10 hover:text-white transition-all flex items-center justify-center p-2">
              Featured Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
