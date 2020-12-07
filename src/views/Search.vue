<template>
  <div class="container">
    <div class="columns">
      <div class="column col-3">
        <Filter/>
      </div>
      <div class="column col-9">
        <PropetiesList/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Filter from '@/components/Filter.vue';
import PropetiesList from '@/components/PropetiesList.vue';

export default Vue.extend({
  name: 'Search',
  components: {
    Filter,
    PropetiesList,
  },
});
</script>
