<template>
  <div :class="classes">
    <div :class="outerClasses">
      <div :class="innerClasses">
        <div :class="bgClasses" :style="bgStyle"></div>
      </div>
    </div>
    <span :class="textClasses">
        <slot>
            <span v-if="currentStatus == 'error'">
                <lan-icon name="roundclosefill"></lan-icon> 失败
            </span>
            <span v-else-if="currentStatus == 'success'">
                <lan-icon name="roundcheckfill"></lan-icon> 成功
            </span>
            <span v-else>
                {{ percent }}%
            </span>
        </slot>
    </span>
  </div>
</template>
<script>
  import lanIcon from '../lan-icon'

  const prefixCls = 'lan-progress';

  export default {
    name: 'lan-progress',
    components: {
      lanIcon
    },
    props: {
      percent: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 10
      },
      error: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.currentStatus}`
        ]
      },
      outerClasses () {
        return `${prefixCls}-outer`;
      },
      innerClasses () {
        return `${prefixCls}-inner`;
      },
      bgClasses () {
        return `${prefixCls}-bg`;
      },
      bgStyle () {
        return {
          width: `${this.percent}%`,
          height: `${this.height}px`
        }
      },
      textClasses () {
        return `${prefixCls}-text`;
      },
      currentStatus() {
        if(this.error) {
          return 'error'
        } else if(this.percent === 100) {
          return 'success'
        } else {
          return 'active'
        }
      }
    }
  };
</script>
