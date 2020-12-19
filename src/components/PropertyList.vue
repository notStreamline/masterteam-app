<template>
    <aside>
        <img :src="uris[property.id-1]" alt="" srcset="">
        <div class="short-description">
        <a :href="`inmueble/${property.id}`">
            <h6>{{ address.value }}</h6>
        </a>
        <p>
          <span>{{ property.propertyType.groupName }}</span>
          | <span>by {{ property.publisher }}</span>
        </p>
        <div class="short-details">
            <div>{{ "Nuevo" }}</div>
            <div>{{ 2 }}</div>
            <div>{{ 90 }} m2</div>
        </div>
        </div>
        <div class="right-action">
        <span class="icon icon-star" />
        <h5>{{ property.currency == 'Dollar'? '$' : 'S/.'}} {{ property.price }}</h5>
        <h5>{{ property.currency == 'Dollar'? '$' : 'S/.'}}
          {{ property.maintenance }}
        </h5>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Location {
  id: number;
  name: string;
  extentId: number;
  extentName: string;
  parent?: Location;
}

interface PropertyType {
  groupName: string;
  id: number;
  name: string;
}

interface PropertyShort {
  id: number;
  uri: string;
  title: string;
  propertyType: PropertyType;
  publisher: string;
  price: number;
  maintenance: number;
  currency: 'Dollar' | 'Sol';
  squareMeter: number;
  state: 'Nuevo' | 'Usado';
  rooms: string;
  path: string;
  location: Location;
  features: Array<string>;
}

export default defineComponent({
  name: 'PropertyList',
  props: {
    property: {
      type: Object as () => PropertyShort,
      required: true,
    },
  },
  data() {
    return {
      uris: ['https://cf.bstatic.com/images/hotel/max1280x900/159/159608125.jpg',
        'https://www.idshow.com.tw/article_deco/20200131153727/9.jpg'],
      address: {
        type: String,
        required: true,
        value: `${this.property.location.name}, ${this.property.location.parent?.name}`,
      },
    };
  },
  created() {
    this.generateAddress();
  },
  methods: {
    generateAddress() {
      console.log('fuck');
    },
  },
});
</script>

<style lang="scss" scoped>
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
