'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    label: 'DEEP DIAGNOSTIC',
    title: 'Audit',
    description:
      'We review your current marketing, identify gaps, and map out exactly where growth is being left on the table. You get clarity on what to fix first and why.',
    gradient: 'from-blue-600 to-blue-400',
    glow: 'shadow-[0_0_30px_rgba(37,99,235,0.25)]',
  },
  {
    num: '02',
    label: 'SYSTEM ARCHITECTURE',
    title: 'Build',
    description:
      'We build the infrastructure — funnels, campaigns, content systems, and automations — designed to attract the right audience and convert them into enquiries.',
    gradient: 'from-cyan-600 to-cyan-400',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  },
  {
    num: '03',
    label: 'CONTROLLED GROWTH',
    title: 'Scale',
    description:
      'Weekly reporting, continuous testing, and month-over-month growth. We track what matters and scale what works — turning marketing into a predictable revenue engine.',
    gradient: 'from-violet-600 to-violet-400',
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.2)]',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-[#080814]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Three Phases to
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Predictable Revenue
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
              className="relative bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-400 group"
            >
              {/* Large background number */}
              <div className="absolute top-4 right-6 text-[80px] font-extrabold leading-none text-white/[0.025] select-none pointer-events-none">
                {phase.num}
              </div>

              {/* Step badge */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center mb-7 ${phase.glow} group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-sm font-extrabold">{phase.num}</span>
              </div>

              <p className="text-[#374151] text-xs font-bold tracking-[0.2em] mb-3">{phase.label}</p>
              <h3 className="text-white text-2xl font-extrabold mb-4">{phase.title}</h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
