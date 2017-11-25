<template>
  <span class="lan-switch"
    :class="`lan-switch-${size}`"
    :style="{
      backgroundColor: (state ? (activeColor ? activeColor : '#FF7846') : (inactiveColor ? inactiveColor : '#686E74'))
    }"
    @click="change">
    <span class="open"
      :class="{close: !state}"></span>
    <span class="onText" v-if="state && onText">{{onText}}</span>
    <span class="offText" v-else-if="!state && offText">{{offText}}</span>
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
        validator: function (value) {
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
        state: this.switchType
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
