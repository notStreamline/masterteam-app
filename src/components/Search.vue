<template>
  <div class="search">
    <div class="type">
      <searchtag
        v-for="type in types"
        :key="type"
        :content="type"
        active="true"
        type="full"/>
    </div>
    <searchbar placeholder="Indique algo o somewhere"/>
    <div class="queries">
      <!-- Add the query from the back end ? -->
      <searchtag
        v-for="query in queries"
        :key="query"
        :content="query"
        type="query"/>
      <searchtag content="• • •" type="query"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Searchbar from './SearchBar.vue';
import Searchtag from './SearchTag.vue';

export default Vue.extend({
  name: 'search',
  data: () => ({
    activeType: String,
    types: ['Alquilar', 'Comprar', 'Propiedad'],
    queries: ['2 Habitaciones', 'Lima', 'Pet Friendly'],
  }),
  components: {
    Searchbar,
    Searchtag,
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
