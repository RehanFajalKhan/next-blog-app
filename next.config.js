/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_BASE_URL: 'http://127.0.0.1:1337',
        BACKEND_API_KEY: '3bb29967913aceed506991517580fa3b355796c35b5dd615da061f162cfc3cef02c77a6649ff618aa3ff073c74a216a0ca5defe98594a8fa9bc869aa4262f2675f43b575048a72817d6eeecd41fc618d81dc220ea27a4d3f6ae850e20dd93f1bfab572bbd633b2fb125b656cfaca99a5a541cfcf01f0d19ce6d39b3ecfbbdd28',
    },
    // images: {
    //     domains:['0.0.0.0'],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '/uploads/**',
          },
        ],
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
