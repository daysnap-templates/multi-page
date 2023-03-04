const { requireContext } = require('@daysnap/require-context')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (...args) => path.join(__dirname, '..', ...args)

const parseDir = (dir) => {
  return requireContext(dir, /index\.[jt]s$/)
    .keys()
    .filter((item) => !item.includes('components'))
    .reduce(
      (res, filepath) => {
        const { entry, arrHtmlWebpackPlugin } = res
        const name = path
          .dirname(filepath.slice(dir.length + 1))
          .replaceAll(path.sep, '-')

        entry[name] = filepath

        arrHtmlWebpackPlugin.push(
          new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: '',
          }),
        )
        return res
      },
      { entry: {}, arrHtmlWebpackPlugin: [] },
    )
}

module.exports = {
  parseDir,
  resolve,
}
