<template>
  <div id="app">
    <Header />
    <main class="app-content">
      <Dashboard />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Dashboard from './components/Dashboard.vue';
import Footer from './components/Footer.vue';
import {SupplyItem} from '@/data/supplyItem'

const funny = "asdf";
console.log(funny)
/*import { SupplyItem } from '@/data/supplyItem'
import ref from 'vue'

const test_data = ref([
  new SupplyItem('Product_1', 'Cat A', new Date('2023-08-18'), 'https://icon-library.com/images/pixel-icon-tumblr/pixel-icon-tumblr-20.jpg'),
  new SupplyItem('Product_2', 'Cat A', new Date('2023-09-10'), 'https://icon-library.com/images/pixel-icon-tumblr/pixel-icon-tumblr-20.jpg'),
  new SupplyItem('Product_3', 'Cat B', new Date('2023-09-12'), 'asdf'),
  new SupplyItem('Product_4', 'Cat B', new Date('2023-09-13'), 'asdf'),
  new SupplyItem('Product_5', 'Cat C', new Date('2023-12-24'), 'asdf')
])

console.log(test_data)*/

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}

.app-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
