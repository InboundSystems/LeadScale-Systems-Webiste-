'use client'

import { motion } from 'framer-motion'
import { privacy } from '@/content/privacy'

export default function PrivacyContent() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            PRIVACY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Privacy Policy.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {privacy.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#6b7a99] text-sm leading-relaxed mt-6"
          >
            Last updated {privacy.lastUpdated}.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {privacy.sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{section.heading}</h2>
              {section.paragraphs.map((paragraph, j) => (
                <p
                  key={paragraph}
                  className={`text-[#94a3b8] text-base leading-relaxed max-w-2xl ${
                    j < section.paragraphs.length - 1 || (section.bullets && section.bullets.length > 0)
                      ? 'mb-4'
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <div className="flex flex-col gap-3">
                  {section.bullets.map((item, k) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: k * 0.05 }}
                      className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-5 flex items-start gap-3"
                    >
                      <span className="text-[#4a5568] mt-0.5 flex-shrink-0">—</span>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
