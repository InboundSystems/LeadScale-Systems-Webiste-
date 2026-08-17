import type { AudienceContent } from './types'

// Brand and audience copy — who we serve, how we position what we sell, the
// data-handling story, and About content. This survives an offer change;
// none of it should need editing just because content/offer.ts changes.
//
// STRUCTURE DRAFT — placeholder values below, not final site copy.
// Copy pass happens in step 3, against this shape.

export const audience: AudienceContent = {
  audience: {
    description:
      '[placeholder] Small, owner-operated beauty and grooming businesses across Australia.',
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
    statement: '[placeholder] Completed work, not software.',
    valueFraming:
      '[placeholder] Framed against staff time and lost revenue — never against a software subscription.',
  },

  differentiators: [
    {
      title: '[placeholder] Export-based, no API dependency',
      body:
        '[placeholder] Works with what they already run, including Fresha — which has no public API at all. Also compatible in spirit with Timely, Phorest, Kitomba, Square Appointments.',
    },
    {
      title: '[placeholder] Spam Act compliant by design',
      body:
        '[placeholder] Lookback caps, sender identification, a working unsubscribe, and a permanent suppression list. Most operators in this space aren’t across this.',
    },
    {
      title: '[placeholder] Two real people in Brisbane',
      body: '[placeholder] Named, local, contactable.',
    },
    {
      title: '[placeholder] We do the work by hand first',
      body:
        '[placeholder] Honest about being early — explains why we’re careful, and why we’re not overselling.',
    },
  ],

  dataHandling: {
    statement:
      '[placeholder] Plain-terms explanation of what happens to a client list once it’s handed over.',
    specifics: [
      '[placeholder] 18–24 month lookback cap',
      '[placeholder] Sender identification on every message',
      '[placeholder] Working unsubscribe on every message',
      '[placeholder] Permanent, global suppression list',
    ],
  },

  about: {
    intro: '[placeholder] Founder-led, two-person partnership, based in Brisbane.',
    founders: [
      { name: 'Blake', role: 'Co-founder' },
      { name: 'Sam', role: 'Co-founder & Developer' },
    ],
    location: 'Brisbane, Australia',
    honesty:
      '[placeholder] Honest about being early — no clients yet, no invented results, just two people who’ll answer email.',
  },

  contact: {
    // No phone number published — email is the primary and preferred channel.
    email: 'admin@leadscalesystems.net',
    location: 'Brisbane, Australia',
  },
}
