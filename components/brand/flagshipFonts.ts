import { Caveat, Fraunces, Instrument_Sans, Source_Code_Pro } from 'next/font/google'

// Flagship type (5 November 2026):
//   Fraunces        headings. Variable; optical size on; SOFT 50, WONK 0 are
//                   set in CSS (.v-serif and the heading classes).
//   Instrument Sans body.
//   Caveat          handwritten annotations only.
//   Source Code Pro category chips and the plain-text summary.
// Shared by app/(systems)/layout.tsx and the root not-found page (which
// renders the flagship outside that layout). /media keeps Plus Jakarta Sans
// from the root layout and never loads these.
export const serif = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
  variable: '--font-serif',
})
export const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})
export const mono = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-mono',
})
export const hand = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-hand',
})

/** The class string that puts the four font variables in scope. */
export const flagshipFontVariables = `${serif.variable} ${sans.variable} ${mono.variable} ${hand.variable}`
