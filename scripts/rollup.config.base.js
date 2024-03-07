import { nodeResolve } from '@rollup/plugin-node-resolve' // 解析 node_modules 中的模块
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs' // cjs => esm
import alias from '@rollup/plugin-alias' // alias 和 reslove 功能
import replace from '@rollup/plugin-replace'
import eslint from '@rollup/plugin-eslint'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import { name, version, author } from '../package.json'

const pkgName = 'tools'
const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) ${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: 'src/index.js',
  // input: 'ts/index.ts',
  output: [
    {
      file: `dist/${pkgName}.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner
    },
    {
      file: `dist/${pkgName}.esm.js`,
      format: 'es',
      banner
    },
    {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      banner
    },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [terser()]
    }
  ],
  plugins: [
    clear({
      targets: ['dist']
    }),
    alias(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    // eslint({
    //   throwOnError: false, // 抛出异常并阻止打包
    //   include: ['src/**'],
    //   exclude: ['node_modules/**']
    // }),
    babel({ babelHelpers: 'bundled' })
  ]
}
