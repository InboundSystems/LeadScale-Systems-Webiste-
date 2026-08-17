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
          Built Around Your Business, Not A Template.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#6b7a99] text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          Every system starts with the job itself — what it involves, how it&apos;s done today, what &quot;done&quot;
          looks like for you. From there we build it and run it.
        </motion.p>
        <Button href="/how-it-works" variant="secondary">
          See how it works
          <span className="opacity-60">→</span>
        </Button>
      </div>
    </section>
  )
}
