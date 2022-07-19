const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    port: 2222,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})