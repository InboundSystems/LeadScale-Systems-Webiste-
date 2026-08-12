import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Structurally ready, not launched — the vertical hasn't locked yet (see docs/business-model.md).
// Keep noindex/nofollow and the sitemap/robots exclusion until the business decides to go live.
export const metadata: Metadata = {
  title: "LeadScale Systems | Find What's Leaking in Your Back Office",
  description:
    "We measure exactly what's leaking in your trade or contracting business — admin hours, response time, quotes, invoicing — and stay accountable for the number every month.",
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeadScale Systems',
    url: 'https://leadscalesystems.net',
    title: "LeadScale Systems | Find What's Leaking in Your Back Office",
    description:
      "We measure exactly what's leaking in your trade or contracting business — admin hours, response time, quotes, invoicing — and stay accountable for the number every month.",
  },
}

const navLinks = [
  { label: 'THE LADDER', href: '/#ladder' },
  { label: 'THE DIAGNOSTIC', href: '/#diagnostic' },
  { label: 'ACCOUNTABILITY', href: '/#accountability' },
  { label: 'WHO WE ARE', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'MEDIA SYSTEMS', href: '/media' },
]

const footerNavLinks = [
  { label: 'The Ladder', href: '/#ladder' },
  { label: 'The Diagnostic', href: '/#diagnostic' },
  { label: 'Accountability', href: '/#accountability' },
  { label: 'Who We Are', href: '/#about' },
  { label: 'Get In Touch', href: '/enquire' },
]

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="systems">
      <Navbar
        homeHref="/"
        wordmark="LeadScale Systems"
        navLinks={navLinks}
        ctaHref="/enquire"
        ctaLabel="GET IN TOUCH"
      />
      <main>{children}</main>
      <Footer
        homeHref="/"
        wordmark="LeadScale Systems"
        tagline="We measure what's leaking in trade and contracting back offices, then stay accountable for fixing it."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'LeadScale Media Systems', href: '/media' }}
      />
    </BrandProvider>
  )
}
