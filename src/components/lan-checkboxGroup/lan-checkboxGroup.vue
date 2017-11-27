<template>
  <div class="lan-checkboxGroup">
    <slot></slot>
  </div>
</template>

<script>
  import {findComponentsDownward} from '../../base/assist'

  export default {
    name: 'lan-checkboxGroup',
    props: {
      value: {
        type: Array,
        default: []
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
        const childrens = findComponentsDownward(this, 'lan-checkbox');
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
