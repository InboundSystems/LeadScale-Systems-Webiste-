'use server'

import { Resend } from 'resend'
import { audience } from '@/content/audience'

export interface EnquiryPayload {
  name: string
  business: string
  phone: string
  email: string
  message: string
  extra: Record<string, string>
  brandLabel: string
  honeypot: string
}

export interface EnquiryResult {
  ok: boolean
  error?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // Honeypot tripped — pretend success, don't send, don't tell the bot why.
  if (payload.honeypot) {
    return { ok: true }
  }

  if (!payload.name.trim() || !payload.business.trim() || !payload.message.trim() || !EMAIL_RE.test(payload.email)) {
    return { ok: false, error: 'invalid' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('submitEnquiry: RESEND_API_KEY is not set')
    return { ok: false, error: 'send-failed' }
  }

  const resend = new Resend(apiKey)

  const extraLines = Object.entries(payload.extra)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key}: ${value}`)

  const lines = [
    `Business: ${payload.business}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || '(not provided)'}`,
    '',
    payload.message,
    ...(extraLines.length ? ['', ...extraLines] : []),
  ]

  try {
    const { error } = await resend.emails.send({
      from: 'Vicaria Enquiries <enquiries@leadscalesystems.net>',
      to: audience.contact.email,
      replyTo: payload.email,
      subject: `New enquiry — ${payload.name}, ${payload.business} (${payload.brandLabel})`,
      text: lines.join('\n'),
    })

    if (error) {
      console.error('submitEnquiry: Resend error', error)
      return { ok: false, error: 'send-failed' }
    }

    return { ok: true }
  } catch (err) {
    console.error('submitEnquiry: unexpected error', err)
    return { ok: false, error: 'send-failed' }
  }
}
