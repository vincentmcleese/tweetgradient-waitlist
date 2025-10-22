import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fiverr-res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
