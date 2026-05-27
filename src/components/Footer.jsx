import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WhatsAppButton from './common/WhatsAppButton';
import { WA_DISPLAY } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Memories',      href: '#memories' },
  { label: 'Activities',    href: '#activities' },
  { label: 'Meals',         href: '#meals' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.09 },
  }),
};

function Col({ children, custom, isInView }) {
  return (
    <motion.div custom={custom} variants={fadeUp}
      initial="hidden" animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col gap-5">
      {children}
    </motion.div>
  );
}

function ColHeading({ children }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase text-[#f0a850]">{children}</p>
      <span className="w-8 h-[1px] bg-[#f0a850]/40" />
    </div>
  );
}

export default function Footer() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [email,    setEmail]    = useState('');
  const [subState, setSubState] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubState('done');
    setEmail('');
    setTimeout(() => setSubState('idle'), 4000);
  };

  return (
    <footer id="footer" ref={ref} className="relative w-full bg-[#050a05] overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a05] via-[#060e07] to-[#040809] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(20,60,30,0.35),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,40,60,0.25) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0a850]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">

          {/* Col 1: Brand */}
          <Col custom={0} isInView={isInView}>
            <a href="#" className="flex items-center gap-3 group w-fit">
              <img src="/logo.png" alt="Jungle Beach Camp"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-[#f0a850]/30 transition-all duration-300" />
              <div>
                <p className="font-serif text-lg font-bold text-[#f5ead4] leading-none group-hover:text-[#f0a850] transition-colors duration-300">WildCamp</p>
                <p className="font-sans text-[10px] text-white/35 tracking-widest uppercase mt-0.5">Jungle Beach Camp</p>
              </div>
            </a>
            <p className="font-sans text-[13px] text-[#f5ead4]/50 leading-relaxed font-light max-w-[220px]">
              A hidden escape between the jungle and the sea.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                { icon: <FacebookIcon />,  label: 'Facebook',  href: '#' },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-[#f0a850] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Col 2: Navigation */}
          <Col custom={1} isInView={isInView}>
            <ColHeading>Navigation</ColHeading>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href}
                  className="font-sans text-[13px] text-[#f5ead4]/50 hover:text-[#f5ead4] transition-colors duration-200 w-fit relative group">
                  <span className="relative">
                    {label}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-[#f0a850]/60 group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </Col>

          {/* Col 3: Contact */}
          <Col custom={2} isInView={isInView}>
            <ColHeading>Contact</ColHeading>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="font-sans text-[13px] text-[#f5ead4]/50 font-light leading-snug">Rumassala, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.88-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:+${WA_DISPLAY.replace(/\s/g,'')}`} className="font-sans text-[13px] text-[#f5ead4]/50 font-light hover:text-[#f5ead4] transition-colors">{WA_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:hello@wildcamp.com" className="font-sans text-[13px] text-[#f5ead4]/50 font-light hover:text-[#f0a850] transition-colors">hello@wildcamp.com</a>
              </div>
            </div>
            <WhatsAppButton text="Chat on WhatsApp" variant="primary" size="sm" />
          </Col>

          {/* Col 4: Newsletter */}
          <Col custom={3} isInView={isInView}>
            <ColHeading>Stay Updated</ColHeading>
            <p className="font-sans text-[13px] text-[#f5ead4]/45 leading-relaxed font-light">
              Get updates on events, seasonal offers, and new experiences at the camp.
            </p>
            {subState === 'done' ? (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="font-sans text-[12px] text-[#4ade80] font-medium">You're subscribed!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3 font-sans text-[13px] text-[#f5ead4] placeholder-[#f5ead4]/25 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#f0a850]/20 focus:border-[#f0a850]/40"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }} />
                <button type="submit"
                  className="w-full rounded-xl py-3 font-sans text-[12px] font-bold tracking-[0.18em] uppercase text-[#0a0f0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,168,80,0.35)]"
                  style={{ background: 'linear-gradient(135deg, #f0a850 0%, #c87941 100%)', boxShadow: '0 4px 14px rgba(240,168,80,0.2)' }}>
                  Subscribe
                </button>
              </form>
            )}
          </Col>

        </div>

        {/* Bottom bar */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="font-sans text-[11px] text-white/25 text-center sm:text-left">
            © 2026 Jungle Beach Camp. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-white/20 italic text-center sm:text-right">
            Designed for unforgettable coastal experiences.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
