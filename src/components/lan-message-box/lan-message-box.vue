<template>
  <transition name="fade">
    <div :class="prefixCls" @click.self="handleCloseWindow">
      <div :class="`${prefixCls}-wrapper`">
        <div :class="`${prefixCls}-wrapper-hd`">
          <span :class="`${prefixCls}-type ${prefixCls}-${type}`">
            <lan-icon :name="modalType"></lan-icon>
          </span>
          <span :class="`${prefixCls}-wrapper-hd-tt`">
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
  const map = {
    warning: 'infofill',
    success: 'roundcheckfill',
    error: 'roundclosefill'
  };

  import lanButton from '../lan-button'
  import lanIcon from '../lan-icon'

  export default{
    name: 'lan-message-box',
    components: {
      lanButton,
      lanIcon
    },
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
        prefixCls: 'lan-message-box'
      }
    },
    computed: {
      modalType() {
        return map[this.type]
      }
    },
    methods: {
      handleCloseWindow(){
        if(!this.closeWindow){
          return;
        }
        this.$emit('close');
      },
      handleConfirm(){
        this.$emit('confirm');
        this.$emit('close');
      }
    }
  }
</script>
