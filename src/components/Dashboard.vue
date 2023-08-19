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

export default defineComponent({
  name: 'Dashboard',
  components: {
    SupplyOverview,
    SupplyGraph,
    SupplyTable,
  },
});
</script>

<style>
/* Dashboard styling */
</style>
