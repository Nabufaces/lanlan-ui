<template>
  <div class="lan-timePicker">
    <lan-input :value="pickValue"
               :placeholder="placeholder"
               :readonly="true"
               suffixIcon="task-management"
               :customClass="showSeconds ? 'custom-3' : 'custom-2' "
               @click="showPick = !showPick"
               ></lan-input>
    <div class="dropdown" v-if="showPick" @mouseleave="handleChange">
      <div class="cells-list">
        <ul>
          <li v-for="h in hoursList" @click="handleClick('hours', h)" :class="hours == h ? 'active': ''">{{h}}</li>
        </ul>
      </div>
      <div class="cells-list">
        <ul>
          <li v-for="m in minutesList" @click="handleClick('minutes', m)" :class="minutes == m ? 'active': ''">{{m}}</li>
        </ul>
      </div>
      <div class="cells-list" v-if="showSeconds">
        <ul>
          <li v-for="s in minutesList" @click="handleClick('seconds', s)" :class="seconds == s ? 'active': ''">{{s}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import lanInput from '../lan-input/lan-input'
  import format from '../../base/format'

  export default{
    name: 'lan-timePicker',
    props: {
      placeholder: String,
      format: {
        type: String,
        default: 'HH:mm'
      }
    },
    components: {
      lanInput
    },
    computed: {
      hoursList () {
        let hours = [];
        for (let i = 0; i < 24; i ++) {
          hours.push(format.fix(i));
        }
        return hours;
      },
      minutesList () {
        let minutes = [];
        for (let i = 0; i < 60; i ++) {
          minutes.push(format.fix(i));
        }
        return minutes;
      },
      showSeconds () {
        return (this.format || '').indexOf('ss') !== -1;
      },
    },
    data() {
      return {
        date: format.initTimeDate(),
        pickValue: '',
        showPick: false,
        hours: '',
        minutes: '',
        seconds: ''
      }
    },
    methods: {
      handleClick(type, value) {
        if(type === 'hours') {
          this.date.setHours(value);
          this.hours = this.date.getHours();
        } else if(type === 'minutes') {
          this.date.setMinutes(value);
          this.minutes = this.date.getMinutes();
        } else if(type === 'seconds') {
          this.date.setSeconds(value);
          this.seconds = this.date.getSeconds();
        }
        this.pickValue = format.handleFormat(this.date, this.format);
      },
      handleChange() {
        this.showPick = false;
        this.$emit('change', this.pickValue);
      }
    }
  }
</script>

<style src="./lan-timePicker.css"></style>

