'use client'

import { motion } from 'framer-motion'
import NumberedStep from '@/components/ui/NumberedStep'

const steps = [
  {
    num: '01',
    label: 'ON SITE',
    title: 'Two hours',
    description:
      'We walk your operation for two hours — how enquiries come in, how quotes go out, how jobs get invoiced. No prep required on your end.',
  },
  {
    num: '02',
    label: 'MEASURED',
    title: 'Four numbers',
    description:
      'Admin hours per week. Inbound response time. Quote-to-job conversion. Time-to-invoice. The same four, every time, so the numbers actually mean something.',
  },
  {
    num: '03',
    label: 'REPORT',
    title: 'Yours either way',
    description: 'A one-page report with a dollar figure attached to it. You keep it whether you hire us or not.',
  },
]

export default function Diagnostic() {
  return (
    <section id="diagnostic" className="py-28 px-6 bg-[#080814]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[var(--accent-1)] text-xs font-semibold tracking-[0.25em] mb-4">THE DIAGNOSTIC</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Two hours on site.
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
              One report you keep.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {steps.map((step, i) => (
            <NumberedStep
              key={step.num}
              num={step.num}
              label={step.label}
              title={step.title}
              description={step.description}
              delay={i * 0.12}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-2 border-[var(--accent-1)] pl-6 py-2"
        >
          <p className="text-white text-xl md:text-2xl font-bold leading-snug max-w-2xl">
            You keep the report on what&apos;s leaking. Hire us or don&apos;t. That&apos;s the whole point.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
