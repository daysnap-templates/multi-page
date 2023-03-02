module.exports = {
  // 配置 artTemplate 过滤器
  // configureHelper: {
  //   includes: function () {}
  // },
  // 配置 questions 相关 三种方式
  // configureInquirer: [{ name: 'q1', type: 'string', ... }],
  // configureInquirer: { q1: { type: 'string', ... } },
  // configureInquirer: async ({ inquirer, metalsmith, files }) => answers
  configureInquirer: async ({ inquirer, metalsmith, files }) => {
    const { author, name } = metalsmith.metadata()
    return inquirer.prompt([
      {
        type: 'string',
        name: 'name',
        message: '项目名称',
        default: name
      },
      {
        type: 'string',
        name: 'description',
        message: '项目描述',
        default: '一个简单的项目模板',
      },
      {
        type: 'string',
        name: 'author',
        message: "作者",
        default: author,
      },
      {
        type: 'string',
        name: 'license',
        message: 'License',
        default: 'MIT',
      },
      {
        type: 'checkbox',
        name: 'lintConfig',
        choices: ['eslint', 'prettier'],
      },
      {
        type: 'checkbox',
        name: 'libs',
        choices: [
          {
            name: '引入移动端适配 flexible.js ?',
            value: 'flexible'
          },
          {
            name: '引入 jquery.js ?',
            value: 'jquery'
          },
          {
            name: '引入微信 jssdk ?',
            value: 'jweixin'
          },
        ]
      }
    ])
  },
  // 配置过滤文件的方式 2种
  // configureFilter ({ minimatch, files, metalsmith }) {
  //   const fileNames = Object.keys(files)
  //   const { lintConfig } = metalsmith.metadata()
  //   fileNames.forEach((file) => {
  //     if (minimatch(file, '.eslintrc.js', { dot: true })) {
  //       if (!lintConfig.includes('eslint')) {
  //         delete files[file]
  //       }
  //     }
  //   })
  // }
  configureFilter: {
    'flexible.js': 'libs.includes("flexible")',
    'jquery-1.8.1.min.js': 'libs.includes("jquery")',
    'jweixin-1.6.0.js': 'libs.includes("jweixin")',
    '.eslintrc.js': 'lintConfig.includes("eslint")',
  },
  // 完成
  complete: (data, { logger, chalk }) => {
    const message = `
# ${chalk.green('项目初始化成功!')}
# 可以执行:
  ${chalk.yellow(
      `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}npm install\n  npm run dev`
    )}
相关文档可以查看： https://github.com/daysnap-templates/multi-page
`
    console.log(message)
  }
}
