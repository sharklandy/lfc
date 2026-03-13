import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lfc',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
