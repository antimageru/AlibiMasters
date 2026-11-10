import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: ".next-single",
  experimental: { cpus: 1 },
};

export default nextConfig;
