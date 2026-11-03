import { Source_Code_Pro, Source_Sans_3, Source_Serif_4 } from 'next/font/google'

// Flagship type: Source Serif 4 for headings, Source Sans 3 for body, Source
// Code Pro for category labels. Shared by app/(systems)/layout.tsx and the
// root not-found page (which renders outside that layout). /media keeps Plus
// Jakarta Sans from the root layout. See docs/brand/leadscale-systems.md.
export const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-serif',
})
export const sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-sans',
})
export const mono = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-mono',
})

/** The class string that puts the three font variables in scope. */
export const flagshipFontVariables = `${serif.variable} ${sans.variable} ${mono.variable}`
