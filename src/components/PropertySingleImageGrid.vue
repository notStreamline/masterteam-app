<template>
    <div class="grid-container-images">
        <div class="mainimage">
            <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
        </div>
        <div class="miniture image_2">
            <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
        </div>
        <div class="miniture image_3">
            <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
        </div>
        <div class="miniture more-images">
            <img src="https://cdn.jhmrad.com/wp-content/uploads/amazing-modern-architecture-beautiful-house-design_194954.jpg" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropetyImageGrid',
});
</script>

<style lang="scss">
//Image CSS
.grid-container-images {
  display: grid;
  width: 95%;
  max-height: 750px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "image_2 mainimage"
    "image_3 mainimage"
    "more-images mainimage";
}

.mainimage {
  grid-area: mainimage;
  width: 100%
}

.image_2 {
  margin-top: 5px;
  grid-area: image_2;
}

.image_3 { grid-area: image_3; }

.miniture{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}
.more-images {
  grid-area: more-images;
  opacity: 0.5;
}

img{
    min-width: 100%;
    border-radius: 12px;
}
</style>
