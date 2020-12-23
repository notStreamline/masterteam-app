<template>
    <div class="grid-container">
        <div class="price">
            <p class="ammount">
                <span>$</span>
                {{ 1000 }}
            </p>
        </div>
        <div class="location">
            <p class="locate">
                <span class="address">{{ address.name }}, </span>
                <span class="district">{{ address.location.name }}</span><br/>
                <span class="city">
                    <!-- Loop around info -->
                    {{ address.location.parent.name }},
                    {{ address.location.parent.parent.name }}
                </span>
            </p>
            <div class="line"/>
        </div>
        <div class="navegation flex flex-col rounded-full bg-gray-100 w-12">
            <i class="fa fa-info-circle"
                :class="{active: navegation=='info'}"
                @click="()=> navegation='info'"
                aria-hidden="true">
            </i>
            <i class="fa fa-car"
                @click="()=> navegation='car'"
                :class="{active: navegation=='car'}"
                aria-hidden="true">
            </i>
            <i class="fa fa-map-marker"
                @click="()=> navegation='map'"
                :class="{active: navegation=='map'}"
                aria-hidden="true">
            </i>
        </div>
        <div v-if="navegation=='info'" class="details">
            <div class="grid-details">
                <div
                    v-for="feature in groupFeatures('General')"
                    :key="feature.id"
                >
                    <p>{{ feature.label }}</p>
                    <p>{{ feature.value }}</p>
                </div>
            </div>
            <div class="description">
                <h6><b>Descripcion</b></h6>
                <div>
                    <span v-if="!readMore">{{property.description.slice(0, 50)}}</span>
                    <span v-if="readMore" v-html="property.description"></span>
                    <br>
                    <a class="" v-if="!readMore" @click="toggleReadMore" href="#">
                    Leer Mas...
                    </a>
                    <a class="" v-if="readMore" @click="toggleReadMore" href="#">
                    Leer Menos.
                    </a>
                </div>
            </div>
        </div>
        <div v-if="navegation=='car'" class="car">
            CAR
        </div>
        <div v-if="navegation=='map'" class="map">
            <GoogleMapLoader/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PropertyShort, { Address, Feature } from '@/models/property';
import GoogleMapLoader from './GoogleMapLoader.vue';

interface Features {
    General: Array<Feature>;
}

export default defineComponent({
  name: 'PropetySingleDetails',
  data() {
    return {
      navegation: 'info' as string,
      readMore: false as boolean,
    };
  },
  components: {
    GoogleMapLoader,
  },
  props: {
    property: Object as PropType<PropertyShort>,
    address: Object as PropType<Address>,
    features: {
      required: true,
      type: [] as PropType<Array<Feature>>,
      default: [],
    },
  },
  methods: {
    groupFeatures(category: string): Array<Feature> {
      return this.features.filter((e: Feature) => e.featureCategoryName === category);
    },
    toggleReadMore(): void {
      this.readMore = !this.readMore;
    },
  },
});
</script>

<style scoped lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 0.5fr 1fr;
    gap: 0px 0px;
    margin: 20px 0;
    width: 95%;
    .price {
        grid-area: 1 / 1 / 2 / 2;
        .ammount {
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
        }
    }

    .navegation {
        grid-area: 2 / 1 / 3 / 2;
        height: 200px;
        align-items: center;
        justify-content: center;
        justify-self: center;
        width: 80px;
        padding: 10px 8px;
        i{
            margin: 5px 5px;
            text-align: center;
            width: 48px;
            height: 48px;
            padding: 0.6em 0.6em;
            color: #888;
            font-size: 22px;
            cursor: pointer;
        }
        i.active{
            background-color: white;
            border-radius: 60px;
            box-shadow: 0px 0px 2px #888;
        }
    }

    .location {
        grid-area: 1 / 2 / 2 / 3;
        text-align: left;
        margin-left: 20px;
        .line{
            border-bottom: 3px solid #ddd;
            text-align: center;
            width: 90%;
            display: block;
            margin: 15px auto;
        }
        p{
            font-size: 24px;
        }
        .address{
            font-weight: bold;
        }
        .city{
            font-size: 14px;
        }
    }

    .details {
        grid-area: 2 / 2 / 3 / 3;
        margin-left: 20px;
        .grid-details{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 20px;
        }
        .description{
            display: flex;
            text-align: left;
            h6{
                padding-right: 50px;;
                width: 20%;
            }
        }
    }
}
</style>
