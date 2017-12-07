<template>
  <article>
    <h1>DatePicker 日期选择器</h1>
    <p>选择日期，支持年、月、日等类型，支持选择范围。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-date-picker placeholder="选择日期" style="width: 200px"></lan-date-picker>
    <pre v-highlight>
      <code class="html">
        &ltlan-date-picker placeholder="选择日期" style="width: 200px"&gt&lt/lan-date-picker&gt
      </code>
    </pre>

    <h3>含日期范围</h3>
    <lan-row>
      <lan-date-picker placeholder="选择日期" min="2015-09-01" max="2020-12-30" style="width: 200px"></lan-date-picker>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-date-picker placeholder="选择日期" min="2015-09-01" max="2020-12-30" style="width: 200px"&gt&lt/lan-date-picker&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-date-picker props</h3>
    <lan-table :column="columnProps" :tableSource="sourceTable" :border="true"></lan-table>

    <h3>lan-date-picker event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'datePicker',
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
          width: 180
        }],
        sourceTable: [{
          property: 'placeholder',
          explain: '非范围选择时的占位内容',
          type: 'String',
          default: '-'
        }, {
          property: 'min',
          explain: '最小日期',
          type: 'String',
          default: '1970-01-01'
        }, {
          property: 'max',
          explain: '最大日期',
          type: 'String',
          default: '3016-01-01'
        }, {
          property: 'format',
          explain: '日期展示格式',
          type: 'String',
          default: 'yyyy-MM-dd'
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
          width: 200
        }],
        sourceEvents: [{
          eventName: 'confirm',
          explain: '日期点击确认时触发',
          back: '格式化后的日期'
        }]
      }
    }
  }
</script>
