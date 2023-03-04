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
    path: resolve('dist'),
    filename: 'assets/js/[name].[hash:10].js',
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
        test: /\.[jt]s$/,
        loader: 'babel-loader',
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 4 * 1024,
          esModule: false,
          name: '[name][hash:10].[ext]',
          outputPath: 'assets/img',
        },
      },
      // other
      {
        exclude: /\.(css|scss|sass|js|ts|html|png|jpe?g|gif)/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:4].[ext]',
          outputPath: 'assets/medias',
        },
      },
    ],
  },

  // 插件
  plugins: [...arrHtmlWebpackPlugin],
}
