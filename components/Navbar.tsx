'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Wordmark from '@/components/brand/Wordmark'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  homeHref: string
  wordmark: string
  navLinks: NavLink[]
  ctaHref: string
  ctaLabel: string
}

export default function Navbar({ homeHref, wordmark, navLinks, ctaHref, ctaLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--ink)]/80 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <Image src="/logo-icon-transparent.png" alt={wordmark} width={32} height={32} className="object-contain" />
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-[#64748b] hover:text-white text-xs font-semibold tracking-widest transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href={ctaHref}
            className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] hover:brightness-110 text-white text-xs font-bold tracking-[1px] px-5 py-2.5 rounded-[var(--radius-btn)] transition-all duration-300 shadow-[0_0_20px_rgb(var(--accent-rgb)/0.3)] hover:shadow-[0_0_30px_rgb(var(--accent-rgb)/0.5)] hover:scale-[1.04]"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--ink)]/95 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#64748b] hover:text-white text-sm font-semibold tracking-widest transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] text-white text-xs font-bold tracking-[1px] px-5 py-3 rounded-[var(--radius-btn)] transition-all duration-300 text-center mt-2 shadow-[0_0_20px_rgb(var(--accent-rgb)/0.3)]"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </nav>
  )
}
