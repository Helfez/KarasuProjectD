/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'oaidalleapiprodscus.blob.core.windows.net'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  // Enable standalone output for Docker
  output: 'standalone',
}

module.exports = nextConfig
