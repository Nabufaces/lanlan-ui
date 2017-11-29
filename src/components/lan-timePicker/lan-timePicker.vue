<template>
  <div class="lan-timePicker">
    <lan-input :value="pickValue"
               :placeholder="placeholder"
               :readonly="true"
               suffixIcon="clock"
               :customClass="showSeconds ? 'lan-timePicker-group-3' : 'lan-timePicker-group-2' "
               @click="showPick = !showPick"
               @blur="handleChange"
               ></lan-input>
    <div class="lan-timePicker-dropdown" v-if="showPick" @mousedown.prevent>
      <div class="lan-timePicker-cells-list">
        <ul class="lan-timePicker-cells-ul">
          <li v-for="item in hoursList" @click="handleClick('hours', item)" :class="getCells(item)" :key="item.text">{{item.text}}</li>
        </ul>
      </div>
      <div class="lan-timePicker-cells-list">
        <ul class="lan-timePicker-cells-ul">
          <li v-for="item in minutesList" @click="handleClick('minutes', item)" :class="getCells(item)" :key="item.text">{{item.text}}</li>
        </ul>
      </div>
      <div class="lan-timePicker-cells-list" v-if="showSeconds">
        <ul class="lan-timePicker-cells-ul">
          <li v-for="item in secondsList" @click="handleClick('seconds', item)" :class="getCells(item)" :key="item.text">{{item.text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import lanInput from '../lan-input'
  import {initTimeDate, fixString, handleFormat, deepCopy} from '../../base/assist'

  export default{
    name: 'lan-timePicker',
    props: {
      placeholder: String,
      format: {
        type: String,
        default: 'HH:mm'
      },
      disabledHours: {
        type: Array,
        default() {
          return [];
        }
      },
      disabledMinutes: {
        type: Array,
        default() {
          return [];
        }
      },
      disabledSeconds: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      lanInput
    },
    computed: {
      hoursList () {
        let hours = [];
        const hours_temp = {
          text: 0,
          disabled: false,
          selected: false
        };
        for (let i = 0; i < 24; i ++) {
          const hour = deepCopy(hours_temp);
          if(this.hours === i) {
            hour.selected = true;
          }
          hour.text = fixString(i);
          if(this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
            hour.disabled = true;
          }
          hours.push(hour);
        }
        return hours;
      },
      minutesList () {
        let minutes = [];
        const minutes_temp = {
          text: 0,
          disabled: false,
          selected: false
        };
        for (let i = 0; i < 60; i ++) {
          const minute = deepCopy(minutes_temp);
          if(this.minutes === i) {
            minute.selected = true;
          }
          minute.text = fixString(i);
          if(this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
            minute.disabled = true;
          }
          minutes.push(minute);
        }
        return minutes;
      },
      secondsList () {
        let seconds = [];
        const seconds_temp = {
          text: 0,
          disabled: false,
          selected: false
        };
        for (let i = 0; i < 60; i ++) {
          const second = deepCopy(seconds_temp);
          if(this.seconds === i) {
            second.selected = true;
          }
          second.text = fixString(i);
          if(this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
            const second = deepCopy(seconds_temp);
            second.disabled = true;
          }
          if(this.seconds === second.text) {
            second.selected = true;
          }
          seconds.push(second);
        }
        return seconds;
      },
      showSeconds () {
        return (this.format || '').indexOf('ss') !== -1;
      },
    },
    data() {
      return {
        date: initTimeDate(),
        pickValue: '',
        showPick: false,
        hours: '',
        minutes: '',
        seconds: ''
      }
    },
    methods: {
      getCells(item) {
        const prefix = 'lan-timePicker-cells-li';
        return [
          prefix,
          {
            [`${prefix}-selected`]: item.selected,
            [`${prefix}-disabled`]: item.disabled
          }
        ]
      },
      handleClick(type, item) {
        if(item.disabled) {
          return;
        }
        if(type === 'hours') {
          this.date.setHours(item.text);
          this.hours = this.date.getHours();
        } else if(type === 'minutes') {
          this.date.setMinutes(item.text);
          this.minutes = this.date.getMinutes();
        } else if(type === 'seconds') {
          this.date.setSeconds(item.text);
          this.seconds = this.date.getSeconds();
        }
        this.pickValue = handleFormat(this.date, this.format);
      },
      handleChange() {
        this.showPick = false;
        this.$emit('change', this.pickValue);
      }
    }
  }
</script>
