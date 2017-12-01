<template>
  <transition name="fade">
    <div class="lan-loadingBar" :style="styles" v-show="visible"></div>
  </transition>
</template>
<script>

  export default {
    name: 'lan-loadingBar',
    props: {
      color: String,
      failColor: String,
      height: Number
    },
    data () {
      return {
        percent: 0,
        status: 'success',
        visible: false
      };
    },
    computed: {
      styles () {
        const color = this.status === 'error' ? this.failColor : this.color;

        return {
          width: `${this.percent}%`,
          height: `${this.height}px`,
          backgroundColor: `${color}`
        }
      }
    }
  };
</script>
