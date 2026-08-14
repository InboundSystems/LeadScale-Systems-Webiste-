/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/book', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
