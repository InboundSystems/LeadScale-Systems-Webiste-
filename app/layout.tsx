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
    default: 'LeadScale Systems | Digital Marketing for Tradespeople & Local Businesses',
    template: '%s | LeadScale Systems',
  },
  description:
    'LeadScale Systems helps tradespeople, contractors and local service businesses get more enquiries through SEO, paid advertising, and social media — built as a system, not a one-off campaign.',
  keywords: [
    'digital marketing',
    'SEO',
    'paid traffic',
    'social media management',
    'local business marketing',
    'lead generation',
    'LeadScale Systems',
  ],
  metadataBase: new URL('https://leadscalesystems.com'),
  openGraph: {
    type: 'website',
    siteName: 'LeadScale Systems',
    url: 'https://leadscalesystems.com',
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
