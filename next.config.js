/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "/portfoliodemo", // Replace with your repository name
  assetPrefix: "/portfoliodemo/", // Replace with your repository name
};

module.exports = nextConfig;
