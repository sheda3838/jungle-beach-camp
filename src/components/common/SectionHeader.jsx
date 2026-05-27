import React from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionHeader
 * Renders the repeated amber accent bar + eyebrow label + serif heading
 * used across every section of the site.
 *
 * Props:
 *  label     {string}  — small ALL-CAPS eyebrow text (amber)
 *  heading   {string | ReactNode} — main serif heading
 *  align     {'left' | 'center'}  — default 'left'
 *  animate   {boolean}  — whether to animate on scroll, default true
 *  className {string}   — extra wrapper classes
 */
export default function SectionHeader({
  label,
  heading,
  align = 'left',
  animate = true,
  className = '',
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const center = align === 'center';

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.65, ease: 'easeOut' },
      }
    : { ref };

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex flex-col gap-3 ${center ? 'items-center text-center' : 'items-start'} ${className}`}
    >
      {/* Eyebrow label */}
      <div className={`inline-flex items-center gap-4 ${center ? 'flex-row-reverse' : ''}`}>
        <span className="w-10 h-[1px] bg-[#f0a850]" />
        <p className="font-sans text-[11px] font-bold text-[#f0a850] tracking-[0.3em] uppercase">
          {label}
        </p>
        {center && <span className="w-10 h-[1px] bg-[#f0a850]" />}
      </div>

      {/* Main heading */}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#f5ead4] leading-[1.1]">
        {heading}
      </h2>
    </Wrapper>
  );
}
