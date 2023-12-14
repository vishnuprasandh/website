/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  // trailingSlash: true,
  // assetPrefix: '/',
}

module.exports = nextConfig
