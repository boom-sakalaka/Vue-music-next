/*
 * @Author: GZH
 * @Date: 2021-11-02 23:19:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 21:17:57
 * @FilePath: \vue-music-next\src\main.js
 * @Description:
 */
/* eslint-disable global-require */
import { createApp } from 'vue';
import lazyPlugin from 'vue3-lazy';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入全局样式文件
import '@/assets/scss/index.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png'),
  })
  .mount('#app');
