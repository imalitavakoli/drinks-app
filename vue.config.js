const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  indexPath: 'index.html',
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#445859',
    iconPaths: {
      faviconSVG: null,
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null
    }
  }
})

// Computed env vars that will be available inside of the index file template
process.env.VUE_APP_CURRTIME = new Date().getTime()
process.env.VUE_APP_TITLE = 'Drinks Demo App'
