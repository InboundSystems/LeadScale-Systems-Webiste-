import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Structurally ready, not launched — the offer hasn't been validated yet
// (see docs/business-model-v2.html). Keep noindex/nofollow and the
// sitemap/robots exclusion until the business decides to go live.
export const metadata: Metadata = {
  title: 'LeadScale Systems | Get Your Quiet Clients Back on the Books',
  description:
    'We go through your client list, find the ones who’ve stopped coming in, and get them booked back — for small, owner-run beauty and grooming businesses across Australia.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeadScale Systems',
    url: 'https://leadscalesystems.net',
    title: 'LeadScale Systems | Get Your Quiet Clients Back on the Books',
    description:
      'We go through your client list, find the ones who’ve stopped coming in, and get them booked back — for small, owner-run beauty and grooming businesses across Australia.',
  },
}

const navLinks = [
  { label: 'WHO IT\'S FOR', href: '/#who-its-for' },
  { label: 'WHAT WE DO', href: '/#what-gets-done' },
  { label: 'HOW IT WORKS', href: '/how-it-works' },
  { label: 'ABOUT', href: '/about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'MEDIA SYSTEMS', href: '/media' },
]

const footerNavLinks = [
  { label: 'Who It\'s For', href: '/#who-its-for' },
  { label: 'What We Do', href: '/#what-gets-done' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
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
        tagline="We take one recurring back-office job off small beauty and grooming businesses and do it, by hand, from Brisbane."
        navLinks={footerNavLinks}
        crossBrand={{ label: 'LeadScale Media Systems', href: '/media' }}
      />
    </BrandProvider>
  )
}
