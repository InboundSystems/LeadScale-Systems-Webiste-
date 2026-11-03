import { ImageResponse } from 'next/og'
import { owlDataUri } from '@/components/brand/markDataUri'
import { VICARIAOWL_ASPECT } from '@/components/brand/VicariaOwl'

// Flagship favicon: the owl mark, white on ink (#05050F). Also the site-wide
// fallback for any route not under /media (app/media/icon.tsx overrides it).
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const w = 26
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#05050F', borderRadius: 6 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={owlDataUri('#FFFFFF')} width={w} height={Math.round(w / VICARIAOWL_ASPECT)} alt="" />
      </div>
    ),
    { ...size }
  )
}
