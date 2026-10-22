import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/Users/vivian/AI项目/yinruibio.com",
  },
};

export default nextConfig;
