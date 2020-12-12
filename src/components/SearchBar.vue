<template>
    <div class="container flex w-96 my-5">
        <FormSelect/>
        <input type="text" class="w-full px-3" :placeholder="placeholder">
        <button class="btn w-1/6">Buscar</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormSelect from './FormSelect.vue';
/**
 * TODO: Paginacion
 */
export default defineComponent({
  name: 'SearchBar',
  components: {
    FormSelect,
  },
});
</script>

<style lang="scss">
.sbar{
    min-width: 300px;
    max-width: 800px;
    width: 90%;
    align-self: center;
    .form-select{
        width: 30%;
    }
    .form-input{
        width: 100%;
    }
}
.btn{
  @apply px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700;
  @apply py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
}
</style>
