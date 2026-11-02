import { about, business } from '@/content/audience'
import { PageEnd, PageHeader, Section } from './ui'

// /about. Short and professional: the firm, Brisbane, founders named, ABN.
// Founders are listed, never used as the trust argument.
export default function AboutContent() {
  const details = [
    { term: about.detailLabels.legalName, value: business.legalName },
    { term: about.detailLabels.abn, value: business.abn },
    { term: about.detailLabels.location, value: business.location },
    { term: about.detailLabels.email, value: business.email, href: `mailto:${business.email}` },
  ]

  return (
    <>
      <PageHeader header={about.header}>
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
            <dl className="mt-4 border-t border-[var(--hairline)]">
              {about.founders.map((f) => (
                <div key={f.name} className="flex items-baseline justify-between gap-4 border-b border-[var(--hairline)] py-4">
                  <dt className="v-serif text-[1.25rem] font-semibold text-[var(--ink)]">{f.name}</dt>
                  <dd className="v-small">{f.role}</dd>
                </div>
              ))}
            </dl>
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
