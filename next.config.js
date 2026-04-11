/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
