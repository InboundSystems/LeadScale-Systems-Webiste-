'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { audience } from '@/content/audience'

export default function AboutContent() {
  return (
    <div className="pt-28 pb-28">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6"
          >
            ABOUT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Vicaria.
          </motion.h1>
          {audience.about.intro.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className={`text-[#94a3b8] text-lg leading-relaxed max-w-2xl ${
                i < audience.about.intro.length - 1 ? 'mb-6' : ''
              }`}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            CONTACTS
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audience.about.founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--surface)] border border-white/5 rounded-xl p-8"
              >
                <h3 className="text-white text-xl font-extrabold mb-1">{founder.name}</h3>
                <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[0.1em] mb-3">{founder.role}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{founder.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-xl"
          >
            Where a recurring job in your business should not be yours, describe it. We will confirm whether it is
            one Vicaria can take.
          </motion.p>
          <Button href="/enquire">
            GET IN TOUCH
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Button>
        </div>
      </section>
    </div>
  )
}
