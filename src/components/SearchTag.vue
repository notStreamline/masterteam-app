<template>
  <span class="cursor-pointer" v-bind:class="[isActive ? 'active' : '', type]">
    {{content}}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchTag',
  props: {
    content: String,
    type: String,
    isActive: Boolean,
  },
});
</script>

<style scoped lang="scss">
.full{
  @apply bg-transparent hover:bg-gray-900 text-gray-900 font-semibold mx-1.5 my-2;
  @apply hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded;
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
