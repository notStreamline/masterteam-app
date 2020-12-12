<template>
    <div class="hero">
        <div class="container">
            <h1 class="title">
              {{title}}
            </h1>
            <HeaderFilter/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderFilter from './HeaderFilter.vue';

export default defineComponent({
  name: 'TheHeader',
  data: () => ({
    title: 'El lugar de tu suenos a un solo click' as string,
  }),
  components: {
    HeaderFilter,
  },
});
</script>

<style scoped lang="scss">
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
  .title{
    @apply text-4xl tracking-tight font-bold text-gray-100 sm:text-5xl md:text-6xl break-words;
    @apply xl:w-1/2 md:max-w-full sm:max-w-full place-self-center my-10;
  }
}
</style>
