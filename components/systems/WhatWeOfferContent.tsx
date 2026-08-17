'use client'

import { motion } from 'framer-motion'
import { audience } from '@/content/audience'
import { systems } from '@/content/systems'

export default function WhatWeOfferContent() {
  return (
    <div className="pt-28 pb-28">
      {/* Parent intro */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Systems We Build
            <br />
            And Run.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {audience.whoWeAre.statement} Each one takes a recurring job off your plate entirely. Here&apos;s the
            first of these.
          </motion.p>
        </div>
      </section>

      {/* Systems */}
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
              <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-3">{system.name}</h2>
              <p className="text-[#94a3b8] text-base leading-relaxed">{system.shortDescription}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
