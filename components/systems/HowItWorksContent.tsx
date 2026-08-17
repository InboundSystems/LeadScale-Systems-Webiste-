'use client'

import { motion } from 'framer-motion'
import NumberedStep from '@/components/ui/NumberedStep'
import { audience } from '@/content/audience'

export default function HowItWorksContent() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            How A System Gets
            <br />
            Built And Run.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {audience.howItWorks.intro}
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audience.howItWorks.steps.map((step, i) => (
              <NumberedStep
                key={step.title}
                num={String(i + 1).padStart(2, '0')}
                title={step.title}
                description={step.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Data handling — a normal section, not the centrepiece */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold text-white mb-4"
          >
            How We Handle Your Data
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-2xl"
          >
            {audience.dataHandling.statement}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audience.dataHandling.specifics.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-5 py-4 flex items-center gap-3"
              >
                <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#94a3b8] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
