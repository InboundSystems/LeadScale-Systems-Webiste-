'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const problemStats = [
  { label: 'Tradie services' },
  { label: 'Trade directory' },
  { label: 'Landscaping services' },
  { label: 'Property services' },
  { label: 'Local specialised services' },
]

const methodology = [
  {
    number: '01',
    title: 'Google Business Profile Optimisation',
    description:
      'Your Google Business Profile is one of the most important factors in local search rankings. This listing appears on Google Maps and in local search results when customers search for services near them. We optimise your Google Business Profile so your business is presented as the strongest possible presence to potential customers.',
    checklist: [
      'Business listing configuration',
      'Business categories optimisation',
      'Project or service photo uploads',
      'Profile completeness review',
      'Creating business information is accurate',
      'Optimising profile and cover images',
      'Ensuring consistent branding across platforms',
    ],
  },
  {
    number: '02',
    title: 'Website SEO & Service Page Structure',
    description:
      'Your website plays a major role in determining how relevant Google considers your business to be. We create modern, effective pages that provide enough information for Google to rank the website effectively. We improve your website structure so it clearly tells Google and visitors exactly what services you offer and where. We create or optimise service pages at the local search level that specifically relate to customers and lead to enquiries.',
    checklist: [
      'Service page structure and copy optimisation',
      'Technical SEO improvements',
      'Local keyword targeting',
      'Internal linking strategy',
      'Page speed and core web vitals',
      'Schema markup implementation',
    ],
  },
  {
    number: '03',
    title: 'Authority Building & Local Trust Signals',
    description:
      'Google ranks businesses higher when they appear trustworthy and established within their local area. To strengthen your online authority, we develop a network of signals that confirm the credibility of your business.',
    checklist: [
      'Building citations across trusted directories',
      'Securing links from relevant websites',
      'Ensuring your business information is consistent across the web',
      'Local partnership and outreach strategy',
    ],
  },
]

const included = [
  'Google Business Profile optimisation',
  'Website SEO structure and service page optimisation',
  'Local citation development',
  'Authority building and backlink strategy',
  'Ongoing SEO monitoring and optimisation',
  'Monthly reporting and performance tracking',
]

export default function SEOPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#2563EB] text-xs font-semibold tracking-[0.2em] mb-6"
          >
            SERVICE 01
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Search Engine
            <br />
            Optimisation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            Our Local SEO Growth System is designed to position your business where customers are already
            searching — improving your visibility, authority, and relevance on Google.
          </motion.p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-8"
          >
            THE PROBLEM
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111118] border border-white/5 rounded-xl p-8"
            >
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Many local service businesses create social media accounts but struggle to consistently maintain them. Pages often remain inactive for long periods, contain outdated information, or lack the quality of content that builds trust with potential customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111118] border border-white/5 rounded-xl p-8"
            >
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                When customers search for a service online, they&apos;re not just looking for any business — they&apos;re looking for the most legitimate, local, and professional option available. The businesses that appear at the top of search are often considered first. Those further down the list are rarely considered at all.
              </p>
            </motion.div>
          </div>

          {/* Goal */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            THE GOAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          >
            A Consistent Stream of Local Enquiries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-2xl"
          >
            The goal of this service is to position your business so that it appears when potential customers search
            for services in your local area — from people already looking to buy, not just browse.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {problemStats.map((stat) => (
              <span
                key={stat.label}
                className="bg-[#111118] border border-white/5 text-[#94a3b8] text-xs px-4 py-2 rounded-full"
              >
                {stat.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            OUR METHODOLOGY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-12"
          >
            Three Core Areas That Drive Rankings
          </motion.h2>
          <p className="text-[#94a3b8] text-base leading-relaxed mb-12 max-w-2xl">
            Our SEO strategy focuses on the three core areas that determine how Google ranks local businesses like yours.
          </p>

          <div className="flex flex-col gap-6">
            {methodology.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111118] border border-white/5 rounded-xl p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#2563EB] text-sm font-bold">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="ml-15 grid grid-cols-1 md:grid-cols-2 gap-2 pl-15">
                  {item.checklist.map((check) => (
                    <div key={check} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#94a3b8] text-xs">{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcome */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            EXPECTED OUTCOME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          >
            What You Can Expect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed max-w-2xl"
          >
            By combining Google Business optimisation, structured website SEO, and authority building strategies, this
            system is designed to improve your visibility in local search results and attract more enquiries from
            potential customers. Rather than relying on referrals or unpredictable advertising, this approach builds a
            sustainable and consistent stream of new enquiries opportunities for your business.
          </motion.p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            WHAT&apos;S INCLUDED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-10"
          >
            Everything Handled For You
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {included.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#111118] border border-white/5 rounded-lg px-5 py-4 flex items-center gap-3"
              >
                <svg className="w-4 h-4 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#94a3b8] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/book"
              className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold tracking-widest text-xs px-8 py-4 rounded transition-all duration-200 hover:scale-105"
            >
              BOOK A FREE STRATEGY CALL
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
