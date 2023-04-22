const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/main.scss";',
        implementation: require('sass-loader')
      },
    },
  },
  transpileDependencies: true
})
