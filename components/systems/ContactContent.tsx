'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { contact } from '@/content/contact'

export default function ContactContent() {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6">{contact.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {contact.headingLine1}
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              {contact.headingAccent}
            </span>
          </h1>
          <p className="text-[#6b7a99] text-lg leading-relaxed max-w-lg mx-auto mb-10">{contact.lead}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--card-fill)] backdrop-blur-xl border border-[var(--hairline)] rounded-[var(--radius-card)] p-8 md:p-10"
        >
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] hover:brightness-110 text-white font-bold tracking-[1px] text-sm px-8 py-4 rounded-[var(--radius-btn)] transition-all duration-300 shadow-[0_0_35px_rgb(var(--accent-rgb)/0.4)] hover:shadow-[0_0_55px_rgb(var(--accent-rgb)/0.65)] hover:scale-[1.04]"
          >
            {contact.email}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <p className="text-[#94a3b8] text-sm leading-relaxed mt-8 mb-4">{contact.helpfulIntro}</p>
          <div className="flex flex-col gap-3 text-left">
            {contact.helpfulItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[#4a5568] mt-0.5 flex-shrink-0">—</span>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-[#6b7a99] text-sm leading-relaxed mt-6">{contact.closing}</p>
        </motion.div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[#6b7a99] text-sm leading-relaxed">
            <Link href="/data-handling" className="underline hover:text-white transition-colors">
              {contact.dataHandlingLinkLabel}
            </Link>
          </p>
          <p className="text-[#6b7a99] text-sm leading-relaxed">
            <Link href="/privacy" className="underline hover:text-white transition-colors">
              {contact.privacyLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
