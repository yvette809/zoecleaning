import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("src"),
    };
    return config;
  },
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
