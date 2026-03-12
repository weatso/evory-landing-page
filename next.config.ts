import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Konfigurasi Gambar Bawaan Anda
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
  
  // 2. Konfigurasi TypeScript Bawaan Anda
  typescript: {
    ignoreBuildErrors: true,
  },

  // 3. Mesin Proksi Siluman
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/:slug',
          destination: 'https://app.evory.id/invitation/:slug',
        },
      ],
    }
  },
};

export default nextConfig;