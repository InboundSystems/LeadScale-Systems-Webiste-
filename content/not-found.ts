import type { NotFoundContent } from './types'

// The flagship 404, set as an undeliverable-mail notice. Short and calm.
export const notFound: NotFoundContent = {
  eyebrow: 'Undeliverable',
  heading: 'Delivery has failed to this page.',
  from: 'Vicaria',
  subjectPrefix: 'Undeliverable:',
  pathLabel: 'Requested',
  fallbackPath: 'this address',
  body: 'There is no page at this address. It may have moved, or the address may be mistyped.',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Systems', href: '/systems' },
  ],
}
