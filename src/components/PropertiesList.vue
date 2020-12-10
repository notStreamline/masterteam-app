<template>
    <div>
      <h1 class="section-title"> Propeties </h1>
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { usePagination } from 'vue-composable';
import PropertyList from './PropertyList.vue';

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
      properties: [
        {
          id: 1,
          uri: 'http://www.dhoumm.co/cdn-k1/lo/an-artful-loft-design_room-interior-and-decoration.jpg',
          title: 'The most beautiful out there',
          type: 'Apartment',
          publisher: 'Someone',
          price: 20000,
          currency: 'Dollar',
          squareMeter: '92',
          state: 'Nuevo',
          rooms: 23,
          path: '/room',
        },
        {
          id: 2,
          uri: 'https://resources.stuff.co.nz/content/dam/images/1/v/v/t/6/o/image.related.StuffLandscapeSixteenByNine.710x400.1vuu0x.png/1562797525682.jpg?format=pjpg&optimize=medium',
          title: 'The second most beautiful out there',
          type: 'House',
          publisher: 'Diego',
          price: 5000,
          currency: 'Soles',
          squareMeter: '102',
          state: 'Usado',
          rooms: 6,
          path: '/roomy',
        },
      ],
    };
  },
  components: {
    PropertyList,
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
