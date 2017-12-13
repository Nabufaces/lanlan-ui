<template>
  <transition name="move-down">
    <div :class="prefixCls" v-if="visible">
      <div :class="`${prefixCls}-tips`">
        <span :class="`${prefixCls}-type ${prefixCls}-${type}`">
          <lan-icon type="roundclosefill" v-if="type == 'error'"></lan-icon>
          <lan-icon type="roundcheckfill" v-else-if="type == 'success'"></lan-icon>
          <lan-icon type="infofill" v-else></lan-icon>
        </span>
        <span>{{message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>

  import lanIcon from '../lan-icon'

  export default{
    name: 'lan-message',
    components: {
      lanIcon
    },
    props: {
      type: String,
      message: String,
      duration: Number
    },
    data() {
      return {
        prefixCls: 'lan-message',
        visible: false
      }
    },
    methods: {
      clearCloseTimer() {
        if (this.closeTimer) {
          clearTimeout(this.closeTimer);
          this.closeTimer = null;
        }
      }
    },
    mounted() {
      this.clearCloseTimer();
      this.visible = true;
      this.closeTimer = setTimeout(() => {
        this.visible = false;
      }, this.duration);
    },
    beforeDestroy () {
      this.clearCloseTimer();
    }
  }
</script>
