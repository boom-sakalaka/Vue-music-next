/*
 * @Author: GZH
 * @Date: 2021-11-04 21:25:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 21:25:59
 * @FilePath: \vue-music-next\src\service\singer.js
 * @Description:
 */
/* eslint-disable import/prefer-default-export */
import { get } from './base';

export function getSingerList() {
  return get('/api/getSingerList');
}
