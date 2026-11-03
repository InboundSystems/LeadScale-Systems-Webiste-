import type { Metadata } from 'next'
import { Source_Code_Pro, Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import BrandProvider from '@/components/brand/BrandProvider'
import SiteHeader from '@/components/systems/SiteHeader'
import SiteFooter from '@/components/systems/SiteFooter'
import { site } from '@/content/audience'

// Flagship type: Source Serif 4 for headings, Source Sans 3 for body, Source
// Code Pro for category labels. Loaded here, not in the root layout, so /media
// keeps Plus Jakarta Sans. See docs/brand/leadscale-systems.md.
const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-serif',
})
const sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-sans',
})
const mono = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-mono',
})

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
        className={`${serif.variable} ${sans.variable} ${mono.variable} flex min-h-screen flex-col`}
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
      </div>
    </BrandProvider>
  )
}
