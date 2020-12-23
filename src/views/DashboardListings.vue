<template>
    <template v-if="!create">
    <div>
        <h1>My properties</h1>
        <p>Showing 06 results ~ Active</p>
        <a href="#"><b>Active</b></a>
        <a href="#"><i>Expired</i></a>
        <a href="#"><i>Borrador</i></a>
        <button
          class="mr-5 bg-blue-700 text-white border border-blue-700 py-2 px-6 rounded-lg"
          @click="()=>create = !create"
        >
          + Nueva Propiedad
        </button>
    </div>
    <DashboardTable
      :data="properties"
    />
    </template>
    <DashboardCreate v-if="create"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Property from '@/models/property';
import Repository from '@/api/RepositoryFactory';
import DashboardTable from '@/components/DashboardTable.vue';
import DashboardCreate from '@/components/DashboardCreate.vue';

const PropertiesRepository = Repository.get('properties');
export default defineComponent({
  name: 'DashboardListings',
  data() {
    return {
      properties: [] as Array<Property>,
      loading: true as boolean,
      create: true as boolean,
    };
  },
  components: {
    DashboardTable,
    DashboardCreate,
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

</style>
