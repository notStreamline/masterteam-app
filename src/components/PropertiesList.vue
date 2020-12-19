<template>
    <div>
      <h1 class="section-title"> Propeties </h1>
        <div v-if="!loading">
          <PropertyList
            v-for="property in properties"
            :key="property.id"
            :property="property"/>
          <p>page {{ currentPage }} of {{ lastPage }}</p>
          <p>
            <button @click="prev">prev</button>
            <button @click="next">next</button>
          </p>
        </div>
        <h1 v-else>Oh no 😢</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { usePagination } from 'vue-composable';
import PropertyDTO from '@/models/property';
import Repository from '@/api/RepositoryFactory';
import PropertyList from './PropertyList.vue';

const PropertiesRepository = Repository.get('properties');
export default defineComponent({
  name: 'PropertiesList',
  setup() {
    const arrayRef = ref(new Array(20).fill(1).map((_, i) => i));
    // paginate array
    const {
      currentPage,
      lastPage,
      next,
      prev,
      offset,
      pageSize,
    } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: 20,
    });

    const result = computed(() => {
      const array = arrayRef.value;
      if (!Array.isArray(array)) return [];
      return array.slice(offset.value, offset.value + pageSize.value);
    });

    return {
      currentPage,
      lastPage,
      next,
      prev,
      result,
    };
  },
  data() {
    return {
      loading: true as boolean,
      properties: [] as Array<PropertyDTO>,
    };
  },
  components: {
    PropertyList,
  },
  created() {
    this.getProperties();
  },
  methods: {
    getProperties: async function getProperties() {
      const { data: { body } } = await PropertiesRepository.get();
      this.properties = body.content;

      if (body) {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
section-title{
  text-align: left;
}
section{
  margin: 0;
  padding: 0;
}
</style>
