/**
 * WhatsApp Configuration
 * Single source of truth — update the number here and it propagates everywhere.
 */

export const WA_NUMBER      = '94764295475';           // E.164 without +
export const WA_MESSAGE     = 'Hi Jungle Beach Camp, I would like to make a booking.';
export const WA_URL         = `https://wa.me/${WA_NUMBER}`;
export const WA_URL_PREFILL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
export const WA_DISPLAY     = '+94 764 295 475';
