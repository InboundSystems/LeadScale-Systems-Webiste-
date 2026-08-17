'use client'

import { motion } from 'framer-motion'
import { audience } from '@/content/audience'

export default function AboutContent() {
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
            WHO WE ARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Two People
            <br />
            in Brisbane.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {audience.about.intro}
          </motion.p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {audience.about.founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--surface)] border border-white/5 rounded-xl p-8"
              >
                <h3 className="text-white text-2xl font-extrabold mb-2">{founder.name}</h3>
                <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[0.15em]">{founder.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-base leading-relaxed max-w-2xl"
          >
            {audience.about.honesty}
          </motion.p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            HOW WE WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-12"
          >
            {audience.positioning.statement}
          </motion.h2>

          <div className="flex flex-col gap-6 mb-14">
            {audience.differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--surface)] border border-white/5 rounded-xl p-8"
              >
                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-base leading-relaxed max-w-2xl"
          >
            {audience.positioning.valueFraming}
          </motion.p>
        </div>
      </section>

      {/* Data handling */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            HOW WE HANDLE YOUR DATA
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-10 max-w-2xl"
          >
            Because we&apos;re asking to work with your client list, we think you&apos;re owed a plain answer, not a
            line buried in fine print. {audience.dataHandling.statement}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audience.dataHandling.specifics.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[var(--surface)] border border-white/5 rounded-lg px-5 py-4 flex items-center gap-3"
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
