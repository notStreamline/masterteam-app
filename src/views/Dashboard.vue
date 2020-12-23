<template>
  <div class="w-full">
    <div>
      <h1>Dashboard >> </h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
});
</script>

<style lang="scss" scoped>

</style>
