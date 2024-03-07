const path = require('path')

module.exports = {
  mode: 'production', // 如果想生成 mini JS 就配置为 production
  entry: './src/index.js', // 入口
  externals: 'lodash',
  optimization: { minimize: false }, // 不压缩混淆
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js', // 打包后的文件名
    library: 'PureTools', // 全局挂载包的引用名
    libraryTarget: 'umd', // 通用模式：支持用户通过es、common.js、AMD的方式引入npm包
    globalObject: 'this' // node 等环境运行时需要设置为 this
  }
}
