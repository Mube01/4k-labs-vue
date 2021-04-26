module.exports = {
  // outputDir: path.resolve(__dirname, "./d"),
  assetsDir: "static",
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api_v1': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
    }
  }
}
