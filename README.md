# Micro-Frontend-Demo

`single-spa`和`qiankun`两个微前端框架demo，做对比

## 工程划分
- app1, app2, qiankun为qiankun测试工程
- app3, app4, single-spa为single-spa测试工程

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

## 比较

- 文档
  qiankun由于是阿里的二次开发，所以文档的编写会更符合国人的口味，single-spa的文档比较难看懂，我基本都是掘金找文章来参考开发的