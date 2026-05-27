import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Nav links (mirrors Navbar) ─────────────────────────────── */
const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Memories',      href: '#memories' },
  { label: 'Activities',    href: '#activities' },
  { label: 'Meals',         href: '#meals' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
];

/* ─── Social icons ────────────────────────────────────────────── */
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
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.067 1.494 5.778L.057 23.093a.75.75 0 0 0 .93.894l5.426-1.426A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.517-5.227-1.415l-.374-.222-3.876 1.018 1.04-3.788-.243-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

/* ─── Animation variant ───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.09 },
  }),
};

/* ─── Column wrapper ──────────────────────────────────────────── */
function Col({ children, custom, isInView }) {
  return (
    <motion.div
      custom={custom} variants={fadeUp}
      initial="hidden" animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col gap-5"
    >
      {children}
    </motion.div>
  );
}

/* ─── Column heading ──────────────────────────────────────────── */
function ColHeading({ children }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase text-[#f0a850]">
        {children}
      </p>
      <span className="w-8 h-[1px] bg-[#f0a850]/40" />
    </div>
  );
}

/* ─── Main Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const [email, setEmail]       = useState('');
  const [subState, setSubState] = useState('idle'); // idle | done

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubState('done');
    setEmail('');
    setTimeout(() => setSubState('idle'), 4000);
  };

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative w-full bg-[#050a05] overflow-hidden"
    >
      {/* ── Background gradient layers ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a05] via-[#060e07] to-[#040809] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(20,60,30,0.35),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,40,60,0.25) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* ── Subtle top border glow ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0a850]/20 to-transparent pointer-events-none" />

      {/* ── Noise texture overlay ── */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ══ MAIN GRID ══ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">

          {/* ── COL 1: Brand ── */}
          <Col custom={0} isInView={isInView}>
            {/* Logo + name */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <img
                src="/logo.png"
                alt="Jungle Beach Camp"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-[#f0a850]/30 transition-all duration-300"
              />
              <div>
                <p className="font-serif text-lg font-bold text-[#f5ead4] leading-none group-hover:text-[#f0a850] transition-colors duration-300">
                  WildCamp
                </p>
                <p className="font-sans text-[10px] text-white/35 tracking-widest uppercase mt-0.5">
                  Jungle Beach Camp
                </p>
              </div>
            </a>

            <p className="font-sans text-[13px] text-[#f5ead4]/50 leading-relaxed font-light max-w-[220px]">
              A hidden escape between the jungle and the sea.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                { icon: <FacebookIcon />,  label: 'Facebook',  href: '#' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-[#f0a850] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>

          {/* ── COL 2: Navigation ── */}
          <Col custom={1} isInView={isInView}>
            <ColHeading>Navigation</ColHeading>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-[13px] text-[#f5ead4]/50 hover:text-[#f5ead4] transition-colors duration-200 w-fit relative group"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-[#f0a850]/60 group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </Col>

          {/* ── COL 3: Contact Info ── */}
          <Col custom={2} isInView={isInView}>
            <ColHeading>Contact</ColHeading>

            <div className="flex flex-col gap-3">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="font-sans text-[13px] text-[#f5ead4]/50 font-light leading-snug">
                  Rumassala, Sri Lanka
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.88-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+94XXXXXXXXX"
                  className="font-sans text-[13px] text-[#f5ead4]/50 font-light hover:text-[#f5ead4] transition-colors">
                  +94 XXX XXX XXX
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-[#f0a850]/60 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:hello@wildcamp.com"
                  className="font-sans text-[13px] text-[#f5ead4]/50 font-light hover:text-[#f0a850] transition-colors">
                  hello@wildcamp.com
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-sans text-[12px] font-bold tracking-[0.12em] uppercase text-[#0a0f0a] w-fit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
              style={{ background: 'linear-gradient(135deg, #25d366 0%, #1aab55 100%)', boxShadow: '0 4px 16px rgba(37,211,102,0.2)' }}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Col>

          {/* ── COL 4: Newsletter ── */}
          <Col custom={3} isInView={isInView}>
            <ColHeading>Stay Updated</ColHeading>

            <p className="font-sans text-[13px] text-[#f5ead4]/45 leading-relaxed font-light">
              Get updates on events, seasonal offers, and new experiences at the camp.
            </p>

            {subState === 'done' ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="font-sans text-[12px] text-[#4ade80] font-medium">
                  You're subscribed!
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3 font-sans text-[13px] text-[#f5ead4] placeholder-[#f5ead4]/25 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#f0a850]/20 focus:border-[#f0a850]/40"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <button
                  type="submit"
                  className="w-full rounded-xl py-3 font-sans text-[12px] font-bold tracking-[0.18em] uppercase text-[#0a0f0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,168,80,0.35)]"
                  style={{ background: 'linear-gradient(135deg, #f0a850 0%, #c87941 100%)', boxShadow: '0 4px 14px rgba(240,168,80,0.2)' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </Col>

        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          custom={4} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
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
