<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '../../base/assist';

  const prefixCls = 'lan-row';

  export default {
    name: 'lan-row',
    props: {
      type: {
        validator (value) {
          return ['flex'].indexOf(value) > -1
        }
      },
      align: {
        validator (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) > -1
        }
      },
      justify: {
        validator (value) {
          return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) > -1
        }
      },
      gutter: {
        type: Number,
        default: 0
      },
      customClass: String
    },
    computed: {
      classes () {
        return [
          {
            [`${prefixCls}`]: !this.type,
            [`${prefixCls}-${this.type}`]: this.type,
            [`${prefixCls}-${this.type}-${this.align}`]: this.align,
            [`${prefixCls}-${this.type}-${this.justify}`]: this.justify,
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
