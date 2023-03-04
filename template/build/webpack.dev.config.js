const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackCommonConfig = require('./webpack.common.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')

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
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      // sass 样式
      {
        test: /\.s[ca]ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:10].css',
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
