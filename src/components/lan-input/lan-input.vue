<template>
  <div class="lan-input">
    <i class="prefix iconfont" :class="`icon-${prefixIcon}`" v-if="prefixIcon"></i>
    <i class="suffix iconfont" :class="`icon-${suffixIcon}`" v-if="suffixIcon"></i>
    <div class="prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
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
           @focus="handleFocus($event)"
           @blur="handleBlur($event)"
           @click="handleClick($event)"
           />
    <div class="append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
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
    methods: {
      handleInput(value){
        this.$emit('input', value);
      },
      handleChange(value){
        this.$emit('change', value);
      },
      handleBlur(event){
        this.$emit('blur', event);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleClick(event){
        this.$emit('click', event);
      }
    }
  }
</script>
