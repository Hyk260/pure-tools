import baseConfig from './rollup.config.base'
import serve from 'rollup-plugin-serve'// 支持启动本地服务器
import livereload from 'rollup-plugin-livereload'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8888,
      contentBase: ['examples'],
      openPage: 'index.html',
    }),
    livereload({
      watch: 'examples'
    })
  ]
}
