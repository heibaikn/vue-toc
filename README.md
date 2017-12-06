# d

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Structure
./.babelrc
./.editorconfig
./.eslintignore
./.eslintrc.js
./.gitignore
./.postcssrc.js
./build                   webpack配置文件
./config                  项目配置文件
./dist
./document
./node_modules            
./static
./test
./src
    ├─api                   引用模块api
    ├─assets                全局样式变量
    │  └─style
    ├─components            全局组件
    │  ├─header
    │  └─slider
    ├─directives            
    ├─filter
    ├─mixin
    ├─router                引用模块路由
    ├─store                 引用模块store
    ├─utils
    ├─vendor
    └─views
        ├─Auth              模块
        │  ├─api            模块api 
        │  ├─router         模块路由
        │  └─store          模块store



## Code Review
- [代码规范](./documents/代码规范.md)

## Document
- [技术栈](./documents/技术栈.md)

