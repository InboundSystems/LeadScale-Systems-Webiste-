import { Plus_Jakarta_Sans, Source_Code_Pro } from 'next/font/google'

// Flagship type (7 November 2026): Plus Jakarta Sans, the original site's
// font, for headings (semibold, slightly tight tracking) and body (regular).
// Source Code Pro only for the category chips, the From / To headers, the
// counts line and the plain-text morning summary (which is a plain-text email
// and needs fixed columns).
// Retired: Fraunces, Instrument Sans, Caveat. Do not bring them back.
// Shared by app/(systems)/layout.tsx and the flagship 404 (which renders
// outside that layout). /media loads Plus Jakarta Sans separately from the
// root layout and is unaffected.
export const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})
export const mono = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-mono',
})

/** The class string that puts the font variables in scope. */
export const flagshipFontVariables = `${sans.variable} ${mono.variable}`
