'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HowItWorksTeaser() {
  return (
    <section className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6"
        >
          How A System Is Built And Operated.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#6b7a99] text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          Each sector is researched before anything is built. Systems are constructed around the tools the business
          already uses. A single measure of performance is agreed before installation and reported monthly.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/how-it-works" variant="secondary">
            How Vicaria works
            <span className="opacity-60">→</span>
          </Button>
          <Button href="/what-we-offer" variant="secondary">
            What the Front Desk does
            <span className="opacity-60">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
