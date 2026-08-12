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
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeadScale AI Systems',
    url: 'https://leadscalesystems.net',
    title: 'LeadScale AI Systems | Launching Soon',
    description: 'LeadScale AI Systems is the second division of LeadScale Systems, launching soon.',
  },
}

const navLinks = [
  { label: 'THE LADDER', href: '/#ladder' },
  { label: 'THE DIAGNOSTIC', href: '/#diagnostic' },
  { label: 'ACCOUNTABILITY', href: '/#accountability' },
  { label: 'WHO WE ARE', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
]

const footerNavLinks = [
  { label: 'The Ladder', href: '/#ladder' },
  { label: 'The Diagnostic', href: '/#diagnostic' },
  { label: 'Accountability', href: '/#accountability' },
  { label: 'Who We Are', href: '/#about' },
  { label: 'Get In Touch', href: '/enquire' },
]

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="ai">
      <Navbar
        homeHref="/"
        wordmark="LeadScale AI Systems"
        navLinks={navLinks}
        ctaHref="/enquire"
        ctaLabel="GET IN TOUCH"
      />
      <main>{children}</main>
      <Footer
        homeHref="/"
        wordmark="LeadScale AI Systems"
        tagline="The second division of LeadScale Systems. Details coming soon."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'LeadScale Media Systems', href: '/media' }}
      />
    </BrandProvider>
  )
}
