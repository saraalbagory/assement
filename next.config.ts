import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production
  },
  eslint: {
    ignoreDuringBuilds: true, // This is not recommended for production
  },
};

export default nextConfig;
