<template>
    <div v-if="valid && !loading">
      <div class="container details-property">
          <!-- seccion de informacion de propiedad-->
          <div class="details">
              <!-- seccion de imagenes -->
              <PropertySingleImageGrid

              />
              <!-- seccion de details -->
              <PropertySingleDetails
                  :property="property"
                  :location="property.address"
                  :features="property.features"
              />
              <div class="map">
                  <!-- seccion de Mapa -->
              </div>
          </div>
          <div class="publisher-info">
              <!-- seccion de informacion del publicador-->
              <svg width="80" height="80" viewBox="0 0 80 80" fill="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" stroke="gray" stroke-width="2"/>
              </svg>
              <h3>Agente</h3>
              <div>
                  930 *** ***
                  <span>Ver numero</span>
              </div>

              <button>
                  <p>Contactar Publicador</p>
              </button>
          </div>
      </div>
      <div>
          <!-- seccion de propiedades similares-->
      </div>
      <div>
          <!-- seccion de seguridad similares-->
      </div>
      <!-- Footer end -->
    </div>
    <div v-else-if="!valid && !loading">
        <p>Not valid</p>
    </div>
    <div v-else>
        LOADING....
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PropertyShort from '@/models/property';
import Repository from '@/api/RepositoryFactory';
import PropertySingleImageGrid from './PropertySingleImageGrid.vue';
import PropertySingleDetails from './PropertySingleDetails.vue';

const PropertiesRepository = Repository.get('properties');
export default defineComponent({
  name: 'PropetySingle',
  data() {
    return {
      property: {} as PropertyShort,
      loading: true as boolean,
      valid: true as boolean,
    };
  },
  components: {
    PropertySingleImageGrid,
    PropertySingleDetails,
  },
  created() {
    this.getProperty();
  },
  methods: {
    getProperty: async function getProperty() {
      const id = this.$route.params.id || 0;
      const { data } = await PropertiesRepository.getProperty(id);
      this.property = data.body;

      if (data.body) {
        this.loading = false;
        this.valid = data.ok;
      }
    },
  },
});
</script>

<style lang="scss">
/* The CSS goes here */
a{
  cursor: pointer;
}
.details-property{
    display: flex;
    height: 1000px;
}
.publisher-info{
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-width: 200px;
    border: 2px solid #eee;
    border-radius: 10px;
    height: 300px;
}
.map{
  margin: 10px 50px;
}
</style>
