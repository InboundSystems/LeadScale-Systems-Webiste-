'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

const problems = [
  {
    title: 'Admin Hours',
    description:
      "Someone on your team is doing the same manual admin every week — chasing paperwork, re-entering data, following up jobs by hand. That's time not spent on the tools, and it doesn't show up on an invoice.",
  },
  {
    title: 'Inbound Response Time',
    description:
      'A call or enquiry comes in and sits. By the time someone replies, the customer has already rung the next name on the list. Response time is the difference between a job and a missed job.',
  },
  {
    title: 'Quote-to-Job Conversion',
    description:
      "Quotes go out and go quiet. No follow-up system, no visibility on why a quote stalled. Every unconverted quote is a job you already did the costing for and didn't get paid on.",
  },
  {
    title: 'Time-to-Invoice',
    description:
      "The job's done, but the invoice takes days — or a reminder — to go out. Every day between a finished job and a sent invoice is cash sitting somewhere it shouldn't be.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">WHERE IT GOES WRONG</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Before We Fix Anything,
            <br />
            <span className="text-[#2e3650] font-bold">We Find What&apos;s Actually Broken.</span>
          </h2>
          <p className="text-[#6b7a99] text-lg md:text-xl max-w-2xl leading-relaxed">
            Every trade business bleeds money in the same four places. Most operators can feel it without being able
            to point to it. The diagnostic measures all four before anything gets built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <Card key={item.title} delay={i * 0.1}>
              <h3 className="text-white text-lg font-bold mb-3 leading-snug">{item.title}</h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
