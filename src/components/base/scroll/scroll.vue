<!--
 * @Author: GZH
 * @Date: 2021-11-04 20:45:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 20:46:31
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
  },
  setup(props) {
    const rootRef = ref(null);
    useScroll(rootRef, props);

    return {
      rootRef,
    };
  },
};
</script>
