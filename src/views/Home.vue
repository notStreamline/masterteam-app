<template>
  <TheHeader/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheHeader,
  },
});
</script>
