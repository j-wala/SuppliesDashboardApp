<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} J.W. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
