<template>

  <div class="dashboard-left">
    <SupplyOverview :supplies="supplies" />
    <SupplyTable :supplies="supplies" />
  </div>
  
  <div class="dashboard-middle">
    <SupplyGraph :supplies="supplies" />
  </div>
  
  <div class="dashboard-right">
    <AddSupplyItem @add="handleAddSupply" />
  </div>
  
</template>

<script setup lang="ts">
import SupplyOverview from './SupplyOverview.vue'
import SupplyGraph from './SupplyGraph.vue'
import SupplyTable from './SupplyTable.vue'
import AddSupplyItem from '@/components/AddSupplyItem.vue'
import { SupplyItem } from '@/data/supplyItem'
import { ref } from 'vue'

const supplies = ref([
  new SupplyItem('Product_1', 'Cat A', new Date('2023-08-18'), 'https://icon-library.com/images/pixel-icon-tumblr/pixel-icon-tumblr-20.jpg'),
  new SupplyItem('Product_2', 'Cat A', new Date('2023-09-10'), 'https://icon-library.com/images/pixel-icon-tumblr/pixel-icon-tumblr-20.jpg'),
  new SupplyItem('Product_3', 'Cat B', new Date('2023-09-12'), 'asdf'),
  new SupplyItem('Product_4', 'Cat B', new Date('2023-09-13'), 'asdf'),
  new SupplyItem('Product_5', 'Cat C', new Date('2023-12-24'), 'asdf')
])

function handleAddSupply(newSupply) {
  supplies.value.push(newSupply)
}
</script>

<style>
/* Dashboard styling */

.dashboard-left {
  width: 40%;
}

.dashboard-middle {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Adjust the width as needed */
  /* padding-right: 20px; */
}

.dashboard-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the right */
  width: 10%; /* Adjust the width as needed */
  padding-right: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 10px;
  text-align: center;
}
</style>
