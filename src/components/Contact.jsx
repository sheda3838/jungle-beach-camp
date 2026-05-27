import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import WhatsAppButton from './common/WhatsAppButton';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Field({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id}
        className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#f5ead4]/50">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p key="err"
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}
            className="font-sans text-[11px] text-red-400/90"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase = 'w-full rounded-xl px-4 py-3 font-sans text-[14px] text-[#f5ead4] placeholder-[#f5ead4]/25 outline-none transition-all duration-300 focus:ring-2';
const inputNormal = 'bg-white/[0.05] border border-white/[0.08] focus:border-[#f0a850]/50 focus:ring-[#f0a850]/15';
const inputError  = 'bg-red-500/[0.07] border border-red-400/50 focus:border-red-400/70 focus:ring-red-400/10';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' });

  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status === 'success') setStatus('idle');
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Name is required.';
    if (!form.email.trim())   errs.email   = 'Email is required.';
    else if (!isValidEmail(form.email)) errs.email = 'Please enter a valid email address.';
    if (!form.message.trim()) errs.message = 'A message is required.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    setTimeout(() => { setStatus('success'); setForm({ name: '', email: '', message: '' }); setErrors({}); }, 1600);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#050a05] overflow-hidden flex items-center"
      style={{ height: '100dvh' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery.jpg')" }} />
      <div className="absolute inset-0 bg-[#050a05]/82" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#06120b]/70 via-transparent to-[#081520]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a05]/90 via-transparent to-[#050a05]/95" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,80,40,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,50,90,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <motion.div custom={0} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} className="flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[#f0a850]" />
              <p className="font-sans text-[11px] font-bold text-[#f0a850] tracking-[0.3em] uppercase">Get In Touch</p>
            </motion.div>

            <motion.h2 custom={1} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#f5ead4] leading-[1.1]">
              Plan Your<br />Jungle Escape
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-sans text-[15px] text-[#f5ead4]/65 leading-relaxed font-light max-w-[480px]">
              Reach out to us for bookings, inquiries, or special requests. Whether it's a peaceful beach stay,
              camping experience, or group adventure — we're here to help you plan it.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} className="flex flex-col gap-3">
              {[
                { icon: <PinIcon />,   text: 'Rumassala, Unawatuna, Sri Lanka' },
                { icon: <ClockIcon />, text: 'We respond within 24 hours' },
              ].map(({ icon, text }) => (
                <div key={text}
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl w-fit"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
                  <span className="text-[#f0a850]/80">{icon}</span>
                  <span className="font-sans text-[13px] text-[#f5ead4]/70 font-light">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp quick-book CTA */}
            <motion.div custom={3.5} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}>
              <div className="flex flex-col gap-2">
                <p className="font-sans text-[11px] text-[#f5ead4]/30 font-light tracking-wide">
                  Prefer to chat directly?
                </p>
                <WhatsAppButton
                  text="Book via WhatsApp"
                  variant="primary"
                  size="lg"
                />
              </div>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} className="flex items-center gap-4 pt-2">
              <span className="w-16 h-[1px] bg-white/10" />
              <span className="font-sans text-[11px] text-white/25 tracking-widest uppercase">Jungle Beach Camp</span>
              <span className="w-16 h-[1px] bg-white/10" />
            </motion.div>
          </div>

          {/* Right — Form Card */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <div className="relative rounded-3xl overflow-hidden p-7 md:p-9"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}>
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#f0a850]/30 to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="flex flex-col items-center justify-center text-center gap-5 py-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)' }}>
                      <span className="text-[#4ade80]"><CheckIcon /></span>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#f5ead4] mb-2">Message Received!</h3>
                      <p className="font-sans text-[14px] text-[#f5ead4]/60 leading-relaxed max-w-[320px] mx-auto font-light">
                        Thank you! Your message has been received. We'll get back to you soon.
                      </p>
                    </div>
                    <button onClick={() => setStatus('idle')}
                      className="mt-2 font-sans text-[12px] font-bold tracking-[0.18em] uppercase text-[#f0a850]/70 hover:text-[#f0a850] transition-colors">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="mb-1">
                      <h3 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#f5ead4] leading-tight mb-1.5">
                        Send Us a Message
                      </h3>
                      <p className="font-sans text-[13px] text-[#f5ead4]/40 font-light">All fields are required</p>
                    </div>

                    <Field label="Full Name" id="name" error={errors.name}>
                      <input id="name" name="name" type="text" autoComplete="name"
                        placeholder="e.g. Kavindu Perera" value={form.name}
                        onChange={handleChange} disabled={status === 'loading'}
                        className={`${inputBase} ${errors.name ? inputError : inputNormal}`} />
                    </Field>

                    <Field label="Email Address" id="email" error={errors.email}>
                      <input id="email" name="email" type="email" autoComplete="email"
                        placeholder="you@example.com" value={form.email}
                        onChange={handleChange} disabled={status === 'loading'}
                        className={`${inputBase} ${errors.email ? inputError : inputNormal}`} />
                    </Field>

                    <Field label="Message" id="message" error={errors.message}>
                      <textarea id="message" name="message" rows={3}
                        placeholder="Tell us about your plans, group size, preferred dates…"
                        value={form.message} onChange={handleChange} disabled={status === 'loading'}
                        className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`} />
                    </Field>

                    <button type="submit" disabled={status === 'loading'}
                      className="relative w-full rounded-xl py-4 font-sans font-bold text-[13px] tracking-[0.2em] uppercase text-[#0a0f0a] overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(240,168,80,0.4)]"
                      style={{ background: 'linear-gradient(135deg, #f0a850 0%, #c87941 100%)', boxShadow: '0 6px 24px rgba(240,168,80,0.25)' }}>
                      <AnimatePresence mode="wait">
                        {status === 'loading' ? (
                          <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            Sending…
                          </motion.span>
                        ) : (
                          <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>

                    <p className="font-sans text-[11px] text-center text-[#f5ead4]/25 font-light">
                      We'll never share your details with anyone.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
