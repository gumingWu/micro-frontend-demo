# Micro-Frontend-Demo

`single-spa`和`qiankun`两个微前端框架demo，做对比

## 注意点

- qiankun需要在子应用的webpack配置中，加上以下配置，以vue为例
  ```json
  configureWebpack: {
    output: {
      library: `app2-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_app2`,
    },
  },
  ```

这是官网中的demo，但只适用于webpack4，webpack5要改成以下字段
```json
configureWebpack: {
    output: {
      library: `app2-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_app2`,
    },
  },
```