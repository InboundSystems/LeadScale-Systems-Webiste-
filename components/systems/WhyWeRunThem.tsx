'use client'

import { motion } from 'framer-motion'

export default function WhyWeRunThem() {
  return (
    <section className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4"
        >
          OPERATED, NOT LICENSED
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"
        >
          Operated,
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
            Not Licensed.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
        >
          A system’s value comes from what it knows about the business it operates in. Which clients cancel and
          rebook. Where the published price differs from the price charged. The standing instructions that were
          never written down because everyone already knew them. That knowledge accumulates over months of
          operation and cannot be transferred at installation. Vicaria retains and operates each system, and
          remains accountable for what it produces.
        </motion.p>
      </div>
    </section>
  )
}
