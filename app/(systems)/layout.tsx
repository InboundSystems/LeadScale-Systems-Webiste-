import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Structurally ready, not launched — the offer hasn't been validated yet
// (see docs/business-model-v2.html). Keep noindex/nofollow and the
// sitemap/robots exclusion until the business decides to go live.
export const metadata: Metadata = {
  title: 'Vicaria | Back-Office Systems, Built And Run',
  description:
    'Back-office systems built and operated by Vicaria for small, appointment-based businesses, delivered as completed work rather than software.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Vicaria',
    url: 'https://leadscalesystems.net',
    title: 'Vicaria | Back-Office Systems, Built And Run',
    description:
      'Back-office systems built and operated by Vicaria for small, appointment-based businesses, delivered as completed work rather than software.',
  },
}

const navLinks = [
  { label: 'WHO IT\'S FOR', href: '/#who-its-for' },
  { label: 'WHAT WE OFFER', href: '/what-we-offer' },
  { label: 'HOW IT WORKS', href: '/how-it-works' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MEDIA', href: '/media' },
]

const footerNavLinks = [
  { label: 'Who It\'s For', href: '/#who-its-for' },
  { label: 'What We Offer', href: '/what-we-offer' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Get In Touch', href: '/enquire' },
]

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="systems">
      <Navbar
        homeHref="/"
        wordmark="Vicaria"
        navLinks={navLinks}
        ctaHref="/enquire"
        ctaLabel="GET IN TOUCH"
      />
      <main>{children}</main>
      <Footer
        homeHref="/"
        wordmark="Vicaria"
        tagline="Vicaria builds and operates back-office systems for small, owner-run service businesses. Brisbane, Australia."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'Vicaria Media', href: '/media' }}
      />
    </BrandProvider>
  )
}
