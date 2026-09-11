'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { systems, systemsSectionIntro } from '@/content/systems'

export default function SystemsSection() {
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
          SYSTEMS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          {systemsSectionIntro.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mb-12"
        >
          {systemsSectionIntro.body}
        </motion.p>

        <div className="flex flex-col gap-6">
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
                SYSTEM {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-3">{system.name}</h3>
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#6b7a99] text-sm leading-relaxed mt-8"
        >
          {systemsSectionIntro.closingLine}
        </motion.p>
      </div>
    </section>
  )
}
