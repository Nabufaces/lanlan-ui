<template>
  <div :class="classes">
    <div class="prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <lan-icon :name="prefixIcon" customClass="prefix" v-if="prefixIcon"></lan-icon>
    <lan-icon :name="suffixIcon" customClass="suffix" v-if="suffixIcon"></lan-icon>
    <input class="t-ipt"
           :value="value"
           :class="customClass"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           :autofocus="autofocus"
           :autocomplete="autoComplete"
           :maxlength="maxlength"
           @input="handleInput($event.target.value)"
           @change="handleChange($event.target.value)"
           @focus="handleFocus"
           @blur="handleBlur"
           @click="handleClick"
           @keyup="handleKeyup"
           @keypress="handleKeypress"
           @keydown="handleKeydown"
           />
    <div class="append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
  import lanIcon from '../lan-icon'

  const prefixCls = 'lan-input';

  export default {
    name: 'lan-input',
    props: {
      value: [String, Number, Date],
      prefixIcon: String,
      suffixIcon: String,
      customClass: String,
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean,
      autofocus: Boolean,
      autoComplete: {
        type: String,
        default: 'off'
      },
      maxlength: Number
    },
    components: {
      lanIcon
    },
    computed: {
      classes () {
        return [
          prefixCls,
          {
            [`${prefixCls}-prefix`]: this.prefixIcon,
            [`${prefixCls}-suffix`]: this.suffixIcon,
            [`${prefixCls}-group`]: this.$slots.prepend || this.$slots.append,
            [`${prefixCls}-group-with-prepend`]: this.$slots.prepend,
            [`${prefixCls}-group-with-append`]: this.$slots.append
          }
        ];
      },
    },
    methods: {
      handleInput(value){
        this.$emit('input', value);
      },
      handleChange(value){
        this.$emit('change', value);
      },
      handleFocus() {
        this.$emit('focus');
      },
      handleBlur(){
        this.$emit('blur');
      },
      handleClick() {
        this.$emit('click');
      },
      handleKeyup() {
        this.$emit('keyup');
      },
      handleKeypress() {
        this.$emit('keypress');
      },
      handleKeydown() {
        this.$emit('keydown');
      }
    }
  }
</script>
