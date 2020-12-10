<template>

  <h2 class="title">  {{ $route.name }} </h2>
  <div class="container propieties-page">
      <div class="column">
        <Filter/>
      </div>
      <div class="column">
        <PropertiesList/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Filter from '@/components/Filter.vue';
import PropertiesList from '@/components/PropertiesList.vue';

export default defineComponent({
  name: 'Search',
  components: {
    Filter,
    PropertiesList,
  },
});
</script>

<style lang="scss">
.propieties-page{
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-top: 50px;
  width: 100%;
}

.title{
  padding-top: 60px;
  font-size: 1.3rem;
  text-transform: capitalize;
}

</style>
