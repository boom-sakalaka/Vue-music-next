/* eslint-disable no-unused-expressions */
/*
 * @Author: GZH
 * @Date: 2021-11-07 21:16:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-07 21:28:29
 * @FilePath: \vue-music-next\src\components\base\loading\directive.js
 * @Description:
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { createApp } from 'vue';
import Loading from './loading.vue';
import { addClass, removeClass } from '../../../assets/js/dom';

const relativeCls = 'g-relative';

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading);
    const instance = app.mount(document.createElement('div'));
    el.instance = instance;
    const title = binding.arg;
    if (typeof title !== 'undefined') {
      instance.setTitle(title);
    }

    if (binding.value) {
      append(el);
    }
  },
  updated(el, binding) {
    const title = binding.arg;
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title);
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el);
    }
  },
};

function append(el) {
  const style = getComputedStyle(el);
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls);
  }
  el.appendChild(el.instance.$el);
}

function remove(el) {
  removeClass(el, relativeCls);
  el.removeChild(el.instance.$el);
}

export default loadingDirective;
