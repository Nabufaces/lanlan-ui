<template>
  <div class="lan-carousel-item" :style="styles">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'lan-carousel-item',
    data () {
      return {
        width: 0,
        height: 'auto',
        left: 0
      };
    },
    computed: {
      styles () {
        return {
          width: `${this.width}px`,
          height: `${this.height}`,
          left: `${this.left}px`
        };
      }
    },
    mounted () {
      this.$parent.slotChange();
    },
    watch: {
      width (val) {
        if (val && this.$parent.loop) {
          this.$nextTick(() => {
            this.$parent.initCopyTrackDom();
          });
        }
      }
    },
    beforeDestroy () {
      this.$parent.slotChange();
    }
  };
</script>
