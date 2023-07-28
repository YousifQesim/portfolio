/** @type {import('next').NextConfig} */
const nextConfig = {

  
}

module.exports = nextConfig
module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}




module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/sounds/',
          publicPath: '/_next/static/sounds/',
        },
      },
    });

    return config;
  },
};