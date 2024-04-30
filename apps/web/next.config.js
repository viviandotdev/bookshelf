/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    GOOGLE_BOOKS_API_KEY: process.env.GOOGLE_BOOKS_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'covers.openlibrary.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
