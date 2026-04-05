'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BookPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#05050f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <section className="py-20 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-6"
          >
            NEXT STEPS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Book Your Free
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Strategy Call
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-[#6b7a99] text-lg leading-relaxed mb-12 max-w-lg mx-auto"
          >
            Book a free 30-minute strategy call. We&apos;ll audit your current marketing, identify gaps, and show
            you exactly how to generate more qualified leads.
          </motion.p>

          {/* Booking card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-12 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <p className="text-[#6b7a99] text-sm mb-8">
              Booking calendar coming soon.
            </p>
            <a
              href="mailto:hello@leadscalesystems.com"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0891b2] text-white font-bold tracking-wider text-sm px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-[1.04]"
            >
              EMAIL US TO BOOK
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <p className="text-[#374151] text-xs mt-5">
              hello@leadscalesystems.com
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[#374151] text-xs mb-10"
          >
            No commitment required. No sales pressure. Just a conversation about your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/" className="text-[#4a5568] hover:text-white text-xs font-semibold tracking-widest transition-colors duration-200">
              ← BACK TO HOME
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
