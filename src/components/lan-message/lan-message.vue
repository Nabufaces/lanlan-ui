<template>
  <transition name="move-down">
    <div :class="prefixCls" v-if="visible">
      <div :class="`${prefixCls}-tips`">
        <img :src="modalType[type]" :class="`${prefixCls}-tips-iconImg`"/>
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
        visible: false,
        modalType: {
          warning : 'http://oss1.lanlanlife.com/f1af2aa2ed6c34fcc46d9f380f176f16_48x48.png',
          error : 'http://oss3.lanlanlife.com/61dc954ee3a65d4679c1e2622e6a3205_48x48.png',
          success : 'http://oss1.lanlanlife.com/9300bd45cfb8ec9655257285fd0e0330_48x48.png'
        }
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
