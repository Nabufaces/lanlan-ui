<template>
  <div class="lan-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import {findComponentsDownward} from '../../base/assist'

  export default {
    name: 'lan-radio-group',
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
        const childrens = findComponentsDownward(this, 'lan-radio');
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
