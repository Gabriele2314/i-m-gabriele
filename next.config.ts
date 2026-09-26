import type { NextConfig } from "next";

// Su GitHub Pages il sito vive in /i-m-gabriele: il workflow passa PAGES_BASE_PATH.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
