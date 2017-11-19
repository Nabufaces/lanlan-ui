<template>
  <div class="lan-datePicker">
    <lan-input :value="pickValue"
               :placeholder="placeholder"
               :readonly="true"
               suffixIcon="date"
               @click="showPick = !showPick"
               @blur="showPick = false"
    ></lan-input>
    <div class="lan-datePicker-dropdown" v-if="showPick" @mousedown.prevent>
      <div class="dropdown-hd">
        <span class="btn-back" @click="prevYearPreview"><i class="iconfont icon-double-back"></i></span>
        <span class="btn-back" @click="prevMonthPreview"><i class="iconfont icon-back"></i></span>
        <span class="btn-month" @click="chosenType('month')">{{tmpMonth+1 | formatMonth}}</span>
        <span class="btn-year" @click="chosenType('year')">{{tmpYear}}</span>
        <span class="btn-more" @click="nextMonthPreview"><i class="iconfont icon-more"></i></span>
        <span class="btn-more" @click="nextYearPreview"><i class="iconfont icon-double-more"></i></span>
      </div>
      <div class="dropdown-bd">
        <div class="cells-list" v-if="panelType == 'year'">
          <span class="cell-year" v-for="item in yearList"
                :class="{
                    isSelected: isSelected('year', item),
                    invalid: validateYear(item)
                }"
                @click="selectYear(item)"
          >
              <em>{{item}}</em>
            </span>
        </div>
        <div class="cells-list" v-else-if="panelType == 'month'">
          <span class="cell-month" v-for="item, index in monthList"
                :class="{
                    isSelected: isSelected('month', index),
                    invalid: validateMonth(index)
                }"
                @click="selectMonth(index)"
          >
              <em>{{item | formatMonth}}</em>
            </span>
        </div>
        <div class="cells-list" v-else>
          <div class="cell-week">
            <span v-for="item in weekList">{{item | formatWeek}}</span>
          </div>
          <div class="cell-date">
            <span v-for="(item, index) in dateList"
                  :class="{
                    notCurrent: !item.currentMonth,
                    current: item.currentMonth,
                    isSelected: isSelected('date', item),
                    invalid: validateDate(item)
                  }"
                  @click="selectDate(item)">{{item.value}}</span>
          </div>
        </div>
      </div>
      <div class="dropdown-ft">
        <lan-button size="tiny" classType="default" @click="handleDelete">清除</lan-button>
        <lan-button size="tiny" classType="warning" @click="handleClick">确定</lan-button>&nbsp;
      </div>
    </div>
  </div>
</template>

<script>

  import lanInput from '../lan-input/lan-input'
  import lanButton from '../lan-button/lan-button'
  import {handleFormat} from '../../base/assist'

  export default{
    name: 'lan-timePicker',
    components: {
      lanInput,
      lanButton
    },
    props: {
      placeholder: String,
      format: {
        default: 'yyyy-MM-dd'
      },
      min: {
        default: '1970-01-01'
      },
      max: {
        default: '3016-01-01'
      },
    },
    computed: {
      dateList () {
        let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate();
        let dateList = Array.from({length: currentMonthLength}, (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          }
        });
        let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
        let previousMongthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate();
        for(let i = 0, len = startDay; i < len; i++){
          dateList = [{previousMonth: true, value: previousMongthLength - i}].concat(dateList)
        }
        for(let i = dateList.length, item = 1; i < 42; i++, item++){
          dateList[dateList.length] = {nextMonth: true, value: item}
        }
        return dateList
      }
    },
    watch: {
      min(v) {
        let minArr = new Date(this.min);
        this.minYear = minArr.getFullYear();
        this.minMonth = minArr.getMonth() + 1;
        this.minDate = minArr.getDate();
      },
      max(v) {
        let maxArr = new Date(this.max);
        this.maxYear = maxArr.getFullYear();
        this.maxMonth = maxArr.getMonth() + 1;
        this.maxDate = maxArr.getDate();
      },
    },
    data() {
      const now = new Date;
      return {
        pickValue: '',
        showPick: false,
        panelType: 'date',
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        tmpYear: now.getFullYear(),
        tmpMonth: now.getMonth(),
        tmpDate: now.getDate(),
        minYear: Number,
        minMonth: Number,
        minDate: Number,
        maxYear: Number,
        maxMonth: Number,
        maxDate: Number,
        yearList: Array.from({length: 12}, (value, index) => new Date().getFullYear() + index),
        monthList: [1, 2, 3 ,4 ,5, 6, 7 ,8, 9, 10, 11, 12],
        weekList: [0, 1, 2, 3, 4, 5, 6],
      }
    },
    methods: {
      chosenType(type) {
        this.panelType = type;
      },
      isSelected (type, item) {
        switch (type){
          case 'year':
            return item === this.tmpYear;
          case 'month':
            return item === this.tmpMonth && this.year === this.tmpYear;
          case 'date':
            return item.value === this.tmpDate && this.month === this.tmpMonth && item.currentMonth;
        }
      },
      selectYear (year) {
        if(this.validateYear(year)) return;
        this.tmpYear = year;
        this.panelType = 'month';
      },
      validateYear (year) {
        return (year > this.maxYear || year < this.minYear) ? true : false
      },
      selectMonth (month) {
        if(this.validateMonth(month)) return;
        this.tmpMonth = month;
        this.panelType = 'date';
      },
      validateMonth (month) {
        if(new Date(this.tmpYear, month).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime()
          && new Date(this.tmpYear, month).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime()){
          return false
        }
        return true
      },
      selectDate (date) {
        if(this.validateDate(date)) return;
        this.tmpDate = date.value;
        if(date.previousMonth){
          if(this.tmpMonth === 0){
            this.tmpYear--;
            this.tmpMonth = 11;
          }else{
            this.tmpMonth--;
          }
        }else if(date.nextMonth){
          if(this.tmpMonth === 11){
            this.tmpYear++;
            this.tmpMonth = 0;
          }else{
            this.tmpMonth++;
          }
        }
      },
      validateDate (date) {
        let mon = this.tmpMonth;
        if(date.previousMonth){
          mon -= 1
        }else if(date.nextMonth){
          mon += 1
        }
        if(new Date(this.tmpYear, mon, date.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime()
          && new Date(this.tmpYear, mon, date.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()){
          return false
        }
        return true
      },
      prevMonthPreview () {
        if(this.tmpMonth === 0) {
          this.tmpMonth = 11;
          this.prevYearPreview();
        } else {
          this.tmpMonth--;
        }
      },
      nextMonthPreview () {
        if(this.tmpMonth === 11) {
          this.tmpMonth = 0;
          this.nextYearPreview();
        } else {
          this.tmpMonth++;
        }
      },
      prevYearPreview () {
        if(this.tmpYear > 1) {
          this.tmpYear--
        }
      },
      nextYearPreview () {
        this.tmpYear++;
      },
      handleClick() {
        this.year = this.tmpYear;
        this.month = this.tmpMonth;
        this.date = this.tmpDate;
        this.pickValue = handleFormat(`${this.year}-${this.month}-${this.date}`, this.format);
        this.$emit('change', this.pickValue);
        this.showPick = false;
      },
      handleDelete() {
        //重置所有日期
        const now = new Date;
        this.year = this.tmpYear = now.getFullYear();
        this.month = this.tmpMonth = now.getMonth();
        this.date = this.tmpDate = now.getDate();
        this.pickValue = '';
        this.showPick = false;
      }
    },
    mounted() {
      let minArr = new Date(this.min);
      this.minYear = minArr.getFullYear();
      this.minMonth = minArr.getMonth() + 1;
      this.minDate = minArr.getDate();

      let maxArr = new Date(this.max);
      this.maxYear = maxArr.getFullYear();
      this.maxMonth = maxArr.getMonth() + 1;
      this.maxDate = maxArr.getDate();
    },
    filters: {
      formatWeek: item => {
        return {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}[item]
      },
      formatMonth: item => {
        return {1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六',
          7: '七', 8: '八', 9: '九', 10: '十', 11: '十一', 12: '十二'}[item] + '月'
      }
    }
  }
</script>

<style src="./lan-datePicker.css"></style>

