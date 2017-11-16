<template>
  <label class="lan-radio">
        <span class="radio">
            <span class="radio-inner" :class="currentValue ? 'checked': '' "></span>
            <input
              type="radio"
              class="ipt"
              :checked="currentValue"
              @change="change" />
        </span>
        <slot>{{ label }}</slot>
  </label>
</template>

<script>
  import mixin from '../../mixins/radio-check'

  export default{
    name: 'lan-radio',
    mixins: [mixin]
  }
</script>

<style src="./lan-radio.css"></style>

