// next.config.mjs

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  
};

module.exports = {
  // Your Next.js configuration
  distDir: '.next', // This is the default, but make sure it's not changed
  // Specify the export path
  outDir: 'out',
};

export default nextConfig;
