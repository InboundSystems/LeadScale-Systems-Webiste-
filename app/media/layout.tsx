import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Vicaria Media | More Enquiries. More Booked Jobs. More Growth.',
    template: '%s | Vicaria Media',
  },
  description:
    'Vicaria Media helps tradespeople, contractors and local service businesses get found online and turn their traffic into real, paying customers through SEO, paid advertising, and social media.',
  alternates: { canonical: '/media' },
  openGraph: {
    type: 'website',
    siteName: 'Vicaria Media',
    url: 'https://leadscalesystems.net/media',
    title: 'Vicaria Media | More Enquiries. More Booked Jobs. More Growth.',
    description:
      'We help tradespeople, contractors and local service businesses get found online and turn their traffic into real, paying customers through SEO, paid advertising and social media.',
  },
}

const navLinks = [
  { label: 'VICARIA', href: '/' },
  { label: 'SERVICES', href: '/media#services' },
  { label: 'PROCESS', href: '/media#process' },
  { label: 'EXPECTATIONS', href: '/media#expectations' },
  { label: 'FAQ', href: '/media#faq' },
  { label: 'ABOUT', href: '/media#about' },
]

const footerNavLinks = [
  { label: 'Services', href: '/media#services' },
  { label: 'Process', href: '/media#process' },
  { label: 'Results', href: '/media#expectations' },
  { label: 'About', href: '/media#about' },
  { label: 'Contact', href: 'mailto:admin@leadscalesystems.net?subject=Website%20enquiry' },
]

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="media">
      <Navbar
        homeHref="/media"
        wordmark="Vicaria Media"
        navLinks={navLinks}
        ctaHref="mailto:admin@leadscalesystems.net?subject=Website%20enquiry"
        ctaLabel="GET STARTED"
      />
      <main>{children}</main>
      <Footer
        homeHref="/media"
        wordmark="Vicaria Media"
        tagline="Performance-accelerated marketing systems for businesses that refuse to rely on word of mouth alone."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'Vicaria', href: '/' }}
      />
    </BrandProvider>
  )
}
