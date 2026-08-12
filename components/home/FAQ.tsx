'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface FaqItem {
  question: string
  answer: string
}

interface FAQProps {
  eyebrow: string
  headingLine1: string
  headingAccent: string
  intro: string
  faqs: FaqItem[]
}

export default function FAQ({ eyebrow, headingLine1, headingAccent, intro, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-5">{eyebrow}</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {headingLine1}
                <br />
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
                  {headingAccent}
                </span>
              </h2>
              <p className="text-[#6b7a99] text-sm leading-relaxed mt-6 max-w-xs">{intro}</p>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col"
          >
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group gap-4"
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors duration-200 ${openIndex === i ? 'text-white' : 'text-[#6b7a99] group-hover:text-[#94a3b8]'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-gradient-to-br from-[var(--accent)] to-[var(--accent-deep)] border-transparent rotate-45' : 'border-white/[0.1] group-hover:border-white/20'}`}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#6b7a99] text-sm leading-relaxed pb-6 pr-10">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
