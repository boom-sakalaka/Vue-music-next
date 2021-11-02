<!--
 * @Author: GZH
 * @Date: 2021-11-02 23:19:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-02 23:24:54
 * @FilePath: \vue-music-next\src\views\Home.vue
 * @Description:
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
