/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/book', destination: '/enquire', permanent: true },
    ]
  },
}

module.exports = nextConfig
