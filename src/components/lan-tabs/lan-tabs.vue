<template>
  <ul :class="prefixCls">
    <li v-for="item, index in tabSource" :key="index"
        :class="[
          `${prefixCls}-item`,
          activeIndex === index ? 'active' : ''
        ]"
        @click="handleChange(index)">
      <a>
        <template v-if="item.icon">
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
        </template>
        {{item.label}}
      </a>
    </li>
  </ul>
</template>
<script>

  export default {
    name: 'lan-tabs',
    props: {
      tabSource: {
        type: Array,
        required: true
      },
      activeKey: String
    },
    data () {
      return {
        prefixCls: 'lan-tabs',
        activeIndex: this.handleUpdate()
      };
    },
    methods: {
      handleUpdate() {
        if(!this.activeKey) return 0;
        let index = 0;
        const tabSource = this.tabSource;
        for(let i = 0; i < tabSource.length; i++) {
          if(tabSource[i].label === this.activeKey) {
            index = i;
            break;
          }
        }
        return index;
      },
      handleChange(index) {
        this.activeIndex = index;
        this.$emit('change', this.tabSource[index].label);
      }
    }
  };
</script>
