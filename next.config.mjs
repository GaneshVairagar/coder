// next.config.mjs

const nextConfig = {
  // Your Next.js configuration
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default {
  ...nextConfig,
  // Specify the export directory
  distDir: 'out',
};
