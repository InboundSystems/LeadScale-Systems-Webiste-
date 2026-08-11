import type { MetadataRoute } from 'next'

const baseUrl = 'https://leadscalesystems.net'

// /ai is intentionally excluded — it's a noindexed placeholder until real content ships.
export default function sitemap(): MetadataRoute.Sitemap {
  const mediaRoutes = ['', '/seo', '/paid-traffic', '/social-media', '/book']

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...mediaRoutes.map((route) => ({
      url: `${baseUrl}/media${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 0.9 : 0.7,
    })),
  ]
}
