import basicConfig, { name, file} from './rollup.config.js'

export default {
  ...basicConfig,
  output: {
    name: "QiaoRpTest",
    file: file('umd'),
    format: 'umd',

    // (!) Missing global variable names 第三方插件需要全局变量名
    // https://rollupjs.org/configuration-options/#output-globals
    // Use "output.globals" to specify browser global variable names corresponding to external modules:
    // 解决上面报错
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },

    // (!) Mixing named and default exports 组件需要默认的导出名
    // https://rollupjs.org/configuration-options/#output-exports
    // The following entry modules are using named and default exports together:
    //name: "QiaoRpTest" 解决上面报错
    exports: 'named'
  }
} 