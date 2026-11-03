import Link from 'next/link'
import type { ReactNode } from 'react'
import type {
  DetailedItem,
  LinkItem,
  PageEnd as PageEndContent,
  PageHeader as PageHeaderContent,
  StepItem,
} from '@/content/types'

// Flagship-only primitives. Server components, no motion. Media keeps its own
// shared components (components/ui, components/home, Navbar, Footer); nothing
// here is imported by /media. Tokens: app/globals.css [data-brand='systems'].

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[72rem] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

type Tone = 'ground' | 'surface' | 'warm' | 'teal'

const toneClass: Record<Tone, string> = {
  ground: 'bg-[var(--ground)]',
  surface: 'bg-[var(--surface)]',
  warm: 'bg-[var(--warm)]',
  teal: 'bg-[var(--teal)] text-white',
}

export function Section({
  children,
  tone = 'ground',
  rule = true,
  id,
  labelledBy,
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  rule?: boolean
  id?: string
  labelledBy?: string
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} ${rule ? 'border-t border-[var(--hairline)]' : ''} py-14 sm:py-20 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`v-eyebrow mb-4 ${className}`}>{children}</p>
}

/** Renders a Next link for internal routes and a plain anchor otherwise
 *  (mailto:, external). */
export function SmartLink({
  href,
  className,
  children,
  ariaCurrent,
}: {
  href: string
  className?: string
  children: ReactNode
  ariaCurrent?: 'page'
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} aria-current={ariaCurrent}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export function TextLink({
  link,
  inverse = false,
  className = '',
}: {
  link: LinkItem
  /** White, for the teal band. */
  inverse?: boolean
  className?: string
}) {
  return (
    <SmartLink href={link.href} className={`${inverse ? 'v-link-inverse' : 'v-link'} font-semibold ${className}`}>
      {link.label}
      <span aria-hidden="true"> →</span>
    </SmartLink>
  )
}

export function ButtonLink({
  link,
  variant = 'primary',
  className = '',
}: {
  link: LinkItem
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 py-3 text-[0.9375rem] font-semibold leading-none transition-colors duration-150'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--teal)] text-white hover:bg-[var(--saffron)] hover:text-[var(--ink)]'
      : 'border border-[var(--teal)] bg-transparent text-[var(--teal)] hover:bg-[var(--row-selected)]'
  return (
    <SmartLink href={link.href} className={`${base} ${styles} ${className}`}>
      {link.label}
    </SmartLink>
  )
}

export function PageHeader({ header, children }: { header: PageHeaderContent; children?: ReactNode }) {
  return (
    <header className="pb-14 pt-12 sm:pb-20 sm:pt-20">
      <Container>
        <Eyebrow>{header.eyebrow}</Eyebrow>
        <h1 className="v-h1 max-w-[22ch]">{header.heading}</h1>
        {header.intro && <p className="v-lead mt-6">{header.intro}</p>}
        {children}
      </Container>
    </header>
  )
}

/** The one line every page ends on, and its action (docs/VOICE.md §10). */
export function PageEnd({ end }: { end: PageEndContent }) {
  return (
    <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-14 sm:py-16">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="v-serif max-w-[40ch] text-[1.25rem] leading-snug text-[var(--ink)] sm:text-[1.375rem]">
          {end.line}
        </p>
        <ButtonLink link={end.link} className="shrink-0" />
      </Container>
    </section>
  )
}

/** A plain list with hairline separators. Not cards. */
export function RuledList({
  items,
  markers,
  className = '',
}: {
  items: (string | DetailedItem)[]
  /** Optional colour squares, one per item in order (e.g. the category
   *  palette on the homepage principles). */
  markers?: string[]
  className?: string
}) {
  return (
    <ul className={`border-t border-[var(--hairline)] ${className}`}>
      {items.map((item, i) => {
        const { text, detail } = typeof item === 'string' ? { text: item, detail: undefined } : item
        const marker = markers?.[i % markers.length]
        return (
          <li key={text} className={`border-b border-[var(--hairline)] py-4 ${marker ? 'flex gap-4' : ''}`}>
            {marker && (
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-2.5 w-2.5 shrink-0 rounded-[1px]"
                style={{ backgroundColor: marker }}
              />
            )}
            <div>
              <p className="text-[var(--ink)]">{text}</p>
              {detail && <p className="v-small mt-1">{detail}</p>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/** Heading in a narrow left column, body in a wider right column, ruled. */
export function SplitBlock({
  heading,
  headingId,
  headingLevel = 'h2',
  children,
}: {
  heading: string
  headingId?: string
  headingLevel?: 'h2' | 'h3'
  children: ReactNode
}) {
  const Heading = headingLevel
  return (
    <div className="grid gap-4 border-t border-[var(--hairline)] py-8 lg:grid-cols-12 lg:gap-10">
      <Heading id={headingId} className="v-serif text-[1.375rem] font-semibold leading-snug text-[var(--ink)] lg:col-span-4">
        {heading}
      </Heading>
      <div className="flex flex-col gap-4 lg:col-span-8">{children}</div>
    </div>
  )
}

/** Numbered steps, for where the order is real: an engagement, an
 *  installation. */
export function NumberedSteps({ steps, className = '' }: { steps: StepItem[]; className?: string }) {
  return (
    <ol className={`border-t border-[var(--hairline)] ${className}`}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-[var(--hairline)] py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] lg:grid-cols-[4.5rem_minmax(0,22rem)_minmax(0,1fr)] lg:gap-10"
        >
          <span aria-hidden="true" className="v-mono pt-[0.15em] text-[1.125rem] font-semibold text-[var(--accent)]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="v-h3">{step.title}</h3>
          <div className="col-start-2 lg:col-start-auto">
            <p className="max-w-[60ch] text-[var(--muted)]">{step.description}</p>
            {step.link && (
              <p className="mt-2">
                <TextLink link={step.link} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
