<template>
    <div class="grid-container">
        <div class="price">
            <p class="ammount">
                <span>$</span>
                {{ property.price }}
            </p>
        </div>
        <div class="location">
            <p class="locate">
                <span class="address">{{ location.id}}, </span>
                <span class="district">{{ location.name}}</span><br/>
                <span class="city">
                    <!-- Loop around info -->
                </span>
            </p>
            <div class="line"/>
        </div>
        <div class="navegation">
            Circulo
        </div>
        <div class="details">
            <div class="grid-details">
                <div>Bedrooms</div>
                <div>Bathrooms</div>
                <div>Area</div>
                <div>Creacion</div>
                <div>Garage</div>
                <div>Something</div>
            </div>
            <div class="description">
                <h6>Descripcion</h6>
                <p>
                    {{ property.description }}
                    <a>Leer Mas</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PropertyShort, { Location } from '@/models/property';

export default defineComponent({
  name: 'PropetySingleDetails',
  props: {
    property: Object as PropType<PropertyShort>,
    location: Object as PropType<Location>,
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
    }

    .location {
        grid-area: 1 / 2 / 2 / 3;
        text-align: left;
        line-height: 1rem;
        margin-left: 20px;
        .line{
            border-bottom: 3px solid #ddd;
            margin-bottom: 12px;
            text-align: center;
            width: 90%;
            display: block;
            margin-top: 30px;
            margin-left: auto;
            margin-right: auto;
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
