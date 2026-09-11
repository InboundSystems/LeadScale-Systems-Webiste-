'use client'

import { motion } from 'framer-motion'
import { dataHandling } from '@/content/data-handling'

export default function DataHandlingContent() {
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
            DATA HANDLING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            How Data Is Handled.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            {dataHandling.intro}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {dataHandling.sections.map((section, i) => (
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
                    j < section.paragraphs.length - 1 ? 'mb-4' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
