/*
 * @Author: GZH
 * @Date: 2021-11-02 23:23:46
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-07 21:30:45
 * @FilePath: \vue-music-next\src\assets\js\dom.js
 * @Description:
 */
export function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}

export function removeClass(el, className) {
  el.classList.remove(className);
}
