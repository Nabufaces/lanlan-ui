<template>
    <button
            class="t-btn"
            :disabled="disabled"
            :class="[
              classType?`t-btn-${classType}`:'',
              size?`t-btn-${size}`:'',
              customClass
            ]"
            @click="handleClick"
    >
        <i :class="imageIcon" v-if="imageIcon"></i><slot></slot>
    </button>
</template>

<script>
  export default{
    name: 'lan-btn',
    props: {
      classType: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      disabled: Boolean,
      customClass: String,
      imageIcon: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleClick: function(event){
        this.$emit("click", event);
      }
    }
  }
</script>

<style scoped>
  .t-btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    text-align: center;
    border-radius: 4px;
  }
  .t-btn:hover {
    color: #696969;
    border-color: #eee;
    background-color: #eee;
  }
  .t-btn-tiny{
    padding: 6px;
    font-size: 10px;
  }
  .t-btn-small{
    padding: 8px;
    font-size: 12px;
  }
  .t-btn-normal {
    padding: 10px;
    font-size: 14px;
  }
  .t-btn-large{
    padding: 12px;
    font-size: 16px;
  }
  .t-btn-default {
    border: 1px solid #d8dce5;
    color: #696969;
    background-color: #F8F8F8;
  }
  .t-btn-primary {
    border: 1px solid #409eff;
    color: #fff;
    background-color: #409eff;
  }
  .t-btn-success {
    border: 1px solid #67c23a;
    color: #fff;
    background-color: #67c23a;
  }
  .t-btn-warning {
    border: 1px solid #eb9e05;
    color: #fff;
    background-color: #eb9e05;
  }
  .t-btn-danger {
    border: 1px solid #fa5555;
    color: #fff;
    background-color: #fa5555;
  }
  .t-btn-info {
    border: 1px solid #878d99;
    color: #696969;
    background-color: #878d99;
  }
  .t-btn:disabled{
    color: #c0ccda;
    background-color: #eff2f7;
    cursor: not-allowed;
  }
</style>

