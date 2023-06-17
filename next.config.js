/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_NAME: process.env.HOST_NAME,
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      'localhost',
      '3.109.249.174',
      '35.154.34.15',
      'www.navtatva.fashion',
      'navtatva-dev-public.s3.ap-south-1.amazonaws.com',
      'files-eu.epusercontent.com',
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

module.exports = nextConfig;
