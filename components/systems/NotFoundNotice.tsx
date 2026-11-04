import { notFound } from '@/content/not-found'
import VicariaOwl from '@/components/brand/VicariaOwl'
import { outlookFace } from './InboxParts'
import SectionChip from './SectionChip'
import { ButtonLink, Container } from './ui'

// The flagship 404 as an undeliverable-mail notice: a calm heading, then an
// Outlook-style message block naming the requested path, then Home and
// Systems. The page is prerendered once, so the path is filled in by a tiny
// inline script after the element (suppressHydrationWarning keeps React from
// putting the placeholder back). Without JavaScript it reads "this address".
const fillPath = `(function(){var e=document.querySelectorAll('[data-nf-path]');for(var i=0;i<e.length;i++)e[i].textContent=location.pathname})()`

export default function NotFoundNotice() {
  return (
    <section className="pb-20 pt-12 sm:pb-28 sm:pt-20">
      <Container>
        {/* The owl mark above the message, in ink (16.68 on the ground). */}
        <VicariaOwl className="mb-8 h-12 w-auto text-[var(--ink)]" />
        <SectionChip label={notFound.eyebrow} tone="violet" />
        <h1 className="v-h1 max-w-[22ch]">{notFound.heading}</h1>

        <div
          className="lit lit-screen mt-10 max-w-[40rem] overflow-hidden rounded-[8px] border border-[var(--frame)] bg-[var(--surface)]"
          style={outlookFace}
        >
          <dl className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 border-b border-[var(--hairline)] bg-[var(--chrome)] px-5 py-4 text-[0.875rem]">
            <dt className="text-[var(--muted)]">From</dt>
            <dd className="text-[var(--ink)]">{notFound.from}</dd>
            <dt className="text-[var(--muted)]">Subject</dt>
            <dd className="min-w-0 break-all font-semibold text-[var(--ink)]">
              {notFound.subjectPrefix}{' '}
              <span data-nf-path suppressHydrationWarning>
                {notFound.fallbackPath}
              </span>
            </dd>
          </dl>
          <div className="px-5 py-5">
            <p className="text-[0.875rem] text-[var(--ink)]">{notFound.body}</p>
            <p className="mt-4 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 text-[0.875rem]">
              <span className="text-[var(--muted)]">{notFound.pathLabel}</span>
              <span data-nf-path suppressHydrationWarning className="tabular-nums min-w-0 break-all text-[var(--ink)]">
                {notFound.fallbackPath}
              </span>
            </p>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: fillPath }} />

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink link={notFound.links[0]} />
          {notFound.links.slice(1).map((link) => (
            <ButtonLink key={link.href} link={link} variant="secondary" />
          ))}
        </div>
      </Container>
    </section>
  )
}
