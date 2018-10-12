<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  export default { 
    name: 'scrape-images',
    components: { SideBar }
  }
</script>

<style>
  /* CSS */
</style>
