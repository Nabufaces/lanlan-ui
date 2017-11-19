<template>
  <li :class="classes" @mousedown.prevent="handleSelect" v-show="!hidden">
    <slot>{{label}}</slot>
  </li>
</template>

<script>
  const prefix = 'dropdown-list-item';

  export default {
    name: 'lan-option',
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      value: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          prefix,
          {
            [`${prefix}-disabled`] : this.disabled
          }
        ]
      }
    },
    data() {
      return {
        hidden: false
      }
    },
    methods: {
      handleSelect() {
        if(this.disabled){
          return;
        }
        this.$parent.handleSelect({
          label: this.label,
          value: this.value
        });
      }
    }
  }
</script>
