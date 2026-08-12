'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAProps {
  eyebrow: string
  headingLine1: string
  headingAccent: string
  body: string
  buttonLabel: string
  buttonHref: string
  reassurance: string
}

export default function CTA({ eyebrow, headingLine1, headingAccent, body, buttonLabel, buttonHref, reassurance }: CTAProps) {
  return (
    <section id="cta" className="py-28 px-6 bg-[var(--surface)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--accent)]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[var(--accent-deep)]/[0.06] rounded-full blur-[80px]" />
      </div>

      {/* Border top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          {headingLine1}
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
            {headingAccent}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="text-[#6b7a99] text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.24 }}
        >
          <Link
            href={buttonHref}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] hover:brightness-110 text-white font-bold tracking-[1px] text-sm px-10 py-5 rounded-[var(--radius-btn)] transition-all duration-300 shadow-[0_0_35px_rgb(var(--accent-rgb)/0.4)] hover:shadow-[0_0_55px_rgb(var(--accent-rgb)/0.65)] hover:scale-[1.04]"
          >
            {buttonLabel}
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
          {reassurance}
        </motion.p>
      </div>
    </section>
  )
}
