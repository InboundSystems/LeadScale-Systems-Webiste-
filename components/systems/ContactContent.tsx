import { business } from '@/content/audience'
import { contact } from '@/content/contact'
import { Container, PageHeader, TextLink } from './ui'

// /enquire. Email only: the mailto link is the whole mechanism, so this page
// is its own end line.
export default function ContactContent() {
  return (
    <>
      <PageHeader header={contact.header}>
        <p className="mt-10">
          <a
            href={`mailto:${business.email}?subject=Enquiry`}
            className="v-serif break-all text-[1.75rem] font-semibold text-[var(--accent)] underline decoration-1 underline-offset-[3px] transition-[text-decoration-color] duration-150 ease-out hover:decoration-[var(--saffron)] hover:decoration-2 sm:text-[2.25rem]"
          >
            {business.email}
          </a>
        </p>
      </PageHeader>

      <section className="border-t border-[var(--hairline)] pb-20 pt-12">
        <Container>
          <div className="max-w-[40rem]">
            <p className="text-[var(--ink)]">{contact.helpfulIntro}</p>
            <ul className="mt-4 border-t border-[var(--hairline)]">
              {contact.helpfulItems.map((item) => (
                <li key={item} className="border-b border-[var(--hairline)] py-3 text-[var(--ink)]">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-[var(--accent-light)] pl-4 text-[var(--ink)]">{contact.systemNote}</p>
            <p className="mt-6 text-[var(--muted)]">{contact.closing}</p>
            <ul className="mt-10 flex flex-col gap-2">
              {contact.links.map((link) => (
                <li key={link.href}>
                  <TextLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
