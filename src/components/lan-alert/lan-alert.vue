<template>
  <transition name="fade">
    <div v-if="!closed" :class="wrapClasses">
      <span :class="iconClasses" v-if="showIcon">
          <lan-icon :type="iconType"></lan-icon>
      </span>
      <div :class="contentClasses">
        <template v-if="$slots.title">
          <span :class="titleClasses"><slot name="title"></slot></span>
          <br/>
        </template>
        <span><slot></slot></span>
      </div>
      <a :class="closeClasses" v-if="closable" @click="handleClose">
        <lan-icon type="close"></lan-icon>
      </a>
    </div>
  </transition>
</template>
<script>
  const map = {
    warning: 'infofill',
    success: 'roundcheckfill',
    error: 'roundclosefill'
  };
  const prefixCls = 'lan-alert';

  import lanIcon from '../lan-icon';

  export default {
    name: 'lan-alert',
    components: {
      lanIcon
    },
    props: {
      type: {
        type: String,
        validator (value) {
          return ['warning', 'error', 'success'].indexOf(value) > -1
        },
        default: 'warning'
      },
      closable: {
        type: Boolean,
        default: false
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        closed: false,
        desc: false
      };
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-center`]: this.center
          }
        ];
      },
      iconType () {
        return map[this.type]
      },
      iconClasses () {
        return `${prefixCls}-icon`;
      },
      contentClasses() {
        return `${prefixCls}-content`;
      },
      titleClasses () {
        return `${prefixCls}-title`;
      },
      closeClasses () {
        return `${prefixCls}-close`;
      }
    },
    methods: {
      handleClose () {
        this.closed = true;
        this.$emit('close');
      }
    }
  };
</script>
