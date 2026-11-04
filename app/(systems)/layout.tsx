import type { Metadata } from 'next'
import BrandProvider from '@/components/brand/BrandProvider'
import { flagshipFontVariables } from '@/components/brand/flagshipFonts'
import SiteHeader from '@/components/systems/SiteHeader'
import ScrollReveal from '@/components/systems/ScrollReveal'
import SiteFooter from '@/components/systems/SiteFooter'
import { site } from '@/content/audience'

// Not launched. noindex/nofollow and the sitemap/robots exclusion are policy
// until Sam makes an explicit launch decision. Never remove as cleanup.
export const metadata: Metadata = {
  title: { default: site.metaTitle, template: '%s | Vicaria' },
  description: site.metaDescription,
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Vicaria',
    url: 'https://vicaria.com.au',
    title: site.metaTitle,
    description: site.metaDescription,
  },
}

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider brand="systems">
      <div
        className={`${flagshipFontVariables} flex min-h-screen flex-col`}
        style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
      >
        {/* Runs while the page is parsed, before anything below it paints:
            marks <html> so CSS can start the hero demo in its Before layout.
            Without JavaScript the class never appears and the server-rendered
            After state stands. Flagship only; /media never loads this layout. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollReveal />
      </div>
    </BrandProvider>
  )
}
