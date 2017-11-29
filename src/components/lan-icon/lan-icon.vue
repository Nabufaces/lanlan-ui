<template>
  <i :class="classes"></i>
</template>
<script>

  export default {
    name: 'lan-icon',
    props: {
      name: {
        type: String,
        required: true
      },
      customClass: String
    },
    computed: {
      classes() {
        return [
          'iconfont',
          `icon-${this.name}`,
          {
            [`${this.customClass}`]: this.customClass
          }
        ]
      }
    }
  };
</script>
