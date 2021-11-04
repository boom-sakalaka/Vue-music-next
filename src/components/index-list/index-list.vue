<!--
 * @Author: GZH
 * @Date: 2021-11-04 21:40:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 21:48:07
 * @FilePath: \vue-music-next\src\components\base\index-list\index-list.vue
 * @Description:
-->

<script setup>
/* eslint-disable no-undef */
import Scroll from '@/components/base/scroll/scroll.vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <Scroll class="index-list">
    <ul>
      <li v-for="group in props.data" :key="group.title" class="group">
        <h2 class="title">{{ group.title }}</h2>
        <ul>
          <li v-for="item in group.list" :key="item.id" class="item">
            <img class="avatar" v-lazy="item.pic" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </Scroll>
</template>

<style lang="scss" scoped>
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .group {
    padding-bottom: 30px;

    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }

    .item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
