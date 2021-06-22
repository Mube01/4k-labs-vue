module.exports = {
  // outputDir: path.resolve(__dirname, "./d"),
  assetsDir: "static",
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api_v1': {
        target: 'https://4kbots.com',
        changeOrigin: true
      },
    }
  }
}
