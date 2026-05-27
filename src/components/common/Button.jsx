import React from 'react';

/**
 * Button
 * Standardised button / anchor used across the whole site.
 *
 * Props:
 *  variant   {'primary' | 'ghost'}  default 'primary'
 *  href      {string}   — renders an <a> when provided
 *  onClick   {function} — click handler (when no href)
 *  disabled  {boolean}
 *  type      {string}   — 'button' | 'submit', default 'button'
 *  className {string}   — extra classes
 *  children  {ReactNode}
 */
export default function Button({
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-sans font-bold text-xs tracking-[0.15em] uppercase rounded-full px-8 py-3.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'text-[#0a0f0a] bg-gradient-to-br from-[#f0a850] to-[#c87941] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(200,121,65,0.45)]',
    ghost:
      'text-[#f5ead4]/90 bg-transparent border border-[#f5ead4]/35 hover:border-[#f0a850]/70 hover:text-[#f0a850] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} {...rest}>
      {children}
    </button>
  );
}
