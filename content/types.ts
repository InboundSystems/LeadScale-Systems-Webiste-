// Shared shapes for content/offer.ts and content/audience.ts.
// Keeping these in one place means a field renamed or removed on one side
// breaks the build wherever it's consumed, instead of silently rendering
// nothing on a page nobody thought to check.

export interface FAQItem {
  question: string
  answer: string
}

export interface HowItWorksStep {
  title: string
  description: string
}

/**
 * Defined now so the shape exists if pricing is ever approved for the site.
 * Nothing currently reads this into a page — see content/offer.ts.
 */
export interface PricingTier {
  name: string
  price: string
  description?: string
}

export interface Differentiator {
  title: string
  body: string
}

export interface Founder {
  name: string
  role: string
}

// ---------------------------------------------------------------------------
// Offer — everything that changes if the offer changes.
// ---------------------------------------------------------------------------
export interface OfferContent {
  /** The problem this offer claims to solve. Explicitly unvalidated — see the
   *  hypothesis notice at the top of content/offer.ts. */
  problemStatement: {
    headline: string
    body: string
  }

  /** Hero-level claims tied to this specific offer (not brand-level positioning). */
  headline: {
    eyebrow?: string
    line1: string
    accent: string
    subhead: string
  }

  /** The feature/action list — what the service actually does, month to month. */
  whatGetsDone: string[]

  /** The mechanism, in plain language — 3-4 steps for the "How It Works" page. */
  howItWorks: HowItWorksStep[]

  /** Disqualifying criteria, written to actually turn people away. Offer-specific
   *  because a different offer would disqualify different businesses. */
  whoThisIsntFor: {
    intro: string
    criteria: string[]
  }

  /** FAQ entries specific to this offer (not brand/company FAQs). */
  faq: FAQItem[]

  /** Do not render this anywhere until pricing is explicitly approved for
   *  publication. Null today on purpose. */
  pricing: PricingTier[] | null
}

// ---------------------------------------------------------------------------
// Audience / brand — survives an offer change.
// ---------------------------------------------------------------------------
export interface AudienceContent {
  audience: {
    description: string
    businessTypes: string[]
    profile: string[]
  }

  /** The "completed work, not software" positioning statement and how we talk
   *  about value (staff time / lost revenue, never software subscriptions). */
  positioning: {
    statement: string
    valueFraming: string
  }

  /** Differentiators true today with zero clients — see the brief for why
   *  each one is here. Rendered on Home and/or About. */
  differentiators: Differentiator[]

  /** The compliance/data-handling story. Shared between About and the
   *  "How It Works" page's data section — not offer-specific. */
  dataHandling: {
    statement: string
    specifics: string[]
  }

  about: {
    intro: string
    founders: Founder[]
    location: string
    honesty: string
  }

  contact: {
    /** Not currently published — email is preferred. Kept optional (not
     *  removed) so a phone number can be added later without a type change. */
    phone?: string
    email: string
    location: string
  }
}
