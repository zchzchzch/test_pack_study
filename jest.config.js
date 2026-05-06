module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: [
    '/node_modules/(?!lodash-es)/'
  ],
  // 确保你有处理 TypeScript 和 Vue 文件的 transform 配置
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // 或者 'vue-jest'，取决于你的 Vue 版本
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
