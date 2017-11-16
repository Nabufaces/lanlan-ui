<template>
    <button
            class="lan-button"
            :disabled="disabled"
            :class="[
              classType?`lan-button-${classType}`:'',
              size?`lan-button-${size}`:'',
              customClass
            ]"
            @click="handleClick"
    >
        <i :class="imageIcon" v-if="imageIcon"></i>
        <slot></slot>
    </button>
</template>

<script>
  export default{
    name: 'lan-button',
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
      handleClick: function(){
        this.$emit("click");
      }
    }
  }
</script>

<style src="./lan-button.css"></style>

