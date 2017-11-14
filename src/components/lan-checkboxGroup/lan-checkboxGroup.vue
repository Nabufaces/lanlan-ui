<template>
  <div class="lan-checkboxGroup">
    <slot></slot>
  </div>
</template>

<script>
  import mixin from '../../mixins/radio-check-group'

  export default {
    name: 'lan-checkboxGroup',
    mixins: [mixin],
    methods: {
      updateValue () {
        const label = this.currentValue;
        const childrens = this.$children;
        childrens.forEach((child) => {
          child.currentValue = label === child.label;
          child.group = true;
        });
      }
    }
  };
</script>

<style src="./lan-lan-checkboxGroup.css" scoped></style>
