'use client'

import { motion } from 'framer-motion'
import NumberedStep from '@/components/ui/NumberedStep'

const steps = [
  {
    num: '01',
    title: 'Diagnostic',
    description:
      'Two hours on site. We measure admin hours, response time, quote conversion and time-to-invoice, and hand you a one-page report with a dollar figure attached. You keep it either way.',
  },
  {
    num: '02',
    title: 'Install',
    description:
      'A fixed-scope build of our standard module, configured against the one bottleneck the diagnostic found. Same system every time — never a custom build, never a rebuild.',
  },
  {
    num: '03',
    title: 'Retainer',
    description:
      'This is the actual relationship. We own the number the diagnostic measured, report against it every month, and stay on the hook for it. The install is what gets you here.',
  },
]

export default function Ladder() {
  return (
    <section id="ladder" className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">HOW WE WORK</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Three Steps.
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              One Number We Own.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <NumberedStep key={step.num} num={step.num} title={step.title} description={step.description} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
