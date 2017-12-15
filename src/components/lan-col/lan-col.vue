<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentUpward } from '../../base/assist'

  const prefixCls = 'lan-col';

  export default {
    name: 'lan-col',
    props: {
      span: [Number, String],
      offset: [Number, String],
      push: [Number, String],
      pull: [Number, String],
      order: [Number, String],
      customClass: String
    },
    data () {
      return {
        gutter: 0
      };
    },
    computed: {
      classes () {
        return [
          prefixCls,
          {
            [`${prefixCls}-span-${this.span}`]: this.span,
            [`${prefixCls}-offset-${this.offset}`]: this.offset,
            [`${prefixCls}-push-${this.push}`]: this.push,
            [`${prefixCls}-pull-${this.pull}`]: this.pull,
            [`${prefixCls}-order-${this.order}`]: this.order,
            [`${this.customClass}`]: !!this.customClass
          }
        ];
      },
      styles () {
        let style = {};
        if (this.gutter !== 0) {
          style = {
            paddingLeft: this.gutter / 2 + 'px',
            paddingRight: this.gutter / 2 + 'px'
          };
        }
        return style;
      }
    },
    methods: {
      updateGutter () {
        const Row = findComponentUpward(this, 'lan-row');
        if (Row) {
          Row.updateGutter(Row.gutter);
        }
      }
    },
    mounted () {
      this.updateGutter();
    },
    beforeDestroy () {
      this.updateGutter();
    }
  };
</script>
