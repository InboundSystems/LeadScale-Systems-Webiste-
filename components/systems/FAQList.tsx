import type { FAQItem } from '@/content/types'
import { TextLink } from './ui'

// Native <details>, so the FAQ needs no client JavaScript and keeps
// keyboard and screen-reader behaviour for free.
export default function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="border-t border-[var(--hairline)]">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-[var(--hairline)]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[var(--ink)] [&::-webkit-details-marker]:hidden">
            <span className="font-semibold">{item.question}</span>
            <span
              aria-hidden="true"
              className="v-mono mt-0.5 shrink-0 text-[1.125rem] leading-none text-[var(--accent)] group-open:hidden"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="v-mono mt-0.5 hidden shrink-0 text-[1.125rem] leading-none text-[var(--accent)] group-open:inline"
            >
              −
            </span>
          </summary>
          <div className="max-w-[65ch] pb-6">
            <p className="text-[var(--ink)]">{item.answer}</p>
            {item.answerLink && (
              <p className="mt-3">
                <TextLink link={item.answerLink} />
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}
