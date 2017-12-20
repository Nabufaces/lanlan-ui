<template>
  <div class="lan-select">
    <lan-input v-model="selectedValue.label"
               :placeholder="placeholder"
               :readonly="!filterable"
               :disabled="disabled"
               :prefixIcon="filterable?'search':''"
               :suffixIcon="showSelect?'downward':'upward'"
               @click="showSelect = !showSelect"
               @blur="showSelect = false"
    ></lan-input>
    <div class="lan-select-dropdown" v-show="dropVisible" :style="{width: selectWidth}">
      <ul class="lan-select-list" v-show="(!remote && !notFound) || (remote && !loading && !notFound)"><slot></slot></ul>
      <ul class="lan-select-list-notFound" v-show="(!remote && notFound) || (remote && !loading && notFound)">无匹配数据</ul>
      <ul class="lan-select-list-loading" v-show="loading">正在加载</ul>
    </div>
  </div>
</template>

<script>
  import lanInput from '../lan-input'
  import { debounce, findComponentsDownward } from '../../base/assist'

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
      },
      remote: {
        type: Boolean,
        default: false
      },
      remoteMethod: {
        type: Function
      },
      loading: {
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
        notFound: false
      }
    },
    mounted() {
      this.selectWidth = this.$el.getBoundingClientRect().width + 'px';
    },
    computed: {
      dropVisible () {
        let status = true;
        const options = this.$slots.default || [];
        if(this.remote && this.selectedValue.label === '' && !options.length) status = false;
        return this.showSelect && status;
      }
    },
    watch: {
      'selectedValue.label'(val) {
        this.$emit('query-change', val);
        if(this.remote && this.remoteMethod) {
          debounce(this.remoteMethod(val));
        }
        if(this.filterable) {
          this.handleFilter();
        }
      }
    },
    methods: {
      handleSelect(item) {
        this.selectedValue = item;
        this.$emit('selected', item.value, item.label);
        this.showSelect = false;
      },
      handleFilter(val = this.selectedValue.label) {
        const options = findComponentsDownward(this, 'lan-option');
        let is_hidden = true;
        options.forEach(item => {
          if(item.label && item.label.indexOf(val) === -1) {
            item.hidden = true;
          } else {
            item.hidden = false;
            is_hidden = false;
          }
        });
        this.notFound = is_hidden;
      }
    }
  }
</script>
