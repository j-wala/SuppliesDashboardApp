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
