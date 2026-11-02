import Link from 'next/link'
import { business, site } from '@/content/audience'
import { Container } from './ui'

// Flagship footer. Media keeps components/Footer.tsx. No social or client
// portal links here; the cross-link to Media lives in the footer only.
export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--ground)] pb-10 pt-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="v-serif text-[1.25rem] font-semibold text-[var(--ink)]">Vicaria</p>
            <p className="v-small mt-3 max-w-[34ch]">{site.footerTagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.9375rem] text-[var(--muted)] hover:text-[var(--ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <dl className="v-small flex flex-col gap-1">
              <dt className="sr-only">Trading name</dt>
              <dd>{business.legalName}</dd>
              <dt className="sr-only">ABN</dt>
              <dd>ABN {business.abn}</dd>
              <dt className="sr-only">Location</dt>
              <dd>{business.location}</dd>
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${business.email}`} className="hover:text-[var(--ink)]">
                  {business.email}
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--hairline)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="v-small">
            © {new Date().getFullYear()} {business.legalName}
          </p>
          <Link href={site.crossBrand.href} className="v-small hover:text-[var(--ink)]">
            {site.crossBrand.label}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
