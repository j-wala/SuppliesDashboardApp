<template>
  <div class="dashboard">
    <SupplyOverview :supplies="supplies"/>
    <SupplyGraph :supplies="supplies"/>
    <SupplyTable :supplies="supplies"/>
  </div>
  <div class="dashboard-right">
        <AddSupplyItem @add="handleAddSupply" />
    </div>
</template>

<script setup lang="ts">
import SupplyOverview from './SupplyOverview.vue';
import SupplyGraph from './SupplyGraph.vue';
import SupplyTable from './SupplyTable.vue';
import AddSupplyItem from "@/components/AddSupplyItem.vue";
import {SupplyItem} from "@/data/supplyItem";
import {ref} from "vue";

const supplies = ref([
  new SupplyItem("Product_1", "Cat A", new Date(), "asdf"),
  new SupplyItem("Product_2", "Cat A", new Date(), "asdf"),
  new SupplyItem("Product_3", "Cat B", new Date(), "asdf"),
  new SupplyItem("Product_4", "Cat B", new Date(), "asdf"),
  new SupplyItem("Product_5", "Cat C", new Date(), "asdf"),
  ])

function handleAddSupply(newSupply){
  supplies.value.push(newSupply)
}

</script>

<style>
/* Dashboard styling */
.dashboard {
  display: grid;
}
.dashboard-right{
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the right */
  width: 40%; /* Adjust the width as needed */
  padding-right: 20px;
}
</style>
