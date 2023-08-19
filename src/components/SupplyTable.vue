<template>
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
        <tr v-for="(item, index) in supplyData" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.bestBeforeDate }}</td>
          <td><img :src="item.photoUrl" alt="Product Photo" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {SupplyItem} from "@/data/supplyItem";
export default {
  name: 'SupplyTable',
    data() {
        return {
            supplyData: [
                new SupplyItem(
                    'Product 1',
                    'Category A',
                    '2023-08-31',
                    'https://example.com/product1.jpg'
                ),
                new SupplyItem(
                    'Product 2',
                    'Category B',
                    '2023-09-15',
                    'https://example.com/product2.jpg'
                ),
                // Add more items as needed
                ],
        };
    },
};
</script>

<style scoped>
.product-photo {
  max-width: 100px;
  max-height: 100px;
}
</style>
