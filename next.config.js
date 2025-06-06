/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // Only apply basePath and assetPrefix in production
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/myPortfolio",
        assetPrefix: "/myPortfolio/",
      }
    : {}),
};

module.exports = nextConfig;
