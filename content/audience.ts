import type { AudienceContent } from './types'

// Parent-level content — what LeadScale Systems is, independent of which
// systems it currently runs. This is what the homepage sells; content/
// systems.ts is deliberately kept separate so a system change never
// requires touching this file.
//
// STRUCTURE DRAFT — placeholder values below, not final site copy.
// Copy pass happens in step 2, against this shape.

export const audience: AudienceContent = {
  whoWeAre: {
    statement:
      '[placeholder] We build and run back-office systems for small, appointment-based businesses.',
    arrangement:
      '[placeholder] Delivered as completed work, not software. There are recurring jobs that never get done because the owner is doing admin after close — we take one, build a system for it, and run it.',
  },

  audience: {
    description: '[placeholder] Small, owner-run beauty and grooming businesses across Australia.',
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
    '[placeholder] Framed against staff time and lost revenue — never against a software subscription.',

  howItWorks: {
    intro: '[placeholder — how a system gets built and run, in general terms]',
    steps: [
      { title: '[placeholder step 1]', description: '[placeholder description]' },
      { title: '[placeholder step 2]', description: '[placeholder description]' },
      { title: '[placeholder step 3]', description: '[placeholder description]' },
    ],
  },

  whoThisIsntFor: {
    intro: '[placeholder framing sentence]',
    criteria: [
      '[placeholder] Owners who’d rather handle everything themselves',
      '[placeholder] Businesses too small or too new for this to be worth it',
    ],
  },

  // Intentionally general — principles, not specific commitments. No
  // timeframes, named systems, or numbers here on purpose: our actual
  // data-handling setup isn't locked in yet. Tighten this once it is,
  // rather than publishing specifics now that might not hold.
  dataHandling: {
    statement: '[placeholder] How client data is handled, in plain terms.',
    specifics: [
      '[placeholder] Kept secure, with access limited to the two of us',
      '[placeholder] Used only to do the work for that client’s own business',
      '[placeholder] Never shared or sold, to anyone, for any reason',
      '[placeholder] A clear opt-out, honoured permanently',
      '[placeholder] Messaging done in line with Australian spam law',
    ],
  },

  about: {
    statement: '[placeholder] Short, professional, business-focused — what we do and how it works.',
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
