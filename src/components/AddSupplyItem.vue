<template>
  <div class="add-supply-form">
    <button @click="toggleForm" class="toggle-button">
      {{ isFormVisible ? 'Hide Form' : 'Add Supply' }}
    </button>
    <form v-if="isFormVisible" @submit.prevent="addSupply">
      <label for="name">Name: </label>
      <input v-model="newSupply.name" type="text" id="name" required /> <br>

      <label for="category">Category: </label>
      <input v-model="newSupply.category" type="text" id="category" required /> <br>

      <label for="bestBeforeDate">Best Before Date: </label>
      <input v-model="newSupply.bestBeforeDate" type="date" id="bestBeforeDate" required /> <br>

      <label for="photoUrl">Photo URL: </label>
      <!--<input v-model="newSupply.photoUrl" type="url" id="photoUrl" /><br>-->
      <input v-model="newSupply.photoUrl" type="text" id="photoUrl" /> <br>

      <button type="submit">Add Supply</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import {SupplyItem} from "@/data/supplyItem";

const emit = defineEmits(["add"])
const isFormVisible = ref(false);
const newSupply = ref(new SupplyItem());
console.log(newSupply.value)
const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

const addSupply = () => {
  // Emit an event with the new supply data to the parent component
  let  supplyToAdd = new SupplyItem(newSupply.value.name, newSupply.value.category, new Date(newSupply.value.bestBeforeDate), newSupply.value.photoUrl)
  emit('add', supplyToAdd);

  // Clear the form and hide it
  newSupply.value = {
    name: '',
    category: '',
    bestBeforeDate: '',
    photoUrl: '',
  };
  // isFormVisible.value = false;
};
</script>

<style scoped>
/* AddSupplyForm styling */
.toggle-button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.add-supply-form {
  margin-top: 20px;
}
</style>
