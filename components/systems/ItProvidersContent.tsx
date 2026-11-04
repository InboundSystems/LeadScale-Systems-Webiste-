import { itProviders } from '@/content/it-providers'
import { PageEnd, PageHeader, Section, SplitBlock, sentAt } from './ui'

// /it-providers. Factual and technical, in the order section 6 of the
// rework brief sets. Permission names in monospace, as they are typed.
export default function ItProvidersContent() {
  const { asked, permissions, notRequested, restriction, howItRuns, withdrawing } = itProviders

  return (
    <>
      <PageHeader header={itProviders.header} chipTone="slate" />

      <Section sent={sentAt(0)}>
        <SplitBlock heading={asked.heading}>
          {asked.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>

        <SplitBlock heading={permissions.heading}>
          <p className="v-body">{permissions.intro}</p>
          <dl className="mt-2 border-t border-[var(--hairline)]">
            {permissions.items.map((perm) => (
              <div key={perm.name} className="border-b border-[var(--hairline)] py-5">
                <dt className="flex flex-wrap items-center gap-3">
                  <code className="v-mono rounded-[3px] bg-[var(--accent-tint)] px-2 py-1 text-[0.875rem] font-semibold text-[var(--ink)]">
                    {perm.name}
                  </code>
                  <span className="v-small">{perm.type}</span>
                </dt>
                <dd className="mt-3 max-w-[60ch] text-[var(--ink)]">{perm.reason}</dd>
                {perm.note && <dd className="v-small mt-2 max-w-[60ch]">{perm.note}</dd>}
              </div>
            ))}
          </dl>
        </SplitBlock>

        <SplitBlock heading={notRequested.heading}>
          <p className="v-body">{notRequested.intro}</p>
          <ul className="border-t border-[var(--hairline)]">
            {notRequested.items.map((item) => (
              <li key={item} className="border-b border-[var(--hairline)] py-3 text-[var(--ink)]">
                {/^[A-Z]\w+\.\w+$/.test(item) ? <code className="v-mono text-[0.875rem]">{item}</code> : item}
              </li>
            ))}
          </ul>
        </SplitBlock>

        <SplitBlock heading={restriction.heading}>
          <p className="v-body font-semibold">{restriction.intro}</p>
          <ol className="flex flex-col gap-3">
            {restriction.steps.map((step, i) => (
              <li key={step} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="tabular-nums font-semibold text-[var(--accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="max-w-[60ch] text-[var(--ink)]">{step}</p>
              </li>
            ))}
          </ol>
          <p className="max-w-[60ch] border-l-2 border-[var(--accent)] bg-[var(--warm)] px-5 py-4 text-[var(--ink)]">
            {restriction.closing}
          </p>
        </SplitBlock>

        <SplitBlock heading={howItRuns.heading}>
          {howItRuns.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>

        <SplitBlock heading={withdrawing.heading}>
          <p className="v-small">{withdrawing.pathLabel}</p>
          <ol className="-mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[var(--ink)]">
            {withdrawing.path.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-[var(--muted)]">
                    ›
                  </span>
                )}
                <span className="font-semibold">{step}</span>
              </li>
            ))}
          </ol>
          {withdrawing.paragraphs.map((p) => (
            <p key={p} className="v-body">
              {p}
            </p>
          ))}
        </SplitBlock>
      </Section>

      <PageEnd end={itProviders.end} />
    </>
  )
}
