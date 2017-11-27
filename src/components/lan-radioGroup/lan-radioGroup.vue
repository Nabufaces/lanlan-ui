<template>
  <div class="lan-radioGroup">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'lan-radioGroup',
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        currentValue: this.value
      };
    },
    mounted () {
      this.updateValue();
    },
    methods: {
      updateValue () {
        const label = this.currentValue;
        const childrens = this.$children;
        childrens.forEach((child) => {
          child.currentValue = label === child.label;
          child.group = true;
        });
      },
      change (label) {
        this.currentValue = label;
        this.updateValue();
        this.$emit('change', label);
      }
    }
  };
</script>
