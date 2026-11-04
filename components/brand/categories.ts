import type { CategoryTone } from '@/content/types'

// The flagship category palette (night story, 9 November 2026): black,
// white, dark blue and light blue only. Every chip is a shade of the blue
// family, a white outline or slate, and the number in its label is what
// tells one from another (colour is never the only signal). No violet,
// purple, fuchsia, indigo or cyan anywhere on the flagship.
//
//   outline  00 Unclear            a hollow swatch, white outline on dark, ink outline in a lit screen
//   blue     01 Appointments       #2563EB
//   sky      02 Patient Enquiries  light blue #60A5FA / #93C5FD
//   navy     03 Referrals          dark blue #1E3A8A (a solid chip in lit screens)
//   slate    04 Accounts
//   neutral  person labels (For Dr Smith): white chip, slate text
//
// Each tone has a light set (inside lit screens) and a dark set (on the dark
// page: section chips, the folder rail, the footer squares). CategoryChip
// carries both and app/globals.css ("Chips") picks. Contrast of chip text on
// its own tint (checked by script, 9 November 2026), light set on white / dark
// set on ink: outline 17.85 / 18.52, blue 7.15 / 11.92, sky 6.16 / 13.35,
// navy 10.36 / 11.99, slate 9.45 / 13.40, neutral 10.35 / 17.39.
type ToneSet = { swatch: string; text: string; tint: string; border: string }

export const CATEGORY_TONES: Record<CategoryTone, ToneSet & { hollow?: boolean; dark: ToneSet }> = {
  outline: { swatch: '#0F172A', text: '#0F172A', tint: '#FFFFFF', border: '#0F172A', hollow: true,
    dark: { swatch: '#F1F5F9', text: '#F1F5F9', tint: 'rgb(255 255 255 / 0)', border: 'rgb(255 255 255 / 0.7)' } },
  blue: { swatch: '#2563EB', text: '#1E40AF', tint: '#DBEAFE', border: '#93C5FD',
    dark: { swatch: '#3B82F6', text: '#BFDBFE', tint: 'rgb(59 130 246 / 0.18)', border: 'rgb(59 130 246 / 0.45)' } },
  sky: { swatch: '#60A5FA', text: '#1D4ED8', tint: '#EFF6FF', border: '#BFDBFE',
    dark: { swatch: '#93C5FD', text: '#DBEAFE', tint: 'rgb(147 197 253 / 0.14)', border: 'rgb(147 197 253 / 0.4)' } },
  navy: { swatch: '#93C5FD', text: '#FFFFFF', tint: '#1E3A8A', border: '#1E3A8A',
    dark: { swatch: '#60A5FA', text: '#DBEAFE', tint: 'rgb(30 58 138 / 0.6)', border: 'rgb(96 165 250 / 0.35)' } },
  slate: { swatch: '#475569', text: '#334155', tint: '#F1F5F9', border: '#CBD5E1',
    dark: { swatch: '#94A3B8', text: '#E2E8F0', tint: 'rgb(148 163 184 / 0.16)', border: 'rgb(148 163 184 / 0.4)' } },
  neutral: { swatch: '#64748B', text: '#334155', tint: '#FFFFFF', border: '#CBD5E1',
    dark: { swatch: '#94A3B8', text: '#F1F5F9', tint: 'rgb(255 255 255 / 0.04)', border: 'rgb(255 255 255 / 0.22)' } },
}

/** The category colours in order, for sequences (the footer's row of
 *  squares): dark blue to light blue, then white and slate. */
export const TONE_SEQUENCE: CategoryTone[] = ['navy', 'blue', 'sky', 'outline', 'slate']
