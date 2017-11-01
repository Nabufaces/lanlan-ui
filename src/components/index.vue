<template>
  <div class="mn">
    <div class="btn-group">
      <lan-btn>北京</lan-btn>
      <lan-btn classType="primary" size="large">上海</lan-btn>
      <lan-btn size="small" :disabled="true">杭州</lan-btn>
    </div>
  </div>
</template>

<script>
  import lanBtn from './lan-btn'
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
    components: {
      lanBtn
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-group {
    display: inline-block;
  }
</style>
