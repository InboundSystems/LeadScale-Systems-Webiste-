import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/ai' },
    ],
    sitemap: 'https://leadscalesystems.net/sitemap.xml',
  }
}
