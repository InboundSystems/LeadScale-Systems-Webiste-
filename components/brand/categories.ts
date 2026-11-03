import type { CategoryTone } from '@/content/types'

// The flagship category palette (7 November 2026): blue, violet, sky, cyan,
// fuchsia and slate. Indigo is Vicaria Media's and is never used here. Used
// for Outlook-style category chips and the states they mark, the same
// everywhere (homepage inbox, cards, /systems/front-office), and for the eye
// motif (EyeDot) in the section colour. Colour means something, never
// decoration.
//
// Chip text on its tint (AA on light and dark grounds alike, since the chip
// carries its own tint): blue 7.15, violet 7.57, sky 6.59, cyan 6.49,
// fuchsia 7.08, slate 9.45, neutral 10.35. The label always carries the
// meaning, so colour is never the only signal.
//
// Assignments (content/systems.ts): 00 Unclear violet, 01 Appointments blue,
// 02 Patient Enquiries sky, 03 Referrals cyan, 04 Accounts slate, 05
// Suppliers (The Front Office's working day only) fuchsia; person labels such
// as For Dr Smith are neutral (white chip, slate text).
//
// Retired: teal, amber, plum, sage, rose, saffron, indigo. Do not bring them back.
export const CATEGORY_TONES: Record<CategoryTone, { swatch: string; text: string; tint: string; border: string }> = {
  blue: { swatch: '#2563EB', text: '#1E40AF', tint: '#DBEAFE', border: '#93C5FD' },
  violet: { swatch: '#7C3AED', text: '#5B21B6', tint: '#EDE9FE', border: '#C4B5FD' },
  sky: { swatch: '#0284C7', text: '#075985', tint: '#E0F2FE', border: '#7DD3FC' },
  cyan: { swatch: '#0891B2', text: '#155E75', tint: '#CFFAFE', border: '#67E8F9' },
  fuchsia: { swatch: '#A21CAF', text: '#86198F', tint: '#FAE8FF', border: '#F0ABFC' },
  slate: { swatch: '#475569', text: '#334155', tint: '#F1F5F9', border: '#CBD5E1' },
  neutral: { swatch: '#64748B', text: '#334155', tint: '#FFFFFF', border: '#CBD5E1' },
}

/** The category colours in order, for sequences (the footer's row of
 *  squares). */
export const TONE_SEQUENCE: CategoryTone[] = ['blue', 'violet', 'sky', 'cyan', 'fuchsia', 'slate']
