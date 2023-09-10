<template>
  <div class="supply-graph">
    <!-- Display graphs or charts depicting supply trends -->
    <h2>Supplies Graph</h2>
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { SupplyItem } from '@/data/supplyItem'
import {computed} from "vue";

const props = defineProps({
  supplies: Array<SupplyItem>
})

let barGraphLabels: string[] = []
let barGraphData: number[] = []
let barGraphColors: string[] = []
let chartData = computed(() => {
  return updateChart()
})
let chartOptions = {
  responsive: true
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function generateIntFromInterval(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function updateChart() {
  const groupedItems: { [category: string]: SupplyItem[] } = props.supplies.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  console.log(groupedItems)

  // Clear Bargraph data and labels to generate again
  barGraphLabels = []
  barGraphData = []

  for (const k in groupedItems) {
    barGraphLabels.push(k)
    barGraphData.push(groupedItems[k].length)
    let red = generateIntFromInterval(0, 255)
    let blue = generateIntFromInterval(0, 255)
    let green = generateIntFromInterval(0, 255)
    barGraphColors.push(`rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`)
  }
  return {
    labels: barGraphLabels,
    datasets: [
      {
        label: 'Test Dataset',
        data: barGraphData,
        backgroundColor: barGraphColors
      }
    ]
  }
}

// TODO: Fix that data is getting appended instead of replaced...
</script>

<style scoped>
/* Styling for the graph component */
</style>
