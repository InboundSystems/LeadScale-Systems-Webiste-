import type { OfferContent } from './types'

// UNVALIDATED HYPOTHESIS — this entire file describes the current best guess
// at the offer, not a proven product. Per docs/business-model-v2.html: the
// problem statement is sourced from vendor benchmark content, not from
// owners, and staffing / front-of-house are the leading rival hypotheses.
// Expect this file to change, possibly completely, after discovery
// conversations. Changing the offer should mean editing this file only —
// components read from it, they don't hardcode any of this.
//
// STRUCTURE DRAFT — placeholder values below, not final site copy.
// Copy pass happens in step 3, against this shape.

export const offer: OfferContent = {
  problemStatement: {
    headline: '[placeholder] Client bases decay silently',
    body:
      '[placeholder] Nobody works the lapsed list, cancellations aren’t chased, and the loss is invisible because it never produces an event that shows up anywhere.',
  },

  headline: {
    eyebrow: '[placeholder eyebrow]',
    line1: '[placeholder] We win back the clients',
    accent: '[placeholder] who’ve gone quiet.',
    subhead: '[placeholder subhead — one sentence, plain language, no mechanism talk]',
  },

  whatGetsDone: [
    '[placeholder] Overdue-client triggers, running continuously',
    '[placeholder] Rebooking prompts at roughly 80% of a client’s usual interval',
    '[placeholder] Same-day cancellation recovery',
    '[placeholder] No-show follow-up',
    '[placeholder] Monthly results report',
  ],

  howItWorks: [
    { title: '[placeholder step 1]', description: '[placeholder description]' },
    { title: '[placeholder step 2]', description: '[placeholder description]' },
    { title: '[placeholder step 3]', description: '[placeholder description]' },
    { title: '[placeholder step 4 — data handling in plain terms]', description: '[placeholder description]' },
  ],

  whoThisIsntFor: {
    intro: '[placeholder framing sentence]',
    criteria: [
      '[placeholder] Your booking platform already handles reactivation and rebooking well',
      '[placeholder] You don’t have a lapsed client base to work — e.g. a brand-new business',
    ],
  },

  faq: [
    { question: '[placeholder offer FAQ 1]', answer: '[placeholder]' },
    { question: '[placeholder offer FAQ 2]', answer: '[placeholder]' },
  ],

  // Do not populate. No pricing page, no "from $X", no tier table — see brief.
  pricing: null,
}
