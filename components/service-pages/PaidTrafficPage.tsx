'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const problems = [
  {
    title: 'No Clear System Behind the Spend',
    description:
      'Most businesses start running ads without a proper campaign structure, strategy, or tracking in place. Without a system, ad spend is wasted on audiences that will never convert.',
  },
  {
    title: 'Working Against the Algorithm',
    description:
      'Facebook, Instagram, and Google each have their own advertising algorithms that reward certain behaviours and penalise others. Our advertising service is built around working with the algorithm, not against it.',
  },
  {
    title: 'Pulling Ads Too Early',
    description:
      "Many businesses make a start on a paid advertising investment in the first 2–3 weeks. Pulling ads before the platform has had time to optimise means you'll never know what was actually working.",
  },
  {
    title: 'Unbranded Creative & Messaging',
    description:
      "It's easy to create generic creative that looks the same as every other business. Without a distinct offer, clear audience positioning, and compelling creative, ads blend in and fail to convert.",
  },
]

const coreAreas = [
  {
    number: '01',
    title: 'Account Setup & Access',
    description:
      'We handle the full onboarding process — obtaining necessary permissions, configuring Business Manager access, and connecting all tracking so ad performance can be measured accurately.',
    checklist: [
      'Business Manager configuration',
      'Ad account access setup',
      'Facebook page connection',
      'Funding and payment installation',
    ],
  },
  {
    number: '02',
    title: 'Campaign Objective & Buying Strategy',
    description:
      "For smaller businesses, campaign objectives and buying strategy often determine the platform's behaviour far more than creative. We select the appropriate campaign objective based on your business size and budget.",
    checklist: [
      'Objective selection per business size',
      'Lead vs Sales objective selection',
      'Awareness campaigns for larger budget',
      'Subject to the buying strategy alignment',
    ],
  },
  {
    number: '03',
    title: 'Pixel Setup & Audience Targeting',
    description:
      'We build and manage your Meta Pixel — the data tool that tracks user behaviour across your website and progressively learns to target the audience most likely to convert.',
    checklist: [
      'Meta Pixel installation and configuration',
      'Custom audience creation',
      'Lookalike audience development',
      'Retargeting audience setup',
    ],
  },
  {
    number: '04',
    title: 'Offer & Creative Strategy',
    description:
      'The offer is the single most important aspect in advertising. We develop the offer and ad strategy, focusing on what motivates your target audience to act. We craft the copy, structure the visual direction, and develop multiple creative formats.',
    checklist: [
      'Core offer development',
      'Ad copy development',
      'Creative brief and direction',
      'Platform-specific creative formats',
    ],
  },
  {
    number: '05',
    title: 'Ad Testing & Optimisation',
    description:
      'We use structured ad tests, systematically changing high-impact variables to identify which creative versions deliver the strongest performance. A/B testing is critical — the algorithm gathers performance data to determine which ads to show more of, and budget is allocated accordingly.',
    checklist: [
      'Structured creative testing rotations',
      'Reasons for algorithm scaling process',
      'Budget modifications in reviews',
      'Underperforming creative rotation',
    ],
  },
  {
    number: '06',
    title: 'Budget Management & Scaling',
    description:
      'We manage from budget to allocated across campaigns and advise on when it is appropriate to scale. We use Facebook\'s Campaign Budget Optimisation, which allows the platform to automatically allocate your budget based on performance.',
    checklist: [
      'Facebook CBO configuration',
      'Single ad set structure for scaling',
      'Scaling discussion and recommendations',
      'Budget transparency reporting',
    ],
  },
]

const included = [
  'Account setup, Business Manager configuration, and Ad Account access',
  'Campaign objective selections and buying strategy',
  'Meta Pixel setup and audience targeting',
  'Offer development and ad creative strategy',
  'Structured ad testing across multiple angles and formats',
  'Budget management and scaling recommendations',
  'Ad CA tracking and performance reporting',
  'Ongoing optimisation throughout the campaign lifecycle',
]

const steps = [
  { num: '01', text: 'Finalise the service agreement' },
  { num: '02', text: 'Complete onboarding and collect necessary account access and business information' },
  { num: '03', text: 'Set up tracking, define campaign objectives, and develop the initial offer and creative strategy' },
  { num: '04', text: 'Launch campaigns and begin the testing phase' },
]

export default function PaidTrafficPage() {
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
            SERVICE 02
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Paid Traffic
            <br />
            Advertising
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            Our advertising service manages the full process — from account setup and strategy through to ongoing
            optimisation — so that your ad spend is working as hard as possible from day one across Facebook,
            Instagram, and Google.
          </motion.p>
        </div>
      </section>

      {/* Why Most Ad Campaigns Fail */}
      <section className="py-20 px-6 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            THE PROBLEM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Why Most Ad Campaigns Fail
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-12 max-w-2xl"
          >
            These are the most common paid advertising mistakes we see — and exactly what this service is designed to fix.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111118] border border-white/5 rounded-xl p-7"
              >
                <h3 className="text-white font-bold mb-3">{problem.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Goal */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
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
            A Consistent Flow of Enquiries &amp; Leads
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#94a3b8] text-base leading-relaxed"
            >
              Many local businesses invest in advertising without a clear system. Without proper campaign structure,
              audience targeting, and testing methodology, money is wasted. Our approach is data-driven and systematic.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#94a3b8] text-base leading-relaxed"
            >
              Platforms such as Facebook, Instagram, and Google can be optimised from our side. Our advertising service
              manages the ad process so that your ad spend is working as hard as possible from day one.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-6"
          >
            The goal of this service is to generate a consistent flow of enquiries and leads for your business through
            paid advertising on Facebook, Instagram, and Google. This is achieved by:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-3"
          >
            {[
              'Targeting the right audience at the right time with the right message',
              'Developing offers and creative that convert attention into enquiries',
              'Running structured tests to identify what works, then scaling it',
              'Letting the platform algorithms optimise delivery once proven campaigns are in place',
              'Rather than guessing what might work, this approach builds a data-driven advertising system that improves over time',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-0.5 flex-shrink-0">▸</span>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Six Core Areas */}
      <section className="py-20 px-6 bg-[#0d0d16]">
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
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Six Core Areas That Drive Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-12 max-w-2xl"
          >
            Our advertising system is built around six areas that drive the performance of paid campaigns.
          </motion.p>

          <div className="flex flex-col gap-6">
            {coreAreas.map((area, i) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111118] border border-white/5 rounded-xl p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2563EB] text-sm font-bold">{area.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{area.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {area.checklist.map((check) => (
                        <div key={check} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[#94a3b8] text-xs">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything Handled */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
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

          {/* How We Get Started */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4"
          >
            NEXT STEPS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            How We Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-8"
          >
            If you would like to move forward, the next step is a straightforward onboarding process:
          </motion.p>

          <div className="flex flex-col gap-4 mb-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#111118] border border-white/5 rounded-lg px-6 py-5 flex items-center gap-5"
              >
                <span className="text-[#2563EB] text-sm font-bold flex-shrink-0">{step.num}</span>
                <span className="text-[#94a3b8] text-sm">{step.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111118] border border-white/5 rounded-lg px-6 py-5 mb-10"
          >
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Once onboarding is complete, we begin building the advertising system designed to generate consistent,
              scalable enquiries for your business.
            </p>
          </motion.div>

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
