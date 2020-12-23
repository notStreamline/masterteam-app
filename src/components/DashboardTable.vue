<template>
    <table class="listing-publications">
        <thead>
        <tr>
            <th>Property</th>
            <th>Stats</th>
            <th>Posted on</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody v-for="d in data" :key="d.id">
        <tr>
            <td class="flex">
                <img src="https://via.placeholder.com/100" class="mr-5"/>
                <div>
                    <p>{{ d }}</p>
                    <p>Miraflores, Miraflores, Lima</p>
                    <p>$ 15,156,148</p>
                </div>
            </td>
            <td>250 + 04</td>
            <td>
                <div>
                    <p>15 May  · 14:01 am</p>
                    <p>30 Days ago</p>
                </div>
            </td>
            <td>Active</td>
            <th>
                <a href="/dashboard/listings">Actions</a>
            </th>
        </tr>
        <tr>
             <td class="flex">
                <img src="https://via.placeholder.com/100" class="mr-5"/>
                <div>
                    <p>Av. San Felipe 1079</p>
                    <p>Miraflores, Miraflores, Lima</p>
                    <p>$ 15,156,148</p>
                </div>
            </td>
            <td>250 - 04</td>
            <td>
                <div>
                    <p>15 May  · 14:01 am</p>
                    <p>30 Days ago</p>
                </div>
            </td>
            <td>Active</td>
            <th>
                <a href="/dashboard/listings">Actions</a>
            </th>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Property from '@/models/property';

export default defineComponent({
  name: 'DashboardTable',
  data() {
    return {
      loading: true as boolean,
      data: [] as Array<Property>,
    };
  },
});
</script>

<style lang="scss">

</style>
