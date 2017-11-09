<template>
  <div class="lan-select">
    <lan-input :value="selectedValue.name"
               :placeholder="placeholder"
               :readonly="readonly"
               :disabled="disabled"
               :suffixIcon="showSelect?'less':'moreunfold'"
               @click="handleClick"
               @blur="handleBlur"
               ref="ipt"
    ></lan-input>
    <div class="dropdown" v-if="showSelect" :style="{width: selectWidth}">
      <ul class="dropdown-list">
        <li class="dropdown-list-item" v-for="(item, index) in source"
            :key="index"
            :class="item.disabled?'disabled':''"
            @mousedown.prevent="selectValue(index)"
            >
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import lanInput from '../lan-input/lan-input'

  export default{
    name: 'lan-select',
    props: {
      source: {
        type: Array,
        require: true
      },
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean
    },
    components: {
      lanInput
    },
    data(){
      return {
        showSelect: false,
        selectWidth:  '',
        selectedValue: {}
      }
    },
    mounted(){
      this.selectWidth = this.$refs.ipt.$el.getBoundingClientRect().width + 'px';
    },
    methods: {
      handleClick(){
        this.showSelect = !this.showSelect;
      },
      handleBlur(){
        //this.showSelect = false;
      },
      selectValue(index){
        const select = this.source[index];
        if(select.disabled){
          return;
        }
        this.selectedValue = select;
        this.$emit('selected', select);
        this.showSelect = false;
      }
    }
  }
</script>

<style src="./lan-select.css" scoped></style>

