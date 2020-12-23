<template>
  <div
    id="app"
    :class="{ left: ['Dashboard'].includes($route.name) }"
  >
    <TheNavbar v-if="!['Dashboard'].includes($route.name)"/>
    <DashboardNavegation v-if="['Dashboard'].includes($route.name)" />
    <router-view/>
  </div>
</template>

<script lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import DashboardNavegation from '@/components/DashboardNavegation.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    DashboardNavegation,
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
.left{
  display:flex;
  flex: 1;
}
</style>
