<template>
  <label class="lan-checkbox">
        <span class="checkbox">
            <span class="checkbox-inner" :class="currentValue ? 'checked': '' "></span>
            <input
              type="checkbox"
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
    name: 'lan-checkbox',
    mixins: [mixin]
  }
</script>

<style src="./lan-checkbox.css" scoped></style>

