/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:lang*/bilanco/:code*',
        destination: '/:lang*/balance/:code*',
      },
      {
        source: '/:lang*/balance-sheet/:code*',
        destination: '/:lang*/balance/:code*',
      },
      {
        source: '/:lang*/kar-veya-zarar/:code*',
        destination: '/:lang*/profitOrLoss/:code*',
      },
      {
        source: '/:lang*/profit-or-loss/:code*',
        destination: '/:lang*/profitOrLoss/:code*',
      },
    ];
  },
  reactStrictMode: false,
};
module.exports = nextConfig;
