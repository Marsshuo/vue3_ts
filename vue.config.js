module.exports = {
    devServer: {
        open: true, // auto open brower 项目启动后自动打开浏览器...
        disableHostCheck: false,
        host: "localhost", //设置本地服务器   选填
        port: 8082, // 修改端口号 //设置本地默认端口  选填
        // https: false, 
        // hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {     // string | Object 解决跨域问题 //设置代理，必须填
            '/api': {
                target: 'https://api.douban.com', //代理的目标地址，这是豆瓣接口地址网址
                changeOrigin: true, //是否设置同源，输入是的
                ws: true,
                pathRewrite: {
                    '^/api': '' //路径转发代理 /api 的意思就是 用/api 代替http:localhost：8080
                }
            }
        }
    }
}