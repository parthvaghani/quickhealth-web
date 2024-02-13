const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        unoptimized: false,
        formats:["image/webp","image/avif"],
        remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
          },
      ],
      },     
}

module.exports = nextConfig
