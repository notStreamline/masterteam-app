<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './assets/styles/constant.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
