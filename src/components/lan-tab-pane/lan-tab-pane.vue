<template>
  <li :class="[
          `${prefixCls}-item`,
          active ? 'active' : ''
        ]"
      @click="handleChange">
    <slot></slot>
  </li>
</template>
<script>
  import { findComponentUpward } from '../../base/assist'

  export default {
    name: 'lan-tab-pane',
    props: {
      label: [String, Number],
      required: true
    },
    data () {
      return {
        prefixCls: 'lan-tabs',
        active: false
      };
    },
    methods: {
      handleChange() {
        findComponentUpward(this, 'lan-tabs').handleChange(this.label)
      }
    }
  };
</script>
