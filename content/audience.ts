import type { AudienceContent } from './types'

// Parent-level content — what Vicaria is, independent of which
// systems it currently runs. This is what the homepage sells; content/
// systems.ts is deliberately kept separate so a system change never
// requires touching this file.

export const audience: AudienceContent = {
  heroSubhead:
    'Vicaria builds AI systems for the part of a recurring job that requires no judgement. The part that still needs a person stays with a person, in better order than it arrived. The client administers nothing.',

  audience: {
    description:
      'Vicaria works with businesses where the administrative work has no one dedicated to it. Either the owner carries it personally, or reception staff are stretched beyond what the role was built for.',
    // Sector-level, not vertical-level. These describe the two sectors Vicaria
    // builds for, never one trade within a sector. See docs/VOICE.md.
    businessTypes: [
      'Service businesses that take appointments',
      'Specialist medical and allied health clinics',
    ],
    // Sector-level, not vertical-level. These describe the two sectors Vicaria
    // builds for, never one trade within a sector. See docs/VOICE.md.
    profile: [
      'One to ten staff, or a reception desk carrying more than it can absorb',
      'At least one recurring job that runs outside trading hours',
      'Existing booking, calendar or mail systems that are working and are to be kept',
    ],
  },

  howItWorks: {
    intro: 'The method by which Vicaria selects, builds and runs a system, and the terms under which it does so.',
    steps: [
      {
        title: 'The sector is researched before anything is built',
        description:
          'The sector is researched directly, before a system is specified. Owners and managers are asked what actually happens during the working week, in person, by phone and by message. The problem a system is built to solve is the one raised most often, not the one assumed at the outset.',
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
  },

  howAnEngagementIsJudged: {
    heading: 'One Figure, Agreed In Advance.',
    intro:
      'A single figure is agreed with the client before installation. It is drawn from the system’s own output, not from an impression, and is reported monthly.',
    measures: [
      'How much work is handled without the client’s involvement',
      'How quickly things are answered',
      'What the client no longer does themselves',
    ],
    closing: 'An engagement can be ended at any point, without notice.',
  },

  endingAnEngagement: {
    heading: 'Ending An Engagement.',
    body:
      'Access is revoked by the client’s own administrator, not by Vicaria. Client data is returned or deleted on request. Nothing is held hostage to end the engagement.',
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
          'No contact is made without a lawful basis. Where records are imported, the client confirms the basis exists before import. An opt-out is permanent, applies across every system, and cannot be reversed by anyone.',
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

  about: {
    intro: [
      'Vicaria builds AI systems for the part of a recurring job that carries no judgement, and operates each one on the client’s behalf.',
      'The distinction is the whole model. Software sold to a small business is configured, learned and maintained by its owner, and its failures occur on their time. Vicaria issues no login. Each system is installed, monitored and corrected by the firm that built it, so the part that needs no judgement leaves the client rather than merely changing form. What still needs a person’s judgement stays with the client, better ordered than before.',
      'The Booking Line was specified from research into one sector, Australian salon and beauty businesses, rather than assumption. The research itself is set out on The Booking Line’s own page.',
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
    email: 'admin@vicaria.com.au',
    location: 'Brisbane, Australia',
  },
}
