<template>
    <div>
        <PropertySingle/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PropertySingle from '@/components/PropertySingle.vue';

/**
 * Add api call
 */
export default defineComponent({
  name: 'Search',
  components: {
    PropertySingle,
  },
});
</script>

<style lang="scss" scoped>

</style>
