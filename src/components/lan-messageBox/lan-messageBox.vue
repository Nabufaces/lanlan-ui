<template>
  <transition name="fade">
    <div class="lan-messageBox" v-show="visible" @click.self="handleCloseWindow">
      <div class="modal">
        <div class="m-hd">
          <img :src="modalType[type]" class="iconImg"/>
          <span class="title">{{title}}</span>
        </div>
        <div class="m-cnt"><span>{{message}}</span></div>
        <div class="m-ft">
          <lan-button size="small" classType="warning" @click="handleConfirm">确定</lan-button>&nbsp;
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import lanButton from '../lan-button/lan-button'
  import modalTyle from '../../mixins/modalType'

  export default{
    name: 'lan-messageBox',
    mixins: [modalTyle],
    props: {
      visible: {
        type: Boolean,
        require: true
      },
      title: [String, Number],
      closeWindow: {
        type: Boolean,
        default: true
      }
    },
    components: {
      lanButton
    },
    methods: {
      handleCloseWindow(){
        if(!this.closeWindow){
          return;
        }
        this.handleConfirm();
      },
      handleConfirm(){
        this.$emit('confirm');
      }
    }
  }
</script>

<style src="./lan-messageBox.css" scoped></style>

