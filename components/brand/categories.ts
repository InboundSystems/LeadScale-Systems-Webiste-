import type { CategoryTone } from '@/content/types'

// The flagship category palette, used only for Outlook-style category chips
// and the states they mark. Colour means something here: a category, never
// decoration. Each tone has a swatch (the square), a text colour and a tint
// (the chip ground). Contrast, text on tint: teal 7.10, amber 6.48, plum 8.20,
// sky 6.36, sage 6.23, rose 6.73, slate 7.75 — all AA. The label always
// carries the meaning, so colour is never the only signal.
export const CATEGORY_TONES: Record<CategoryTone, { swatch: string; text: string; tint: string; border: string }> = {
  teal: { swatch: '#2E6E6B', text: '#1F5754', tint: '#E7F0EF', border: '#B9D2D0' },
  amber: { swatch: '#B57A12', text: '#7A4D05', tint: '#FBF1DD', border: '#EBCB8E' },
  plum: { swatch: '#85508F', text: '#5F3469', tint: '#F3EAF5', border: '#D7BEDD' },
  sky: { swatch: '#3A84BA', text: '#1C5A86', tint: '#E5F0F8', border: '#B5D2E8' },
  sage: { swatch: '#6F9562', text: '#40603A', tint: '#EBF2E7', border: '#C3D6BC' },
  rose: { swatch: '#C25B70', text: '#8C3145', tint: '#F9E8EC', border: '#E8BCC6' },
  slate: { swatch: '#6B7A80', text: '#3F4C52', tint: '#EDF0F1', border: '#CBD3D6' },
}
