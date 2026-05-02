'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: 'Fast & Mobile-Optimised',
    description:
      'Built for speed on every device. Your site loads in seconds — because slow sites lose jobs before you ever get the call.',
    color: 'from-blue-600/30 to-blue-400/10',
    borderHover: 'hover:border-blue-500/40',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Built for SEO From Day One',
    description:
      'Clean code structure, optimised copy and the right technical foundations to rank on Google — not bolted on as an afterthought.',
    color: 'from-cyan-600/30 to-cyan-400/10',
    borderHover: 'hover:border-cyan-500/40',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Conversion-Focused Layout',
    description:
      'Every element is placed to turn visitors into enquiries. No pretty portfolios — purpose-built client acquisition assets.',
    color: 'from-violet-600/30 to-violet-400/10',
    borderHover: 'hover:border-violet-500/40',
    icon: (
      <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
  },
  {
    title: 'Fully Handed Over — You Own It',
    description:
      'Full access, no lock-in. We build it, hand it over completely, and you keep it — with or without an ongoing relationship.',
    color: 'from-emerald-600/30 to-emerald-400/10',
    borderHover: 'hover:border-emerald-500/40',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function WebsiteBuilds() {
  return (
    <section className="py-28 px-6 bg-[#080814]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-4">THE FOUNDATION</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Before We Scale You,
            <br />
            <span className="text-[#2e3650] font-bold">We Build the Machine.</span>
          </h2>
          <p className="text-[#6b7a99] text-lg md:text-xl max-w-2xl leading-relaxed">
            We design and build conversion-focused websites for tradespeople and service businesses. Not template
            sites — purpose-built client acquisition assets that turn visitors into paying customers.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`group relative bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 flex items-start gap-6 ${feature.borderHover} hover:bg-white/[0.05] transition-all duration-500`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${feature.color} opacity-60`} />

              {/* Icon */}
              <div
                className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white text-lg font-bold mb-2 leading-snug">{feature.title}</h3>
                <p className="text-[#6b7a99] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0891b2] text-white font-bold tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_55px_rgba(37,99,235,0.65)] hover:scale-[1.04]"
          >
            GET A WEBSITE QUOTE
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
