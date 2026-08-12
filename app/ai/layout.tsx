import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Structurally ready, not launched — the vertical hasn't locked yet (see docs/business-model.md).
// Keep noindex/nofollow and the sitemap/robots exclusion until the business decides to go live.
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

const navLinks = [
  { label: 'THE LADDER', href: '/ai#ladder' },
  { label: 'THE DIAGNOSTIC', href: '/ai#diagnostic' },
  { label: 'ACCOUNTABILITY', href: '/ai#accountability' },
  { label: 'WHO WE ARE', href: '/ai#about' },
  { label: 'FAQ', href: '/ai#faq' },
]

const footerNavLinks = [
  { label: 'The Ladder', href: '/ai#ladder' },
  { label: 'The Diagnostic', href: '/ai#diagnostic' },
  { label: 'Accountability', href: '/ai#accountability' },
  { label: 'Who We Are', href: '/ai#about' },
  { label: 'Get In Touch', href: '/ai/enquire' },
]

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="ai">
      <Navbar
        homeHref="/ai"
        wordmark="LeadScale AI Systems"
        navLinks={navLinks}
        ctaHref="/ai/enquire"
        ctaLabel="GET IN TOUCH"
      />
      <main>{children}</main>
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
