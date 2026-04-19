/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'gomagcdn.ro' },
      { protocol: 'https', hostname: 'www.themealdb.com' },
      { protocol: 'https', hostname: 'www.maero.ro' },
    ],
  },
  output: 'standalone',
};
module.exports = nextConfig;
