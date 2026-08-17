import type { AudienceContent } from './types'

// Brand and audience copy — who we serve, how we position what we sell, the
// data-handling story, and About content. This survives an offer change;
// none of it should need editing just because content/offer.ts changes.

export const audience: AudienceContent = {
  audience: {
    description:
      'Small, owner-run beauty and grooming businesses across Australia.',
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

  positioning: {
    statement: 'Completed work, not software.',
    valueFraming:
      'We think about the value here in terms of the staff time it saves you and the bookings you’d otherwise lose — never as another software subscription.',
  },

  differentiators: [
    {
      title: 'Works With What You Already Run',
      body:
        'No new software, no login for us into your booking system. We work from an export — which matters especially if you’re on Fresha, since it doesn’t offer a way for outside tools to connect to it at all. Also fine if you’re on Timely, Phorest, Kitomba, Square Appointments, or something else.',
    },
    {
      title: 'We Take Compliance Seriously',
      body:
        'Most operators sending messages like this aren’t properly across Australian spam law. We are — it shapes how we work, not just a line in the fine print.',
    },
    {
      title: 'Two Real People in Brisbane',
      body: 'Blake and Sam. Named, local, and the ones who’ll actually read your email.',
    },
    {
      title: 'We Do The Work By Hand First',
      body: 'Before anything runs on its own, we read the list and write the messages ourselves. Slower, and deliberately so.',
    },
  ],

  // Intentionally general — principles, not specific commitments. No
  // timeframes, named systems, or numbers here on purpose: our actual
  // data-handling setup isn't locked in yet. Tighten this once it is,
  // rather than publishing specifics now that might not hold.
  dataHandling: {
    statement: 'We treat your client list the way we’d want ours treated.',
    specifics: [
      'Kept secure, with access limited to the two of us',
      'Used only to do the work for your business — never anyone else’s',
      'Never shared or sold, to anyone, for any reason',
      'If a client asks to be left alone, that’s honoured for good',
      'Every message we send follows Australian spam law',
    ],
  },

  about: {
    intro: 'Founder-led, two-person partnership, based in Brisbane.',
    founders: [
      { name: 'Blake', role: 'Client Communications & Relationships' },
      { name: 'Sam', role: 'Co-founder & Developer' },
    ],
    location: 'Brisbane, Australia',
    honesty:
      'Honest about being early — no clients yet, no invented results, just two people who’ll actually read your email and answer it.',
  },

  contact: {
    // No phone number published — email is the primary and preferred channel.
    email: 'admin@leadscalesystems.net',
    location: 'Brisbane, Australia',
  },
}
