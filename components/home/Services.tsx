'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Search Engine Optimisation',
    description:
      'Position your business at the top of local search results and bring in enquiries without paying per click. Own your market through organic visibility.',
    href: '/seo',
    color: 'from-blue-600/30 to-blue-400/10',
    borderHover: 'hover:border-blue-500/40',
    glow: 'hover:shadow-[0_8px_40px_rgba(37,99,235,0.18)]',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Paid Traffic',
    description:
      'Data-driven Google and Meta ad campaigns that put your business in front of the right market at the right time. Predictable spend, predictable returns.',
    href: '/paid-traffic',
    color: 'from-cyan-600/30 to-cyan-400/10',
    borderHover: 'hover:border-cyan-500/40',
    glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)]',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Social Media Management',
    description:
      'Consistent, on-brand content across your platforms that builds trust and keeps your business top of mind every single month.',
    href: '/social-media',
    color: 'from-violet-600/30 to-violet-400/10',
    borderHover: 'hover:border-violet-500/40',
    glow: 'hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]',
    icon: (
      <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-4">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Three Growth Levers.
            <br />
            <span className="text-[#2e3650] font-bold">One Unified System.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              className={`group relative bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 flex flex-col ${service.borderHover} ${service.glow} hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-1.5`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${service.color} opacity-60`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} border border-white/10 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Number + title */}
              <p className="text-[#374151] text-xs font-bold tracking-[0.2em] mb-3">{service.number}</p>
              <h3 className="text-white text-xl font-bold mb-4 leading-snug">{service.title}</h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed flex-1">{service.description}</p>

              {/* Learn more */}
              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-[#94a3b8] hover:text-white text-xs font-bold tracking-widest transition-colors duration-200 group/link"
              >
                LEARN MORE
                <span className="group-hover/link:translate-x-1.5 transition-transform duration-200">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
