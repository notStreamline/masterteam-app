<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.map)">
      <slot
        :loader="loader"
        :map="map"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

export default defineComponent({
  data() {
    return {
      loader: {} as Loader,
      map: {} as google.maps.Map,
      mapOptions: {} as object,
    };
  },

  async mounted() {
    this.loader = new Loader({
      apiKey: 'AIzaSyBAmaK28RKU4I5n5EHZ2O7-1d1lJMn1dNw',
      version: 'weekly',
      libraries: ['places'],
    });

    this.mapOptions = {
      center: {
        lat: -12.046373,
        lng: -77.042755,
      },
      zoom: 4,
    };
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      console.log(this.loader, this.mapOptions, this.$refs.googleMap);
      const mapContainer = this.$refs.googleMap as HTMLElement;
      this.loader.load().then(() => {
        // eslint-disable-next-line no-undef
        this.map = new google.maps.Map(
          mapContainer, this.mapOptions,
        );
      }).catch((e) => {
        // do something
        console.log(e);
      });

      this.loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          // eslint-disable-next-line no-undef
          this.map = new google.maps.Map(
            mapContainer, this.mapOptions,
          );
        }
      });
    },
  },
});
</script>
