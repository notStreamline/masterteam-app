<template>
  <span :class="type" class="chip noselect">
    {{content}}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'search-tag',
  props: {
    content: String,
    type: String,
  },
});
</script>

<style lang="scss">
.chip{
  width: fit-content;
}
.full{
  background: transparent;
  padding: 10px;
  border: black 1px solid;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    background-color: black;
    color: white;
  }
}

.query{
  align-self: flex-start;
  background: var(--base-10);
  padding: 12px 15px;
  border-radius: 5px;
  margin-right: 10px;
   &:hover{
    cursor: pointer;
  }
}
</style>
