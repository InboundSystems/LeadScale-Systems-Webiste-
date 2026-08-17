'use client'

import { motion } from 'framer-motion'
import { offer } from '@/content/offer'

export default function WhatGetsDone() {
  return (
    <section id="what-gets-done" className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">WHAT WE ACTUALLY DO</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            The Follow-Up
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              You Don’t Have Time For.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {offer.whatGetsDone.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[var(--card-fill)] backdrop-blur-xl border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5 flex items-start gap-3"
            >
              <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#94a3b8] text-sm leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#6b7a99] text-sm max-w-xl"
        >
          No dashboard to log into. No new software to learn. You keep running your business exactly the way you already do.
        </motion.p>
      </div>
    </section>
  )
}
