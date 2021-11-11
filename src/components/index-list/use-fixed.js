/*
 * @Author: GZH
 * @Date: 2021-11-11 21:07:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 21:48:32
 * @FilePath: \vue-music-next\src\components\index-list\use-fixed.js
 * @Description:
 */

/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import { ref, watch, computed, nextTick } from 'vue';

export default function useFixed(props) {
  // data
  const TITLE_HEIGHT = 30;
  const groupRef = ref(null);
  const listHeights = ref([]);
  const scrollY = ref(0);
  const currentIndex = ref(0);
  const distance = ref(0);

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return '';
    }
    const currentGroup = props.data[currentIndex.value];
    return currentGroup ? currentGroup.title : '';
  });

  const fixedStyle = computed(() => {
    const distanceVal = distance.value;
    const diff = distanceVal > 0 && distanceVal < TITLE_HEIGHT ? distanceVal - TITLE_HEIGHT : 0;

    return {
      transform: `translate3d(0, ${diff}px, 0)`,
    };
  });

  // watch
  watch(
    () => props.data,
    async () => {
      await nextTick();
      calculate();
      // eslint-disable-next-line comma-dangle
    }
  );

  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value;
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i];
      const heightBottom = listHeightsVal[i + 1];
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i;
        distance.value = heightBottom - newY;
      }
    }
  });

  // 辅助函数
  function calculate() {
    const list = groupRef.value.children;
    const listHeightsVal = listHeights.value;
    listHeightsVal.length = 0;

    let height = 0;
    listHeightsVal.push(height);

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight;
      listHeightsVal.push(height);
    }
  }

  function onScroll(pos) {
    scrollY.value = -pos.y;
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex,
  };
}
