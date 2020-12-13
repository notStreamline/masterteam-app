<template>
    <aside class="filters">
      <h6>Filters</h6>
      <p>Propety Type</p>
      <div class="property-types">
        <div class="property-type">
          <input type="radio" id="house" v-model="propertyType" value="0" checked>
          <label for="house">House</label>
        </div>

        <div class="property-type">
          <input type="radio" id="office" v-model="propertyType" value="1">
          <label for="office">Office</label>
        </div>

        <div class="property-type">
          <input type="radio" id="aparment" v-model="propertyType" value="2">
          <label for="aparment">Apartment</label>
        </div>
        <div class="property-type">
          <input type="radio" id="aparment" v-model="propertyType" value="2">
          <label for="aparment">Apartment</label>
        </div>
      </div>
      <p>Price Range</p>
      <div class="price-input">
          <input v-model="message" placeholder="500">
          <input v-model="message" placeholder="10000">
      </div>
      <div class="track-container">
        <span class="range-value min">{{ minValue}} </span>
        <span class="range-value max">{{ maxValue }}</span>
        <div class="track" ref="_vpcTrack"></div>
        <div class="track-highlight" ref="trackHighlight"></div>
        <button class="track-btn track1" ref="track1"></button>
        <button class="track-btn track2" ref="track2"></button>
      </div>
      <p>Metros</p>
      <div class="price-input">
          <input v-model="message" placeholder="500">
          <input v-model="message" placeholder="10000">
      </div>
      <div class="track-container">
        <span class="range-value min">{{ minValue}} </span>
        <span class="range-value max">{{ maxValue }}</span>
        <div class="track" ref="_vpcTrack"></div>
        <div class="track-highlight" ref="trackHighlight"></div>
        <button class="track-btn track1" ref="track1"></button>
        <button class="track-btn track2" ref="track2"></button>
      </div>

      <p>Rooms</p>
      <div>
        <p class="rooms-title">Bedrooms</p>
        <FormNumberSelector
          :crrActive="1"
        />
        <p class="rooms-title">Bathrooms</p>
        <FormNumberSelector
          :crrActive="2"
        />
        <p class="rooms-title">Garage</p>
        <FormNumberSelector
          :crrActive="4"
        />
      </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormNumberSelector from './FormNumberSelector.vue';
/**
 * Ideas >> Scroll for price
 */
export default defineComponent({
  name: 'Filter',
  components: {
    FormNumberSelector,
  },
});
</script>

<style lang="scss" scoped>
.filters{
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-right: 20px;
  padding: 15px 10px;
  width: 100%;
}

input {
    margin: .4rem;
}
.property-types{
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  .property-type{
    display: flex;
    p,
    label {
        font: 1rem 'Fira Sans', sans-serif;
    }
  }
}

.range-value{
    position: absolute;
    top: -2rem;
  }
  .range-value.min{
    left: 0;
  }

  .range-value.max{
    right: 0;
  }
  .track-container{
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }

  .track,
  .track-highlight {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.5rem;
  }

  .track{
    background-color: #ddd;
  }

  .track-highlight{
    background-color: black;
    z-index: 2;
  }

  .track-btn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1.5rem;
    height: 1.5rem;
    top: calc(-50% - 0.25rem);
    margin-left: -1rem;
    border: none;
    background-color: black;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    transition:
      transform .3s ease-out, box-shadow .3s ease-out,background-color .3s ease;
    transition:
      transform .3s ease-out,
      box-shadow .3s ease-out,
      background-color .3s ease,
      -webkit-transform .3s ease-out;
  }

.price-input{
  display: flex;
  input{
    width: 50%;
  }
}

.rooms-title{
  margin: 10px 15px;
  color: #aaa;
  text-align: left
}

</style>
