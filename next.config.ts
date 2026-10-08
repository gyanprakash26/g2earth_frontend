import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.g2earth.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.g2earth.com",
        pathname: "/**",
      },
      // Demo images — remove when real product photography is available
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
