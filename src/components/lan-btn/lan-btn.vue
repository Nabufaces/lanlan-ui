<template>
    <button
            class="lan-btn"
            :disabled="disabled"
            :class="[
              classType?`lan-btn-${classType}`:'',
              size?`lan-btn-${size}`:'',
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
      handleClick: function(){
        this.$emit("click");
      }
    }
  }
</script>

<style src="./lan-btn.css" scoped></style>

