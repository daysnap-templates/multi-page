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



### cross-env
### 场景:nodejs运行环境下 使用模版语法和webpack生成编写静态页面

* 找到views下所有目录入口，生成目录对象,传递给entry

`[
    {
      name:path
    }
]`

* 在index.html里编写模版，在html.js传递数据生成html，作为模版传递给HtmlWebpackPlugin

* 拿到art-loader处理过的函数，传入数据生成html
https://github.com/aui/art-template-loader/tree/master/example

拆分 js 拆分 css 拆分img

url-loader打包img后src为[object Module]，原因是新版本的file-loader选项esModule默认为true ,需要将其设置为false,如果用esMoudule 转换后 导出的是模块对象，我们需要default的url

webpack处理图片后根目录会多出一份，是因为webpack5内部已支持assets的部分loader需要将其关闭
 详细见:https://webpack.docschina.org/guides/asset-modules/

webpack-dev-serve 要配置style-loader嵌套style节点到页面，因为如果用生产的配置产生了hash值 css文件将会找不到

https://babel.dev/docs/babel-preset-env#usebuiltins

@babel/polyfill
提供完整 ES2015+ 环境所需的 polyfill

此包已被弃用，取而代之的是单独包含core-js和的必需部分regenerator-runtime。有关更多信息，请参阅我们的网站@babel/polyfill。
IE5.0 1999年3月18日
IE6.0 2001年8月27日
IE7.0 2006年
IE8 2009年3月19日
IE9 2011年3月14日
IE10 2012年10月25日
IE11 2013年10月17日

1997年，ECMAScript 1.0发布。
1998年，ECMAScript 2.0发布
1999年，ECMAScript 3.0发布
2000年，ECMAScript 4.0开始酝酿
2008年，由于对于4.0版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA开会决定，中止ECMAScript 4.0的开发，将其中涉及现有功能改善的一小部分，发布为ECMAScript 3.1
es5是2009.12月发布的
es6是2015.6月发布的   （IE7~11 基本不支持 ES6）

core-js 或 @babel/polyfill。只转换成es5
如果要支持低版本ie需要 对应版本的polyfill
