<template>
    <aside>
        <img :src="propety.uri" alt="" srcset="">
        <div class="short-description">
        <a :href="`somewhere${propety.path}`"><h6>{{ propety.title }}</h6></a>
        <p><span>{{ propety.type }}</span> | <span>by {{ propety.publisher }}</span></p>
        <div class="short-details">
            <div>{{ propety.state }}</div>
            <div>{{ propety.rooms }}</div>
            <div>{{ propety.squareMeter }} m2</div>
        </div>
        </div>
        <div class="right-action">
        <span class="icon icon-star" />
        <h5>{{ propety.currency == 'Dollar'? '$' : 'S/.'}} {{ propety.price }}</h5>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface PropiedadShort {
  id: number;
  uri: string;
  title: string;
  type: string;
  publisher: string;
  price: number;
  currency: 'Dollar' | 'Sol';
  squareMeter: number;
  state: 'Nuevo' | 'Usado';
  rooms: string;
  path: string;
}

export default defineComponent({
  name: 'PropetyList  ',
  props: {
    propety: Object as () => PropiedadShort,
  },
});
</script>

<style lang="scss">

aside{
  padding: 0;
  margin: 0;
  display: flex;
    margin-bottom: 20px;
  height: 160px;
}

h6{
  font-size: 1.3rem;
}
a{
  cursor: pointer;
}
img{
  width: 35%;
  height: 100%;
  object-fit: cover;
}

.short-description{
  margin: 10px 25px;
  text-align: left;
  position: relative;
  width: 50%;
}

.short-details{
  display: flex;
  width: 80%;
  align-self: flex-end;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}

.right-action{
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  margin: 15px 30px 10px 30px;
  .icon {
    display: inline-block;
    background-size: cover;
  }
    .icon-star {
    width: 25px;
    height: 25px;
    align-self: flex-end;
    cursor: pointer;
    background-image: url('../assets/icons/star.svg');
    :hover,
    :focus {
    filter: invert(27%) hue-rotate(346deg) saturate(2878%) brightness(104%) contrast(97%);
    }
  }

}
</style>
