import type { CategoryTone } from '@/content/types'

// The flagship category palette, used for Outlook-style category chips and
// the states they mark (and, in order, the markers on the homepage
// principles). Colour means something here, never decoration.
//
// swatch: the 10×10 square, Sam's values (3 November 2026).
// tint:   the chip ground, Sam's values.
// text:   the swatch darkened to 72%, so the label reads as the same colour.
//         Contrast on the tint: teal 7.59, amber 5.50, plum 8.17, sky 7.15,
//         sage 6.78, rose 6.99, slate 9.23 — all AA. (The swatches themselves
//         are not text colours: amber's swatch on its tint is only 3.2.)
// border: 32% swatch over the tint.
// The label always carries the meaning, so colour is never the only signal.
export const CATEGORY_TONES: Record<CategoryTone, { swatch: string; text: string; tint: string; border: string }> = {
  teal: { swatch: '#1F6F6B', text: '#16504D', tint: '#DCEDEC', border: '#A0C5C3' },
  amber: { swatch: '#B7791F', text: '#845716', tint: '#FBEFD9', border: '#E5C99D' },
  plum: { swatch: '#7B4A8C', text: '#593565', tint: '#F0E6F4', border: '#CBB4D3' },
  sky: { swatch: '#2B6CB0', text: '#1F4E7F', tint: '#E1ECF7', border: '#A7C3E0' },
  sage: { swatch: '#4F7A4A', text: '#395835', tint: '#E5EFE2', border: '#B5CAB1' },
  rose: { swatch: '#B2455A', text: '#803241', tint: '#F8E3E7', border: '#E2B0BA' },
  slate: { swatch: '#4A5568', text: '#353D4B', tint: '#E9ECF0', border: '#B6BCC4' },
}

/** The six category colours in order, for sequences such as the principles. */
export const TONE_SEQUENCE: CategoryTone[] = ['teal', 'amber', 'plum', 'sky', 'sage', 'rose']
