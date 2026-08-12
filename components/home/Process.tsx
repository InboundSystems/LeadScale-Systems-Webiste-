'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    label: 'DEEP DIAGNOSTIC',
    title: 'Audit',
    description:
      'We review your current marketing, identify gaps, and map out exactly where growth is being left on the table. You get clarity on what to fix first and why.',
  },
  {
    num: '02',
    label: 'SYSTEM ARCHITECTURE',
    title: 'Build',
    description:
      'We build the infrastructure — funnels, campaigns, content systems, and automations — designed to attract the right audience and convert them into enquiries.',
  },
  {
    num: '03',
    label: 'CONTROLLED GROWTH',
    title: 'Scale',
    description:
      'Weekly reporting, continuous testing, and month-over-month growth. We track what matters and scale what works — turning marketing into a predictable revenue engine.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Three phases to
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              predictable revenue
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative bg-[var(--card-fill)] backdrop-blur-xl border border-[var(--hairline)] rounded-[var(--radius-card)] p-8 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-400 group"
            >
              {/* Large background number */}
              <div className="absolute top-4 right-6 text-[80px] font-extrabold leading-none text-white/[0.025] select-none pointer-events-none">
                {phase.num}
              </div>

              {/* Step badge */}
              <div className="w-12 h-12 rounded-[var(--radius-btn)] bg-white/[0.06] border border-white/10 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-sm font-extrabold">{phase.num}</span>
              </div>

              <p className="text-[#374151] text-xs font-bold tracking-[3px] mb-3">{phase.label}</p>
              <h3 className="text-white text-2xl font-extrabold mb-4">{phase.title}</h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
