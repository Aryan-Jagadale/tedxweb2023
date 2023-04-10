/** @type {import('next').NextConfig} */
const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withMDX(nextConfig)
