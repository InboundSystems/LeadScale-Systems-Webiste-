import type { SystemContent } from './types'

// UNVALIDATED — content here is a best guess, not a proven product. Adding a
// system means appending an entry to this array; nothing else about the
// shape needs to change. Most optional slots stay empty until a system is
// actually validated — see the comment on SystemContent in ./types.ts for
// what "empty" should render as (nothing, not an empty heading).
//
// STRUCTURE DRAFT — shortDescription below is a placeholder, not final copy.
// Copy pass happens in step 2, against this shape.

export const systems: SystemContent[] = [
  {
    name: 'Client Reconnection',
    shortDescription: '[placeholder] Finding the clients who’ve stopped coming in, and getting them rebooked.',
    // slug, howItWorks, whoThisIsntFor, faq: intentionally unset — this
    // system doesn't have its own full page yet. See the reserved-for
    // comment on SystemContent.slug in ./types.ts.
  },
]
