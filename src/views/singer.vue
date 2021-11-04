<!--
 * @Author: GZH
 * @Date: 2021-11-03 20:57:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 21:53:37
 * @FilePath: \vue-music-next\src\views\Singer.vue
 * @Description:
-->
<template>
  <div class="singer">
    <index-list :data="singers"></index-list>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getSingerList } from '@/service/singer';
import IndexList from '@/components/index-list/index-list.vue';

const singers = ref([]);

onMounted(async () => {
  const result = await getSingerList();
  console.warn(result);
  singers.value = result.singers;
});
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
