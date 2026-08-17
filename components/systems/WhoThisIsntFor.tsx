'use client'

import { motion } from 'framer-motion'
import { offer } from '@/content/offer'

export default function WhoThisIsntFor() {
  return (
    <section className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">WHO THIS ISN’T FOR</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Being Straight About Who Shouldn’t Bother.
          </h2>
          <p className="text-[#6b7a99] text-base leading-relaxed">{offer.whoThisIsntFor.intro}</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {offer.whoThisIsntFor.criteria.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5 flex items-start gap-3"
            >
              <span className="text-[#4a5568] mt-0.5 flex-shrink-0">—</span>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
