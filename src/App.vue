<template>
  <div id="app">
    <the-navbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TheNavbar from './components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
  @import './assets/styles/reset.scss';
  @import './assets/styles/constant.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 10000px
}
</style>
