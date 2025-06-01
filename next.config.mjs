/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure trailing slashes for better compatibility
  trailingSlash: true,

  // Disable server-side features that aren't compatible with static export
  experimental: {
    // Disable features that require server-side rendering
  },

  // Configure asset prefix for CDN if needed
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-cdn-url' : '',

  // Configure base path if deploying to a subdirectory
  // basePath: '/your-subdirectory',

  // Optimize for static hosting
  distDir: 'out',
};

export default nextConfig;
