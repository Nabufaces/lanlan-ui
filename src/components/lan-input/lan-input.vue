<template>
  <div :class="classes">
    <template v-if="type !== 'textarea'">
      <div class="lan-input-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <lan-icon :name="prefixIcon" customClass="lan-input-prefix" v-if="prefixIcon"></lan-icon>
      <lan-icon :name="suffixIcon" customClass="lan-input-suffix" v-if="suffixIcon"></lan-icon>
      <input :class="inputClasses"
             :value="value"
             :type="type"
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
      <div class="lan-input-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else
              :class="inputClasses"
              :style="textareaStyles"
              :value="value"
              :type="type"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              :autofocus="autofocus"
              :autocomplete="autoComplete"
              :maxlength="maxlength"
              :rows="rows"
              @input="handleInput($event.target.value)"
              @change="handleChange($event.target.value)"
              @focus="handleFocus"
              @blur="handleBlur"
              @click="handleClick"
              @keyup="handleKeyup"
              @keypress="handleKeypress"
              @keydown="handleKeydown"
              ref="textarea">
    </textarea>
  </div>
</template>

<script>
  import lanIcon from '../lan-icon'
  import calcTextareaHeight from '../../base/calcTextareaHeight'

  const prefixCls = 'lan-input';

  export default {
    name: 'lan-input',
    props: {
      value: [String, Number, Date],
      type: {
        type: String,
        default: 'text'
      },
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
      maxlength: Number,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      }
    },
    components: {
      lanIcon
    },
    computed: {
      classes () {
        return [
          prefixCls,
          {
            [`${prefixCls}-with-prefix`]: this.prefixIcon,
            [`${prefixCls}-with-suffix`]: this.suffixIcon,
            [`${prefixCls}-group`]: this.$slots.prepend || this.$slots.append,
            [`${prefixCls}-group-with-prepend`]: this.$slots.prepend,
            [`${prefixCls}-group-with-append`]: this.$slots.append
          }
        ]
      },
      inputClasses() {
        return [
          `${prefixCls}-inner`,
          {
            [`${this.customClass}`]: this.customClass
          }
        ]
      }
    },
    data() {
      return {
        textareaStyles: {}
      }
    },
    mounted() {
      this.resizeTextarea();
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
      },
      resizeTextarea () {
        const autosize = this.autosize;
        if (!autosize || this.type !== 'textarea') {
          return;
        }

        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
    }
  }
</script>
