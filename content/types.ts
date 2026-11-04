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

/** One numbered step, where the order is real. */
export interface StepItem {
  title: string
  description: string
  link?: LinkItem
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
  /** The sender and recipient on every section set as an opened email. */
  mail: { fromLabel: string; toLabel: string; from: string; to: string; today: string }
  metaTitle: string
  metaDescription: string
  navLinks: LinkItem[]
  navCta: LinkItem
  footerLinks: LinkItem[]
  /** Media appears in the flagship footer only, never the header. */
  crossBrand: LinkItem
  footerTagline: string
  /** The footer clock's place: "Brisbane", then ", 8:42 am" once the
   *  local time is known (Australia/Brisbane, AEST). */
  clockPlace: string
}

// ---------------------------------------------------------------------------
// The illustrations on a system page. Fictional data only: no real practice,
// patient or sender, and no clinical detail in any subject line.
// ---------------------------------------------------------------------------
/** The category palette (components/brand/categories.ts). */
export type CategoryTone = 'outline' | 'blue' | 'sky' | 'navy' | 'slate' | 'neutral'

export interface CategoryDef {
  /** e.g. "01 Appointments". The number is the practice's own order. */
  label: string
  /** The category's colour, shown as a swatch and a tinted chip. */
  tone: CategoryTone
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

/** One email in the homepage hero demo. Fictional. */
export interface DemoEmail {
  id: string
  sender: string
  subject: string
  received: string
  unread?: boolean
  category: CategoryDef
  personLabel?: string
  /** One or two sentences: what the system did with it. Section 4 facts only. */
  outcome: string
}

export interface InboxDemo {
  caption: string
  mailboxName: string
  folderName: string
  /** The moment shown, e.g. "Monday, 8:00am". */
  moment: string
  beforeLabel: string
  afterLabel: string
  replayLabel: string
  /** Undo the visitor's own corrections. */
  resetLabel: string
  /** Accessible name of a row's category button and its menu. */
  changeCategoryLabel: string
  /** Shown in the pane, and announced, when the visitor recategorises a row.
   *  Section 4: reception's corrections are recorded and never reverted. */
  correctionText: string
  /** Announced when a correction is made: "Moved to". */
  movedToLabel: string
  arrangedByDate: string
  arrangedByCategory: string
  /** The reading pane opens only once an email is chosen. */
  paneHeading: string
  closeLabel: string
  /** The muted, non-interactive Outlook toolbar items. */
  toolbar: string[]
  /** The counter under the panel, e.g. "10 emails · 2 Unclear · 1 labelled
   *  For Dr Smith · 0 moved out of the Inbox". Numbers are computed. */
  counter: { emails: string; unclear: string; labelled: string; moved: string }
  /** Handwritten notes under the window, each about one thing in it: the
   *  00 Unclear group, the person label, the counts line. */
  notes: { target: 'unclear' | 'label' | 'counter'; text: string }[]
  notesLabel: string
  /** Category order, 00 Unclear first. */
  categories: CategoryDef[]
  /** Newest first, as the unsorted Inbox lists them. */
  emails: DemoEmail[]
}

/** One email in "A night at the practice". Fictional. */
export interface PracticeRow {
  id: string
  sender: string
  subject: string
  received: string
  category: CategoryDef
  personLabel?: string
}

/** "A night at the practice" (night story, 9 November 2026): The Front
 *  Office's own story, a pinned inbox from the practice's Friday close to
 *  Monday morning. Every sentence is a fact already on the page or in
 *  section 4 of the rework brief; every row agrees with the morning summary
 *  it arrives at. */
export interface PracticeNightContent {
  heading: string
  intro: string
  clock: StoryClock
  toolbar: string[]
  mailboxName: string
  folderName: string
  arrangedBy: string
  /** The folder strip above the list. */
  folders: { inbox: string; drafts: string; junk: string }
  /** In the Inbox when the practice closes, already marked. */
  startRows: PracticeRow[]
  beats: {
    key: string
    minute: number
    /** An email arriving in the Inbox. */
    arrival?: PracticeRow
    /** The row the words attach to (an id in the Inbox). */
    target?: string
    /** A reply is prepared in Drafts. */
    draft?: true
    /** Mail from a known sender lands in Junk, and stays there. */
    junk?: { sender: string; subject: string; received: string }
    /** The morning summary arrives and opens. */
    summary?: true
    /** Reception changes a category. */
    correction?: { id: string; to: CategoryDef }
    /** The words: an annotation on the inbox on a live desktop stage, beat
     *  text everywhere else. */
    text: string
  }[]
  /** After the story: the interactive inbox (Before / After, Replay, and
   *  changing categories). */
  tryIt: { heading: string; intro: string }
  summaryLinkLabel: string
}

/** One line of the plain-text morning summary, as the real email sets it:
 *  first column, subject (cut to 44 characters and padded to 44), sender
 *  email address, then any [For …] label. The first column is time waited
 *  in open hours ("45m", "3h 20m", "1d 2h"), or a date for the Replied and
 *  Junk blocks. */
export interface SummaryLine {
  first: string
  subject: string
  /** An email address, never a display name. Fictional, on example.com. */
  sender: string
  /** e.g. "For Dr Smith", rendered as "[For Dr Smith]". */
  personLabel?: string
}

/** Lines under one group heading, oldest first within the group. The
 *  heading is the category label as reception sees it, or a group name
 *  such as "With Dr Smith". */
export interface SummaryGroup {
  heading?: string
  lines: SummaryLine[]
}

/** A titled block after the main groups: Passed on, Replied, Junk. */
export interface SummaryBlock {
  heading: string
  /** The explanatory text under the heading, line for line as wrapped in
   *  the real email. */
  text: string[]
  /** Margin note on the illustration, outside the email itself. */
  optionalNote?: string
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
  /** The two title lines at the top of the body: practice name and date. */
  title: string[]
  /** Paragraphs before the groups, each line for line as wrapped. No greeting. */
  opening: string[][]
  groups: SummaryGroup[]
  blocks: SummaryBlock[]
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

  /** Who the system is for, completing the card title "<name>: <cardFor>"
   *  on / and /systems, e.g. "for practices with a shared Microsoft 365
   *  inbox". */
  cardFor: string

  /** One line — what it does. Shown on cards on / and /systems. */
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

  /** The interactive before-and-after inbox in the homepage hero. Only one
   *  system carries it. */
  heroDemo?: InboxDemo

  /** "A night at the practice": the system's story on its own page, a pinned
   *  inbox from close to the next morning. Never implies a live client. */
  night?: PracticeNightContent

  /** How this system is installed, step by step. /how-it-works links here
   *  as its example. */
  installation?: { heading: string; intro: string[]; steps: StepItem[] }

  /** The one measure agreed for this system, and how it is reported. */
  judged?: { heading: string; paragraphs: string[] }

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
export interface SummaryAnnotation {
  /** Text of the summary line the note points to (first line containing it). */
  match: string
  note: string
}

/** The hero's Monday list. Only repetitive correspondence jobs may be
 *  crossed off ("off your desk"): nothing else is a system Vicaria runs.
 *  Everything that needs judgement stays unticked ("needs a person"). */
export interface HeroList {
  title: string
  /** Done items first, then the ones that need a person. */
  items: { text: string; done: boolean }[]
  doneNote: string
  personNote: string
  /** Screen-reader prefix for a crossed-off item, e.g. "Off your desk:". */
  doneLabel: string
  caption: string
}

/** A story's clock: minutes since midnight at the start of its first day. */
export interface StoryClock {
  /** Day names in turn, from the story's first day. */
  days: string[]
  /** Where the running clock starts (above the first beat). */
  start: number
}

/** The homepage's first story, "One night" (night story, 9 November 2026).
 *  The hero's Monday list stays on screen while the business closes and the
 *  night passes. Company level: our systems keep working while the business
 *  is closed, and nothing more. Only the two correspondence items may be
 *  crossed off; no new tasks, no numbers. */
export interface NightStoryContent {
  /** The story's opening line, in the voice of the theme. */
  heading: string
  clock: StoryClock
  /** The indicator on the notepad: the owl's eye and its label, closed
   *  until the business closes. */
  watch: { off: string; on: string }
  beats: {
    key: string
    /** Anchor id (the folder rail's "The work" points at one beat). */
    id?: string
    minute: number
    /** Shown in place of the time, e.g. "Overnight". */
    label?: string
    /** The beat's words: an annotation on the notepad on a live desktop
     *  stage, beat text everywhere else. */
    text: string
    /** What the words attach to: an item on the list (by index), the
     *  list's title, or the items that need a person. */
    target: number | 'title' | 'person' | 'none'
    /** Items crossed off at this beat (indexes into hero.list.items). */
    crosses?: number[]
    /** The judgement items dim, waiting. */
    waits?: boolean
    /** The notepad reads its morning line. */
    morning?: boolean
    /** The kind of work we take on: the characteristics, shown in this beat. */
    showsWork?: boolean
  }[]
  /** The four characteristics, as small tags on the two correspondence
   *  items (by index). */
  tags: { item: number; text: string }[]
  /** The tag on each item that needs a person. */
  personTag: string
  /** The notepad's line at 7:00 am. */
  morningLine: string
}

/** The homepage's second story: the same notepad through the six steps
 *  every system runs by. Only the existing step wording; the artifact's
 *  lines are fictional and generic (no sector). */
export interface MethodStoryContent {
  /** "The job" card the two crossed-off items join into. */
  jobTitle: string
  /** The one-page rules document. */
  rulesTitle: string
  rules: string[]
  /** The plain window frame. No real product names or logos. */
  windowTitle: string
  /** What the window shows once it runs: the two jobs, done. */
  doneRows: string[]
  /** The status in the window: no settings panel, just this. */
  runBy: string
  /** The monthly card. No figures. */
  monthlyTitle: string
  monthlyText: string
  /** The change email. */
  change: { from: string; subject: string; body: string; approve: string; notNow: string; applied: string }
}

export interface HomeContent {
  hero: {
    /** The sent time on the hero's From / To line. */
    sent: string
    heading: string
    /** The word in the heading that gets the light-blue marker underline. */
    markedWord: string
    body: string
    primary: LinkItem
    secondary: LinkItem
    /** The hero picture: a Monday to-do list for a fictional service
     *  business. Company level: no sector, no business name, no system. */
    list: HeroList
  }
  night: NightStoryContent
  /** Accessible name of the folder rail / tab strip. */
  foldersLabel: string
  /** The kind of work Vicaria takes on: characteristics, never a menu of
   *  tasks that would imply a system exists. */
  work: { eyebrow: string; sent: string; heading: string; items: HeadedItem[]; closing: string }
  /** How Vicaria works, for every system. */
  method: { eyebrow: string; sent: string; heading: string; items: HeadedItem[]; link: LinkItem; story: MethodStoryContent }
  /** Principles true of every system, not of one. */
  principles: { eyebrow: string; sent: string; heading: string; items: (string | DetailedItem)[]; link: LinkItem }
  systems: { eyebrow: string; sent: string; heading: string; intro: string; linkLabel: string; previewLinkLabel: string }
  /** The Front Office's morning summary, arriving as a new email below the
   *  systems section. The summary itself comes from content/systems.ts. */
  end: PageEnd
}

export interface SystemsIndexContent {
  header: PageHeader
  linkLabel: string
  end: PageEnd
}

export interface HowItWorksContent {
  header: PageHeader
  steps: { heading: string; steps: StepItem[] }
  sections: { heading: string; paragraphs: string[]; link?: LinkItem }[]
  /** One system's installation, linked as an example of the method. */
  example: { heading: string; paragraphs: string[]; link: LinkItem }
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
  /** Principles that apply to every system. */
  sections: PrivacySection[]
  /** One labelled subsection per system, for what is specific to it. */
  systemSections: { system: string; intro: string; sections: PrivacySection[] }[]
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
  /** The founders are shown as email signatures: "Vicaria Systems ·
   *  Brisbane", a thin rule, then the sent-from line. */
  signature: { company: string; place: string; sentFrom: string }
  detailsHeading: string
  detailLabels: { legalName: string; abn: string; location: string; email: string }
  end: PageEnd
}

/** /enquire — a plain email contact. The mailto link is the whole mechanism. */
export interface ContactPageContent {
  header: PageHeader
  /** The Outlook-style "New message" window. Its button is a mailto link
   *  that opens the visitor's own email; nothing is submitted or stored. */
  compose: {
    windowTitle: string
    toLabel: string
    subjectLabel: string
    subject: string
    /** Greyed prompts in the body, and the prefilled mailto body. */
    prompts: string[]
    sendLabel: string
    note: string
  }
  helpfulIntro: string
  helpfulItems: string[]
  /** A note for one system, set apart from the general list. */
  systemNote: string
  closing: string
  links: LinkItem[]
}

/** The flagship 404 (app/not-found.tsx), as an undeliverable-mail notice. */
export interface NotFoundContent {
  eyebrow: string
  heading: string
  from: string
  subjectPrefix: string
  pathLabel: string
  /** Shown until the requested path is filled in, and without JavaScript. */
  fallbackPath: string
  body: string
  links: LinkItem[]
}
