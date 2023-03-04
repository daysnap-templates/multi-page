const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')
const { resolve } = require('./utils')

module.exports = merge(webpackCommonConfig, {
  // 模式
  mode: 'development',

  // loader
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // sass 样式
      {
        test: /\.s[ca]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // devServer
  devServer: {
    // 运行目录
    static: resolve('public'),
    host: '0.0.0.0',
    // 启动 gzip 压缩
    compress: true,
    // 服务端口
    port: 9527,
    // 自动打开浏览器
    open: false,
    // hot
    hot: false,
  },
})
