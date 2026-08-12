'use client'

import { motion } from 'framer-motion'

interface NumberedStepProps {
  num: string
  label?: string
  title: string
  description: string
  delay?: number
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function NumberedStep({ num, label, title, description, delay = 0 }: NumberedStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className="relative bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-400 group"
    >
      <div className="absolute top-4 right-6 text-[80px] font-extrabold leading-none text-white/[0.025] select-none pointer-events-none">
        {num}
      </div>

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-1-hover)] flex items-center justify-center mb-7 shadow-[0_0_30px_rgb(var(--accent-1-rgb)/0.25)] group-hover:scale-110 transition-transform duration-300">
        <span className="text-white text-sm font-extrabold">{num}</span>
      </div>

      {label && <p className="text-[#374151] text-xs font-bold tracking-[0.2em] mb-3">{label}</p>}
      <h3 className="text-white text-2xl font-extrabold mb-4">{title}</h3>
      <p className="text-[#6b7a99] text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
