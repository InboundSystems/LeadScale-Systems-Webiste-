import { ImageResponse } from 'next/og'
import { ACCENTS, WORDMARKS } from '@/components/brand/tokens'

// Media-brand share image override for every route under /media.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const background = (ACCENTS.media as Record<string, string>)['--accent']
  const { prefix } = WORDMARKS.media

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
          <span style={{ fontSize: 64, fontWeight: 800, letterSpacing: '4px' }}>SYSTEMS</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
