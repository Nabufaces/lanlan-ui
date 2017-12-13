<template>
  <transition name="move-down">
    <div :class="prefixCls" v-if="visible">
      <div :class="`${prefixCls}-tips`">
        <img :src="modalType" :class="`${prefixCls}-type`"/>
        <span>{{message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>

  export default{
    name: 'lan-message',
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
    computed: {
      modalType() {
        return {
          'warning': 'http://oss.lanlanlife.com/086045ea36307bb9fb61ba63568c53dd_28x28.png',
          'success': 'http://oss3.lanlanlife.com/e5f860df2f8459bbd9eeb538ada77f8e_28x28.png',
          'error': 'http://oss3.lanlanlife.com/6db96f5a0b46bec560383c752d895bc7_28x28.png'
        }[this.type]
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
