'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const STORAGE_KEY = 'leadscale-brand-choice'

function recordChoice(brand: 'media' | 'ai') {
  try {
    localStorage.setItem(STORAGE_KEY, brand)
    document.cookie = `${STORAGE_KEY}=${brand}; path=/; max-age=31536000`
  } catch {
    // localStorage unavailable (e.g. private browsing) — navigation still proceeds via the link's href.
  }
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'chooser_click', { brand })
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: 'chooser_click', brand })
  }
}

export default function BrandChooser() {
  const [remembered, setRemembered] = useState<'media' | 'ai' | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'media' || stored === 'ai') setRemembered(stored)
    } catch {
      // ignore
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#05050f] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        <Image
          src="/logo-icon-transparent.png"
          alt="LeadScale Systems"
          width={44}
          height={44}
          className="object-contain mx-auto mb-8"
        />

        <p className="text-[#64748b] text-xs font-semibold tracking-[0.25em] mb-5">LEADSCALE SYSTEMS</p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          One Company.
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Two Systems.
          </span>
        </h1>

        <p className="text-[#6b7a99] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
          LeadScale Systems is the parent company behind two focused divisions. Choose the one built for what you
          need.
        </p>

        {remembered && (
          <p className="mb-10">
            <Link
              href={remembered === 'media' ? '/media' : '/ai'}
              onClick={() => recordChoice(remembered)}
              className="inline-flex items-center gap-1.5 text-[#94a3b8] hover:text-white text-xs font-semibold tracking-widest transition-colors duration-200"
            >
              CONTINUE TO {remembered === 'media' ? 'MEDIA SYSTEMS' : 'AI SYSTEMS'} →
            </Link>
          </p>
        )}
        {!remembered && <div className="mb-10" />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <Link
            href="/media"
            onClick={() => recordChoice('media')}
            className="group bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] hover:border-blue-500/40 hover:bg-white/[0.05] rounded-2xl p-8 transition-all duration-300"
          >
            <p className="text-blue-400 text-xs font-bold tracking-[0.2em] mb-4">DIVISION 01</p>
            <h2 className="text-white text-2xl font-extrabold mb-3">LeadScale Media Systems</h2>
            <p className="text-[#6b7a99] text-sm leading-relaxed mb-6">
              SEO, paid traffic, social media and conversion-focused websites — the marketing system that gets your
              business found and turns traffic into paying customers.
            </p>
            <span className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest">
              ENTER MEDIA SYSTEMS
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </span>
          </Link>

          <Link
            href="/ai"
            onClick={() => recordChoice('ai')}
            className="group bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] hover:border-amber-500/40 hover:bg-white/[0.05] rounded-2xl p-8 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-amber-400 text-xs font-bold tracking-[0.2em]">DIVISION 02</p>
              <span className="bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full">
                COMING SOON
              </span>
            </div>
            <h2 className="text-white text-2xl font-extrabold mb-3">LeadScale AI Systems</h2>
            <p className="text-[#6b7a99] text-sm leading-relaxed mb-6">
              The next division of LeadScale Systems. Details are still being built — register your interest to
              hear when it launches.
            </p>
            <span className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest">
              ENTER AI SYSTEMS
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
