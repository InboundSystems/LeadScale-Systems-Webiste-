'use client'

import { useEffect } from 'react'

// On a /media path the not-found page shows Next's default 404, so it keeps
// Next's default title too. Set after hydration, which would otherwise put
// the root metadata title ("Vicaria") back.
export default function MediaNotFoundTitle() {
  useEffect(() => {
    if (document.documentElement.getAttribute('data-nf') === 'media') {
      document.title = '404: This page could not be found.'
    }
  }, [])
  return null
}
