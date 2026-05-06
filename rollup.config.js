import vue from 'unplugin-vue/rollup'
import { readFileSync } from 'fs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const name = pkg.name
const file = type => `dist/${name}.${type}.js`

export { name, file}

export default {
  input: 'src/index.ts',
  output: {
    file: file('esm'),
    format: 'es'
  },
  // 外部依赖，不打包，我们在vue开发环境中使用当前打包组件的时候，
  // 一般已经包含vue和相关第三方组件了，所以打包的时候要去除掉，只保留精华的组件内容
  external: ['vue', 'lodash-es'],
  plugins: [
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/types'
        },
        exclude: ['src/App.vue', 'src/main.ts', 'node_modules']
      }
    }),
    vue(),
    json(),
    postcss()
  ]
};