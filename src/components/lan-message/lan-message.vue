<template>
  <transition name="move-down">
    <div class="lan-message" v-if="visible">
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
    methods: {
      addProps(props) {
        this.clearCloseTimer();
        this.type = props.type;
        this.duration = props.duration;
        this.message = props.message;
        this.visible = true;
        this.closeTimer = setTimeout(() => {
          this.visible = false;
        }, this.duration);
      }
    }
  }
</script>
