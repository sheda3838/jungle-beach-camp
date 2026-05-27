import React, { useState } from 'react';
import { WA_URL_PREFILL, WA_DISPLAY } from '../utils/whatsapp';

/* ─── WhatsApp SVG ────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.067 1.494 5.778L.057 23.093a.75.75 0 0 0 .93.894l5.426-1.426A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.517-5.227-1.415l-.374-.222-3.876 1.018 1.04-3.788-.243-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/**
 * FloatingWhatsApp
 * Fixed bottom-right button rendered globally from App.jsx.
 * Shows a subtle tooltip on hover with the phone number.
 */
export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-end gap-3">

      {/* Tooltip label */}
      <div
        className="pointer-events-none transition-all duration-300 overflow-hidden"
        style={{
          maxWidth: hovered ? '200px' : '0px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
        }}
      >
        <div
          className="whitespace-nowrap px-3 py-2 rounded-xl"
          style={{
            background: 'rgba(6,14,7,0.92)',
            border: '1px solid rgba(37,211,102,0.25)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="font-sans text-[11px] font-bold text-[#25d366] tracking-widest uppercase">
            Book Now
          </p>
          <p className="font-sans text-[10px] text-white/50 mt-0.5">{WA_DISPLAY}</p>
        </div>
      </div>

      {/* Button */}
      <a
        href={WA_URL_PREFILL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp — opens WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full cursor-pointer select-none transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #18a348 100%)',
          boxShadow: hovered
            ? '0 0 0 6px rgba(37,211,102,0.18), 0 12px 36px rgba(37,211,102,0.50)'
            : '0 0 0 0px rgba(37,211,102,0), 0 6px 24px rgba(37,211,102,0.35)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            animation: 'waPulse 2.5s ease-out infinite',
            background: 'rgba(37,211,102,0.25)',
          }}
        />

        <WhatsAppIcon />
      </a>

      {/* Keyframe for pulse ring */}
      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
