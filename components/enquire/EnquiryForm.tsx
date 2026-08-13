'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitEnquiry } from '@/app/actions/enquire'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactEmail = 'admin@leadscalesystems.net'

const inputClasses =
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#4a5568] focus:border-[#2563EB] focus:outline-none transition-colors'
const labelClasses = 'block text-[#94a3b8] text-xs font-semibold tracking-wider mb-2'

export default function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const name = String(form.get('name') || '').trim()
    const business = String(form.get('business') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    const honeypot = String(form.get('company_website') || '')

    const errors: Record<string, string> = {}
    if (!name) errors.name = 'Enter your name.'
    if (!business) errors.business = 'Enter your business name.'
    if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email.'
    if (!message) errors.message = "Let us know what's going on."
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setStatus('submitting')
    const result = await submitEnquiry({ name, business, phone, email, message, honeypot })
    setStatus(result.ok ? 'success' : 'error')
  }

  return (
    <div className="pt-28 min-h-screen bg-[#05050f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <section className="py-20 px-6 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] mb-6">NEXT STEPS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Tell Us About
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Your Business.
              </span>
            </h1>
            <p className="text-[#6b7a99] text-lg leading-relaxed max-w-lg mx-auto">
              Fill this in and we&apos;ll be in touch to see how we can help. We&apos;ll audit your current
              marketing, identify gaps, and show you exactly how to generate more qualified leads.
            </p>
          </motion.div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-12 text-center"
            >
              <p className="text-white text-lg font-semibold mb-2">Got it. We&apos;ll be in touch shortly.</p>
              <p className="text-[#6b7a99] text-sm">{contactEmail}</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 md:p-10"
            >
              {/* Honeypot — hidden from real users, left for bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company_website">Website</label>
                <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClasses} htmlFor="name">Name</label>
                  <input className={inputClasses} type="text" id="name" name="name" autoComplete="name" />
                  {fieldErrors.name && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label className={labelClasses} htmlFor="business">Business Name</label>
                  <input className={inputClasses} type="text" id="business" name="business" autoComplete="organization" />
                  {fieldErrors.business && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.business}</p>}
                </div>
                <div>
                  <label className={labelClasses} htmlFor="phone">Phone <span className="text-[#4a5568] font-normal tracking-normal">(optional)</span></label>
                  <input className={inputClasses} type="tel" id="phone" name="phone" autoComplete="tel" />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="email">Email</label>
                  <input className={inputClasses} type="email" id="email" name="email" autoComplete="email" />
                  {fieldErrors.email && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className={labelClasses} htmlFor="message">What Do You Need Help With?</label>
                <textarea
                  className={`${inputClasses} min-h-[120px] resize-y`}
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and what you're looking to achieve."
                />
                {fieldErrors.message && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0891b2] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold tracking-wider text-sm px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]"
              >
                {status === 'submitting' ? 'SENDING…' : 'SEND'}
              </button>

              {status === 'error' && (
                <p className="text-rose-400 text-sm mt-4 text-center">
                  Something didn&apos;t send. Email us directly at{' '}
                  <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a> and we&apos;ll pick it up from there.
                </p>
              )}

              <p className="text-[#374151] text-xs mt-6 text-center">
                Prefer email? <a href={`mailto:${contactEmail}`} className="underline hover:text-[#6b7a99] transition-colors">{contactEmail}</a>
              </p>
            </motion.form>
          )}

          {status !== 'success' && (
            <p className="text-[#374151] text-xs mt-8 text-center">
              No commitment required. No sales pressure. Just a conversation about your growth.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
