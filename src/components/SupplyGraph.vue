<template>
  <div class="supply-graph">
    <!-- Display graphs or charts depicting supply trends -->
    <h2>Supplies Graph</h2>
    <div class="chart-container">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import{
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import {Bar} from "vue-chartjs";
import {SupplyItem} from "@/data/supplyItem";

const props = defineProps({
  supplies: Array<SupplyItem>
})

function generateIntFromInterval(min: number,max:number):number{
  return Math.random() * (max - min) + min;
}

const groupedItems: { [category: string]: SupplyItem[] } = props.supplies.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});

let barGraphLabels: string[] = []
let barGraphData: number[] = []
let barGraphColors: string[] = []
for(const k in groupedItems){
  barGraphLabels.push(k)
  barGraphData.push(groupedItems[k].length)
  let red = generateIntFromInterval(0,255)
  let blue = generateIntFromInterval(0,255)
  let green = generateIntFromInterval(0,255)
  barGraphColors.push(`rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`)
  //console.log(`rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`)
}

//console.log(groupedItems)

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

let data = {
  labels: barGraphLabels, //['January', 'February', 'March'],
  datasets: [{
    label: "Test Dataset",
    data: barGraphData,
    backgroundColor:barGraphColors,
  }]
}

let options = {
  responsive: true
}

</script>

<style scoped>
/* Styling for the graph component */
</style>
