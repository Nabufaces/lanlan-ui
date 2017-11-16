<template>
  <div class="lan-select">
    <lan-input :value="selectedValue.name"
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
        <li class="noMatch" v-if="selectContent.length == 0">
          <span>无匹配数据</span>
        </li>
        <li class="dropdown-list-item" v-for="(item, index) in selectContent"
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
      disabled: Boolean,
      filterable: Boolean
    },
    components: {
      lanInput
    },
    data(){
      return {
        selectContent: this.source,
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
        this.showSelect = false;
      },
      handleInput(value) {
        this.selectContent = this.source.filter((item) => {
          return item.name.indexOf(value) >= 0;
        });
      },
      selectValue(index){
        const select = this.selectContent[index];
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

<style src="./lan-select.css"></style>

