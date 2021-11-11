<!--
 * @Author: GZH
 * @Date: 2021-11-04 20:45:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 22:17:10
 * @FilePath: \vue-music-next\src\components\base\scroll\scroll.vue
 * @Description:
-->
<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue';
import useScroll from './use-scroll';

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const rootRef = ref(null);
    const scroll = useScroll(rootRef, props, emit);

    return {
      rootRef,
      scroll,
    };
  },
};
</script>
