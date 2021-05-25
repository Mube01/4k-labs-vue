module.exports = {
  // outputDir: path.resolve(__dirname, "./d"),
  assetsDir: "static",
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api_v1': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      },
    }
  }
}
