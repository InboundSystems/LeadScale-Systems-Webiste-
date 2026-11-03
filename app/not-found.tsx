import BrandProvider from '@/components/brand/BrandProvider'
import { flagshipFontVariables } from '@/components/brand/flagshipFonts'
import SiteFooter from '@/components/systems/SiteFooter'
import SiteHeader from '@/components/systems/SiteHeader'
import MediaNotFoundTitle from '@/components/systems/MediaNotFoundTitle'
import NotFoundNotice from '@/components/systems/NotFoundNotice'

// The site's one not-found page. Next serves it for any unmatched URL, on
// either brand, and renders it outside both brand layouts, so it carries
// both:
//   - the flagship's undeliverable-mail notice (the default);
//   - for /media paths, a copy of Next's own default 404, unchanged, so the
//     Media brand looks exactly as it did before this page existed.
// The page is prerendered once, so the choice is made in the browser by an
// inline script before first paint (html[data-nf="media"]; see
// app/globals.css, "Not found"). Without JavaScript the flagship notice shows.
const pickBrand = `(function(){var p=location.pathname;if(p==='/media'||p.indexOf('/media/')===0){document.documentElement.setAttribute('data-nf','media');document.title='404: This page could not be found.'}})()`

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: pickBrand }} />
      <MediaNotFoundTitle />

      <div className="nf-flagship">
        <BrandProvider brand="systems">
          <div
            className={`${flagshipFontVariables} flex min-h-screen flex-col`}
            style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
          >
            <SiteHeader />
            <main id="main" className="flex-1">
              <NotFoundNotice />
            </main>
            <SiteFooter />
          </div>
        </BrandProvider>
      </div>

      {/* Next's default 404, as Media had it. Styles scoped to Media paths. */}
      <div className="nf-media">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html[data-nf='media'] body{color:#000;background:#fff;margin:0}html[data-nf='media'] .next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){html[data-nf='media'] body{color:#fff;background:#000}html[data-nf='media'] .next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}",
          }}
        />
        <div
          style={{
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            <h1
              className="next-error-h1"
              style={{
                display: 'inline-block',
                margin: '0 20px 0 0',
                padding: '0 23px 0 0',
                fontSize: 24,
                fontWeight: 500,
                verticalAlign: 'top',
                lineHeight: '49px',
              }}
            >
              404
            </h1>
            <div style={{ display: 'inline-block' }}>
              <h2 style={{ fontSize: 14, fontWeight: 400, lineHeight: '49px', margin: 0 }}>
                This page could not be found.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
