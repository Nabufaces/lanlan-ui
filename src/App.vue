<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
  import index from './components/index'

  export default {
    name: 'app',
    components: {
      index
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
