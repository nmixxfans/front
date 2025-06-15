/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "yt3.googleusercontent.com",
    ],
  },
}

module.exports = nextConfig
