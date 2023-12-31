<template>
  <div class="supply-overview">
    <!-- Display summary data like total supplies, pending orders, etc. -->
    <h2>Overview</h2>
    <!--{{ supplies }}-->
    <div>
      <h3>Expired Products</h3>
      <table>
        <thead>
          <tr>
            <th @click="sortExpiredBy('name')">Product Name</th>
            <th @click="sortExpiredBy('bestBeforeDate')">Best Before Date</th>
            <th @click="sortExpiredBy('category')">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortedExpiredItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.bestBeforeDate.toDateString() }}</td>
            <td>{{ item.category }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Soon-to-Expire Products</h3>
      <table>
        <thead>
          <tr>
            <th @click="sortSoonToExpireBy('name')">Product Name</th>
            <th @click="sortSoonToExpireBy('bestBeforeDate')">Best Before Date</th>
            <th @click="sortSoonToExpireBy('category')">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortedSoonToExpireItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.bestBeforeDate.toDateString() }}</td>
            <td>{{ item.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { SupplyItem } from '@/data/supplyItem'

const props = defineProps({
  supplies: Array<SupplyItem>
})

const expiredItems = computed(() => {
  const now = new Date()
  return props.supplies.filter((item) => new Date(item.bestBeforeDate) < now)
})

const soonToExpireItems = computed(() => {
  const now = new Date()
  const twoWeeksLater = new Date()
  twoWeeksLater.setDate(now.getDate() + 14)
  return props.supplies.filter(
    (item) => new Date(item.bestBeforeDate) > now && new Date(item.bestBeforeDate) <= twoWeeksLater
  )
})

console.log('ExpiredItems:')
console.log(expiredItems.value)

const sortedExpiredItems = ref<SupplyItem[]>([])
const sortedSoonToExpireItems = ref<SupplyItem[]>([])

const sortExpiredBy = (key: keyof SupplyItem) => {
  sortedExpiredItems.value = [...expiredItems.value].sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  )
}

const sortSoonToExpireBy = (key: keyof SupplyItem) => {
  sortedSoonToExpireItems.value = [...soonToExpireItems.value].sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  )
}

// Initialize the sorted tables when the component is mounted
onMounted(() => {
  sortExpiredBy('name')
  sortSoonToExpireBy('name')
})

</script>

<style scoped>
/* Styling for the overview component */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

</style>
