'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitEnquiry } from '@/app/actions/enquire'

export interface EnquiryExtraField {
  name: string
  label: string
  placeholder?: string
  options?: string[]
  required?: boolean
}

interface EnquiryFormProps {
  eyebrow: string
  headingLine1: string
  headingAccent: string
  intro: string
  messageLabel: string
  messageHelperText?: string
  messagePlaceholder: string
  extraFields?: EnquiryExtraField[]
  submitLabel: string
  successMessage: string
  reassurance?: string
  brandLabel: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactEmail = 'admin@leadscalesystems.net'

const inputClasses =
  'w-full bg-white/[0.03] border border-white/10 rounded-[var(--radius-btn)] px-4 py-3 text-white text-sm placeholder:text-[#4a5568] focus:border-[var(--accent)] focus:outline-none transition-colors'
const labelClasses = 'block text-[#94a3b8] text-xs font-semibold tracking-[1px] mb-2'

export default function EnquiryForm({
  eyebrow,
  headingLine1,
  headingAccent,
  intro,
  messageLabel,
  messageHelperText,
  messagePlaceholder,
  extraFields = [],
  submitLabel,
  successMessage,
  reassurance,
  brandLabel,
}: EnquiryFormProps) {
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

    const extra: Record<string, string> = {}
    extraFields.forEach((field) => {
      const value = String(form.get(field.name) || '').trim()
      extra[field.label] = value
      if (field.required && !value) errors[field.name] = `Select ${field.label.replace(/\?$/, '').toLowerCase()}.`
    })

    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setStatus('submitting')
    const result = await submitEnquiry({ name, business, phone, email, message, extra, brandLabel, honeypot })
    setStatus(result.ok ? 'success' : 'error')
  }

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-6">{eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {headingLine1}
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
              {headingAccent}
            </span>
          </h1>
          <p className="text-[#6b7a99] text-lg leading-relaxed max-w-lg mx-auto">{intro}</p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--card-fill)] backdrop-blur-xl border border-[var(--hairline)] rounded-[var(--radius-card)] p-12 text-center"
          >
            <p className="text-white text-lg font-semibold mb-2">{successMessage}</p>
            <p className="text-[#6b7a99] text-sm">{contactEmail}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-[var(--card-fill)] backdrop-blur-xl border border-[var(--hairline)] rounded-[var(--radius-card)] p-8 md:p-10"
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
                <label className={labelClasses} htmlFor="phone">Phone <span className="text-[#4a5568] font-normal normal-case tracking-normal">(optional)</span></label>
                <input className={inputClasses} type="tel" id="phone" name="phone" autoComplete="tel" />
              </div>
              <div>
                <label className={labelClasses} htmlFor="email">Email</label>
                <input className={inputClasses} type="email" id="email" name="email" autoComplete="email" />
                {fieldErrors.email && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.email}</p>}
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClasses} htmlFor="message">{messageLabel}</label>
              {messageHelperText && (
                <p className="text-[#6b7a99] text-xs leading-relaxed mb-2 -mt-1">{messageHelperText}</p>
              )}
              <textarea
                className={`${inputClasses} min-h-[120px] resize-y`}
                id="message"
                name="message"
                placeholder={messagePlaceholder}
              />
              {fieldErrors.message && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors.message}</p>}
            </div>

            {extraFields.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {extraFields.map((field) => (
                  <div key={field.name}>
                    <label className={labelClasses} htmlFor={field.name}>
                      {field.label}{' '}
                      {!field.required && (
                        <span className="text-[#4a5568] font-normal normal-case tracking-normal">(optional)</span>
                      )}
                    </label>
                    {field.options ? (
                      <select className={inputClasses} id={field.name} name={field.name} defaultValue="">
                        <option value="" disabled>
                          Select one
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input className={inputClasses} type="text" id={field.name} name={field.name} placeholder={field.placeholder} />
                    )}
                    {fieldErrors[field.name] && <p className="text-rose-400 text-xs mt-1.5">{fieldErrors[field.name]}</p>}
                  </div>
                ))}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold tracking-[1px] text-sm px-8 py-4 rounded-[var(--radius-btn)] transition-all duration-300 shadow-[0_0_35px_rgb(var(--accent-rgb)/0.4)] hover:shadow-[0_0_55px_rgb(var(--accent-rgb)/0.65)] mt-2"
            >
              {status === 'submitting' ? 'SENDING…' : submitLabel}
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

        {reassurance && status !== 'success' && (
          <p className="text-[#374151] text-xs mt-8 text-center tracking-wide">{reassurance}</p>
        )}
      </div>
    </section>
  )
}
