'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Scroll reveal for the flagship: content rises gently into place as it
// reaches the viewport, once.
//   [data-reveal]          the element fades in and rises 18px.
//   [data-reveal-stagger]  its direct children do the same, one after the
//                          other, 70ms apart (capped), so lists arrive in order.
// The hidden state is CSS-only and applies only under html.js
// (app/globals.css, "Scroll reveal"), so without JavaScript everything is
// simply there; a failsafe reveals anything still hidden after 2.5s; under
// prefers-reduced-motion nothing moves. Re-runs on client navigation.
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement
        if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '')
        el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 70}ms`)
      })
    })
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)'))
    if (reduced || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-revealed'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
