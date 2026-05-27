import React from 'react';
import { WA_URL_PREFILL } from '../../utils/whatsapp';

/* ─── WhatsApp SVG ────────────────────────────────────────────── */
function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.067 1.494 5.778L.057 23.093a.75.75 0 0 0 .93.894l5.426-1.426A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.517-5.227-1.415l-.374-.222-3.876 1.018 1.04-3.788-.243-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─── Style maps ──────────────────────────────────────────────── */
const VARIANTS = {
  primary: {
    base: 'text-[#0d1f0e] font-bold',
    bg:   'linear-gradient(135deg, #25d366 0%, #1aab55 100%)',
    shadow: '0 4px 18px rgba(37,211,102,0.30)',
    hoverShadow: '0 10px 30px rgba(37,211,102,0.45)',
  },
  secondary: {
    base: 'text-[#f5ead4] font-bold',
    bg:   'rgba(37,211,102,0.14)',
    shadow: '0 2px 12px rgba(37,211,102,0.12)',
    hoverShadow: '0 8px 24px rgba(37,211,102,0.28)',
    border: '1px solid rgba(37,211,102,0.30)',
  },
  outline: {
    base: 'text-[#25d366] font-bold',
    bg:   'transparent',
    shadow: 'none',
    hoverShadow: '0 6px 20px rgba(37,211,102,0.22)',
    border: '1px solid rgba(37,211,102,0.50)',
  },
};

const SIZES = {
  sm: 'px-5 py-2.5 text-[11px] gap-2 rounded-full',
  md: 'px-6 py-3   text-[12px] gap-2.5 rounded-full',
  lg: 'px-8 py-3.5 text-[13px] gap-3 rounded-full',
};

const ICON_SIZES = { sm: 'w-3.5 h-3.5', md: 'w-4 h-4', lg: 'w-[18px] h-[18px]' };

/**
 * WhatsAppButton
 *
 * Props:
 *  text      {string}  button label                default: "Chat on WhatsApp"
 *  variant   {string}  primary | secondary | outline  default: "primary"
 *  size      {string}  sm | md | lg                default: "md"
 *  showIcon  {boolean} show WhatsApp icon          default: true
 *  className {string}  extra classes
 */
export default function WhatsAppButton({
  text     = 'Chat on WhatsApp',
  variant  = 'primary',
  size     = 'md',
  showIcon = true,
  className = '',
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size]       || SIZES.md;

  return (
    <a
      href={WA_URL_PREFILL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} — opens WhatsApp`}
      className={[
        'inline-flex items-center justify-center font-sans tracking-[0.12em] uppercase',
        'transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03]',
        'select-none cursor-pointer',
        v.base, s, className,
      ].join(' ')}
      style={{
        background: v.bg,
        boxShadow: v.shadow,
        border: v.border || 'none',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = v.hoverShadow; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = v.shadow; }}
    >
      {showIcon && <WhatsAppIcon className={ICON_SIZES[size]} />}
      {text}
    </a>
  );
}
