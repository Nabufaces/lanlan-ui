<template>
  <li :class="classes" @mousedown.prevent="handleSelect" v-show="!hidden">
    <slot>{{label}}</slot>
  </li>
</template>

<script>
  import {findComponentUpward} from '../../base/assist'

  const prefixCls = 'lan-select-list-item';

  export default {
    name: 'lan-option',
    props: {
      label: {
        type: [String, Number]
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
          prefixCls,
          {
            [`${prefixCls}-disabled`] : this.disabled
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
        findComponentUpward(this, 'lan-select').handleSelect({
          label: this.label,
          value: this.value
        });
      }
    }
  }
</script>
