/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
}

module.exports = nextConfig
