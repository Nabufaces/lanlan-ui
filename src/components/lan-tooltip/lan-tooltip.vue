<template>
  <div :class="`${prefixCls}`" 
       @mouseenter="handleShowPopper"
       @mouseleave="handleClosePopper">
     <div :class="`${prefixCls}-rel`" ref="reference">
        <slot></slot>
     </div>

    <transition name="fade">
      <div
        :class="[`${prefixCls}-popper`, effect]"
        :style="{maxWidth: `${width}px`}"
        ref="popper"
        v-show="visible"
        @mouseenter="handleShowPopper"
        @mouseleave="handleClosePopper">
        <div :class="[`${prefixCls}-inner`, effect]">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Popper from '../../base/vue-popper'

  export default {
    name: 'lan-tooltip',

    mixins: [Popper],

    props: {
      placement: {
        type: String,
        default: 'top'
      },
      content: {
        type: [String, Number],
        default: ''
      },
      delay: {
        type: Number,
        default: 100
      },
      effect: {
        type: String,
        default: 'dark'
      },
      width: Number
    },
    data () {
      return {
        prefixCls: 'lan-tooltip'
      };
    },
    watch: {
      content () {
        this.updatePopper();
      }
    },
    methods: {
      handleShowPopper() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.delay);
      },
      handleClosePopper() {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.visible = false;
          }, this.delay);
        }
      }
    },
    mounted () {
      this.updatePopper();
    }
  };
</script>

