/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/seo', destination: '/media/seo', permanent: true },
      { source: '/paid-traffic', destination: '/media/paid-traffic', permanent: true },
      { source: '/social-media', destination: '/media/social-media', permanent: true },
      { source: '/book', destination: '/media/book', permanent: true },
    ]
  },
}

module.exports = nextConfig
