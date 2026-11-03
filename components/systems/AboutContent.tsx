import { about, business } from '@/content/audience'
import { PageEnd, PageHeader, Section } from './ui'

// /about. Short and professional: the firm, Brisbane, founders named, ABN.
// Founders are listed, never used as the trust argument. They are set as two
// email signatures, in keeping with the rest of the site.
export default function AboutContent() {
  const details = [
    { term: about.detailLabels.legalName, value: business.legalName },
    { term: about.detailLabels.abn, value: business.abn },
    { term: about.detailLabels.location, value: business.location },
    { term: about.detailLabels.email, value: business.email, href: `mailto:${business.email}` },
  ]

  return (
    <>
      <PageHeader header={about.header} chipTone="plum">
        <div className="mt-6 flex flex-col gap-4">
          {about.paragraphs.map((p) => (
            <p key={p} className="v-lead">
              {p}
            </p>
          ))}
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="v-h3">{about.foundersHeading}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {about.founders.map((f) => (
                <li key={f.name} className="rounded-[8px] border border-[#d9e1e1] bg-[var(--surface)] px-5 py-5">
                  <p className="v-serif text-[1.25rem] font-semibold leading-snug text-[var(--ink)]">{f.name}</p>
                  <p className="mt-0.5 text-[0.9375rem] text-[var(--muted)]">{f.role}</p>
                  <p className="mt-3 text-[0.875rem] text-[var(--ink)]">
                    {about.signature.company} <span aria-hidden="true" className="text-[#b9c3c5]">·</span>{' '}
                    {about.signature.place}
                  </p>
                  <p className="mt-3 border-t border-[var(--hairline)] pt-3 text-[0.8125rem] italic text-[var(--muted)]">
                    {about.signature.sentFrom}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="v-h3">{about.detailsHeading}</h2>
            <dl className="mt-4 border-t border-[var(--hairline)]">
              {details.map((d) => (
                <div key={d.term} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 border-b border-[var(--hairline)] py-4">
                  <dt className="v-small">{d.term}</dt>
                  <dd className="text-[var(--ink)]">
                    {d.href ? (
                      <a href={d.href} className="v-link">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <PageEnd end={about.end} />
    </>
  )
}
