import Link from 'next/link'
import { home } from '@/content/audience'
import { systems } from '@/content/systems'
import InboxIllustration from './InboxIllustration'
import { ButtonLink, Container, Eyebrow, PageEnd, RuledList, Section, TextLink } from './ui'

// Company level. Sells what Vicaria is; The Front Office appears as the first
// system, never as the whole business.
export default function HomeContent() {
  const first = systems[0]

  return (
    <>
      <header className="pb-16 pt-14 sm:pb-24 sm:pt-24">
        <Container>
          <Eyebrow>{home.hero.eyebrow}</Eyebrow>
          <h1 className="v-display max-w-[20ch]">{home.hero.heading}</h1>
          <p className="v-lead mt-7">{home.hero.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink link={home.hero.primary} />
            <ButtonLink link={home.hero.secondary} variant="secondary" />
          </div>
        </Container>
      </header>

      <Section labelledBy="model-heading">
        <Eyebrow>{home.model.eyebrow}</Eyebrow>
        <h2 id="model-heading" className="v-h2 max-w-[26ch]">
          {home.model.heading}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {home.model.items.map((item) => (
            <div key={item.heading} className="border-t-2 border-[var(--accent-light)] pt-5">
              <h3 className="v-h3">{item.heading}</h3>
              <p className="mt-2 text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface" labelledBy="first-system-heading">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>{home.firstSystem.eyebrow}</Eyebrow>
            <h2 id="first-system-heading" className="v-h2">
              {home.firstSystem.heading}
            </h2>
            <p className="v-serif mt-8 text-[1.5rem] font-semibold text-[var(--ink)]">{first.name}</p>
            <p className="mt-3 text-[var(--ink)]">{first.shortDescription}</p>
            {first.slug && (
              <p className="mt-6">
                <TextLink link={{ label: home.firstSystem.linkLabel, href: `/systems/${first.slug}` }} />
              </p>
            )}
          </div>
          {first.illustrations && (
            <div className="lg:col-span-7">
              <InboxIllustration inbox={first.illustrations.inbox} stacked maxGroups={3} />
            </div>
          )}
        </div>
      </Section>

      <Section tone="warm" labelledBy="never-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>{home.neverHappens.eyebrow}</Eyebrow>
            <h2 id="never-heading" className="v-h2">
              {home.neverHappens.heading}
            </h2>
            <p className="mt-4 text-[var(--ink)]">{home.neverHappens.intro}</p>
            <p className="mt-6">
              <TextLink link={home.neverHappens.link} />
            </p>
          </div>
          <RuledList items={home.neverHappens.items} className="lg:col-span-7" />
        </div>
      </Section>

      <Section labelledBy="data-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>{home.data.eyebrow}</Eyebrow>
            <h2 id="data-heading" className="v-h2">
              {home.data.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-7">
            {home.data.paragraphs.map((p) => (
              <p key={p} className="v-body">
                {p}
              </p>
            ))}
            <ul className="mt-2 flex flex-col gap-2">
              {home.data.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="v-link font-semibold">
                    {link.label}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <PageEnd end={home.end} />
    </>
  )
}
