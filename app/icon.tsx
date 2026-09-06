import { ImageResponse } from 'next/og'
import { ACCENTS } from '@/components/brand/tokens'

// Flagship / company-level favicon. Also the site-wide fallback for any
// route not under /media (see app/media/icon.tsx for the override).
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const background = (ACCENTS.systems as Record<string, string>)['--accent']

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
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '-0.5px',
        }}
      >
        VS
      </div>
    ),
    { ...size }
  )
}
