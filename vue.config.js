// vue.config.js 修改的配置
module.exports = {
  //配置代理服务器
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.43.87:8080/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
}
