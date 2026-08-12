'use client'

import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <section id="about" className="py-28 px-6 bg-[var(--surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
              We&apos;re not a software company.
              <br />
              We&apos;re{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
                the sparky.
              </span>
            </h2>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-[#6b7a99] text-base leading-relaxed mb-6">
              If you&apos;re running Simpro, ServiceTitan, AroFlo, Tradify, ServiceM8 or Fergus, most of these
              already ship the tool natively. The tool was never the scarce thing. What&apos;s scarce is someone who
              walks in, measures what&apos;s actually leaking, configures it correctly for your business, and stays
              on the hook for the result.
            </p>
            <p className="text-[#6b7a99] text-base leading-relaxed">
              Bunnings sells the gear. The sparky does the job and answers for the work. That&apos;s the role here
              — not a platform, not a subscription to a tool you have to configure yourself. Someone accountable,
              based in SEQ, who shows up.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
