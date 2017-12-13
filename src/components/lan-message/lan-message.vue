<template>
  <transition name="move-down">
    <div :class="prefixCls" v-if="visible">
      <div :class="`${prefixCls}-tips`">
        <span :class="`${prefixCls}-type ${prefixCls}-${type}`">
          <lan-icon :name="modalType"></lan-icon>
        </span>
        <span>{{message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  const map = {
    warning: 'infofill',
    success: 'roundcheckfill',
    error: 'roundclosefill'
  };

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
    computed: {
      modalType() {
        console.log(map[this.type]);
        return map[this.type]
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
      console.log(this.$props)
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
