import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: {
    default: 'Vicaria',
    template: '%s',
  },
  description: 'Vicaria takes the part of a recurring job that requires no judgement, and operates the system rather than licensing it, with Vicaria Media as its marketing arm.',
  metadataBase: new URL('https://vicaria.com.au'),
  openGraph: {
    type: 'website',
    siteName: 'Vicaria',
    url: 'https://vicaria.com.au',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}
