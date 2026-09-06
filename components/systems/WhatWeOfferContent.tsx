'use client'

import { motion } from 'framer-motion'
import { audience } from '@/content/audience'
import { systems } from '@/content/systems'
import NumberedStep from '@/components/ui/NumberedStep'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function WhatWeOfferContent() {
  return (
    <div className="pt-28">
      {/* Parent intro */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Systems We Build
            <br />
            And Run.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {audience.whoWeAre.statement} Each one takes a recurring job off your plate entirely. Here&apos;s the
            first of these.
          </motion.p>
        </div>
      </section>

      {/* Systems */}
      {systems.map((system, i) => (
        <div key={system.name}>
          <section className="py-20 px-6 bg-[#0d0d16]">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--surface)] border border-white/5 rounded-xl p-10"
              >
                <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-3">{system.name}</h2>
                <p className="text-[#94a3b8] text-base leading-relaxed">{system.shortDescription}</p>

                {system.whatMakesItDifferent && system.whatMakesItDifferent.length > 0 && (
                  <div className="mt-8">
                    <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-5">
                      WHAT MAKES IT DIFFERENT
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {system.whatMakesItDifferent.map((point) => (
                        <div
                          key={point.heading}
                          className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5"
                        >
                          <p className="text-white font-bold mb-2">{point.heading}</p>
                          <p className="text-[#94a3b8] text-sm leading-relaxed">{point.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {system.whatWeDo && system.whatWeDo.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                    {system.whatWeDo.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-4 py-3"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#94a3b8] text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {system.howItWorks && system.howItWorks.length > 0 && (
            <section className="py-20 px-6 border-b border-white/5">
              <div className="max-w-4xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
                >
                  HOW IT WORKS
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {system.howItWorks.map((step, j) => (
                    <NumberedStep
                      key={step.title}
                      num={String(j + 1).padStart(2, '0')}
                      title={step.title}
                      description={step.description}
                      delay={j * 0.1}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {system.whoThisIsntFor && (
            <section className="py-20 px-6 bg-[#0d0d16]">
              <div className="max-w-4xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
                >
                  {system.whoThisIsntFor.intro}
                </motion.p>
                <div className="flex flex-col gap-3">
                  {system.whoThisIsntFor.criteria.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: j * 0.08 }}
                      className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5 flex items-start gap-3"
                    >
                      <span className="text-[#4a5568] mt-0.5 flex-shrink-0">—</span>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {system.faq && system.faq.length > 0 && (
            <FAQ
              eyebrow="FAQ"
              headingLine1="Questions About"
              headingAccent={`${system.name}.`}
              intro="Straight answers to the things owners actually ask before getting in touch."
              faqs={system.faq}
            />
          )}
        </div>
      ))}

      <CTA
        eyebrow="GET IN TOUCH"
        headingLine1="Tell Us What"
        headingAccent="Your Week Looks Like."
        body="How many messages you end up answering yourself, when they come in, and what you're using now. We'll tell you plainly whether this is worth it for your business."
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance="There's no pricing on the site — nothing here is priced publicly yet. Get in touch and we'll talk specifics."
      />
    </div>
  )
}
