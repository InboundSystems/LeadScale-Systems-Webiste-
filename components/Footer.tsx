import Link from 'next/link'
import Image from 'next/image'
import Wordmark from '@/components/brand/Wordmark'
import { audience } from '@/content/audience'

interface NavLink {
  label: string
  href: string
}

interface FooterProps {
  homeHref: string
  wordmark: string
  tagline: string
  navLinks: NavLink[]
  crossBrand: NavLink
}

// Shared across both brands — update once here, both /media and /ai pick it up.
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/leadscalesystems/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585639113200' },
  { label: 'Client Portal', href: 'https://onboarding-funnel-teal.vercel.app/' },
]

const contactEmail = audience.contact.email
const displayDomain = 'vicaria.com.au'

export default function Footer({ homeHref, wordmark, tagline, navLinks, crossBrand }: FooterProps) {
  return (
    <footer className="bg-[var(--ink)] border-t border-white/[0.05] pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href={homeHref} className="flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity w-fit">
              <Image src="/logo-icon-transparent.png" alt={wordmark} width={30} height={30} className="object-contain" />
              <Wordmark className="text-sm uppercase" />
            </Link>
            <p className="text-[#4a5568] text-sm leading-relaxed max-w-xs">{tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#374151] text-xs font-bold tracking-[0.2em] mb-6">NAVIGATION</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#4a5568] hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={crossBrand.href} className="text-[#4a5568] hover:text-white text-sm transition-colors duration-200">
                  {crossBrand.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#374151] text-xs font-bold tracking-[0.2em] mb-6">CONNECT</h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#4a5568] hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactEmail}?subject=Website%20enquiry`}
                  className="text-[#4a5568] hover:text-white text-sm transition-colors duration-200"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2e3650] text-xs">
            © {new Date().getFullYear()} Vicaria. All rights reserved.
          </p>
          <p className="text-[#2e3650] text-xs">{displayDomain}</p>
        </div>
      </div>
    </footer>
  )
}
