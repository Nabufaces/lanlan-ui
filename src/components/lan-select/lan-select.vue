<template>
  <div class="lan-select">
    <lan-input v-model="selectedValue.label"
               :placeholder="placeholder"
               :readonly="!filterable"
               :disabled="disabled"
               :prefixIcon="filterable?'search':''"
               :suffixIcon="showSelect?'downward':'upward'"
               @click="handleClick"
               @blur="handleBlur"
               @input="handleInput"
    ></lan-input>
    <div class="lan-select-dropdown" v-if="showSelect" :style="{width: selectWidth}">
      <ul class="lan-select-list">
        <li class="lan-select-list-noMatch" v-if="showNoMatch">
          <span>无匹配数据</span>
        </li>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  import lanInput from '../lan-input'
  import { findComponentsDownward } from '../../base/assist'

  export default{
    name: 'lan-select',
    props: {
      placeholder: String,
      disabled: {
        type: Boolean,
        default: false
      },
      filterable: {
        type: Boolean,
        default: false
      }
    },
    components: {
      lanInput
    },
    data(){
      return {
        showSelect: false,
        selectWidth:  '',
        selectedValue: {
          label: '',
          value: ''
        },
        showNoMatch: false
      }
    },
    mounted() {
      this.selectWidth = this.$el.getBoundingClientRect().width + 'px';
    },
    methods: {
      handleClick (){
        this.showSelect = !this.showSelect;
        if(this.filterable) {
          this.$nextTick(() => {
            this.handleInput(this.selectedValue.label);
          })
        }
      },
      handleBlur(){
        this.showNoMatch = false;
        this.showSelect = false;
      },
      handleInput(value) {
        const options = findComponentsDownward(this, 'lan-option');
        let count = 0;
        options.forEach((item) => {
          if(item.label && item.label.indexOf(value) === -1) {
            item.hidden = true;
            count++;
          } else {
            item.hidden = false;
          }
        });
        this.showNoMatch = options.length === count;
      },
      handleSelect(item){
        this.selectedValue = item;
        this.$emit('selected', item.value);
        this.showSelect = false;
      }
    }
  }
</script>
