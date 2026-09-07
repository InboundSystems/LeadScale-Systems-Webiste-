'use client'

import { motion } from 'framer-motion'
import { audience } from '@/content/audience'

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">WHO THIS IS FOR</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Owner-Operated Businesses
            <br />
            <span className="text-[#2e3650] font-bold">Without A Back Office.</span>
          </h2>
          <p className="text-[#6b7a99] text-lg md:text-xl max-w-2xl leading-relaxed">{audience.audience.description}</p>
        </motion.div>

        {audience.audience.businessTypes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {audience.audience.businessTypes.map((type) => (
              <span
                key={type}
                className="bg-[var(--card-fill)] border border-[var(--hairline)] text-[#94a3b8] text-xs px-4 py-2 rounded-full"
              >
                {type}
              </span>
            ))}
          </motion.div>
        )}

        {audience.audience.profile.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3 max-w-xl"
          >
            {audience.audience.profile.map((line) => (
              <div key={line} className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">▸</span>
                <p className="text-[#6b7a99] text-sm leading-relaxed">{line}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
