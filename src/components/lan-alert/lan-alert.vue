<template>
  <transition name="fade">
    <lan-row v-if="!closed" :class="wrapClasses" type="flex" align="middle" :justify="center ? 'center' : 'start'">
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
    </lan-row>
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
  import lanRow from '../lan-row';

  export default {
    name: 'lan-alert',
    components: {
      lanIcon,
      lanRow
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
          `${prefixCls}-${this.type}`
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
