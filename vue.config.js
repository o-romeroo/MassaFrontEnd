import { defineConfig } from '@vue/cli-service'

export default defineConfig({
  transpileDependencies: ['vuetify'],
  outputDir: 'dist', 
  publicPath: '/', 

  devServer: {
    historyApiFallback: true
  }
})