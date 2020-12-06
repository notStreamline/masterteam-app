<template>
    <div class="searchbar input-group">
        <form-select/>
        <input type="text" class="form-input" :placeholder="placeholder">
        <button class="btn btn-primary input-group-btn">Buscar Propiedades</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormSelect from './FormSelect.vue';

export default Vue.extend({
  name: 'searchbar',
  props: {
    placeholder: String,
  },
  components: {
    FormSelect,
  },
});
</script>

<style lang="scss">
.searchbar{
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
    .btn{
        width: 25%;
    }
}
</style>
