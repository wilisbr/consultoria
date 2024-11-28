const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/static/',
  transpileDependencies: true,
  outputDir: "../templates",
  assetsDir: "../static",
  indexPath: "index.html"
})