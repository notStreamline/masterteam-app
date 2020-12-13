<template>
    <div class="selector">
        <span v-for="n in numbers"
          :key = "n"
          :class="{ active: value === n}"
          @click="activate(n)"
          :style="style"
        >
          {{ n }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormNumberSelector',
  props: {
    crrActive: Number,
  },
  data() {
    return {
      value: this.crrActive as number,
      numbers: ['any', '1', '2', '3', '4', '5+'] as Array<string>,
    };
  },
  methods: {
    activate(value: number) {
      this.value = value;
    },
  },
  computed: {
    style(): object {
      return {
        padding: `${10}px ${8}px`,
        width: `${45}px`,
      };
    },
  },
});
</script>
<!-- Make width and padding dynamic-->
<style lang="scss">
.selector{
  display: flex;
  justify-content: center;

  span{
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #000;
    padding: 10px 20px;
    &.active{
      background-color: rgba(42, 80, 153, 0.2);
    }
    &:first-child{
      border-radius: 12px 0px 0px 12px;
    }
    &:last-child{
      border-radius: 0 12px 12px 0;
    }
  }
}
</style>
