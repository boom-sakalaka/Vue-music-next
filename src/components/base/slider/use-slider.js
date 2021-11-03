/* eslint-disable no-multi-assign */
/*
 * @Author: GZH
 * @Date: 2021-11-03 22:24:36
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 22:31:59
 * @FilePath: \vue-music-next\src\components\base\slider\use-slider.js
 * @Description:
 */
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';

import { onMounted, onUnmounted, ref } from 'vue';

BScroll.use(Slide);

export default function useSlider(wrapperRef) {
  const slider = ref(null);
  const currentPageIndex = ref(0);

  onMounted(() => {
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true,
    }));

    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX;
    });
  });

  onUnmounted(() => {
    slider.value.destroy();
  });

  return {
    slider,
    currentPageIndex,
  };
}
