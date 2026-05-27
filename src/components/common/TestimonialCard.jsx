import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Google "G" Logo ─────────────────────────────────────────── */
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

/* ─── Stars ───────────────────────────────────────────────────── */
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

/**
 * TestimonialCard
 * Single Google review card used in the Testimonials section.
 *
 * Props:
 *  review  { id, name, avatar, rating, time, comment }
 *  className {string}
 *  style     {object}
 */
export default function TestimonialCard({ review, className = '', style = {} }) {
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
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(240,168,80,0.25), 0 0 24px rgba(240,168,80,0.07)' }}
      />

      {/* Avatar + name + badge */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#f0a850]/40 transition-all duration-300"
            loading="lazy"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#050a05]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[13px] font-semibold text-[#f5ead4] leading-tight truncate">
            {review.name}
          </p>
          <p className="font-sans text-[11px] text-[#f5ead4]/45 mt-0.5">{review.time}</p>
        </div>
        <div
          className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <GoogleG />
          <span className="font-sans text-[10px] text-white/50 font-medium">Google</span>
        </div>
      </div>

      {/* Stars */}
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
