<template>
    <button :class="classes" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
  const prefixCls = 'lan-button';

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
    computed: {
      classes() {
        return [
          prefixCls,
          `${prefixCls}-${this.classType}`,
          `${prefixCls}-${this.size}`,
          this.customClass
        ]
      }
    },
    methods: {
      handleClick: function(){
        this.$emit("click");
      }
    }
  }
</script>

