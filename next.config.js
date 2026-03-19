/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable static file caching in development for easier testing
  ...(process.env.NODE_ENV === 'development' && {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, must-revalidate',
            },
          ],
        },
      ];
    },
  }),
};

module.exports = nextConfig;