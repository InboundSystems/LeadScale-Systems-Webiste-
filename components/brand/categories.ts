import type { CategoryTone } from '@/content/types'

// The flagship category palette (7 November 2026): the original site's blue,
// indigo and violet family, used for Outlook-style category chips and the
// states they mark, the same everywhere (homepage inbox, cards,
// /systems/front-office). Colour means something here, never decoration.
//
// Chip text on its tint (AA on light and dark grounds alike, since the chip
// carries its own tint): blue 7.15, indigo 8.06, violet 7.57, sky 6.59,
// slate 9.45, cyan 6.49, neutral 10.35. The label always carries the
// meaning, so colour is never the only signal.
//
// Assignments (content/systems.ts): 00 Unclear violet, 01 Appointments blue,
// 02 Patient Enquiries sky, 03 Referrals indigo, 04 Accounts slate, 05
// Suppliers (The Front Office's working day only) cyan; person labels such
// as For Dr Smith are neutral (white chip, slate text).
//
// Retired: teal, amber, plum, sage, rose, saffron. Do not bring them back.
export const CATEGORY_TONES: Record<CategoryTone, { swatch: string; text: string; tint: string; border: string }> = {
  blue: { swatch: '#2563EB', text: '#1E40AF', tint: '#DBEAFE', border: '#93C5FD' },
  indigo: { swatch: '#4F46E5', text: '#3730A3', tint: '#E0E7FF', border: '#A5B4FC' },
  violet: { swatch: '#7C3AED', text: '#5B21B6', tint: '#EDE9FE', border: '#C4B5FD' },
  sky: { swatch: '#0284C7', text: '#075985', tint: '#E0F2FE', border: '#7DD3FC' },
  slate: { swatch: '#475569', text: '#334155', tint: '#F1F5F9', border: '#CBD5E1' },
  cyan: { swatch: '#0891B2', text: '#155E75', tint: '#CFFAFE', border: '#67E8F9' },
  neutral: { swatch: '#64748B', text: '#334155', tint: '#FFFFFF', border: '#CBD5E1' },
}

/** The category colours in order, for sequences (principle markers, the
 *  footer's row of squares). */
export const TONE_SEQUENCE: CategoryTone[] = ['blue', 'indigo', 'violet', 'sky', 'slate', 'cyan']
