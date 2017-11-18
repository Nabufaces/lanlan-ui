<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '../../base/assist';

  export default {
    name: 'lan-row',
    props: {
      gutter: {
        type: Number,
        default: 0
      },
      customClass: String
    },
    computed: {
      classes () {
        return [
          'lan-row',
          {
            [`${this.customClass}`]: !!this.customClass
          }
        ];
      },
      styles () {
        let style = {};
        if (this.gutter !== 0) {
          style = {
            marginLeft: this.gutter / -2 + 'px',
            marginRight: this.gutter / -2 + 'px'
          };
        }
        return style;
      }
    },
    methods: {
      updateGutter (val) {
        const Cols = findComponentsDownward(this, 'lan-col');
        if (Cols.length) {
          Cols.forEach((child) => {
            if (val !== 0) {
              child.gutter = val;
            }
          });
        }
      }
    },
    watch: {
      gutter (val) {
        this.updateGutter(val);
      }
    }
  };
</script>
