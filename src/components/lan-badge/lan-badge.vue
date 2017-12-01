<template>
  <span :class="classes">
      <slot></slot>
      <sup :class="badgeClass">{{ finalCount }}</sup>
  </span>
</template>
<script>
  const prefixCls = 'lan-badge';

  export default {
    name: 'lan-badge',
    props: {
      count: [Number, String],
      dot: {
        type: Boolean,
        default: false
      },
      overflowCount: {
        type: [Number, String],
        default: 999
      },
      customClass: String
    },
    computed: {
      classes () {
        return `${prefixCls}`
      },
      badgeClass() {
        return {
          [`${prefixCls}-count`]: !this.dot,
          [`${prefixCls}-dot`]: !!this.dot,
          [`${this.customClass}`]: this.customClass
        }
      },
      finalCount () {
        return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count;
      }
    }
  };
</script>
