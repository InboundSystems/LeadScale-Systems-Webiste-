import type { AudienceContent } from './types'

// Parent-level content — what LeadScale Systems is, independent of which
// systems it currently runs. This is what the homepage sells; content/
// systems.ts is deliberately kept separate so a system change never
// requires touching this file.

export const audience: AudienceContent = {
  whoWeAre: {
    statement:
      'We build and run back-office systems for small, appointment-based businesses — delivered as completed work, not software.',
    arrangement:
      'There are jobs in a business like yours that need doing every week and never quite get done, because there’s no one whose job it is to do them. We take one, build a system around it, and run it — for as long as you want it running. It’s built to work with whatever you already use to run your business, without needing access to your accounts or platforms.',
  },

  audience: {
    description: 'Small, owner-run beauty and grooming businesses across Australia.',
    businessTypes: [
      'Hair',
      'Beauty and skin',
      'Massage and day spa',
      'Nails',
      'Lash and brow',
      'Tanning',
      'Barbershops',
      'Dog grooming',
    ],
    profile: [
      '1–10 staff, single site',
      'Existing booking software already in use',
      'No marketing function',
      'Owner doing admin after close',
    ],
  },

  valueFraming:
    'We frame the value here in terms of the staff time it saves you and the bookings you’d otherwise lose — never as another software subscription.',

  howItWorks: {
    intro: 'The same process for every system we run, regardless of which job it’s built around.',
    steps: [
      {
        title: 'We start with the job',
        description:
          'We look at the recurring job you want off your plate — what it involves, how it’s done today, and what "done" looks like for your business.',
      },
      {
        title: 'We build the system around it',
        description:
          'We build the system that does that job, around how your business already runs. It’s built to work with whatever you already use — no login access, no platform changes on your end.',
      },
      {
        title: 'We run it',
        description:
          'Once it’s live, we run it. You don’t operate anything — you see what it’s doing and the results it’s getting.',
      },
      {
        title: 'You get a plain report',
        description: 'On a regular basis, you get a plain report on what the system’s done. No login required to see it.',
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
