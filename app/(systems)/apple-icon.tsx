import { ImageResponse } from 'next/og'
import { owlDataUri } from '@/components/brand/markDataUri'
import { VICARIAOWL_ASPECT } from '@/components/brand/VicariaOwl'

// Flagship apple-touch icon: the owl mark, white on ink. In the (systems)
// group, not the root, so /media gains no apple icon it did not have.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  const w = 128
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#05050F' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={owlDataUri('#FFFFFF')} width={w} height={Math.round(w / VICARIAOWL_ASPECT)} alt="" />
      </div>
    ),
    { ...size }
  )
}
