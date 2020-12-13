<template>
    <div class="property-types">
        <div v-for="value in values"
            class="property-type"
            :key="value"
            @click="changeProperty(value)"
            :class="{active: propertyType == value}">
            <input type="radio" :id="value" v-model="propertyType" :value="value">
            <label :for="value">{{ value }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/**
 * Ideas >> Scroll for price
 */
export default defineComponent({
  name: 'FormRadioInput',
  props: {
    values: Array,
  },
  data() {
    return {
      propertyType: '',
    };
  },
  methods: {
    changeProperty(value: string) {
      this.propertyType = value;
    },
  },
});
</script>

<style lang="scss" scoped>
.property-types{
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
    .property-type {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.5px solid var(--color-accent);
        padding: 6px 8px;
        margin: 5px;
        border-radius: 12px;
        &.active{
        border: 1.5px solid var(--color);
        }
        p,
        label {
        font: 1rem 'Fira Sans', sans-serif;
        cursor: pointer;
        }
        input{
            margin-right: 0.2rem;
        }
    }
}
</style>
