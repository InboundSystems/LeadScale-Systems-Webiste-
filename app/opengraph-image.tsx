import { ImageResponse } from 'next/og'
import { home } from '@/content/audience'
import { owlDataUri, wordmarkDataUri } from '@/components/brand/markDataUri'
import { VICARIAOWL_ASPECT } from '@/components/brand/VicariaOwl'
import { VICARIAWORDMARK_ASPECT } from '@/components/brand/VicariaWordmark'

// Flagship / company-level share image: ink (#05050F), the owl + wordmark
// lockup (owl, a thin vertical rule, wordmark), and the hero headline.
// Company level only. Also the site-wide fallback for any route not under
// /media (app/media/opengraph-image.tsx overrides it there).
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = home.hero.heading

export default function Image() {
  const owlH = 64
  const markH = 52
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#05050F',
          padding: '72px 80px',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={owlDataUri('#FFFFFF')} width={Math.round(owlH * VICARIAOWL_ASPECT)} height={owlH} alt="" />
          <div style={{ width: 2, height: owlH, background: 'rgba(255,255,255,0.35)', margin: '0 28px' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmarkDataUri('#FFFFFF')} width={Math.round(markH * VICARIAWORDMARK_ASPECT)} height={markH} alt="" />
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', maxWidth: 900 }}>
          {home.hero.heading}
        </div>
      </div>
    ),
    { ...size }
  )
}
