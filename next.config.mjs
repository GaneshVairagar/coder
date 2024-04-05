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

export default nextConfig;
