<template>
  <transition name="fade">
    <div :class="`${prefixCls}-mask`" v-if="showModal"
         @click.self="handleCloseWindow">
      <div :class="`${prefixCls}`"
           :style="{width: width ? width + 'px' : '400px'}">
        <div :class="`${prefixCls}-hd`">
          <slot name="title">
            <span :class="`${prefixCls}-hd-tt`">{{title}}</span>
          </slot>
          <span :class="`${prefixCls}-hd-close`" @click="handleClose" v-if="showClose"><i class="iconfont icon-close"></i></span>
        </div>
        <div :class="`${prefixCls}-cnt`">
          <slot></slot>
        </div>
        <div :class="`${prefixCls}-ft`">
          <slot name="footer">
            <lan-button size="small" @click="handleCancel">取消</lan-button>
            <lan-button size="small" classType="warning" @click="handleConfirm">确定</lan-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  import lanButton from '../lan-button'

  export default{
    name: 'lan-modal',
    props: {
      showModal: {
        type: Boolean,
        require: true
      },
      title: [String, Number],
      width: Number,
      showClose: {
        type: Boolean,
        default: true
      },
      closeWindow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        prefixCls : 'lan-modal'
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
        this.handleClose();
      },
      handleClose(){
        this.$emit('close');
      },
      handleCancel(){
        this.$emit('cancel');
        this.handleClose();
      },
      handleConfirm(){
        this.$emit('confirm');
        this.handleClose();
      }
    }
  }
</script>

