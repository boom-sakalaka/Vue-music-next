/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-bitwise */
/* eslint-disable radix */
/*
 * @Author: GZH
 * @Date: 2021-11-11 22:02:43
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 22:06:00
 * @FilePath: \vue-music-next\src\components\index-list\use-shortcut.js
 * @Description:
 */
import { ref, computed } from 'vue';

export default function useShortcut(props, groupRef) {
  const ANCHOR_HEIGHT = 18;
  const scrollRef = ref(null);

  const shortcutList = computed(() => props.data.map((group) => group.title));

  const touch = {};

  function onShortcutTouchStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index);
    touch.y1 = e.touches[0].pageY;
    touch.anchorIndex = anchorIndex;

    scrollTo(anchorIndex);
  }

  // (touchmove 纵坐标 - touchstart的纵坐标) / 每个item的高度 + 初始索引
  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY;
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0;
    const anchorIndex = touch.anchorIndex + delta;

    scrollTo(anchorIndex);
  }

  function scrollTo(index) {
    if (isNaN(index)) return;
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index));
    const targetEl = groupRef.value.children[index];
    const scroll = scrollRef.value.scroll;
    scroll.scrollToElement(targetEl, 0);
  }

  return {
    shortcutList,
    onShortcutTouchStart,
    scrollRef,
    onShortcutTouchMove,
  };
}
