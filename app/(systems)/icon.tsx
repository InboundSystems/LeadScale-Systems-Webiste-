// The flagship favicon, at the (systems) level alongside apple-icon.tsx: Next
// resolves icons per segment, so declaring the apple icon here would otherwise
// drop the root favicon from flagship pages. Same image as app/icon.tsx (the
// owl mark, white on ink), which stays the fallback outside /media.
export { default, size, contentType } from '../icon'
