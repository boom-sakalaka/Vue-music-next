/*
 * @Author: GZH
 * @Date: 2021-11-03 21:23:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 21:24:46
 * @FilePath: \vue-music-next\src\service\recommend.js
 * @Description:
 */
/* eslint-disable import/prefer-default-export */

import { get } from './base';

export function getRecommend() {
  return get('/api/getRecommend');
}
