const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')
const webpackCommonConfig = require('./webpack.common.config')

module.exports = merge(webpackCommonConfig, {
  // 模式
  mode: 'development',

  // loader
  module: {
    rules: [
      // css 样式
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // https://webpack.docschina.org/loaders/css-loader#importloaders
              // https://stackoverflow.com/questions/52544620/what-is-exactly-the-importloaders-option-of-css-loader-in-webpack-4
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // sass 样式
      {
        test: /\.s[ca]ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:10].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          // 定义要拷贝的源目录
          from: resolve(__dirname, '../public'),
          // 定义要拷贝到的目标目录
          to: resolve(__dirname, '../dist'),
        },
      ],
    }),
  ],
})
