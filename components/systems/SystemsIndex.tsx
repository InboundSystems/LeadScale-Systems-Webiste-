'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { systems, systemsSectionIntro } from '@/content/systems'

// Corrected: the original list claimed "nothing is sent without a person
// reviewing it first" across both systems. False — The Booking Line sends
// confirmations and replies on its own once approval is discontinued after
// the first week. That claim now lives on The Front Office's own page,
// where it is true without qualification.
const crossSystemCommitments = [
  'Vicaria operates the system. No login is issued and no administration panel is provided.',
  'Systems are built on top of the tools the business already runs. Nothing is migrated and nothing is replaced.',
  'Nothing is deleted or moved out of the client’s reach.',
  'Commercial decisions — prices, deposits, refunds, cancellation terms — are fixed by the client and never varied by the system.',
  'Client data is stored in Australia and is returnable or deletable on request.',
]

export default function SystemsIndex() {
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
            SYSTEMS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            {systemsSectionIntro.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {systemsSectionIntro.body}
          </motion.p>
        </div>
      </section>

      {/* One card per system */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {systems.map((system, i) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--surface)] border border-white/5 rounded-xl p-10"
            >
              <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-3">
                {system.sector.toUpperCase()}
              </p>
              <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-3">{system.name}</h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">{system.shortDescription}</p>
              {system.slug && (
                <Link
                  href={`/systems/${system.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--accent-light)] hover:text-white font-semibold text-sm transition-colors"
                >
                  See what it does
                  <span className="opacity-60">→</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* What holds across every system */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold text-white mb-4"
          >
            What Holds Across Every System.
          </motion.h2>
          <div className="flex flex-col gap-4">
            {crossSystemCommitments.map((item, i) => (
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
    </div>
  )
}
