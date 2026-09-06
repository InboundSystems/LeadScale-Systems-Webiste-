import { ImageResponse } from 'next/og'
import { ACCENTS, WORDMARKS } from '@/components/brand/tokens'

// Flagship / company-level share image. Also the site-wide fallback for any
// route not under /media (see app/media/opengraph-image.tsx for the
// override). Wordmark only — no system-specific copy, see the "Company vs
// system" section in docs/POSITIONING.md.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const background = (ACCENTS.systems as Record<string, string>)['--accent']
  const { prefix, suffix } = WORDMARKS.systems

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'center',
            maxWidth: '85%',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 500, letterSpacing: '-1px', marginRight: 20 }}>{prefix}</span>
          <span style={{ fontSize: 64, fontWeight: 800, letterSpacing: '4px' }}>{suffix}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
