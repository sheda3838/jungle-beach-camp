import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from './common/TestimonialCard';

/* ─── Data ────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vidath Amunugama',
    avatar: '/testimonies/avatar1.png',
    rating: 5,
    time: 'a year ago',
    comment:
      "There won't be mosquitos if u keep the tents closed and there's no current but you will get a bright flashlight and you can request for a campfire as well. Washrooms and water to bathe will be supplied by the organizer but you will have to hike up about 100m up to the house of the organizer. You can request for bbq or fried rice for the night and you can request roti or string hoppers for breakfast. Overall best camping experience ever 🙌",
  },
  {
    id: 2,
    name: 'Nethindu Keshan',
    avatar: '/testimonies/avatar2.png',
    rating: 5,
    time: '2 years ago',
    comment: 'This place is beautiful. The owner is very friendly, the food is very tasty. Can recommend ❤️',
  },
  {
    id: 3,
    name: 'sahan sathmika',
    avatar: '/testimonies/avatar3.png',
    rating: 4,
    time: 'a year ago',
    comment: "It was a great experience but if you'll go please make sure to clean the place before you'll leave 🙏",
  },
];

const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

/* ─── Inline micro-components (section-specific) ─────────────── */
function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[#f0a850]' : 'text-white/20'}`}
          fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Marquee (desktop) ───────────────────────────────────────── */
function MarqueeTrack({ paused }) {
  return (
    <div
      className="flex gap-5 w-max"
      style={{
        animation: 'testimonialScroll 38s linear infinite',
        animationPlayState: paused ? 'paused' : 'running',
      }}
    >
      {MARQUEE_ITEMS.map((review, i) => (
        <TestimonialCard
          key={`${review.id}-${i}`}
          review={review}
          className="w-[340px] xl:w-[370px] shrink-0"
        />
      ))}
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' });
  const [paused, setPaused] = useState(false);

  const avg = (TESTIMONIALS.reduce((s, r) => s + r.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-[#050a05] overflow-hidden py-16 md:py-24"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,80,40,0.22),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_100%,rgba(14,50,80,0.15),transparent)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="w-10 h-[1px] bg-[#f0a850]" />
          <p className="font-sans text-[11px] font-bold text-[#f0a850] tracking-[0.3em] uppercase">
            What Guests Say
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#f5ead4] leading-[1.1] mb-3">
              Loved by Every<br className="hidden sm:block" /> Camper
            </h2>
            <p className="font-sans text-[14px] text-[#f5ead4]/55 font-light max-w-[480px] leading-relaxed">
              Real reviews from real guests who experienced the jungle, the sea, and the magic of Rumassala.
            </p>
          </motion.div>

          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
            className="shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-center gap-2">
              <GoogleG />
              <span className="font-sans text-[11px] font-bold text-white/60 tracking-widest uppercase">
                Google Reviews
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-[#f0a850] leading-none">{avg}</p>
              <Stars rating={Math.round(Number(avg))} />
              <p className="font-sans text-[10px] text-white/40 mt-1">{TESTIMONIALS.length} reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop: Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="hidden md:block relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050a05, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050a05, transparent)' }} />
        <div className="overflow-hidden px-6 pb-4">
          <MarqueeTrack paused={paused} />
        </div>
      </motion.div>

      {/* Mobile: Vertical Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="md:hidden px-4"
      >
        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map((review) => (
            <TestimonialCard key={review.id} review={review} className="w-full" />
          ))}
        </div>
      </motion.div>

      {/* Keyframes + Swiper overrides */}
      <style>{`
        @keyframes testimonialScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-340px * ${TESTIMONIALS.length} - 20px * ${TESTIMONIALS.length})); }
        }
        @media (min-width: 1280px) {
          @keyframes testimonialScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(calc(-370px * ${TESTIMONIALS.length} - 20px * ${TESTIMONIALS.length})); }
          }
        }
      `}</style>
    </section>
  );
}
