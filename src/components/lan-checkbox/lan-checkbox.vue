<template>
  <label :class="prefixCls">
    <span :class="`${prefixCls}-wrapper`">
      <span :class="classes"></span>
      <input type="checkbox" :class="`${prefixCls}-ipt`" :checked="currentValue" @change="change" />
    </span>
    <slot>{{label}}</slot>
  </label>
</template>

<script>
  import mixin from '../../mixins/radio-check'

  export default{
    name: 'lan-checkbox',
    mixins: [mixin],
    computed: {
      prefixCls() {
        return 'lan-checkbox'
      },
      classes() {
        return [
          `${this.prefixCls}-inner`,
          {
            [`${this.prefixCls}-checked`]: this.currentValue
          }
        ]
      }
    }
  }
</script>

