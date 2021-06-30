module.exports = {
  // outputDir: path.resolve(__dirname, "./d"),
  assetsDir: "static",
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api_v1': {
        target: 'https://www.4kbots.com',
        changeOrigin: true
      },
    }
  }
}
