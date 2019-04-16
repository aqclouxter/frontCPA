<template>
  <div id="app">
   <Categorylist></Categorylist>
  </div>
</template>

<script>
import Categorylist from './components/Categorylist.vue'
import CategoryDetail from './components/CategoryDetail.vue'
export default {
  name: 'app',
  components: {
    Categorylist,
    CategoryDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
