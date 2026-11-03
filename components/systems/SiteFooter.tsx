import Link from 'next/link'
import { business, site } from '@/content/audience'
import { CATEGORY_TONES, TONE_SEQUENCE } from '@/components/brand/categories'
import BrisbaneClock from './BrisbaneClock'
import { Container } from './ui'

// Flagship footer. Media keeps components/Footer.tsx. No social or client
// portal links here; the cross-link to Media lives in the footer only.
//
// Dark ground (var(--dark), near-black with a blue tint) with light text:
// var(--on-dark) 15.74, muted var(--on-dark-muted) 7.57, a light-blue hover
// underline. A row of the six category colour squares sits on its top edge.
const LINK =
  'underline decoration-transparent decoration-1 underline-offset-[3px] transition-[color,text-decoration-color] duration-150 ease-out hover:text-white hover:decoration-[var(--accent-light)]'

export default function SiteFooter() {
  return (
    <footer className="relative bg-[var(--dark)] pb-10 pt-14 text-[var(--on-dark)]">
      <Container>
        <div aria-hidden="true" className="absolute top-0 flex -translate-y-1/2 gap-1.5">
          {TONE_SEQUENCE.map((tone) => (
            <span key={tone} className="h-2.5 w-2.5 rounded-[1px]" style={{ backgroundColor: CATEGORY_TONES[tone].swatch }} />
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="v-serif text-[1.25rem] font-semibold text-white">Vicaria</p>
            <p className="mt-3 max-w-[34ch] text-[0.875rem] text-[var(--on-dark-muted)]">{site.footerTagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`text-[0.9375rem] text-[var(--on-dark)] ${LINK}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <dl className="flex flex-col gap-1 text-[0.875rem] text-[var(--on-dark-muted)]">
              <dt className="sr-only">Trading name</dt>
              <dd>{business.legalName}</dd>
              <dt className="sr-only">ABN</dt>
              <dd>ABN {business.abn}</dd>
              <dt className="sr-only">Location</dt>
              <dd>{business.location}</dd>
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${business.email}`} className={LINK}>
                  {business.email}
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.875rem] text-[var(--on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap gap-x-3">
            <span>
              © {new Date().getFullYear()} {business.legalName}
            </span>
            <BrisbaneClock place={site.clockPlace} />
          </p>
          <Link href={site.crossBrand.href} className={LINK}>
            {site.crossBrand.label}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
