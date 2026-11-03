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
type ToneSet = { swatch: string; text: string; tint: string; border: string }

// Night (8 November 2026): every tone also has a dark set, for chips on the
// dark page (section chips, the folder rail, bullets, the footer squares):
// a 400-shade swatch, a 16% tint, light text. Chip text on its dark tint, on
// ink / surface / band, is at least: blue 10.51, violet 10.82, sky 10.99,
// cyan 11.32, fuchsia 10.86, slate 12.08, neutral 13.59. Inside a lit screen
// (.lit) a chip uses the light set. CategoryChip carries both and
// app/globals.css ("Chips") picks.
export const CATEGORY_TONES: Record<CategoryTone, ToneSet & { dark: ToneSet }> = {
  blue: { swatch: '#2563EB', text: '#1E40AF', tint: '#DBEAFE', border: '#93C5FD',
    dark: { swatch: '#60A5FA', text: '#BFDBFE', tint: 'rgb(96 165 250 / 0.16)', border: 'rgb(96 165 250 / 0.4)' } },
  violet: { swatch: '#7C3AED', text: '#5B21B6', tint: '#EDE9FE', border: '#C4B5FD',
    dark: { swatch: '#A78BFA', text: '#DDD6FE', tint: 'rgb(167 139 250 / 0.16)', border: 'rgb(167 139 250 / 0.4)' } },
  sky: { swatch: '#0284C7', text: '#075985', tint: '#E0F2FE', border: '#7DD3FC',
    dark: { swatch: '#38BDF8', text: '#BAE6FD', tint: 'rgb(56 189 248 / 0.16)', border: 'rgb(56 189 248 / 0.4)' } },
  cyan: { swatch: '#0891B2', text: '#155E75', tint: '#CFFAFE', border: '#67E8F9',
    dark: { swatch: '#22D3EE', text: '#A5F3FC', tint: 'rgb(34 211 238 / 0.16)', border: 'rgb(34 211 238 / 0.4)' } },
  fuchsia: { swatch: '#A21CAF', text: '#86198F', tint: '#FAE8FF', border: '#F0ABFC',
    dark: { swatch: '#E879F9', text: '#F5D0FE', tint: 'rgb(232 121 249 / 0.16)', border: 'rgb(232 121 249 / 0.4)' } },
  slate: { swatch: '#475569', text: '#334155', tint: '#F1F5F9', border: '#CBD5E1',
    dark: { swatch: '#94A3B8', text: '#E2E8F0', tint: 'rgb(148 163 184 / 0.16)', border: 'rgb(148 163 184 / 0.4)' } },
  neutral: { swatch: '#64748B', text: '#334155', tint: '#FFFFFF', border: '#CBD5E1',
    dark: { swatch: '#94A3B8', text: '#F1F5F9', tint: 'rgb(255 255 255 / 0.04)', border: 'rgb(255 255 255 / 0.22)' } },
}

/** The category colours in order, for sequences (the footer's row of
 *  squares). */
export const TONE_SEQUENCE: CategoryTone[] = ['blue', 'violet', 'sky', 'cyan', 'fuchsia', 'slate']
