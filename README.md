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
