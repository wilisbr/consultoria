const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../templates",
  assetsDir: "../static",
  indexPath: "index.html"
})