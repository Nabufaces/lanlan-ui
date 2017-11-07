<template>
  <div class="mn">
    <label class="title">Button</label>
    <div class="group">
      <lan-btn size="tiny" classType="default">tiny default</lan-btn>
      <lan-btn size="small" classType="primary">small primary</lan-btn>
      <lan-btn size="normal" classType="success">normal success</lan-btn>
      <lan-btn size="normal" classType="warning">normal warning</lan-btn>
      <lan-btn :disabled="true">disabled</lan-btn>
      <lan-btn size="large" classType="info">large info</lan-btn>
    </div>
    <label class="title">Switch</label>
    <div class="group">
      <lan-switch :switchType="true"></lan-switch>
      <lan-switch :switchType="false"></lan-switch>
      <lan-switch :switchType="true" activeColor="#0EDE00"></lan-switch>
    </div>
  </div>
</template>

<script>
  import lanBtn from './lan-btn/lan-btn'
  import lanSwitch from './lan-switch/lan-switch'
  export default {
    data () {
      return {

      }
    },
    components: {
      lanBtn,
      lanSwitch
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label.title{
    font-size: 40px;
    display: block;
    margin: 20px auto;
  }
  .group {
    display: inline-block;
  }
</style>
