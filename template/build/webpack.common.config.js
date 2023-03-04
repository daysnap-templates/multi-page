const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { parseDir, resolve } = require('./utils')
const { entry, arrHtmlWebpackPlugin } = parseDir(resolve('src/views'))

console.log('entry => ', entry)

// webpack5
// https://webpack.docschina.org/
module.exports = {
  // 模式
  // development / production / none 默认 production
  mode: 'development',

  // 入口
  entry: resolve('src/index.js'),

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
      },
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
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
  plugins: [new CleanWebpackPlugin(), ...arrHtmlWebpackPlugin],
}
