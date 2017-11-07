<template>
  <div class="mn">

    <label class="title">Button</label>
    <div class="group">
      <lan-btn size="tiny" classType="default">tiny default</lan-btn>&nbsp;
      <lan-btn size="small" classType="primary">small primary</lan-btn>&nbsp;
      <lan-btn size="normal" classType="success">normal success</lan-btn>&nbsp;
      <lan-btn size="normal" classType="warning">normal warning</lan-btn>&nbsp;
      <lan-btn size="normal" classType="danger">normal danger</lan-btn>&nbsp;
      <lan-btn :disabled="true">disabled</lan-btn>&nbsp;
      <lan-btn size="normal" classType="warning" :disabled="true">disabled</lan-btn>&nbsp;
      <lan-btn size="large" classType="info">large info</lan-btn>
    </div>

    <label class="title">Switch</label>
    <div class="group">
      <lan-switch :switchType="true"></lan-switch>&nbsp;
      <lan-switch :switchType="false"></lan-switch>&nbsp;
      <lan-switch :switchType="true" activeColor="#0EDE00"></lan-switch>&nbsp;
      <lan-switch :switchType="false" inactiveColor="#FF4949"></lan-switch>&nbsp;
      <lan-switch :switchType="true" onText="开" offText="关"></lan-switch>&nbsp;
      <lan-switch :switchType="false" offText="关"></lan-switch>
    </div>

    <label class="title">Input</label>
    <div class="group">
      <lan-input customClass="ipt-wd"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容" prefixIcon="search"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容" suffixIcon="less"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容">
        <template slot="prepend">
          <span>Http://</span>
        </template>
        <template slot="append">
          <i class="iconfont icon-search"></i>
        </template>
      </lan-input>
    </div>

    <label class="title">Select</label>
    <div class="group">
      <!--<lan-select></lan-select>-->
    </div>
  </div>
</template>

<script>
  import lanBtn from './lan-btn/lan-btn'
  import lanSwitch from './lan-switch/lan-switch'
  import lanInput from './lan-input/lan-input'
  import lanSelect from './lan-select/lan-select'

  export default {
    data () {
      return {

      }
    },
    components: {
      lanBtn,
      lanSwitch,
      lanInput,
      lanSelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  label.title{
    font-size: 40px;
    display: block;
    margin: 20px auto;
  }
  .group {
    display: flex;
    flex-wrap: wrap;
  }
  .ipt-wd {
    width: 500px;
  }
</style>
