<template>
  <div class="dashboard">
    <SupplyOverview />
    <SupplyGraph />
    <SupplyTable :supplyData="supplyData" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SupplyOverview from './SupplyOverview.vue';
import SupplyGraph from './SupplyGraph.vue';
import SupplyTable from './SupplyTable.vue';
import {SupplyItem} from "@/data/supplyItem"; // Adjust the import path

export default defineComponent({
  name: 'Dashboard',
  components: {
    SupplyOverview,
    SupplyGraph,
    SupplyTable,
  },
  data() {
    return {
      supplyData: [
        new SupplyItem(
          'Product 1',
          'Category A',
          new Date('2023-08-31'),
          'https://example.com/product1.jpg'
        ),
        new SupplyItem(
          'Product 2',
          'Category B',
          new Date('2023-09-15'),
          'https://example.com/product2.jpg'
        ),
        // Add more items as needed
      ],
    };
  },
});
</script>

<style>
/* Dashboard styling */
</style>
