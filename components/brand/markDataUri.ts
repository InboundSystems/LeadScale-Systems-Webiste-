import { VICARIAOWL_PATH, VICARIAOWL_TRANSFORM, VICARIAOWL_VIEWBOX } from './VicariaOwl'
import { VICARIAWORDMARK_PATH, VICARIAWORDMARK_TRANSFORM, VICARIAWORDMARK_VIEWBOX } from './VicariaWordmark'

// The brand marks as SVG data URIs for next/og ImageResponse (favicon, apple
// icon, Open Graph image), which cannot use currentColor. Same path data as
// the source files; only the fill is set, to the colour the mark is shown in.
function uri(viewBox: string, transform: string, d: string, fill: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><g transform="${transform}" fill="${fill}" stroke="none"><path d="${d}"/></g></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export const owlDataUri = (fill: string) => uri(VICARIAOWL_VIEWBOX, VICARIAOWL_TRANSFORM, VICARIAOWL_PATH, fill)
export const wordmarkDataUri = (fill: string) =>
  uri(VICARIAWORDMARK_VIEWBOX, VICARIAWORDMARK_TRANSFORM, VICARIAWORDMARK_PATH, fill)
