<template>

  <h2 class="title"> The most beautiful out there </h2>
  <div class="container propieties-page">
      
  </div>
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

<style lang="scss">
.propieties-page{
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-top: 50px;
  width: 100%;
}

.title{
  padding-top: 60px;
  font-size: 1.3rem;
  text-transform: capitalize;
}

</style>
