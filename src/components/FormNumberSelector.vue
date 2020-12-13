<template>
    <div class="selector">
        <span @click="activate(1)" :class="{ active: value === 1}">1</span>
        <span @click="activate(2)" :class="{ active: value === 2 }">2</span>
        <span @click="activate(3)" :class="{ active: value === 3 }">3</span>
        <span @click="activate(4)" :class="{ active: value === 4 }">4</span>
        <span @click="activate(5)" :class="{ active: value >= 5 }">5+</span>
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
    };
  },
  methods: {
    activate(value: number) {
      this.value = value;
    },
  },
});
</script>

<style lang="scss">
.selector{
  display: flex;
  justify-content: center;

  span{
    border: 1px solid #eee;
    padding: 10px 20px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #000;
    &.active{
      background-color: rgba(42, 80, 153, 0.2);;
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
