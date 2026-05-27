import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* ─── Testimonial Data ────────────────────────────────────────── */
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
    comment:
      'This place is beautiful. The owner is very friendly, the food is very tasty. Can recommend ❤️',
  },
  {
    id: 3,
    name: 'sahan sathmika',
    avatar: '/testimonies/avatar3.png',
    rating: 4,
    time: 'a year ago',
    comment:
      "It was a great experience but if you'll go please make sure to clean the place before you'll leave 🙏",
  },
];

/* Duplicate for seamless infinite marquee */
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

/* ─── Google "G" Logo ─────────────────────────────────────────── */
function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ─── Star Rating ─────────────────────────────────────────────── */
function Stars({ rating, size = 'sm' }) {
  const s = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${s} ${i < rating ? 'text-[#f0a850]' : 'text-white/20'}`}
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Single Review Card ──────────────────────────────────────── */
function ReviewCard({ review, style = {}, className = '' }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.comment.length > 160;
  const displayText =
    !expanded && isLong ? review.comment.slice(0, 155) + '…' : review.comment;

  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl p-5 cursor-default select-none transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
        ...style,
      }}
    >
      {/* Hover glow ring */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(240,168,80,0.25), 0 0 24px rgba(240,168,80,0.07)' }}
      />

      {/* Top row: avatar + name + Google badge */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#f0a850]/40 transition-all duration-300"
            loading="lazy"
          />
          {/* Online dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#050a05]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[13px] font-semibold text-[#f5ead4] leading-tight truncate">
            {review.name}
          </p>
          <p className="font-sans text-[11px] text-[#f5ead4]/45 mt-0.5">{review.time}</p>
        </div>
        {/* Google badge */}
        <div className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <GoogleG />
          <span className="font-sans text-[10px] text-white/50 font-medium">Google</span>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex items-center gap-2 relative z-10">
        <Stars rating={review.rating} />
        <span className="font-sans text-[10px] text-[#f0a850]/70 font-bold tracking-wide">
          {review.rating}.0
        </span>
      </div>

      {/* Comment */}
      <div className="relative z-10 flex-1">
        <p className="font-sans text-[13px] text-[#f5ead4]/70 leading-relaxed font-light">
          {displayText}
          {isLong && (
            <button
              onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
              className="ml-1 text-[#f0a850]/80 hover:text-[#f0a850] text-[12px] font-medium transition-colors"
            >
              {expanded ? 'less' : 'more'}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

/* ─── Infinite Marquee Track (desktop) ───────────────────────── */
function MarqueeTrack({ paused }) {
  return (
    <div className="flex gap-5 w-max"
      style={{
        animation: `testimonialScroll 38s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running',
      }}
    >
      {MARQUEE_ITEMS.map((review, i) => (
        <ReviewCard
          key={`${review.id}-${i}`}
          review={review}
          className="w-[340px] xl:w-[370px] shrink-0"
        />
      ))}
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────────── */
export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [paused, setPaused] = useState(false);

  /* Overall rating */
  const avg = (TESTIMONIALS.reduce((s, r) => s + r.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-[#050a05] overflow-hidden py-16 md:py-24"
    >
      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,80,40,0.22),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_100%,rgba(14,50,80,0.15),transparent)] pointer-events-none" />

      {/* ── Section Header ── */}
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

      {/* ── Desktop: Infinite Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="hidden md:block relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left & right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050a05, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050a05, transparent)' }} />

        <div className="overflow-hidden px-6 pb-4">
          <MarqueeTrack paused={paused} />
        </div>
      </motion.div>

      {/* ── Mobile: Swiper Carousel ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="md:hidden px-4"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, bulletClass: 'swiper-bullet', bulletActiveClass: 'swiper-bullet-active' }}
          grabCursor={true}
          className="testimonials-swiper pb-10"
        >
          {TESTIMONIALS.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} className="mx-1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* ── Keyframes + Swiper overrides ── */}
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
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        .testimonials-swiper .swiper-bullet {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.2);
          margin: 0 3px;
          transition: all 0.3s;
        }
        .testimonials-swiper .swiper-bullet-active {
          background: #f0a850;
          width: 22px;
        }
      `}</style>
    </section>
  );
}
