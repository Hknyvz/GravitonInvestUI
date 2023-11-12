/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:lang*/bilanco/:code*",
        destination: "/:lang*/balance/:code*",
      },
    ];
  },
};
module.exports = nextConfig;
