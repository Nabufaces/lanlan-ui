<template>
  <div class="lan-checkboxGroup">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'lan-checkboxGroup',
    props: {
      value: {
        type: [String, Number, Array],
        default: []
      }
    },
    data () {
      return {
        currentValue: this.value.length ? this.value : []
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
          child.currentValue = label.indexOf(child.label) !== -1;
          child.group = true;
        });
      },
      change (label, value) {
        let currentValue = this.currentValue;
        const index = currentValue.indexOf(label);
        if(value) {
          currentValue.push(label);
        } else {
          currentValue.splice(index, 1);
        }
        this.updateValue();
        this.$emit('change', currentValue);
      }
    }
  };
</script>
