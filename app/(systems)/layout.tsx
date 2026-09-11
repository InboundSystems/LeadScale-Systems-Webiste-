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
    'Back-office systems built and operated by Vicaria for recurring administrative work that has no one dedicated to it, delivered as completed work rather than software.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Vicaria',
    url: 'https://vicaria.com.au',
    title: 'Vicaria | Back-Office Systems, Built And Run',
    description:
      'Back-office systems built and operated by Vicaria for recurring administrative work that has no one dedicated to it, delivered as completed work rather than software.',
  },
}

const navLinks = [
  { label: 'SYSTEMS', href: '/systems' },
  { label: 'HOW IT WORKS', href: '/how-it-works' },
  { label: 'DATA HANDLING', href: '/data-handling' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MEDIA', href: '/media' },
]

const footerNavLinks = [
  { label: 'Systems', href: '/systems' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Data Handling', href: '/data-handling' },
  { label: 'About', href: '/about' },
  { label: 'Get In Touch', href: '/enquire' },
  { label: 'Privacy', href: '/privacy' },
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
        tagline="Vicaria builds and operates back-office systems for recurring administrative work. Brisbane, Australia."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'Vicaria Media', href: '/media' }}
      />
    </BrandProvider>
  )
}
