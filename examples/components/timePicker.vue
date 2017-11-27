<template>
  <article>
    <h1>TimePicker 时间选择器</h1>
    <p>选择或输入标准时间，支持选择范围。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-time-picker placeholder="选择时间"></lan-time-picker>
    <pre v-highlight>
      <code class="html">
        &ltlan-time-picker placeholder="选择时间"&gt&lt/lan-time-picker&gt
      </code>
    </pre>

    <h3>含禁用时间段</h3>
    <lan-row>
      <lan-time-picker placeholder="选择时间" :disabledHours="[1,3,6]" :disabledMinutes="[5,10]"></lan-time-picker>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-time-picker placeholder="选择时间" :disabledHours="[1,3,6]" :disabledMinutes="[5,10]"&gt&lt/lan-time-picker&gt
      </code>
    </pre>

    <h3>时间格式化</h3>
    <lan-row>
      <lan-time-picker placeholder="选择时间" format="HH时mm分ss秒"></lan-time-picker>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-time-picker placeholder="选择时间" format="HH时mm分ss秒"&gt&lt/lan-time-picker&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-time-picker props</h3>
    <lan-table :column="columnProps" :tableSource="sourceTable" :border="true"></lan-table>

    <h3>lan-time-picker event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'timePicker',
    data() {
      return {
        checkboxValue: false,
        checkboxGroup: ['apple'],
        columnProps: [{
          prop: "property",
          label: "属性",
          width: 200
        }, {
          prop: "explain",
          label: "说明"
        }, {
          prop: "type",
          label: "类型",
          width: 180
        }, {
          prop: "default",
          label: "默认值",
          width: 100
        }],
        sourceTable: [{
          property: 'placeholder',
          explain: '非范围选择时的占位内容',
          type: 'String',
          default: '-'
        }, {
          property: 'format',
          explain: '展示的时间格式',
          type: 'String',
          default: 'HH:mm'
        }, {
          property: 'disabledHours',
          explain: '禁用小时段',
          type: 'Array',
          default: '-'
        }, {
          property: 'disabledMinutes',
          explain: '禁用分钟段',
          type: 'Array',
          default: '-'
        }, {
          property: 'disabledSeconds',
          explain: '禁用秒段',
          type: 'Array',
          default: '-'
        }],
        columnEvents: [{
          prop: "eventName",
          label: "事件名",
          width: 200
        }, {
          prop: "explain",
          label: "说明"
        }, {
          prop: "back",
          label: "返回值",
          width: 100
        }],
        sourceEvents: [{
          eventName: 'change',
          explain: '时间发生变化时触发',
          back: '格式化后的时间'
        }]
      }
    }
  }
</script>
