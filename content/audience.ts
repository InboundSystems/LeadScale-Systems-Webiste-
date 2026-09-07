import type { AudienceContent } from './types'

// Parent-level content — what Vicaria is, independent of which
// systems it currently runs. This is what the homepage sells; content/
// systems.ts is deliberately kept separate so a system change never
// requires touching this file.

export const audience: AudienceContent = {
  heroSubhead:
    'Vicaria builds AI systems for small service businesses and operates them on the client’s behalf. Each system takes responsibility for one recurring job — the messages that arrive after close, the bookings entered by hand, the follow-up that runs late. The system is installed and run by Vicaria. The client does not administer it.',

  audience: {
    description:
      'Vicaria works with small service businesses in which the owner is also the administrator. One to ten staff, no reception or back-office function, and at least one recurring job that runs outside trading hours.',
    // Vertical-specific language is not permitted here. Stays empty until a
    // second system is validated. Any repopulation must comply with
    // docs/VOICE.md — no salon/beauty-specific terms at company level.
    businessTypes: [],
    // Same rule as businessTypes above — leave empty, see docs/VOICE.md
    // before repopulating.
    profile: [],
  },

  howItWorks: {
    intro: 'The method by which Vicaria selects, builds and runs a system, and the terms under which it does so.',
    steps: [
      {
        title: 'The sector is researched before anything is built',
        description:
          'Two hundred and four Australian salon and beauty businesses were approached before the first system was specified. Fifty-eight gave a substantive account of their week. Twenty described the same problem, and that problem became System 01. The hypothesis Vicaria held going in placed seventh.',
      },
      {
        title: 'The system is built around existing tools',
        description:
          'Every business already operates a booking system, a calendar and a phone, and has usually paid for at least one. Replacing them is a migration, and a migration is where an engagement of this kind fails. Systems read and write through the tools already in place. Where that is not possible, the engagement is declined.',
      },
      {
        title: 'Vicaria installs and operates it',
        description:
          'No login is issued and no administration panel is provided. Vicaria configures the system, monitors its output, and corrects it. Errors are identified and resolved by Vicaria rather than reported by the client.',
      },
      {
        title: 'One measure is agreed before installation',
        description:
          'A single figure, agreed with the client in advance: enquiries handled without the owner’s involvement, or hours returned to the working week. It is drawn from the system’s actual output and reported monthly.',
      },
    ],
    closingLine: 'An engagement can be ended at any point, without notice.',
  },

  whoThisIsntFor: {
    // Deliberately empty — VOICE.md: "the list needs no preamble." The
    // component renders this unconditionally (no structural change made
    // here), so this leaves one empty, non-visible <p> above the list.
    intro: '',
    criteria: [
      'Businesses seeking software they administer themselves. Vicaria operates its systems; no client-side administration panel is provided.',
      'Work requiring judgement on each occurrence. A task that needs a decision every time is a role, not a system.',
      'Volumes too low to justify the cost of an engagement.',
      'Engagements conditional on transfer of the system to the client at a fixed date.',
    ],
  },

  whatWeWontDo: {
    // Deleted per this pass's instructions ("delete it. The list stands
    // alone."). Applying the same guard authorised for whoThisIsntFor.intro
    // above to HowItWorksContent.tsx's render of this field — not
    // explicitly asked for this field, but it's the identical case; flagged
    // rather than silently done.
    intro: '',
    items: [
      {
        heading: 'Replace a system that is working.',
        body:
          'Where a booking system, calendar or phone arrangement is functioning, it is retained. Systems are built on top of existing tools. An engagement that begins with a migration is not one Vicaria takes.',
      },
      {
        heading: 'Delegate commercial decisions to the system.',
        body:
          'Prices, deposits, refunds, discounts and cancellation terms are fixed by the client and quoted by the system without variation. Any request to depart from them is referred to the client. This does not change as the system improves.',
      },
      {
        heading: 'Contact anyone without a lawful basis.',
        body:
          'Before any record is imported, the client confirms the list was lawfully collected and that a basis exists to contact the people on it. An opt-out is permanent, applies across every system, and cannot be reversed by anyone.',
      },
      {
        heading: 'Take an engagement that will not repay its cost.',
        body:
          'Where a business already has staff answering enquiries, does not take appointments, or has volumes too low to justify the cost, this is stated at the first call.',
      },
      {
        heading: 'Transfer operation to the client.',
        body:
          'Vicaria does not license software. While a system is running in a client’s business, Vicaria is responsible for its output, and that responsibility is not transferred at a later date.',
      },
    ],
  },

  whosAccountable: {
    // Given as one continuous paragraph, not two — stored as a single array
    // entry rather than splitting it myself at an unmarked point.
    paragraphs: [
      'Each system is configured by the person who monitors it. Faults are found and corrected by Vicaria, not reported by the client, and the monthly figure is presented by the person responsible for it. This arrangement places a limit on the number of engagements Vicaria takes at one time, which is accepted as a condition of the model. A system that no one is watching is software, and software the client must supervise is the work they were trying to remove.',
    ],
  },

  // Intentionally general — principles, not specific commitments. No
  // timeframes, named systems, or numbers here on purpose: our actual
  // data-handling setup isn't locked in yet. Tighten this once it is,
  // rather than publishing specifics now that might not hold.
  dataHandling: {
    statement: 'Client data is what makes a system function. The following applies to all of it.',
    specifics: [
      'Access restricted to the personnel operating the system',
      'Used only to do the work for that business — never anyone else’s',
      'Never shared or sold, to anyone, for any reason',
      'A clear opt-out, honoured permanently',
      'Messaging done in line with Australian spam law',
      'Stored in Australia, returnable or deletable on request',
    ],
  },

  about: {
    intro: [
      'Vicaria builds AI systems for small service businesses and operates them on the client’s behalf.',
      'The distinction is the whole model. Software sold to a small business is configured, learned and maintained by its owner, and its failures occur on their time. Vicaria issues no login. Each system is installed, monitored and corrected by the firm that built it, so the work leaves the client rather than changing form.',
      'The first system was specified from research rather than assumption. Two hundred and four Australian salon and beauty businesses were approached in person, by phone and by message. Fifty-eight gave a substantive account of what they were doing after close. Twenty described the same problem, and System 01 was built for it.',
      'Vicaria operates from Brisbane.',
    ],
    founders: [
      {
        name: 'Blake',
        role: 'Client Communications',
        blurb: 'Conducts the setup call, holds the working relationship through the engagement, and presents the monthly figure.',
      },
      {
        name: 'Sam',
        role: 'Development',
        blurb: 'Builds the systems, defines the limits on what each is permitted to decide, and monitors them in operation.',
      },
    ],
  },

  contact: {
    // No phone number published — email is the primary and preferred channel.
    email: 'admin@leadscalesystems.net',
    location: 'Brisbane, Australia',
  },
}
