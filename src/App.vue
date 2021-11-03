<!--
 * @Author: GZH
 * @Date: 2021-11-02 23:19:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 21:09:34
 * @FilePath: \vue-music-next\src\App.vue
 * @Description:
-->
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <m-header />
  <tab />
  <router-view></router-view>
</template>

<script setup>
import mHeader from '@/components/header/header.vue';
import Tab from '@/components/tab.vue/tab.vue';
</script>
