import React from 'react';

/**
 * GlassCard
 * Standard glassmorphism card wrapper used throughout the site.
 *
 * Props:
 *  children  {ReactNode}
 *  className {string}   — extra Tailwind classes (e.g. rounded-3xl, p-7)
 *  style     {object}   — optional inline style overrides
 *  hover     {boolean}  — adds border glow on hover, default true
 *  as        {string}   — element tag, default 'div'
 */
export default function GlassCard({
  children,
  className = '',
  style = {},
  hover = true,
  as: Tag = 'div',
}) {
  return (
    <Tag
      className={`relative ${hover ? 'group' : ''} ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        ...style,
      }}
    >
      {/* Hover glow ring */}
      {hover && (
        <div
          className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(240,168,80,0.2)' }}
        />
      )}
      {children}
    </Tag>
  );
}
