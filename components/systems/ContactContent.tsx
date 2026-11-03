import { contact } from '@/content/contact'
import ComposeWindow from './ComposeWindow'
import MailHeader from './MailHeader'
import { Container, PageHeader, TextLink, sentAt } from './ui'

// /enquire. Email only: a "New message" window whose one button is a mailto
// link, then the helpful notes and links. No form; nothing is stored.
export default function ContactContent() {
  return (
    <>
      <PageHeader header={contact.header} chipTone="amber">
        <div className="mt-10">
          <ComposeWindow compose={contact.compose} />
        </div>
      </PageHeader>

      <section className="border-t border-[var(--hairline)] pb-20 pt-12">
        <Container>
          <MailHeader sent={sentAt(0)} />
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
