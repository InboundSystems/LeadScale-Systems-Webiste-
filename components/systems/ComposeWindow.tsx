import { business } from '@/content/audience'
import type { ContactPageContent } from '@/content/types'
import { outlookFace } from './InboxParts'
import Tilt from './Tilt'

// /enquire as an Outlook-style "New message" window, in HTML/CSS. It is a
// picture of a message, not a form: the one action is a mailto link that
// opens the visitor's own email with the same To, Subject and a short body
// of prompts. Nothing is submitted, and nothing is stored.
export default function ComposeWindow({ compose }: { compose: ContactPageContent['compose'] }) {
  const body = compose.prompts.map((p) => `${p}:\n\n`).join('')
  const href = `mailto:${business.email}?subject=${encodeURIComponent(compose.subject)}&body=${encodeURIComponent(body)}`

  return (
    <div className="max-w-[44rem]">
      <Tilt>
      <section
        aria-labelledby="compose-title"
        className="lit lit-screen overflow-hidden rounded-[8px] border border-[var(--frame)] bg-[var(--surface)]"
        style={outlookFace}
      >
        <div className="border-b border-[var(--hairline)] bg-[var(--chrome)] px-4 py-2">
          <h2 id="compose-title" className="text-[0.8125rem] font-semibold text-[var(--ink)]">
            {compose.windowTitle}
          </h2>
        </div>

        <div className="border-b border-[var(--hairline)] px-4 py-3">
          <a
            href={href}
            className="inline-flex items-center rounded-[var(--radius-btn)] bg-[var(--primary)] px-4 py-2 text-[0.875rem] font-semibold leading-none text-white transition-[background-color,color,transform] duration-150 ease-out hover:-translate-y-px hover:bg-[var(--primary-deep)]"
          >
            {compose.sendLabel}
          </a>
        </div>

        <dl className="text-[0.875rem]">
          <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3 border-b border-[var(--hairline)] px-4 py-2.5">
            <dt className="text-[var(--muted)]">{compose.toLabel}</dt>
            <dd>
              <span className="inline-flex max-w-full items-center rounded-full border border-[var(--frame)] bg-[var(--chrome)] px-2.5 py-0.5 text-[0.8125rem] text-[var(--ink)]">
                <span className="truncate">{business.email}</span>
              </span>
            </dd>
          </div>
          <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3 border-b border-[var(--hairline)] px-4 py-2.5">
            <dt className="text-[var(--muted)]">{compose.subjectLabel}</dt>
            <dd className="text-[var(--ink)]">{compose.subject}</dd>
          </div>
        </dl>

        <ul className="flex min-h-[13rem] flex-col gap-5 px-4 py-5 text-[0.875rem] text-[var(--muted)]">
          {compose.prompts.map((p) => (
            <li key={p}>{p}:</li>
          ))}
        </ul>
      </section>
      </Tilt>
      <p className="v-small mt-3">{compose.note}</p>
    </div>
  )
}
