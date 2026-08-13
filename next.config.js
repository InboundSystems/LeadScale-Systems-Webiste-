/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/seo', destination: '/media/seo', permanent: true },
      { source: '/paid-traffic', destination: '/media/paid-traffic', permanent: true },
      { source: '/social-media', destination: '/media/social-media', permanent: true },
      { source: '/book', destination: '/media/enquire', permanent: true },
      { source: '/media/book', destination: '/media/enquire', permanent: true },
      { source: '/ai', destination: '/', permanent: true },
      { source: '/ai/enquire', destination: '/enquire', permanent: true },
    ]
  },
}

module.exports = nextConfig
