# multi-page

基于 webpack5 打包编译的多入口页面，适用于静态页、官网等项目

## 使用
1. 全局安装 `@daysnap/cli` 脚手架
```bash
npm install @daysnap/cli
```
2. 在你的项目目录下执行
```bash
dsc create my-project -t {{ name }}
```
3. 更多命令可以执行 `dsc -h` 查看
```bash
dsc -h
```

## 命令相关

- `npm run start` & `npm start`
他能够开启 `webpack-dev-server` 本地开发

- `npm run build`

- 需要 `eslint`

- 需要 `prettier`

- 模板引擎



## 依赖包

- [webpack]
- [webpack-cli]
- [webpack-dev-server]
- [webpack-merge](https://www.npmjs.com/package/webpack-merge)
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [clean-webpack-plugin]
- [webpack-bundle-analyzer]
- [speed-measure-webpack-plugin]

- [postcss-loader]
- [postcss-preset-env]
