const path = require('path')

const resolve = (...args) => path.join(__dirname, '..', ...args)

console.log('env => ', process.env.NODE_ENV)

// webpack5
// https://webpack.docschina.org/
module.exports = {
  // 模式
  // development / production / none 默认 production
  // mode: '',

  // 入口
  entry: resolve('src/index.js'),

  // 输出
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },

  //
}
