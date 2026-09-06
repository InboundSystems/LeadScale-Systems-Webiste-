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
          WHY WE RUN THEM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"
        >
          Why We Run Them
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
            Instead Of Selling Them.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
        >
          A system is only worth anything once it knows the business it’s in — the exceptions, the standing orders,
          the way this owner does things, the corrections made over eighteen months. That doesn’t come in a box and
          it isn’t something you can hand over on day one. So we don’t. We build it, we run it, and we stay
          accountable for what it produces.
        </motion.p>
      </div>
    </section>
  )
}
