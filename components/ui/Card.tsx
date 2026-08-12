'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function Card({ children, className = '', delay = 0, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={`bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 ${
        hover ? 'hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-400' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
