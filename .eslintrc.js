/*
 * @Author: GZH
 * @Date: 2021-11-02 23:19:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 21:51:02
 * @FilePath: \vue-music-next\.eslintrc.js
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 'off',
  },
};
