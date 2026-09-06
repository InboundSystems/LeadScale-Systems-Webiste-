import type { SystemContent, SystemsSectionIntro } from './types'

// UNVALIDATED — content here is a best guess, not a proven product. Adding a
// system means appending an entry to this array; nothing else about the
// shape needs to change. Most optional slots stay empty until a system is
// actually validated — see the comment on SystemContent in ./types.ts for
// what "empty" should render as (nothing, not an empty heading).

export const systems: SystemContent[] = [
  {
    name: 'The Front Desk',
    shortDescription:
      'Clients text or DM to book. It answers, checks what’s actually free, and books them into the calendar you already use.',
    // slug: intentionally unset — see the reserved-for comment on
    // SystemContent.slug in ./types.ts.
    whatMakesItDifferent: [
      {
        heading: 'No migration.',
        body:
          'It writes into the calendar you already use. Your booking system picks it up as a booking. Nothing moves, nothing gets exported, and you don’t learn a new system.',
      },
      {
        heading: 'It books the right length of time.',
        body:
          'A colour isn’t one solid block. There’s the mixing, the time you’re actually with the client, the forty minutes it’s developing and your chair is busy but you aren’t, and the wash off. It books all four properly, so that middle stretch stays usable.',
      },
    ],
    whatWeDo: [
      'Answers messages at 10pm, on Sundays, and while you’ve got someone in the chair',
      'Works out what they want booked, and how long it actually takes',
      'Checks what’s genuinely free and offers real times',
      'Books it into the calendar you already use, so your booking system picks it up',
      'Knows who’s texting, what they usually get, and when they’re due back',
      'Sends the reminder the day before, and the nudge when they’re due',
      'Hands anything it’s unsure about straight to you',
    ],
    howItWorks: [
      {
        title: 'Send us what you’ve got',
        description:
          'Your client list, your price list, a photo of the wall menu. Whatever state it’s in.',
      },
      {
        title: 'One call, about thirty minutes',
        description: 'We read your services back to you and you tell us how long they really take.',
      },
      {
        title: 'We forward your number and connect your calendar',
        description: 'Live the same day.',
      },
      {
        title: 'For the first week you approve every reply before it sends',
        description: 'Then most people stop bothering.',
      },
    ],
    whoThisIsntFor: {
      intro: 'Who this isn’t for:',
      criteria: [
        'Businesses that don’t take appointments',
        'Anyone wanting to replace their booking system. We sit on top of it, we don’t replace it',
        'Multi-site businesses with reception staff already answering the phone',
        'Anyone who wants an AI making decisions about pricing or refunds. Those come to you',
      ],
    },
    faq: [
      {
        question: 'Do I have to leave Fresha?',
        answer:
          'No. It writes into your Google Calendar and Fresha picks it up as a booking. Nothing moves, nothing gets migrated, and you don’t learn a new system.',
      },
      {
        question: 'What if it gets something wrong?',
        answer:
          'For the first week nothing sends without you approving it. After that, anything it isn’t confident about comes to you instead of being guessed at.',
      },
      {
        question: 'Does it know a full head of foils isn’t the same as a fringe trim?',
        answer:
          'Yes. It books the real length of the service, including the time your colour is developing and the chair is busy but you aren’t. That’s most of what the setup call is for.',
      },
      {
        question: 'What happens to my client list?',
        answer:
          'It stays in Australia, on servers in Sydney, and it stays yours. You can have it back or have it deleted whenever you want.',
      },
      {
        question: 'Will it text my clients things I haven’t approved?',
        answer:
          'No. And a client who replies STOP is suppressed permanently — across every salon on the system, not just yours.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Nothing’s priced publicly yet. Get in touch and we’ll tell you honestly whether it’s worth it for your business.',
      },
    ],
  },
]

// The short, company-level intro to the systems roster — shown on the
// homepage, above the system card(s). Distinct from any one system's own
// content above.
export const systemsSectionIntro: SystemsSectionIntro = {
  heading: 'Systems We Build And Run.',
  body: 'Each system takes one recurring job and takes it permanently. Built for one job, in one kind of business, then installed and run rather than sold. Here’s the first.',
  closingLine: 'The next system is in research now. Different job, different sector, same method.',
}
