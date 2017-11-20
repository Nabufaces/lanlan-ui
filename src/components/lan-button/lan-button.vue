<template>
    <button
            class="lan-button"
            :disabled="disabled"
            :class="[
              classType?`lan-button-${classType}`:'',
              size?`lan-button-${size}`:'',
              customClass
            ]"
            @click="handleClick">
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
      customClass: String
    },
    methods: {
      handleClick: function(){
        this.$emit("click");
      }
    }
  }
</script>

