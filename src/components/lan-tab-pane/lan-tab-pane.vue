<template>
  <li :class="classes" @click="handleChange">
    <slot></slot>
  </li>
</template>
<script>
  import { findComponentUpward } from '../../base/assist'

  const prefixCls = 'lan-tabs';

  export default {
    name: 'lan-tab-pane',
    props: {
      label: [String, Number],
      required: true
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-active`]: this.active
          }
        ]
      }
    },
    methods: {
      handleChange() {
        findComponentUpward(this, 'lan-tabs').handleChange(this.label)
      }
    }
  };
</script>
