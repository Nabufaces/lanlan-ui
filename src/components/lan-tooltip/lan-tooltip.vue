<template>
  <div class="lan-tooltip"
       ref="reference"
       @mouseenter="handleShowPopper"
       @mouseleave="handleHidePopper">
    <slot></slot>

    <transition name="fade">
      <div class="lan-tooltip-popper"
           :class="[effect, customClass]"
           ref="popper"
           v-show="!disabled && showPopper"
           :style="{ width: width + 'px' }"
      >
        <slot name="content">
          <span>{{content}}</span>
        </slot>
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
      delay:{
        type: Number,
        default: 100
      },
      disabled: Boolean,
      content: String,
      effect: {
        type: String,
        default: 'dark'
      },
      width: Number,
      customClass: String,
      visibleArrow: {
        default: true
      }
    },

    methods: {

      handleShowPopper() {
        this.timeout = setTimeout(() => {
          this.removeOnDestroy = true;
          this.createPopper();
          this.showPopper = true;
        }, this.delay)
      },

      handleHidePopper() {
        clearTimeout(this.timeout);
        this.destroyPopper();
        this.showPopper = false;
      }
    }
  };
</script>
