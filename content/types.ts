// Shared shapes for content/systems.ts and content/audience.ts.
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

export interface Founder {
  name: string
  role: string
}

// ---------------------------------------------------------------------------
// Systems — the parent business runs one or more of these. Each is a
// recurring back-office job taken off a client and delivered as completed
// work. Unvalidated and expected to change — see content/systems.ts.
// ---------------------------------------------------------------------------
export interface SystemContent {
  /** e.g. "Client Reconnection" */
  name: string

  /** One or two lines — what it does. Shown on /what-we-offer. Not a pitch. */
  shortDescription: string

  /**
   * Reserved for when this system is validated and promoted to its own full
   * page (e.g. /what-we-offer/client-reconnection). Not used yet — leave
   * unset until that page exists and is actually routed.
   */
  slug?: string

  /**
   * Optional slots for the fuller content a validated system will need.
   * Undefined/omitted on an unvalidated system — renderers must treat an
   * absent slot as "render nothing," not an empty heading or section.
   */
  howItWorks?: HowItWorksStep[]
  whoThisIsntFor?: {
    intro: string
    criteria: string[]
  }
  faq?: FAQItem[]
}

// ---------------------------------------------------------------------------
// Audience / parent brand — what LeadScale Systems is, independent of which
// systems it currently runs. This is what the homepage sells.
// ---------------------------------------------------------------------------
export interface AudienceContent {
  /** The parent-level frame — what we are, and the arrangement (completed
   *  work, not software; one job at a time, built and run for the client). */
  whoWeAre: {
    statement: string
    arrangement: string
  }

  audience: {
    description: string
    businessTypes: string[]
    profile: string[]
  }

  /** How we frame value: staff time and lost revenue, never a software
   *  subscription. */
  valueFraming: string

  /** How a system gets built and run, in general terms — not specific to
   *  any one system's mechanics. Powers the parent-level /how-it-works page. */
  howItWorks: {
    intro: string
    steps: HowItWorksStep[]
  }

  /** Parent-level only. Not system-specific — a system's own disqualifying
   *  criteria (if any) live on that system's entry in content/systems.ts,
   *  once it has a full page to put them on. */
  whoThisIsntFor: {
    intro: string
    criteria: string[]
  }

  /** General principles, not specific commitments — see the note in
   *  content/audience.ts. A normal section, not the trust centrepiece. */
  dataHandling: {
    statement: string
    specifics: string[]
  }

  about: {
    /** Short, professional, business-focused. Not a founder story. */
    statement: string
    /** Names only carry information here, not an argument. */
    founders: Founder[]
    location: string
  }

  contact: {
    /** Not currently published — email is preferred. Kept optional (not
     *  removed) so a phone number can be added later without a type change. */
    phone?: string
    email: string
    location: string
  }
}
