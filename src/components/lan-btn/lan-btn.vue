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

