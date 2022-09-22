const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.scss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(mp[34])$/i,
            use: [{
                loader: 'file-loader',
            }],
        },
        {
            test: /\.(png|jpe?g|webp|gif|svg|)$/i,
            use: [
              {
                loader: 'img-optimize-loader',
                options: {
                  compress: {
                    // This will take more time and get smaller images.
                    mode: 'high', // 'lossless', 'low'
                  },
                },
              },
            ],
          },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
