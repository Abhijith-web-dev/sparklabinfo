import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.geeksforgeeks.org',
      },
      {
        protocol: 'https',
        hostname: 'github.blog',
      },

    ],
  },
};

export default nextConfig;
