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
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/**
 * Ideas >> Scroll for price
 */
export default defineComponent({
  name: 'Filter',
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
p,
label {
    font: 1rem 'Fira Sans', sans-serif;
}

input {
    margin: .4rem;
}

.property-types{
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}

.property-type{
  display: flex;
}
</style>
