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
    default: 'LeadScale Systems',
    template: '%s',
  },
  description: 'LeadScale Systems is the parent company behind LeadScale Media Systems and LeadScale AI Systems.',
  metadataBase: new URL('https://leadscalesystems.net'),
  openGraph: {
    type: 'website',
    siteName: 'LeadScale Systems',
    url: 'https://leadscalesystems.net',
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
