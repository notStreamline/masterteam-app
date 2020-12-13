<template>
    <div class="container details-property">
        <!-- seccion de informacion de propiedad-->
        <div class="details">
            <!-- seccion de imagenes -->
            <PropertySingleImageGrid

            />
            <!-- seccion de details -->
            <PropertySingleDetails
                :price="199000"
                :location="location"
            />
            <div class="map">
                <!-- seccion de Mapa -->
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Lima+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://embedmap.org/'>embed google maps into website</a>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PropertySingleImageGrid from './PropertySingleImageGrid.vue';
import PropertySingleDetails from './PropertySingleDetails.vue';
/**
 * Add api calls
 */
export default defineComponent({
  name: 'PropetySingle',
  data() {
    return {
      location: {
        address: 'Av. San Felipe 1070',
        district: 'Jesus Maria',
        city: 'Lima',
        country: 'Peru',
      },
    };
  },
  components: {
    PropertySingleImageGrid,
    PropertySingleDetails,
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
