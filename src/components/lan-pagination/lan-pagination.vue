<template>
  <div class="lan-pagination" v-if="total>1">
    <button class="lan-pagination-btn" :class="current == 1 ? 'lan-pagination-btn-disabled' : '' "  @click="handleClick(current-1)">上一页</button>
    <ul class="lan-pagination-ul">
      <template  v-for="value in pageList">
        <li class="lan-pagination-li" :class="current == value ? 'lan-pagination-li-active' : '' "
            @click="handleClick(value)">
          <span>{{value}}</span>
        </li>
      </template>
    </ul>
    <button class="lan-pagination-btn" :class="current == total ? 'lan-pagination-btn-disabled' : '' "  @click="handleClick(current+1)">下一页</button>
    <span class="lan-pagination-total" v-if="isEllipsis">共{{total}}页</span>
    <span>跳至<input class="lan-pagination-input" v-model="inputValue"/>页</span>
    <button class="lan-pagination-btn" style="margin-left: 5px" @click="handleConfirm">确定</button>
  </div>
</template>

<script>

  export default{
    name: 'lan-pagination',
    props: {
      total: {
        type: Number,
        require: true
      },
      isEllipsis: {
        type: Boolean,
        default: true
      }
    },
    created(){
      for(let i = 1;i <= this.total && i <= 5; i++){
        this.pageList.push(i);
      }
    },
    watch: {
      current(newVal){
        let arr = this.pageList;
        const total = this.total;
        if(arr.indexOf(newVal) === -1 && total > 5){
          const index = total - newVal;
          if(index < 5) {
            let arr_new = [];
            for(let i = 0; newVal + i <= total; i++) {
              arr_new.push(newVal + i)
            }
            for(let i = 1; arr_new.length < 5; i++) {
              arr_new.splice(0, 0, newVal - i);
            }
            for(let i = 0; i < 5; i++) {
              arr[i] = arr_new[i];
            }
          } else {
            for(let i = 0; i < 5; i++) {
              arr[i] = newVal + i;
            }
          }
        }
      }
    },
    data: function(){
      return {
        current: 1,
        pageList: [],
        inputValue: ''
      }
    },
    methods: {
      handleClick(value){
        if(value >= 1 && value <= this.total){
          this.current = value;
          this.$emit('change', value);
        }
      },
      handleConfirm(){
        const value = this.inputValue;
        if(value >=1 && value <= this.total){
          this.handleClick(parseInt(value));
        } else {
          this.inputValue = '';
        }
      }
    }
  }
</script>
