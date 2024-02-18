/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bingus Workspaces',
    description: 'My own collection of custom workspaces.',
    icon: 'https://domain.com/1.0/potassium.png',
    listUrl: 'https://dazedmikey.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
