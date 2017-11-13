<template>
  <div class="lan-message" v-if="showFlag">
    <div class="modal-mask" v-if="isModal" @click.self="handleCloseWindow">
        <div class="modal">
          <div class="m-hd">
            <img :src="modalType[type]" class="iconImg"/>
            <span class="title">{{title}}</span>
          </div>
          <div class="m-cnt"><span>{{message}}</span></div>
          <div class="m-ft">
            <lan-btn size="small" classType="warning" @click="handleConfirm">确定</lan-btn>&nbsp;
          </div>
        </div>
    </div>
    <div class="tips updown-enter-active" v-else>
      <img :src="modalType[type]" class="iconImg"/>
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
  import lanBtn from '../lan-btn/lan-btn';

  export default{
    name: 'lan-message',
    props: {
      showMessage: {
        type: Boolean,
        require: true
      },
      isModal: {
        type: Boolean,
        require: true
      },
      type: {
        type: String
      },
      title: [String, Number],
      message: String,
      closeWindow: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        modalType: {
          warning : 'http://oss1.lanlanlife.com/f1af2aa2ed6c34fcc46d9f380f176f16_48x48.png',
          error : 'http://oss3.lanlanlife.com/61dc954ee3a65d4679c1e2622e6a3205_48x48.png',
          success : 'http://oss1.lanlanlife.com/9300bd45cfb8ec9655257285fd0e0330_48x48.png'
        },
        showFlag: false
      }
    },
    components: {
      lanBtn
    },
    watch: {
      showMessage(value){
        this.showFlag = value;
        if(value && !this.isModal){
          setTimeout(()=>{
            this.showFlag = false;
          }, 3000)
        }
      }
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

<style src="./lan-message.css" scoped></style>

