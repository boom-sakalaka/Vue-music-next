/*
 * @Author: GZH
 * @Date: 2021-11-02 23:25:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-02 23:44:20
 * @FilePath: \vue-music-next\vue.config.js
 * @Description:
 */

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
};
