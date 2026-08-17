'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { audience } from '@/content/audience'

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4"
        >
          WHAT WE ACTUALLY DO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"
        >
          Recurring Work,
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
            Handled Properly.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mb-10"
        >
          {audience.whoWeAre.arrangement}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            href="/what-we-offer"
            className="inline-flex items-center gap-2 text-[var(--accent-light)] hover:text-white font-semibold text-sm transition-colors"
          >
            See what we currently run
            <span className="opacity-60">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
