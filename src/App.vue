<template>
  <div id="app">
    <Header />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
//import Header from './components/Header.vue';
import Dashboard from './components/Dashboard.vue';
//import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    //Header,
    Dashboard,
    //Footer,
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>