<template>
  <TheHeader/>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '@/components/TheHeader.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    TheHeader,
  },
});
</script>
