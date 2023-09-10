<template>
<h2>Supplies</h2>
  <div class="supply-table">
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Best Before</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.supplies" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.getFormattedDate() }}</td>
          <td><img :src="item.photoUrl" alt="Product Photo" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {SupplyItem} from "@/data/supplyItem";
const props = defineProps({
  supplies: Array<SupplyItem>
})

// TODO: Add column sorting

</script>

<style scoped>
.supply-table {
align-self: center;

}
.product-photo {
  max-width: 100px;
  max-height: 100px;
}

</style>
