/*
 * @Author: GZH
 * @Date: 2021-11-02 23:19:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 21:02:57
 * @FilePath: \vue-music-next\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend.vue'),
  },
  {
    path: '/singer',
    component: () => import(/* webpackChunkName: "Singer" */ '../views/singer.vue'),
  },
  {
    path: '/top-list',
    component: () => import(/* webpackChunkName: "TopList" */ '../views/top-list.vue'),
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/search.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
