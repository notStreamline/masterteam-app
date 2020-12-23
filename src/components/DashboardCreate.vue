<template>
    <div class="form-sections flex">
      <p class="section" :class="{active: active==='Pricipal'}">Principal</p>
      <p class="section" :class="{active: active==='Multimedia'}">Multimedia</p>
      <p class="section" :class="{active: active==='Caracteristicas'}">Caracteristicas</p>
      <p class="section" :class="{active: active==='Publicar'}">Publicar</p>
    </div>
    <form v-if="active==='Pricipal'" v-on:submit.prevent='sendData' class="form">
      <section>
        <h6>Descripcion del inmueble</h6>
        <label for="name">Title</label>
        <input v-model="property.title" placeholder="Titulo">
        <label for="name">Description</label>
        <textarea v-model="property.description" placeholder="add multiple lines"></textarea>
      </section>
      <section>
          <h6>General Information</h6>
          <label for="name">Tipo de operacion</label>
          <div>
            <input type="radio" id="Alquiler" value="Alquiler" v-model="tipoOperacion">
            <label for="Alquiler">Alquiler</label>
            <input type="radio" id="Venta" value="Venta" v-model="tipoOperacion">
            <label for="Venta">Venta</label>
            <input type="radio" id="Temporal" value="Temporal" v-model="tipoOperacion">
            <label for="Temporal">Temporal</label>
          </div>
          <div class="flex">
            <div>
              <label for="name">Tipo de inmueble</label>
              <select class="form-select" v-model="property.propertyTypeId">
                  <option :value="1">Casa</option>
                  <option :value="2">Departamento</option>
                  <option :value="3">lote</option>
                </select>
            </div>
            <div>
              <label for="name">Subcategoria</label>
              <select class="form-select">
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>lote</option>
              </select>
            </div>
          </div>
      </section>
      <section>
          <h6>Ubicacion</h6>
          <label for="adress">Direccion</label>
          <input v-model="address" placeholder="Direccion">
          <div class="flex">
            <div>
              <label for="name">Region</label>
              <select class="form-select" v-model="locations[0]">
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>lote</option>
                </select>
            </div>
            <div>
              <label for="name">Provincia</label>
              <select
                class="form-select"
                v-model="locations[1]"
                :disabled="locations[0]===undefined"
              >
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>lote</option>
              </select>
            </div>
            <div>
              <label for="name">Distrito</label>
              <select
                class="form-select"
                v-model="locations[2]"
                :disabled="locations[1]===undefined"
              >
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>lote</option>
              </select>
            </div>
            <div>
              <label for="name">Urbanizacion</label>
              <select
                class="form-select"
                v-model="locations[3]"
                :disabled="locations[2]===undefined"
              >
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>lote</option>
              </select>
            </div>
          </div>
          <div class="google-map" ref="googleMap"></div>
      </section>
      <section>
      </section>
      <section>
          <h6>Precio</h6>
          <label for="name">Costo del Inmueble</label>
          <div class="flex">
            <input
            type="text" v-model="prices[0]"
            data-type="currency" placeholder="S./12,000">
            <input
              type="text" name="currency-field"
              pattern="^\\d{1,3}(,\d{3})*(\.\d+)?$" v-model="prices[1]"
              data-type="currency" placeholder="$1,000">
          </div>
          <label for="name">Mantenimiento</label>
          <input
            type="text" name="currency-field" v-model="prices[2]"
            data-type="currency" placeholder="S./12,000">
      </section>
      <section>
        <h6>Caracteristicas principales</h6>
        <div class="flex">
          <div>
          <label>Dormitorios (opcional)</label>
          <input v-model.number="features[0]" type="number">
        </div>
        <div>
          <label>Banos (Opcional)</label>
          <input v-model.number="features[1]" type="number">
        </div>
        </div>
      </section>
      <div>
        <input type="submit" value="Crear"
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
        />
      </div>
    </form >
    <div v-if="active==='Multimedia'">
      <h6>Images</h6>
      <div class="media" draggable="false">
        <div class="upload dropzone m-3"
            @click="openFileSelection"
            v-on:dragover="onDragOver"
            v-on:dragleave="onDragLeave"
            v-on:drop="onDrop"
          >
            <i class="fa fa-upload fa-2x" aria-hidden="true"></i>
            <input
              ref="fileInput"
              class="file-input"
              type="file"
              multiple
              v-on:change="onFileChanged"
            />
            <a>Agregar imagen</a>
          </div>
        <draggable
          class="dragArea list-group flex flex-wrap"
          :list="list"
        >
          <div
            class="list-group-item m-3"
            v-for="element in list"
            :key="element.id"
          >
            <img :src="element.uri" alt="">
          </div>
        </draggable>
      </div>
      <div>
         <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
          @click="()=>active='Pricipal'"
        >
        Back!
        </button>
        <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
          @click="()=>active='Caracteristicas'"
        >
        Siguiente
        </button>
      </div>
    </div>
    <div v-if="active==='Caracteristicas'">
      Caracteristicas
      <div>
        <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
          @click="()=>active='Multimedia'"
        >
        Back!
        </button>
        <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
          @click="()=>active='Publicar'"
        >
        Siguiente
        </button>
      </div>
    </div>
    <div v-if="active==='Publicar'">
      Publicar
      <div>
         <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
          @click="()=>active='Caracteristicas'"
        >
        Back!
        </button>
        <button
          class="px-8 py-2 text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
        >
        Publicar!
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import Repository from '@/api/RepositoryFactory';
import { PropertyDTO, Location } from '@/models/property';

/**
 * TODO: Validation of prices
 * TODO: Get Locations for Selectors
 * TODO: Get Types of Inmueble
 * TODO: Show features
 */
const PropertiesRepository = Repository.get('properties');
export default defineComponent({
  name: 'FormSelect',
  data() {
    return {
      property: {} as PropertyDTO,
      address: '' as string,
      locations: {} as Array<Location>,
      prices: {} as Array<number>,
      features: {} as Array<number>,
      tipoOperacion: String,
      enabled: true as boolean,
      active: 'Pricipal' as string,
      hightlight: false,
      list: [
        { uri: 'https://photos.zillowstatic.com/fp/aa82890fa30977d76d883ac060825c6c-uncropped_scaled_within_1344_1008.webp', id: 1 },
        { uri: 'https://photos.zillowstatic.com/fp/d76007346c78be2232e07fa5bb88e77e-uncropped_scaled_within_1344_1008.webp', id: 2 },
        { uri: 'https://photos.zillowstatic.com/fp/0613010f8e17717e178bfce4ffdfaddb-uncropped_scaled_within_1344_1008.webp', id: 3 },
        { uri: 'https://photos.zillowstatic.com/fp/c6ccb1e4b0ce57736479664699be6230-uncropped_scaled_within_1344_1008.webp', id: 4 },
        { uri: 'https://photos.zillowstatic.com/fp/fd05d69c5174150f01b73132a7810a09-uncropped_scaled_within_1344_1008.webp', id: 5 },
      ],
      dragging: false,
    };
  },
  components: {
    draggable: VueDraggableNext,
  },
  methods: {
    sendData() {
      const payload = this.property as PropertyDTO;
      payload.addressId = 1;
      payload.features = [
        { featureId: 1, value: this.features[0] },
        { featureId: 2, value: this.features[1] },
      ];
      payload.prices = [
        { amount: this.prices[0], currencyId: 1, expenseTypeId: 1 },
        { amount: this.prices[2], currencyId: 1, expenseTypeId: 2 },
      ];
      console.log(payload);
      this.active = 'Multimedia';
    },
    activate() {
      PropertiesRepository.create(this.property);
    },
    openFileSelection(): void {
      if (!this.enabled) return;
      console.log('nope');
    },
    onDragOver(event: DragEvent): void {
      if (!this.enabled) return;
      event.preventDefault();
      this.hightlight = true;
    },
    onDragLeave(event: DragEvent): void {
      this.hightlight = false;
    },
  },
});
</script>

<style lang="scss">
.form-sections{
  width: 100%;
  margin: 5px 5%;
  .active{
    font-weight: bold;
  }
  .section{
    margin: 5px 10px;
  }
}
section{
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
}

.form{
  border: 1px solid #ddd;
  padding: 50px;
  left: 0;
  h6{
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: #2A5099;
    margin-bottom: 5px;
  }
  label{
    text-align: left;
    margin: 25px 0 5px 0;
  }
}
.media{
  display: flex;
  flex-wrap: wrap;
  .upload{
    height: 150px;
    width: 250px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid blanchedalmond;
    cursor: pointer;
    input{
      width: 100%;
      height: 100%;
      background: rgba(150,225,150,0.5);
      vertical-align: middle;
      text-align: center;
      color: #FFF;
      font-weight: bold;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
    a{
      font-size: 16px;
    }
  }
  .list-group-item, img{
    max-height: 150px;
    width: 250px;
  }
}
</style>
