<template>
  <span class="lan-switch"
    :style="{
      backgroundColor: (state ? (activeColor ? activeColor : '#FF7846') : (inactiveColor ? inactiveColor : '#686E74'))
    }"
    @click="change">
    <span class="open"
      :class="{close: !state}"></span>
  </span>
</template>

<script>
  export default{
    name: 'lan-switch',
    props: {
      switchType: {
        type: Boolean,
        required: true
      },
      activeColor: String,
      inactiveColor: String
    },
    data(){
      return {
        state: this.switchType
      }
    },
    methods: {
      change(){
        this.state = !this.state;
        this.$emit('change', this.state);
      }
    }
  }
</script>

<style src="./lan-switch.css" scoped></style>

