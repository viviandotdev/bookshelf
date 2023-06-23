/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    GOOGLE_BOOKS_API_KEY: process.env.GOOGLE_BOOKS_API_KEY,
  }
}

module.exports = nextConfig
