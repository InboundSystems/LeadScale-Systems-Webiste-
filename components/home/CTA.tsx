'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta" className="py-28 px-6 bg-[#080814] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-cyan-500/[0.06] rounded-full blur-[80px]" />
      </div>

      {/* Border top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-6"
        >
          READY TO SCALE?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Let&apos;s Build Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Client Acquisition Machine
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="text-[#6b7a99] text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Book a free 30-minute strategy call. We&apos;ll audit your current marketing, identify gaps, and show
          you exactly how to generate more qualified leads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.24 }}
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0891b2] text-white font-bold tracking-wider text-sm px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.45)] hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] hover:scale-[1.04]"
          >
            BOOK YOUR FREE CALL
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#374151] text-xs mt-8 tracking-wide"
        >
          No commitment required. No sales pressure. Just a conversation about your growth.
        </motion.p>
      </div>
    </section>
  )
}
