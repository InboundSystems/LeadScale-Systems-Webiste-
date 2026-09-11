// Shared shapes for content/systems.ts and content/audience.ts.
// Keeping these in one place means a field renamed or removed on one side
// breaks the build wherever it's consumed, instead of silently rendering
// nothing on a page nobody thought to check.

export interface FAQItem {
  question: string
  answer: string
  /** Optional trailing link, e.g. to /data-handling. Rendered after the
   *  answer text — do not fold the URL into the answer string itself. */
  answerLink?: { href: string; label: string }
}

export interface HowItWorksStep {
  title: string
  description: string
}

export interface Founder {
  name: string
  role: string
  /** One sentence, shown under the role line on /about — what this person
   *  actually does day to day, not a bio. */
  blurb: string
}

// ---------------------------------------------------------------------------
// Systems — the parent business runs one or more of these. Each is a
// recurring back-office job taken off a client and delivered as completed
// work. Unvalidated and expected to change — see content/systems.ts.
// ---------------------------------------------------------------------------
export interface SystemContent {
  /** e.g. "Client Reconnection" */
  name: string

  /** The sector this system is built for, as it appears on the site.
   *  Two systems in different sectors must never be presented as
   *  alternatives to the same reader. */
  sector: string

  /** One or two lines — what it does. Shown on /systems and on the system's
   *  own page. Not a pitch. */
  shortDescription: string

  /** One sentence under the h1 on the system's own page. Distinct from
   *  shortDescription, which appears on the /systems index card — say
   *  something shortDescription doesn't, rather than restate it. */
  heroLine?: string

  /** The condition this system is built for, stated before what it does. A
   *  reader has to recognise their own situation before a capability list
   *  means anything. Renders nothing when unset. */
  theProblem?: { heading: string; paragraphs: string[] }

  /** What it actually does, as a list of concrete capabilities — not a pitch,
   *  not steps in order. Optional: unset until the system has enough to say
   *  here beyond the one-liner. */
  whatWeDo?: string[]

  /** The handful of points that separate this from an obvious alternative.
   *  Shown near the top of the system's detail, before whatWeDo. Keep this
   *  short — two or three points, not a features list. */
  whatMakesItDifferent?: { heading: string; body: string }[]

  /** A concrete narrative of the system in use on an ordinary day. Times and
   *  events, not features. Renders nothing when unset. */
  aTypicalDay?: {
    heading: string
    intro?: string
    beats: { time: string; body: string }[]
  }

  /** Where this system came from. Only set where real research exists.
   *  Never write one to fill the space. Shown between whatMakesItDifferent
   *  and howItWorks. */
  research?: {
    heading: string
    body: string
    /** A direct quote from an anonymous research participant — research
     *  material, not a testimonial. Never a named business. Omit rather
     *  than invent one. */
    quote?: string
    /** e.g. "Salon owner, research response" — a role, never a name. */
    attribution?: string
  }

  /**
   * The system's own page, at /systems/<slug>. Set once a system has enough
   * validated content to carry a dedicated page; left unset otherwise, and
   * generateStaticParams filters out any entry without one.
   */
  slug?: string

  /**
   * Optional slots for the fuller content a validated system will need.
   * Undefined/omitted on an unvalidated system — renderers must treat an
   * absent slot as "render nothing," not an empty heading or section.
   */
  howItWorks?: {
    steps: HowItWorksStep[]
    /** Shown once, beneath the steps. Optional — omit rather than leave
     *  empty. Mirrors audience.howItWorks.closingLine below. */
    closingLine?: string
  }
  /** What changes for the business, paired with how that is measured. Value
   *  and accountability belong in the same section — a claim about
   *  improvement with no measure beside it is marketing. Renders nothing
   *  when unset. */
  whatChanges?: {
    heading: string
    changes: string[]
    measureIntro: string
    measures: string[]
  }

  whoThisIsntFor?: {
    intro: string
    criteria: string[]
  }
  faq?: FAQItem[]

  /** One line about ending the engagement, shown near the foot of the page
   *  with a link. Renders nothing when unset. */
  endingLine?: { body: string; href: string; label: string }

  /** The closing CTA body on the system's own page. Falls back to a
   *  sector-neutral sentence in SystemPage.tsx when unset. */
  ctaBody?: string
}

// ---------------------------------------------------------------------------
// Systems section (homepage) — the short, company-level intro to the systems
// roster, shown above the system card(s). Distinct from any one system's own
// content in SystemContent above.
// ---------------------------------------------------------------------------
export interface SystemsSectionIntro {
  heading: string
  body: string
  /** Shown once, after every system card — never per-card. Acknowledges more
   *  are coming without naming what. */
  closingLine: string
}

// ---------------------------------------------------------------------------
// Data handling — its own page, /data-handling. Not a bullet list: a practice
// manager reading this is looking for a specific answer, not a pitch.
// ---------------------------------------------------------------------------
export interface DataHandlingSection {
  heading: string
  /** One or two short paragraphs. */
  paragraphs: string[]
}

export interface DataHandlingPageContent {
  intro: string
  sections: DataHandlingSection[]
}

// ---------------------------------------------------------------------------
// Privacy policy — its own page, /privacy. Same shape as data handling, plus
// an optional bullet list per section and a last-updated date at the top.
// ---------------------------------------------------------------------------
export interface PrivacySection {
  heading: string
  paragraphs: string[]
  /** Optional bullet list, shown after the paragraphs. */
  bullets?: string[]
}

export interface PrivacyPageContent {
  lastUpdated: string
  intro: string
  sections: PrivacySection[]
}

// ---------------------------------------------------------------------------
// Contact — /enquire. A plain email contact, not a form. No submission state,
// no server action: the mailto link is the entire mechanism.
// ---------------------------------------------------------------------------
export interface ContactPageContent {
  eyebrow: string
  headingLine1: string
  headingAccent: string
  lead: string
  email: string
  helpfulIntro: string
  helpfulItems: string[]
  closing: string
  dataHandlingLinkLabel: string
  privacyLinkLabel: string
}

// ---------------------------------------------------------------------------
// Audience / parent brand — what Vicaria is, independent of which
// systems it currently runs. This is what the homepage sells.
// ---------------------------------------------------------------------------
export interface AudienceContent {
  /** The homepage hero subhead. */
  heroSubhead: string

  audience: {
    description: string
    businessTypes: string[]
    profile: string[]
  }

  /** How a system gets built and run, in general terms — not specific to
   *  any one system's mechanics. Powers the parent-level /how-it-works page. */
  howItWorks: {
    intro: string
    steps: HowItWorksStep[]
  }

  /** How an engagement is judged and how it ends — the two facts that make a
   *  small firm a reasonable risk. Shown on the homepage; stated more fully
   *  on /how-it-works. */
  howAnEngagementIsJudged: {
    heading: string
    intro: string
    measures: string[]
    closing: string
  }

  /** Its own section on /how-it-works, directly after whatWeWontDo. Replaces
   *  the old howItWorks.closingLine, which said the same thing as an
   *  afterthought beneath the steps. The page adds the link to
   *  /data-handling; this holds only the prose. */
  endingAnEngagement: {
    heading: string
    body: string
  }

  /** Parent-level only. Not system-specific — a system's own disqualifying
   *  criteria (if any) live on that system's entry in content/systems.ts,
   *  once it has a full page to put them on. */
  whoThisIsntFor: {
    intro: string
    criteria: string[]
  }

  /** Company-level limits stated up front, on /how-it-works. Distinct from
   *  whoThisIsntFor (who shouldn't bother) — these are things we refuse to
   *  do for anyone we do take on. */
  whatWeWontDo: {
    intro: string
    items: { heading: string; body: string }[]
  }

  /** Who's actually watching a running system — /how-it-works, after
   *  whatWeWontDo. Plain paragraphs, not a list. */
  whosAccountable: {
    paragraphs: string[]
  }

  about: {
    /** The /about page intro, as separate paragraphs. Short, professional,
     *  business-focused. Not a founder story. */
    intro: string[]
    /** Names carry a role and a one-sentence blurb — see Founder. */
    founders: Founder[]
  }

  contact: {
    /** Not currently published — email is preferred. Kept optional (not
     *  removed) so a phone number can be added later without a type change. */
    phone?: string
    email: string
    location: string
  }
}
