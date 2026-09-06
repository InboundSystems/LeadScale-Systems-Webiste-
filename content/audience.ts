import type { AudienceContent } from './types'

// Parent-level content — what LeadScale Systems is, independent of which
// systems it currently runs. This is what the homepage sells; content/
// systems.ts is deliberately kept separate so a system change never
// requires touching this file.

export const audience: AudienceContent = {
  heroSubhead:
    'We build and run AI systems inside small businesses. Each one takes a recurring job off the owner permanently — the messages, the bookings, the follow-up, the admin that fills the evenings. You get the work done, not another tool to learn.',

  whoWeAre: {
    statement:
      'Clients text, DM and ring your salon at all hours, and every one of them lands on you. We answer them, book them in, and put it straight into the calendar you already use.',
    arrangement:
      'There are jobs in a business like yours that need doing every week and never quite get done, because there’s no one whose job it is to do them. We take one, build a system around it, and run it — for as long as you want it running. It’s built to work with whatever you already use to run your business, without needing access to your accounts or platforms.',
  },

  audience: {
    description:
      'Small, owner-operated businesses where the person running it is still doing the admin. Usually one to ten staff, no back office, and at least one job that eats their evenings.',
    businessTypes: [],
    profile: [],
  },

  valueFraming:
    'We frame the value here in terms of the staff time it saves you and the bookings you’d otherwise lose — never as another software subscription.',

  howItWorks: {
    intro: 'The same process for every system we run, regardless of which job it’s built around.',
    steps: [
      {
        title: 'We research the sector before we build anything',
        description: 'We go and ask the people who’d use it what actually eats their week.',
      },
      {
        title: 'We build the system around what they already use',
        description: 'No migration, no new software to learn.',
      },
      {
        title: 'We install it and we run it',
        description: 'It isn’t handed over.',
      },
      {
        title: 'You get a number you can check each month',
        description: 'And a person accountable for it.',
      },
    ],
  },

  whoThisIsntFor: {
    intro: 'Who shouldn’t bother:',
    criteria: [
      'Owners who’d rather handle this kind of work themselves',
      'Businesses too small or too new for this to be worth it yet',
    ],
  },

  // Intentionally general — principles, not specific commitments. No
  // timeframes, named systems, or numbers here on purpose: our actual
  // data-handling setup isn't locked in yet. Tighten this once it is,
  // rather than publishing specifics now that might not hold.
  dataHandling: {
    statement: 'Because our systems run on your business’s data, here’s how we handle it:',
    specifics: [
      'Kept secure, with access limited to the two of us',
      'Used only to do the work for that business — never anyone else’s',
      'Never shared or sold, to anyone, for any reason',
      'A clear opt-out, honoured permanently',
      'Messaging done in line with Australian spam law',
    ],
  },

  about: {
    statement:
      'Each system takes one recurring job off a business’s plate and runs it, for as long as they want it running.',
    founders: [
      { name: 'Blake', role: 'Client Communications & Relationships' },
      { name: 'Sam', role: 'Developer' },
    ],
    location: 'Brisbane, Australia',
  },

  contact: {
    // No phone number published — email is the primary and preferred channel.
    email: 'admin@leadscalesystems.net',
    location: 'Brisbane, Australia',
  },
}
