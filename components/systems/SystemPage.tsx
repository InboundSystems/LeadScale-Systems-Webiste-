'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { SystemContent } from '@/content/types'
import { pricingStatement } from '@/content/pricing'
import NumberedStep from '@/components/ui/NumberedStep'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function SystemPage({ system }: { system: SystemContent }) {
  return (
    <div className="pt-28">
      {/* System intro */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            {system.sector.toUpperCase()}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            {system.name}.
          </motion.h1>
          {system.heroLine && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
            >
              {system.heroLine}
            </motion.p>
          )}
        </div>
      </section>

      {system.theProblem && (
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            >
              {system.theProblem.heading}
            </motion.h2>
            {system.theProblem.paragraphs.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }}
                className={`text-[#94a3b8] text-base leading-relaxed max-w-2xl ${
                  i < system.theProblem!.paragraphs.length - 1 ? 'mb-4' : ''
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </section>
      )}

      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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

      {system.aTypicalDay && (
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            >
              {system.aTypicalDay.heading}
            </motion.h2>
            {system.aTypicalDay.intro && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-2xl"
              >
                {system.aTypicalDay.intro}
              </motion.p>
            )}
            <div className="flex flex-col gap-4">
              {system.aTypicalDay.beats.map((beat, j) => (
                <motion.div
                  key={beat.time}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: j * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] flex-shrink-0">
                    {beat.time}
                  </span>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{beat.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {system.research && (
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4"
            >
              THE RESEARCH
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4"
            >
              {system.research.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#6b7a99] text-base leading-relaxed max-w-2xl"
            >
              {system.research.body}
            </motion.p>

            {system.research.quote && (
              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-6 md:px-8 md:py-8 mt-8"
              >
                <p className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4">RESEARCH RESPONSE</p>
                <p className="text-white text-lg leading-relaxed mb-4">“{system.research.quote}”</p>
                {system.research.attribution && (
                  <cite className="text-[#6b7a99] text-sm not-italic">{system.research.attribution}</cite>
                )}
              </motion.blockquote>
            )}
          </div>
        </section>
      )}

      {system.howItWorks && system.howItWorks.steps.length > 0 && (
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
            >
              WHAT HAPPENS IN YOUR BUSINESS
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {system.howItWorks.steps.map((step, j) => (
                <NumberedStep
                  key={step.title}
                  num={String(j + 1).padStart(2, '0')}
                  title={step.title}
                  description={step.description}
                  delay={j * 0.1}
                />
              ))}
            </div>

            {system.howItWorks.closingLine && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#6b7a99] text-sm leading-relaxed mt-8"
              >
                {system.howItWorks.closingLine}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {system.whatChanges && (
        <section className="py-20 px-6 bg-[#0d0d16]">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            >
              {system.whatChanges.heading}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
              {system.whatChanges.changes.map((item) => (
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

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-2xl mt-8"
            >
              {system.whatChanges.measureIntro}
            </motion.p>

            <div className="flex flex-col gap-3">
              {system.whatChanges.measures.map((item) => (
                <div
                  key={item}
                  className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5 flex items-start gap-3"
                >
                  <span className="text-[#4a5568] mt-0.5 flex-shrink-0">—</span>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item}</p>
                </div>
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
          intro="The questions owners raise most often before an engagement begins."
          faqs={system.faq}
        />
      )}

      {system.endingLine && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#94a3b8] text-base leading-relaxed max-w-2xl"
            >
              {system.endingLine.body}{' '}
              <Link href={system.endingLine.href} className="underline hover:text-white transition-colors">
                {system.endingLine.label}
              </Link>
            </motion.p>
          </div>
        </section>
      )}

      <CTA
        eyebrow="GET IN TOUCH"
        headingLine1="Describe"
        headingAccent="Your Week."
        body={
          system.ctaBody ??
          'Tell us what the job is, how often it occurs, and how it is handled now. We will confirm whether it applies to your business.'
        }
        buttonLabel="GET IN TOUCH"
        buttonHref="/enquire"
        reassurance={pricingStatement}
      />
    </div>
  )
}
