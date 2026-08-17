'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { offer } from '@/content/offer'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-[var(--ink)]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -70, 40, 0], scale: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[250px] -left-[150px] w-[750px] h-[750px] rounded-full bg-[var(--accent)]/[0.14] blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -70, 40, 0], y: [0, 60, -50, 0], scale: [1, 0.88, 1.12, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[15%] -right-[180px] w-[650px] h-[650px] rounded-full bg-[var(--accent-deep)]/[0.09] blur-[130px]"
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {offer.headline.eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.25em] mb-10"
          >
            {offer.headline.eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight mb-8 text-white"
        >
          {offer.headline.line1}
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
            {offer.headline.accent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="text-[#6b7a99] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          {offer.headline.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/enquire">
            GET IN TOUCH
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Button>
          <Link
            href="#who-its-for"
            className="inline-flex items-center gap-2 text-[#6b7a99] hover:text-white font-semibold text-sm px-7 py-4 rounded-[var(--radius-btn)] border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
          >
            Is this for me?
            <span className="opacity-60">↓</span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent pointer-events-none" />
    </section>
  )
}
