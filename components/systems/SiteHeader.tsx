'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/content/audience'
import VicariaOwl from '@/components/brand/VicariaOwl'
import VicariaWordmark from '@/components/brand/VicariaWordmark'
import { ButtonLink, Container } from './ui'

// Flagship header. Media keeps components/Navbar.tsx and its own wordmark.
// Night: the header is ink, translucent with a blur once scrolled, and the
// logo is white (20.3:1 on ink).
//
// The logo: the owl mark (32px tall, so SYSTEMS in the wordmark is legible)
// and the VICARIA SYSTEMS wordmark, from components/brand (generated from
// public/brand/*.svg, never redrawn). The lockup is about 170px wide, over the
// 140px minimum, and fits at 400px.
//
// The owl blinks once per visit (sessionStorage), after the hero's own
// animation has finished: a 150ms dip in scaleY (app/globals.css, "Owl
// blink"). Never repeats; nothing under prefers-reduced-motion.
export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const [blink, setBlink] = useState(false)
  useEffect(() => {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (sessionStorage.getItem('vicaria-owl-blinked')) return
      sessionStorage.setItem('vicaria-owl-blinked', '1')
      setBlink(true)
    } catch {
      // Storage unavailable: no blink, which is fine.
    }
  }, [])

  // Night: ink at the top of the page; translucent ink with a blur once the
  // page has scrolled under it.
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isCurrent = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out ${
        scrolled
          ? 'border-[var(--hairline)] bg-[rgb(5_5_15/0.72)] backdrop-blur-md'
          : 'border-transparent bg-[var(--ground)]'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-[var(--radius-btn)] focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-[var(--ink)]"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Vicaria" className="flex shrink-0 items-center gap-2.5 text-white">
          <VicariaOwl className={`owl-mark h-8 w-auto ${blink ? 'owl-blink' : ''}`} />
          <VicariaWordmark className="h-[27px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.navLinks.map((link) => {
              const current = isCurrent(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? 'page' : undefined}
                    className={`text-[0.875rem] transition-colors duration-150 hover:text-[var(--ink)] ${
                      current
                        ? 'font-semibold text-white underline decoration-[var(--link)] decoration-2 underline-offset-[0.4em]'
                        : 'text-[var(--muted)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink link={site.navCta} className="hidden !px-4 !py-2.5 sm:inline-flex" />
          <button
            type="button"
            className="rounded-[var(--radius-btn)] border border-white/25 px-3 py-2 text-[0.875rem] font-semibold text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-[var(--hairline)] bg-[var(--ground)] lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {[...site.navLinks, site.navCta].map((link) => (
                <li key={link.href} className="border-b border-[var(--hairline)] last:border-b-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(link.href) ? 'page' : undefined}
                    className={`block py-3 text-[1rem] ${
                      isCurrent(link.href) ? 'font-semibold text-[var(--ink)]' : 'text-[var(--ink)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  )
}
