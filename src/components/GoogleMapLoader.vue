<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GoogleMapsApiLoader from 'google-maps-api-loader'

interface Map {
    Map(map: object, config: object): object;
}
interface Google {
    maps: {
        Map(map: object, config: object): object;
    };
}

export default defineComponent({
  props: {
    mapConfig: Object,
    apiKey: String,
  },

  data() {
    return {
      google: {} as Google,
      map: {} as object,
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap as object;
      const MapConstructor = this.google.maps.Map;
      if (this.google !== null) {
        this.map = new MapConstructor(mapContainer, this.mapConfig) as HTMLElement;
      }
    },
  },
});
</script>
