// vue.config.js 修改的配置
module.exports = {
  //配置代理服务器
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://218.194.24.20:8080/api/',
        // target: 'https://easy-mock.com/mock/5c18a62c29e94a194029f501/example',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
}
