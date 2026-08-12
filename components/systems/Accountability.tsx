'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

const items = [
  {
    title: 'We own one number',
    description:
      "Not a dashboard full of metrics. One number, the one the diagnostic measured, and we're the ones accountable for moving it.",
  },
  {
    title: 'Reported against your baseline',
    description:
      'Every month, against the number we captured on day one — not a vague trend, a specific before-and-after.',
  },
  {
    title: "Nothing you can't check",
    description:
      "Because it's a configured module and not a custom build, there's nothing running that only we understand. If something needs checking, it can be checked — by you, or by whoever you bring in next.",
  },
  {
    title: 'Full visibility',
    description:
      "You see what we see. Access to the system, the reporting, all of it — nothing running in the background you can't check.",
  },
  {
    title: 'No lock-in',
    description: 'The system is yours to run with or without us. If the retainer stops, the install stays.',
  },
  {
    title: 'Local, in person',
    description:
      'SEQ-based, on site for the diagnostic and available in person after. Not a call centre in another timezone.',
  },
]

export default function Accountability() {
  return (
    <section id="accountability" className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">ACCOUNTABILITY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            What we&apos;re on the hook for.
            <br />
            <span className="text-[#2e3650] font-bold">Every single month.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Card key={item.title} delay={i * 0.08} className="p-7">
              <h3 className="text-white text-base font-bold mb-3">{item.title}</h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
