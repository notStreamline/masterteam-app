<template>
  <div class="search">
    <div class="type">
      <SearchTag
        v-for="type in types"
        :key="type"
        :content="type"
        active="true"
        type="full"/>
    </div>
    <SearchBar placeholder="Indique algo o somewhere"/>
    <div class="queries">
      <!-- Add the query from the back end ? -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchTag from './SearchTag.vue';
import SearchBar from './SearchBar.vue';
 
export default Vue.extend({
  name: 'Search',
  data: () => ({
    activeType: String,
    types: ['Alquilar', 'Comprar', 'Propiedad'],
    queries: ['2 Habitaciones', 'Lima', 'Pet Friendly'],
  }),
  components: {
    SearchBar,
    SearchTag,
  },
});
</script>

<style lang="scss">
.search{
  width: 100%;
  display: flex;
  flex-direction: column;
  .type{
    margin: 10px 5px;

    span{
      margin: 0 8px;
    }
  }
  .queries{
    margin-top: 15px;
    min-width: 300px;
    max-width: 800px;
    width: 90%;
    align-self: center;
    display: flex;
  }
}
</style>
