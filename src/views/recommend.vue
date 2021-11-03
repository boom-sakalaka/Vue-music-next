<!--
 * @Author: GZH
 * @Date: 2021-11-03 20:57:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 23:01:16
 * @FilePath: \vue-music-next\src\views\recommend.vue
 * @Description:
-->
<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider v-if="sliders.length" :sliders="sliders" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getRecommend } from '@/service/recommend';
import Slider from '@/components/base/slider/slider.vue';

const sliders = ref([]);
onMounted(async () => {
  const rest = await getRecommend();
  sliders.value = rest.sliders;
});
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .slider-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slider-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
