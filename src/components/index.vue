<template>
  <div class="mn">
    <label class="title">Button</label><br>
    <div class="btn-group">
      <lan-btn size="tiny" classType="default">tiny default</lan-btn>
      <lan-btn size="small" classType="primary">small primary</lan-btn>
      <lan-btn size="normal" classType="success">normal success</lan-btn>
      <lan-btn size="normal" classType="warning">normal warning</lan-btn>
      <lan-btn :disabled="true">disabled</lan-btn>
      <lan-btn size="large" classType="info">large info</lan-btn>
    </div>
  </div>
</template>

<script>
  import lanBtn from './lan-btn/lan-btn'
  export default {
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
  label.title{
    font-size: 40px;
  }
  .btn-group {
    display: inline-block;
  }
</style>
