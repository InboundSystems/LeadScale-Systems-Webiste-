import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Results', href: '/#expectations' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/book' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/leadscalesystems/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585639113200' },
  { label: 'Client Portal', href: 'https://onboarding-funnel-teal.vercel.app/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#05050f] border-t border-white/[0.05] pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity w-fit">
              <Image src="/logo-icon-transparent.png" alt="LeadScale Systems" width={30} height={30} className="object-contain" />
              <span className="text-white font-bold text-sm tracking-tight">LEADSCALE SYSTEMS</span>
            </Link>
            <p className="text-[#4a5568] text-sm leading-relaxed max-w-xs">
              Performance-accelerated marketing systems for businesses that refuse to rely on word of mouth alone.
            </p>
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
                  href="mailto:admin@leadscalesystems.net"
                  className="text-[#4a5568] hover:text-white text-sm transition-colors duration-200"
                >
                  admin@leadscalesystems.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2e3650] text-xs">
            © {new Date().getFullYear()} LeadScale Systems. All rights reserved.
          </p>
          <p className="text-[#2e3650] text-xs">leadscalesystems.com</p>
        </div>
      </div>
    </footer>
  )
}
