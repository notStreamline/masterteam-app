<template>
    <div class="hero">
        <div class="hero-body container">
            <h1>{{title}}</h1>
            <Search/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from './Search.vue';

export default Vue.extend({
  name: 'the-header',
  data: () => ({
    title: 'El lugar de tu suenos a un solo click',
  }),
  components: {
    Search,
  },
});
</script>

<style lang="scss">
.hero{
  background-image:url('../assets/img/main-bg.jpg');
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 95vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  .container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  h1{
    color: white;
  }
}
</style>
