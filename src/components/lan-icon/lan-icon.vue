<template>
  <i :class="classes"></i>
</template>
<script>

  export default {
    name: 'lan-icon',
    props: {
      type: {
        type: String,
        required: true
      },
      customClass: String
    },
    computed: {
      classes() {
        return [
          'iconfont',
          `icon-${this.type}`,
          {
            [`${this.customClass}`]: this.customClass
          }
        ]
      }
    }
  };
</script>
