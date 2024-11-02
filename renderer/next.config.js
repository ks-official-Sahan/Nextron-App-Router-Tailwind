/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "../app" : ".next",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
