import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // make sure App Router is enabled
  },
};

export default nextConfig;
