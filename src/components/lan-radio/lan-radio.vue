<template>
  <label class="lan-radio">
        <span class="radio">
            <span class="radio-inner" :class="currentValue ? 'checked': '' "></span>
            <input
              type="radio"
              class="ipt"
              :checked="currentValue"
              @change="change" />
        </span>
        <slot>{{ label }}</slot>
  </label>
</template>

<script>
  export default{
    name: 'lan-radio',
    props: {
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: [String, Number]
      }
    },
    data() {
      return {
        currentValue: this.value,
        group: false
      }
    },
    methods: {
      change (event) {
        if (this.disabled) {
          return false;
        }

        this.currentValue = event.target.checked;
        if (!this.group) {
          this.$emit('onChange', this.currentValue);
        }

        if (this.group && this.label !== undefined) {
          this.$parent.change(this.label);
        }

      }
    }
  }
</script>

<style src="./lan-radio.css" scoped></style>

