import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Story Card Data ─────────────────────────────────────────── */
const STORY_CARDS = [
  {
    id: 1,
    tag: 'Hidden Cove',
    title: 'The Location',
    bg: '/activities/bg/jungle-walks.jpg',
    points: [
      'Hidden cove in Rumassala',
      'Surrounded by jungle and calm ocean',
      'Peaceful and secluded tropical bay',
    ],
    accent: '#4ade80',
  },
  {
    id: 2,
    tag: 'Discover',
    title: 'The Experience',
    bg: '/activities/bg/snorkeling.jpg',
    points: [
      'Swimming & snorkeling in clear waters',
      'Coral reef and vibrant marine life',
      'Jungle walks and scenic viewpoints',
      'Peace Pagoda & sunset views',
    ],
    accent: '#38bdf8',
  },
  {
    id: 3,
    tag: 'Arrive & Rest',
    title: 'Stay & Access',
    bg: '/activities/bg/sunset-exploration.jpg',
    points: [
      'Nearby stays in Unawatuna & hillside villas',
      'Easy access via train and A2 highway',
      'Small cafés and boutique accommodations',
    ],
    accent: '#f0a850',
  },
];

/* ─── Info Card Data ──────────────────────────────────────────── */
const INFO_CARDS = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Public Transport',
    items: ['Nearest train: Unawatuna (2 km)', 'Bus routes via A2 highway', 'Easy access from Galle'],
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Safety Notes',
    items: ['Watch sharp coral areas', 'Swim with caution near reef', 'Respect marine life'],
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Events & Atmosphere',
    items: ['Seasonal DJ nights', 'Beach café music events', 'Informal sunset gatherings'],
  },
];

/* ─── Animation variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay: i * 0.12 },
  }),
};

/* ─── Story Card ──────────────────────────────────────────────── */
function StoryCard({ card, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ scale: 1.025, y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="relative flex-1 min-w-0 rounded-2xl overflow-hidden cursor-default group"
      style={{ minHeight: 0 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('${card.bg}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a05]/95 via-[#050a05]/40 to-[#050a05]/20" />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${card.accent}40, 0 0 30px ${card.accent}18` }}
      />

      {/* Pill tag */}
      <div className="absolute top-4 left-4">
        <span
          className="inline-block font-sans text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full"
          style={{
            background: `${card.accent}22`,
            color: card.accent,
            border: `1px solid ${card.accent}40`,
            backdropFilter: 'blur(8px)',
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#f5ead4] leading-tight mb-3 drop-shadow-lg">
          {card.title}
        </h3>
        <ul className="space-y-1.5">
          {card.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.accent }} />
              <span className="font-sans text-[13px] text-[#f5ead4]/80 leading-snug font-light">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ─── Info Card ───────────────────────────────────────────────── */
function InfoCard({ card, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="relative flex-1 min-w-0 rounded-xl overflow-hidden cursor-default group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-[#4ade80]/0 group-hover:bg-[#4ade80]/[0.03] transition-colors duration-500 pointer-events-none" />
      <div className="relative p-4 lg:p-5 h-full flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80' }}>
            {card.icon}
          </div>
          <h4 className="font-serif text-base font-semibold text-[#f5ead4] leading-tight">{card.title}</h4>
        </div>
        <div className="h-px bg-white/8" />
        <ul className="space-y-1.5 flex-1">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[6px] w-1 h-1 rounded-full bg-[#4ade80]/60 shrink-0" />
              <span className="font-sans text-[12px] text-[#f5ead4]/65 leading-snug font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
export default function Accommodation() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="accommodation"
      ref={sectionRef}
      className="relative w-full bg-[#050a05] overflow-hidden"
      style={{ height: '100dvh', maxHeight: '100dvh' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(30,80,40,0.25),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(14,50,80,0.18),transparent)] pointer-events-none" />

      <div className="relative z-10 w-full h-full flex flex-col max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-6 lg:py-8 gap-4 lg:gap-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-4 shrink-0"
        >
          <span className="w-10 h-[1px] bg-[#f0a850]" />
          <p className="font-sans text-[11px] font-bold text-[#f0a850] tracking-[0.3em] uppercase">
            Accommodation & Travel
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#f5ead4] leading-[1.1] shrink-0"
        >
          Your Wild Stay Awaits
        </motion.h2>

        {/* Story Cards — 65% */}
        <div className="flex flex-col md:flex-row gap-3 lg:gap-4" style={{ flex: '65 1 0%', minHeight: 0 }}>
          {STORY_CARDS.map((card, i) => <StoryCard key={card.id} card={card} index={i} />)}
        </div>

        {/* Info Cards — 35% */}
        <div className="flex flex-col md:flex-row gap-3 lg:gap-4" style={{ flex: '35 1 0%', minHeight: 0 }}>
          {INFO_CARDS.map((card, i) => <InfoCard key={card.id} card={card} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #accommodation { height: auto !important; max-height: none !important; }
        }
      `}</style>
    </section>
  );
}
