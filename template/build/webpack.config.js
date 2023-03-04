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
    path: resolve('dist', 'xx'),
    filename: 'bundle.js',
    // publicPath: '',
  },

  // 插件
  plugins: [...arrHtmlWebpackPlugin],
}
