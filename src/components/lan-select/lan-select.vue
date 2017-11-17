<template>
  <div class="lan-select">
    <lan-input v-model="selectedValue.label"
               :placeholder="placeholder"
               :readonly="!filterable"
               :disabled="disabled"
               :prefixIcon="filterable?'search':''"
               :suffixIcon="showSelect?'less':'moreunfold'"
               @click="handleClick"
               @blur="handleBlur"
               @input="handleInput"
               ref="ipt"
    ></lan-input>
    <div class="dropdown" v-if="showSelect" :style="{width: selectWidth}">
      <ul class="dropdown-list">
        <li class="dropdown-list-noMatch" v-if="showNoMatch">
          <span>无匹配数据</span>
        </li>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  import lanInput from '../lan-input/lan-input'

  export default{
    name: 'lan-select',
    props: {
      placeholder: String,
      disabled: Boolean,
      filterable: Boolean
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
      this.selectWidth = this.$refs.ipt.$el.getBoundingClientRect().width + 'px';
    },
    methods: {
      handleClick (){
        this.showSelect = !this.showSelect;
        this.$nextTick(() => {
          this.handleInput(this.selectedValue.label);
        })
      },
      handleBlur(){
        this.showNoMatch = false;
        this.showSelect = false;
      },
      handleInput(value) {
        const options = this.$slots.default;
        let count = 0;
        options.forEach((item) => {
          let option = item.child;
          if(!option) {
            return;
          }
          if(option.label.indexOf(value) === -1) {
            option.hidden = true;
            count++;
          } else {
            option.hidden = false;
          }
        });
        this.showNoMatch = options.length === count;
      },
      handleSelect(item){
        this.selectedValue = item;
        this.$emit('selected', item);
        this.showSelect = false;
      }
    }
  }
</script>

<style src="./lan-select.css"></style>

