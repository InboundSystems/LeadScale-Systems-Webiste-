'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-[#05050f]">

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -70, 40, 0], scale: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[250px] -left-[150px] w-[750px] h-[750px] rounded-full bg-blue-600/[0.14] blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -70, 40, 0], y: [0, 60, -50, 0], scale: [1, 0.88, 1.12, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[15%] -right-[180px] w-[650px] h-[650px] rounded-full bg-cyan-500/[0.09] blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 35, -50, 0], y: [0, 45, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
          className="absolute -bottom-[150px] left-[25%] w-[550px] h-[550px] rounded-full bg-violet-700/[0.08] blur-[120px]"
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-5 py-2 mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
          </span>
          <span className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em]">NOW ACCEPTING NEW CLIENTS</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[88px] font-extrabold leading-[1.0] tracking-tight mb-8"
        >
          More Enquiries.
          <br />
          More Booked Jobs.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            More Growth.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="text-[#6b7a99] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          We help tradespeople, contractors and local service businesses get found online — and turn their
          traffic into real, paying customers. Built as a system, not a one-off campaign.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0891b2] text-white font-bold tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_55px_rgba(37,99,235,0.65)] hover:scale-[1.04]"
          >
            BOOK A FREE STRATEGY CALL
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-[#6b7a99] hover:text-white font-semibold text-sm px-7 py-4 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
          >
            See our services
            <span className="opacity-60">↓</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05050f] to-transparent pointer-events-none" />
    </section>
  )
}
