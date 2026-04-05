'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#080814] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-6">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
              We&apos;re Not an Agency.
              <br />
              We&apos;re a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Growth Engine.
              </span>
            </h2>
          </motion.div>

          {/* Right: copy + stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-[#6b7a99] text-base leading-relaxed mb-6">
              LeadScale Systems was founded on a simple belief: marketing should be a{' '}
              <span className="text-white font-semibold">predictable, engineered system</span> — not a guessing
              game. We don&apos;t do &quot;social media management.&quot; We build client acquisition infrastructure.
            </p>
            <p className="text-[#6b7a99] text-base leading-relaxed mb-12">
              Our team combines performance marketing expertise with systems thinking. Every campaign, every piece of
              content is designed to feed into a larger machine that generates leads, books calls, and drives revenue
              — month after month.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '2+', label: 'Years in business' },
                { value: '100%', label: 'Client retention rate' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-6"
                >
                  <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#6b7a99] text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
