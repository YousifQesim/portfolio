/** @type {import('next').NextConfig} */
const nextConfig = {

  
}

module.exports = nextConfig
module.exports = {
  productionBrowserSourceMaps: false,
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}



