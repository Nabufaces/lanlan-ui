<template>
  <span :class="[prefixCls, `${prefixCls}-${size}`]"
    :style="{
      backgroundColor: (state ? (activeColor ? activeColor : '#FF7846') : (inactiveColor ? inactiveColor : '#686E74'))
    }"
    @click="change">
    <span :class="stateClasses"></span>
    <span :class="`${prefixCls}-onText`" v-if="state && onText">{{onText}}</span>
    <span :class="`${prefixCls}-offText`" v-else-if="!state && offText">{{offText}}</span>
  </span>
</template>

<script>
  export default{
    name: 'lan-switch',
    props: {
      switchType: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          return ['normal', 'large'].indexOf(value) > -1
        }
      },
      activeColor: String,
      inactiveColor: String,
      onText: String,
      offText: String
    },
    data(){
      return {
        state: this.switchType,
        prefixCls: 'lan-switch'
      }
    },
    computed: {
      stateClasses() {
        return [
          `${this.prefixCls}-open`,
          {
            [`${this.prefixCls}-close`]: !this.state
          }
        ]
      }
    },
    methods: {
      change(){
        this.state = !this.state;
        this.$emit('change', this.state);
      }
    }
  }
</script>
