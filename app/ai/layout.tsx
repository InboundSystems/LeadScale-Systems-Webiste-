import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Placeholder only — remove noindex/nofollow once real AI Systems content ships.
export const metadata: Metadata = {
  title: 'LeadScale AI Systems | Launching Soon',
  description: 'LeadScale AI Systems is the second division of LeadScale Systems, launching soon.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/ai' },
  openGraph: {
    type: 'website',
    siteName: 'LeadScale AI Systems',
    url: 'https://leadscalesystems.net/ai',
    title: 'LeadScale AI Systems | Launching Soon',
    description: 'LeadScale AI Systems is the second division of LeadScale Systems, launching soon.',
  },
}

const navLinks: { label: string; href: string }[] = []

const footerNavLinks: { label: string; href: string }[] = []

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="ai">
      <Navbar
        homeHref="/ai"
        wordmark="LeadScale AI Systems"
        navLinks={navLinks}
        ctaHref="mailto:admin@leadscalesystems.net"
        ctaLabel="GET IN TOUCH"
      />
      <main>{children}</main>
      {/* Real service pages (app/ai/<service>/page.tsx) slot in here once the offering is finalised — this layout already brands them automatically. */}
      <Footer
        homeHref="/ai"
        wordmark="LeadScale AI Systems"
        tagline="The second division of LeadScale Systems. Details coming soon."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'LeadScale Media Systems', href: '/media' }}
      />
    </BrandProvider>
  )
}
