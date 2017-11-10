<template>
  <div class="lan-pagination" v-if="total>1">
    <button class="btn" :class="current == 1 ? 'disabled' : '' "  @click="handleClick(current-1)">上一页</button>
    <ul>
      <template  v-for="value in pageList">
        <li class="page" :class="current == value ? 'active' : '' "
            @click="handleClick(value)">
          <span>{{value}}</span>
        </li>
      </template>
    </ul>
    <button class="btn" :class="current == total ? 'disabled' : '' "  @click="handleClick(current+1)">下一页</button>
    <span class="total" v-if="isEllipsis">共{{total}}页</span>
    <span>跳至<input class="ipt" v-model="inputValue"/>页</span>
    <button class="btn" style="margin-left: 5px" @click="handleConfirm">确定</button>
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
      isEllipsis: Boolean
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
            console.log(index);
            for(let i = index; i >= 0; i--) {
              arr[index - i] = newVal - i;
            }
            console.log(arr);
            for(let i = index + 1, j = 1; i < 5; i++, j++) {
              arr[i] = newVal + j;
            }
            console.log(arr);
          } else {
            for(let i = 0; i <= 5; i++) {
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
          this.$emit('currentChange', value);
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

<style src="./lan-pagination.css" scoped></style>

