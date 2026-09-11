import type { MetadataRoute } from 'next'

// / (the flagship) stays disallowed until launch. /media/* is explicitly allowed
// so the blanket disallow on / doesn't take it down too.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/media', disallow: '/' },
    ],
    sitemap: 'https://vicaria.com.au/sitemap.xml',
  }
}
