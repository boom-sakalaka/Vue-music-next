/*
 * @Author: GZH
 * @Date: 2021-11-03 21:17:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 21:19:53
 * @FilePath: \vue-music-next\src\service\base.js
 * @Description:
 */

/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const ERR_OK = 0;
const baseURL = '/';

axios.defaults.baseURL = baseURL;

export function get(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data;
      if (serverData.code === ERR_OK) {
        return serverData.result;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
