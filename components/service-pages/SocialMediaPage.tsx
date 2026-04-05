'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const problems = [
  {
    title: 'Inactive or Abandoned Pages',
    description:
      'Many businesses create social media accounts but struggle to consistently maintain them. Pages often remain inactive for long periods, contain outdated information, or lack the quality of content that builds trust with potential customers.',
  },
  {
    title: 'Inconsistent Branding',
    description:
      "Profile photos, inconsistent descriptions, and varied content styles all damage a business's credibility. When a customer checks your socials and finds disorganised profiles, they question the quality of your services.",
  },
  {
    title: 'No Social Proof',
    description:
      "When people discover your business online, they often check your social media pages to confirm the quality and legitimacy of your work. Without an active, well-presented online presence, you're missing the chance to build trust before they even make contact.",
  },
  {
    title: 'Lost to Competitors',
    description:
      "When a competitor's page is active, well-maintained, and presents their work credibly while yours isn't — the decision of who to contact first becomes obvious. An inactive presence actively sends enquiries to your competitors.",
  },
]

const keyAreas = [
  {
    number: '01',
    title: 'Profile Optimisation',
    description:
      'We ensure that your social media profiles are fully optimised and present your business professionally. A properly optimised profile makes it easier for potential customers to understand your business and contact your location.',
    checklist: [
      'Updating profile descriptions',
      'Creating business information is accurate',
      'Optimising service descriptions',
      'Ensuring consistent branding across platforms',
      'Optimising profile and cover images',
    ],
  },
  {
    number: '02',
    title: 'Consistent Content & Activity',
    description:
      'Consistency is one of the most important factors for maintaining an effective social media presence. We keep your social pages active by posting content that reflects your services and ongoing work.',
    checklist: [
      'Project highlights',
      'Before and after photos',
      'Updates about your business',
      'Industry tips and advice',
      'Create client video content',
    ],
  },
  {
    number: '03',
    title: 'Credibility & Customer Trust',
    description:
      'An active social media presence acts as a form of social proof for potential customers. When people discover your business online, they often check the company&apos;s social media pages to confirm the quality and legitimacy of your work.',
    checklist: [
      'Star quality of your work',
      'Examples of past projects',
      'Customer feedback and engagement',
      'Maintaining professional tone and style throughout',
    ],
  },
]

const included = [
  'Social media profile optimisation',
  'Regular content posting',
  'Basic content creation and formatting',
  'Social media account monitoring',
  'Ongoing profile updates and improvements',
]

export default function SocialMediaPage() {
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
            SERVICE 03
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Social Media
            <br />
            Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl"
          >
            Our Social Media Presence &amp; Maintenance System ensures your business maintains a professional and
            active presence across key social platforms, helping reinforce your brand and support other marketing
            channels.
          </motion.p>
        </div>
      </section>

      {/* What Most Businesses Get Wrong */}
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
            What Most Businesses Get Wrong
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-12 max-w-2xl"
          >
            These are the most common social media challenges we see businesses in the industry facing — and exactly
            what this service is designed to fix.
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
            A Consistent, Professional Online Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-2xl"
          >
            The goal of this service is to maintain a consistent and professional social media presence that reflects
            the quality of your work and strengthens the credibility of your business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#94a3b8] text-sm leading-relaxed mb-8"
          >
            This service addresses customers:
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['Trust and business credibility', 'Considered for services', 'Free combined marketing reinforcement'].map((pill) => (
              <span key={pill} className="bg-[#111118] border border-white/5 text-[#94a3b8] text-xs px-4 py-2 rounded-full">
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl"
          >
            Rather than leaving your social media pages inactive, the system ensures your business maintains a
            consistent presence that supports your overall marketing efforts.
          </motion.p>
        </div>
      </section>

      {/* Three Key Areas */}
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
            Three Key Areas That Build Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-base leading-relaxed mb-12 max-w-2xl"
          >
            Our social media strategy focuses on the three key areas that improve how customers perceive your business online.
          </motion.p>

          <div className="flex flex-col gap-6">
            {keyAreas.map((area, i) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111118] border border-white/5 rounded-xl p-8"
              >
                <div className="flex items-start gap-5">
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

      {/* What You Can Expect */}
      <section className="py-20 px-6">
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
            By maintaining a consistent and professional social media presence, your business presents a stronger and
            more credible image to potential customers. When potential customers discover your business through SEO,
            referrals, or advertising, they often check the company&apos;s social media pages to confirm the quality
            and legitimacy of your work. Over time, this contribution is developed from brand recognition, stronger
            business trust, and more enquiries.
          </motion.p>
        </div>
      </section>

      {/* Everything Handled */}
      <section className="py-20 px-6 bg-[#0d0d16]">
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
