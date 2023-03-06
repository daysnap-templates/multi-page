const { parseDir, resolve } = require('./utils')
const { entry, arrHtmlWebpackPlugin } = parseDir(resolve('src/views'))

// webpack5
// https://webpack.docschina.org/
module.exports = {
  // 模式
  // development / production / none 默认 production
  mode: 'development',

  // 入口
  entry,

  // 输出
  output: {
    // hash、 chunkhash 、 contenthash
    filename: 'assets/js/[name].[contenthash:10].js',
    path: resolve('dist'),
    // publicPath: './',
  },

  // 别名
  resolve: {
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
    },
  },

  // loader
  module: {
    rules: [
      // html
      {
        test: /\.html/,
        loader: resolve('build/art-template-loader'),
        options: {
          x: 1,
        },
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/img/[name].[contenthash:10][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024,
          },
        },
      },
      // 视频、音频文件
      {
        test: /\.(mp4|mp3)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/medias/[name].[contenthash:10][ext]',
        },
      },
      // 字体
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/fonts/[name].[contenthash:10][ext]',
        },
      },
    ],
  },

  // 插件
  plugins: [...arrHtmlWebpackPlugin],
}
