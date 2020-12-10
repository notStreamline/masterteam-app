<template>
    <div class="container details-property">
      <div>
            <!-- seccion de informacion de propiedad-->
            <div>
             <!-- seccion de imagenes -->
                <div class="grid-container-images">
                    <div class="mainimage">
                        <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
                    </div>
                   <div class="miniture image_2">
                        <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
                    </div>
                    <div class="miniture image_3">
                        <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
                    </div>
                    <div class="miniture more-images">
                        <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
                    </div>
                </div>
            </div>
            <div>
                <div class="grid-container">
                    <div class="price">
                        $ 400.200
                    </div>
                    <div class="location">
                        Av. San Felipe 1079, Jesus Maria
                    Lima, Peru
                    </div>
                    <div class="navegation">
                        Circulo
                    </div>
                    <div class="details">
                        Bedrooms
                    </div>
                </div>
            </div>
            <div>
                <!-- seccion de Mapa -->
            </div>
      </div>
        <div class="publisher-info">
            <div>

            </div>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" stroke="gray" stroke-width="2"/>
            </svg>
            <h3>Agente</h3>
            <div>
                930 *** ***
                <span>Ver numero</span>
            </div>

            <button>
                <p>Contactar Publicador</p>
            </button>
            <!-- seccion de informacion del publicador-->
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
/**
 * Add api call
 */
export default defineComponent({
  name: 'Search',
});
</script>

<style lang="scss" scoped>
.container{
    padding-top: 60px;
}
.details-property{
    display: flex;
}
.publisher-info{
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    border: 1px solid coral ;
    height: 250px;
}
.grid-container {
    height: 150px;
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    grid-template-rows: 0.5fr 1fr;
    gap: 0px 0px;
}

.precio { grid-area: 1 / 1 / 2 / 3; }

.navegation { grid-area: 2 / 1 / 3 / 2; }

.location { grid-area: 1 / 2 / 2 / 3; }

.details { grid-area: 2 / 2 / 3 / 3; }

//Image CSS
html, body, .grid-container { height: 80vh;margin: 0; }

.grid-container-images {
  display: grid;
  width: 80%;
  max-height: 750px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "image_2 mainimage"
    "image_3 mainimage"
    "more-images mainimage";
}

.mainimage {
  grid-area: mainimage;
  width: 100%
}

.image_2 {
  margin-top: 5px;
  grid-area: image_2;
}

.image_3 { grid-area: image_3; }

.more-images {
  grid-area: more-images;
  opacity: 0.5;
}
.miniture{
}

img{
    object-fit: cover;
    border-radius: 12px;
}
</style>
