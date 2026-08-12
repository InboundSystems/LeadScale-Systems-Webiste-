import type { MetadataRoute } from 'next'

const baseUrl = 'https://leadscalesystems.net'

// / (the flagship LeadScale Systems homepage) is intentionally excluded — noindexed,
// structurally ready but not launched, until the vertical locks. See docs/business-model.md.
export default function sitemap(): MetadataRoute.Sitemap {
  const mediaRoutes = ['', '/seo', '/paid-traffic', '/social-media', '/book']

  return mediaRoutes.map((route) => ({
    url: `${baseUrl}/media${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 0.9 : 0.7,
  }))
}
