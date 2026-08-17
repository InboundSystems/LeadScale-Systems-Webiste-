import type { OfferContent } from './types'

// UNVALIDATED HYPOTHESIS — this entire file describes the current best guess
// at the offer, not a proven product. Per docs/business-model-v2.html: the
// problem statement is sourced from vendor benchmark content, not from
// owners, and staffing / front-of-house are the leading rival hypotheses.
// Expect this file to change, possibly completely, after discovery
// conversations. Changing the offer should mean editing this file only —
// components read from it, they don't hardcode any of this.
//
// Copy is deliberately non-specific throughout — no numbers, no promised
// cadence, nothing that reads like a settled feature spec — because none of
// it is proven yet.

export const offer: OfferContent = {
  problemStatement: {
    headline: 'Client lists quietly lose people',
    body:
      'Clients drift off, cancel and never rebook, or just stop coming in — and nobody has time to notice, let alone chase it. The loss doesn’t show up anywhere. It just doesn’t happen.',
  },

  headline: {
    eyebrow: 'BRISBANE — TWO PEOPLE, NOT A CALL CENTRE',
    line1: 'The Clients Who’ve Gone Quiet',
    accent: 'Are Still Worth Chasing.',
    subhead:
      'We go through your client list, find the ones who’ve stopped coming in, and get them booked back.',
  },

  whatGetsDone: [
    'We watch for clients who are overdue to rebook, based on their own pattern',
    'We send a rebooking prompt at the point they’re actually due',
    'If someone cancels, we follow up the same day, while the slot’s still easy to fill',
    'If someone doesn’t show, we follow up rather than letting it disappear',
    'Once a month, you get a plain report on who came back',
  ],

  howItWorks: [
    {
      title: 'We work from what you export',
      description:
        'You export your client and booking history from whatever you already use — Fresha, Timely, Phorest, Kitomba, Square Appointments, whatever it is. We work from that export, not a login into your system.',
    },
    {
      title: 'We reach out at the right moment',
      description:
        'Using your own clients’ patterns, we know roughly when someone’s overdue. We reach out on your behalf, worded like it’s coming from you.',
    },
    {
      title: 'Cancellations and no-shows get chased the same day',
      description:
        'A cancellation or a no-show is the easiest booking to lose for good. We follow up the same day, while the slot’s still easy to refill.',
    },
  ],

  whoThisIsntFor: {
    intro: 'Being straight about who shouldn’t bother:',
    criteria: [
      'You’d rather handle client follow-up yourself',
      'Your booking system already chases up lapsed clients well, and you’re actually using that',
      'You’re too new to have a lapsed client list worth working yet',
    ],
  },

  faq: [
    {
      question: 'Do I need to change my booking software?',
      answer:
        'No. We work from what you export out of it. Nothing gets installed, nothing gets connected.',
    },
    {
      question: 'How do you actually get my client list?',
      answer: 'You export it, we work from that. We don’t ask for login access to your booking system.',
    },
    {
      question: 'What if a client doesn’t want to hear from you?',
      answer: 'Anyone who asks to be left alone is honoured for good — that’s not negotiable.',
    },
    {
      question: 'Is someone actually checking this before it goes out?',
      answer:
        'Right now, yes — by hand. We read the list and write the messages ourselves, before any part of it runs without us checking first.',
    },
  ],

  // Do not populate. No pricing page, no "from $X", no tier table — see brief.
  pricing: null,
}
