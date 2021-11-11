/*
 * @Author: GZH
 * @Date: 2021-11-04 20:45:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 22:16:33
 * @FilePath: \vue-music-next\src\components\base\scroll\use-scroll.js
 * @Description:
 */
import BScroll from '@better-scroll/core';
import ObserveDOM from '@better-scroll/observe-dom';
import { onMounted, onUnmounted, ref } from 'vue';

// 自动弹出内容变化，计算高度并滚动
BScroll.use(ObserveDOM);

export default function useScroll(wrapperRef, options, emit) {
  const scroll = ref(null);

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      // ...ObserveDOM,
      ...options,
    });
    if (options.probeType > 0) {
      scroll.value.on('scroll', (pos) => {
        emit('scroll', pos);
      });
    }
  });

  onUnmounted(() => {
    scroll.value.destroy();
  });

  return scroll;
}
