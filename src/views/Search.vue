<template>

  <h2 class="title">  {{ $route.name }} </h2>
  <div class="container propieties-page">
      <div class="column-left">
        <Filter/>
      </div>
      <div class="column-right">
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
  display: flex;
  padding-top: 50px;
  width: 100%;
}

.title{
  padding-top: 60px;
  font-size: 1.3rem;
  text-transform: capitalize;
}

.column-left{
  width: 300px
}
.column-right{
  width: calc(100% - 290px);
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
