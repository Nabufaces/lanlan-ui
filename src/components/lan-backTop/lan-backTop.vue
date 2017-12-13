<template>
  <div :class="classes" :style="styles" @click="handleBack">
    <slot>
      <div :class="innerClasses">
        <lan-icon type="upward"></lan-icon>
      </div>
    </slot>
  </div>
</template>
<script>
  import { scrollTop } from '../../base/assist'
  import { on, off } from '../../base/dom'
  import lanIcon from "../lan-icon"

  const prefixCls = 'lan-backTop';

  export default {
    name: 'lan-backTop',
    components: {
      lanIcon
    },
    props: {
      height: {
        type: Number,
        default: 400
      },
      bottom: {
        type: Number,
        default: 30
      },
      right: {
        type: Number,
        default: 30
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        backTop: false
      };
    },
    mounted () {
      on(window, 'scroll', this.handleScroll);
      on(window, 'resize', this.handleScroll);
    },
    beforeDestroy () {
      off(window, 'scroll', this.handleScroll);
      off(window, 'resize', this.handleScroll);
    },
    computed: {
      classes () {
        return [
          prefixCls,
          {
            [`${prefixCls}-show`]: this.backTop
          }
        ];
      },
      styles () {
        return {
          bottom: `${this.bottom}px`,
          right: `${this.right}px`
        };
      },
      innerClasses () {
        return `${prefixCls}-inner`;
      }
    },
    methods: {
      handleScroll () {
        this.backTop = window.pageYOffset >= this.height;
      },
      handleBack () {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop(window, top, 0, this.duration);
        this.$emit('click');
      }
    }
  };
</script>
