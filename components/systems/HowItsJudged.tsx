'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { audience } from '@/content/audience'

export default function HowItsJudged() {
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
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">HOW IT'S JUDGED</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            {audience.howAnEngagementIsJudged.heading}
          </h2>
          <p className="text-[#6b7a99] text-base leading-relaxed">{audience.howAnEngagementIsJudged.intro}</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {audience.howAnEngagementIsJudged.measures.map((item, i) => (
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#6b7a99] text-sm leading-relaxed mt-8"
        >
          {audience.howAnEngagementIsJudged.closing}
        </motion.p>

        <div className="mt-8">
          <Button href="/how-it-works" variant="secondary">
            How Vicaria works
            <span className="opacity-60">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
