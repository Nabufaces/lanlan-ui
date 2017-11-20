<template>
  <transition name="move-down">
    <div class="lan-message" v-show="visible">
      <div class="tips">
        <img :src="modalType[type]" class="iconImg"/>
        <span>{{message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  import message from '../../mixins/message'

  export default{
    name: 'lan-message',
    mixins: [message],
    props: {
      duration: {
        type: Number,
        default: 3000
      }
    },
    data(){
      return {
        visible: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.visible = false;
        //不延迟抛出消失动画无法展示
        setTimeout(() => {
          this.$emit('close');
        }, 500);
      }, this.duration)
    }
  }
</script>
