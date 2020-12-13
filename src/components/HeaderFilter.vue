<template>
  <div class="search">
    <div class="type">
      <SearchTag
        v-for="category in categories"
        :key="category"
        :content="category"
        :change="changeCategory"
        :isActive="activeCategory==category"
        type="full"/>
    </div>
    <SearchBar
      :path="activeCategory"
      placeholder="Indique algo o somewhere"
    />
    <div class="queries">
      <!-- Add the query from the back end ? -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchTag from './SearchTag.vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'HeaderFilter',
  data: () => ({
    categories: ['Alquilar', 'Comprar', 'Propiedad'],
    queries: ['2 Habitaciones', 'Lima', 'Pet Friendly'],
    activeCategory: 'Alquilar' as string,
  }),
  components: {
    SearchBar,
    SearchTag,
  },
  methods: {
    changeCategory(category: string) {
      this.activeCategory = category;
    },
  },
});
</script>

<style scopedlang="scss">
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
