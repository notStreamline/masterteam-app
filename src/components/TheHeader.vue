<template>
    <div class="hero">
        <div class="hero-body container">
            <h1>El lugar de tu suenos a un solo click</h1>
            <p>This is a hero example</p>
            <searchbar placeholder="Indique algo o somewhere"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from './SearchBar.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'the-header',
  components: {
    SearchBar,
  },
});
</script>

<style lang="scss">
.hero{
  background-image:url('../assets/img/main-bg.jpg');
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh; /* You must set a specified height */
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
}
</style>
