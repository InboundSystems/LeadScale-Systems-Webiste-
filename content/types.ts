// Shared shapes for every file in content/. Keeping these in one place means
// a field renamed or removed on one side breaks the build wherever it's
// consumed, instead of silently rendering nothing on a page nobody checked.
//
// Every factual claim these hold must trace to sections 3–6 of
// docs/WEBSITE-REWORK-2026-11.md.

export interface LinkItem {
  label: string
  href: string
}

export interface FAQItem {
  question: string
  answer: string
  /** Optional trailing link, e.g. to /data-handling. Rendered after the
   *  answer text — do not fold the URL into the answer string itself. */
  answerLink?: LinkItem
}

export interface HeadedItem {
  heading: string
  body: string
}

/** A list item with an optional second sentence set smaller beneath it, so a
 *  list can stay parallel and roughly equal in length (docs/VOICE.md §10). */
export interface DetailedItem {
  text: string
  detail?: string
}

/** The single line every page ends on (docs/VOICE.md §10), plus its action. */
export interface PageEnd {
  line: string
  link: LinkItem
}

export interface PageHeader {
  eyebrow: string
  heading: string
  intro?: string
}

/** A section of prose with a heading — data handling, privacy, IT providers. */
export interface ProseSection {
  heading: string
  paragraphs: string[]
  /** Optional list, shown after the paragraphs. */
  bullets?: string[]
}

// ---------------------------------------------------------------------------
// Site chrome and company details — content/audience.ts.
// ---------------------------------------------------------------------------
export interface BusinessDetails {
  /** Trading name, as on the ABN record. */
  legalName: string
  abn: string
  location: string
  email: string
}

export interface SiteChrome {
  metaTitle: string
  metaDescription: string
  navLinks: LinkItem[]
  navCta: LinkItem
  footerLinks: LinkItem[]
  /** Media appears in the flagship footer only, never the header. */
  crossBrand: LinkItem
  footerTagline: string
}

// ---------------------------------------------------------------------------
// The illustrations on a system page. Fictional data only: no real practice,
// patient or sender, and no clinical detail in any subject line.
// ---------------------------------------------------------------------------
export interface CategoryDef {
  /** e.g. "01 Appointments". The number is the practice's own order. */
  label: string
  /** The category's Outlook colour, shown as a swatch beside the label. */
  colour: string
}

export interface InboxMessage {
  sender: string
  subject: string
  received: string
  unread?: boolean
  /** Name of a person label, e.g. "For Dr Smith". */
  personLabel?: string
}

export interface InboxIllustration {
  caption: string
  mailboxName: string
  folderName: string
  arrangedBy: string
  groups: { category: CategoryDef; messages: InboxMessage[] }[]
}

/** One line of the plain-text morning summary: time waited (or, for mail
 *  already answered, when it was answered), subject, sender, and any
 *  [For …] label — in that order, as the real email sets them. */
export interface SummaryLine {
  waited: string
  subject: string
  sender: string
  /** e.g. "For Dr Smith", rendered as "[For Dr Smith]". */
  personLabel?: string
}

/** Lines under one category heading, oldest first within the group. */
export interface SummaryGroup {
  category: string
  lines: SummaryLine[]
}

export interface SummaryOptionalBlock {
  heading: string
  /** Margin note on the illustration, outside the email itself. */
  optionalNote: string
  groups: SummaryGroup[]
}

/** The morning summary as the real plain-text email sets it. Every line of
 *  body copy here must match the real email exactly. */
export interface MorningSummaryIllustration {
  caption: string
  from: string
  to: string
  subject: string
  sent: string
  /** The opening lines, before the groups. No greeting. */
  opening: string[]
  groups: SummaryGroup[]
  optionalBlocks: SummaryOptionalBlock[]
  junk: { heading: string; lines: SummaryLine[] }
  /** The closing lines, verbatim. */
  closing: string[]
}

// ---------------------------------------------------------------------------
// Systems — the parent business runs one or more of these. Each is one
// product, configured per business from a settings record and operated by
// Vicaria. See content/systems.ts.
// ---------------------------------------------------------------------------
export interface SystemContent {
  /** e.g. "The Front Office" */
  name: string

  /** The sector this system is built for, as it appears on the site.
   *  Two systems in different sectors must never be presented as
   *  alternatives to the same reader. */
  sector: string

  /** The system's own page, at /systems/<slug>. generateStaticParams
   *  filters out any entry without one. */
  slug?: string

  /** One or two lines — what it does. Shown on cards on / and /systems. */
  shortDescription: string

  /** The sentence under the h1 on the system's own page. Distinct from
   *  shortDescription — say something it doesn't, rather than restate it. */
  heroLine?: string

  /** What the client must already have. Renders nothing when unset. */
  requirements?: { heading: string; items: string[] }

  /** The condition this system is built for, stated before what it does. */
  theProblem?: { heading: string; paragraphs: string[] }

  /** What it does, one capability per item. */
  whatItDoes?: { heading: string; items: HeadedItem[] }

  /** Fixed limits that apply to every client and cannot be configured. */
  whatItNeverDoes?: { heading: string; intro: string; items: DetailedItem[] }

  /** The two product illustrations. */
  illustrations?: {
    heading: string
    intro: string
    inbox: InboxIllustration
    summary: MorningSummaryIllustration
  }

  /** A narrative of the system on an ordinary day at a fictional client.
   *  Times and events, not features. Never implies a live client. */
  aTypicalDay?: {
    heading: string
    intro?: string
    beats: { time: string; body: string }[]
  }

  /** A pointer to /how-it-works, where installation is set out. One line. */
  installationPointer?: { body: string; link: LinkItem }

  whoThisIsntFor?: { heading: string; criteria: string[] }

  /** Render the verbatim intended purpose statement (content/intended-
   *  purpose.ts) on this system's page. */
  showsIntendedPurpose?: boolean

  faq?: { heading: string; items: FAQItem[] }

  end: PageEnd
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------
export interface HomeContent {
  hero: {
    eyebrow: string
    heading: string
    body: string
    primary: LinkItem
    secondary: LinkItem
  }
  model: { eyebrow: string; heading: string; items: HeadedItem[] }
  firstSystem: { eyebrow: string; heading: string; linkLabel: string }
  neverHappens: {
    eyebrow: string
    heading: string
    intro: string
    items: string[]
    link: LinkItem
  }
  data: { eyebrow: string; heading: string; paragraphs: string[]; links: LinkItem[] }
  end: PageEnd
}

export interface SystemsIndexContent {
  header: PageHeader
  linkLabel: string
  end: PageEnd
}

export interface HowItWorksContent {
  header: PageHeader
  steps: { heading: string; steps: { title: string; description: string; link?: LinkItem }[] }
  configuration: { heading: string; paragraphs: string[] }
  judged: { heading: string; paragraphs: string[] }
  access: { heading: string; paragraphs: string[]; link: LinkItem }
  end: PageEnd
}

export interface ItProvidersContent {
  header: PageHeader
  asked: ProseSection
  permissions: {
    heading: string
    intro: string
    items: { name: string; type: string; reason: string; note?: string }[]
  }
  notRequested: { heading: string; intro: string; items: string[] }
  restriction: { heading: string; intro: string; steps: string[]; closing: string }
  howItRuns: ProseSection
  withdrawing: { heading: string; pathLabel: string; path: string[]; paragraphs: string[] }
  end: PageEnd
}

export interface DataHandlingPageContent {
  header: PageHeader
  sections: PrivacySection[]
  end: PageEnd
}

export interface PrivacySection extends ProseSection {
  /** Render the verbatim intended purpose statement after the paragraphs. */
  includesIntendedPurpose?: boolean
  /** Paragraphs shown after the statement. */
  after?: string[]
}

export interface PrivacyPageContent {
  header: PageHeader
  lastUpdatedLabel: string
  lastUpdated: string
  sections: PrivacySection[]
  end: PageEnd
}

export interface AboutContent {
  header: PageHeader
  paragraphs: string[]
  foundersHeading: string
  founders: { name: string; role: string }[]
  detailsHeading: string
  detailLabels: { legalName: string; abn: string; location: string; email: string }
  end: PageEnd
}

/** /enquire — a plain email contact. The mailto link is the whole mechanism. */
export interface ContactPageContent {
  header: PageHeader
  helpfulIntro: string
  helpfulItems: string[]
  closing: string
  links: LinkItem[]
}
