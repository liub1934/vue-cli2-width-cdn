# vue-cli2-width-cdn

> A Vue.js project

vue全家桶cdn加载，包括vue、vue-router、vuex以及element ui，cdn来源`bootcdn`
配置文件：`config/cdn.js`

```javascript
//dev开发环境
exports.dev = {
  css: [
    'https://cdn.bootcss.com/element-ui/2.4.11/theme-chalk/index.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.5.21/vue.js',
    'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.js',
    'https://cdn.bootcss.com/element-ui/2.4.11/index.js'
  ]
}
//build生产环境
exports.prod = {
  css: [
    'https://cdn.bootcss.com/element-ui/2.4.11/theme-chalk/index.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.5.21/vue.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/element-ui/2.4.11/index.js'
  ]
}
```

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
