<template>
  <div class="lan-timePicker">
    <lan-input :value="pickValue"
               :placeholder="placeholder"
               :readonly="true"
               suffixIcon="task-management"
               customClass="customClass"
               @click="showPick = !showPick"
               @blur="handleBlur"
               ></lan-input>
    <div class="dropdown" v-if="showPick">
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
      }
    },
    data() {
      return {
        pickValue: '',
        showPick: false,
        hours: '',
        minutes: ''
      }
    },
    methods: {
      handleClick(type, value) {
        this[type] = value;
      },
      handleBlur() {

      }
    }
  }
</script>

<style src="./lan-timePicker.css"></style>

