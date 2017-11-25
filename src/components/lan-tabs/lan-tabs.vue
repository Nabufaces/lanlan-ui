<template>
  <ul :class="prefixCls">
    <slot></slot>
  </ul>
</template>
<script>
  import { findComponentsDownward } from '../../base/assist'

  export default {
    name: 'lan-tabs',
    props: {
      activeLabel: {
        type: [String, Number],
        required: true
      }
    },
    data () {
      return {
        prefixCls: 'lan-tabs',
        label: this.activeLabel
      };
    },
    mounted() {
      this.handleUpdate();
    },
    methods: {
      handleUpdate() {
        const panes = findComponentsDownward(this, 'lan-tab-pane');
        panes.forEach((item) => {
          if(this.label === item.label) {
            item.active = true;
          } else {
            item.active = false;
          }
        })
      },
      handleChange(label) {
        this.label = label;
        this.handleUpdate();
        this.$emit('change', label);
      }
    }
  };
</script>
