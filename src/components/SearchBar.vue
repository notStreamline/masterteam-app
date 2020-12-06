<template>
    <div class="search input-group">
        <select class="form-select">
            <option>Residencia</option>
            <option>Departamento</option>
            <option>Hogar</option>
        </select>
        <input type="text" class="form-input" :placeholder="placeholder">
        <button class="btn btn-primary input-group-btn">Submit</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'searchbar',
  props: {
    placeholder: String,
  },
});
</script>

<style lang="scss">
.search{
    min-width: 300px;
    width: 60%;
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
