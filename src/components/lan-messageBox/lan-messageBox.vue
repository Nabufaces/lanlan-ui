<template>
  <transition name="fade">
    <div :class="prefixCls" @click.self="handleCloseWindow">
      <div :class="`${prefixCls}-wrapper`">
        <div :class="`${prefixCls}-wrapper-hd`">
          <img :src="modalType[type]" :class="`${prefixCls}-wrapper-hd-iconImg`"/>
          <span class="`${prefixCls}-wrapper-hd-tt`">
            <slot name="title">{{title}}</slot>
          </span>
        </div>
        <div :class="`${prefixCls}-wrapper-cnt`">
          <slot>{{message}}</slot>
        </div>
        <div :class="`${prefixCls}-wrapper-ft`">
          <lan-button size="small" classType="warning" @click="handleConfirm">确定</lan-button>&nbsp;
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import lanButton from '../lan-button'

  export default{
    name: 'lan-messageBox',
    props: {
      type: {
        type: String,
        validator: function (value) {
          return ['warning', 'error', 'success'].indexOf(value) > -1
        },
        required: true
      },
      title: [String, Number],
      message: [String, Number],
      closeWindow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        prefixCls: 'lan-messageBox',
        modalType: {
          warning : 'http://oss1.lanlanlife.com/f1af2aa2ed6c34fcc46d9f380f176f16_48x48.png',
          error : 'http://oss3.lanlanlife.com/61dc954ee3a65d4679c1e2622e6a3205_48x48.png',
          success : 'http://oss1.lanlanlife.com/9300bd45cfb8ec9655257285fd0e0330_48x48.png'
        }
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
