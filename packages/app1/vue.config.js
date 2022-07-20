const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    port: 3333,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    output: {
      library: `app1-[name]`, // 在全局对象上挂载属性package.name(app1),基座应用需要通过这个全局对象获取一些信息，比如子应用导出的生命周期函数
      libraryTarget: 'umd', // 导出umd格式的包
      chunkLoadingGlobal: `webpackJsonp_app1`,
    },
  },
})