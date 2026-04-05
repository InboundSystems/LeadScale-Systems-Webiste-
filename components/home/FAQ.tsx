'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How does LeadScale Systems help my business get more clients?',
    answer:
      'We build a multi-channel marketing system tailored to your business using SEO, paid advertising, and social media management working together. Rather than running one-off campaigns, we create a compounding growth engine — improving your search rankings so customers find you organically, running paid ads to generate immediate enquiries, and maintaining a consistent social presence that builds trust.',
  },
  {
    question: 'What results can I expect from paid advertising?',
    answer:
      'Paid advertising typically generates leads faster than organic channels — you can expect to see enquiries within the first few weeks of a campaign launching. We focus on building a system that improves over time: refining audiences, testing creative angles, and optimising bidding strategies so your cost per enquiry decreases as campaigns mature.',
  },
  {
    question: 'What does SEO actually do for a local business?',
    answer:
      'SEO positions your business to appear when potential customers search for the services you offer in your local area. This includes optimising your Google Business Profile, improving your website structure, and building local authority signals. The result is a consistent stream of organic enquiries from people actively looking to buy — without paying per click.',
  },
  {
    question: 'What makes LeadScale Systems different from other agencies?',
    answer:
      'Most agencies sell individual services and report on vanity metrics. We build integrated systems focused on one outcome: qualified enquiries that turn into booked jobs and paying clients. We work with a limited number of clients at a time to maintain quality, and we give you full access and transparency to everything we do on your behalf.',
  },
  {
    question: 'How long before I start seeing results?',
    answer:
      'Paid advertising can generate enquiries within weeks of launching. Social media builds credibility over 1–3 months of consistent posting. SEO is the longest runway — expect 3–6 months for rankings to move meaningfully, with compounding growth continuing for years. We run all three channels together so you get immediate results while longer-term channels build in the background.',
  },
  {
    question: 'Do I need all three services, or can I start with one?',
    answer:
      "You can absolutely start with one service. That said, the system works best when all three channels run together, because they reinforce each other. We'll recommend the right starting point based on your goals and budget during our initial strategy call.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 px-6 bg-[#05050f]">
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
              <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-5">COMMON QUESTIONS</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Digital Marketing
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  — FAQ
                </span>
              </h2>
              <p className="text-[#6b7a99] text-sm leading-relaxed mt-6 max-w-xs">
                Everything you need to know about working with LeadScale Systems.
              </p>
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
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-gradient-to-br from-blue-600 to-cyan-500 border-transparent rotate-45' : 'border-white/[0.1] group-hover:border-white/20'}`}>
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
