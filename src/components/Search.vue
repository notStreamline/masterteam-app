<template>
    <div class="search">
        <div class="type">
            <searchtag content="Alquilar" type="full"/>
            <searchtag content="Comprar" type="full"/>
            <searchtag content="Propiedad" type="full"/>
        </div>
        <searchbar placeholder="Indique algo o somewhere"/>
        <div class="queries">
            <searchtag content="2 Habitaciones" type="query"/>
            <searchtag content="Lima" type="query"/>
            <searchtag content="Pet Friendly" type="query"/>
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
