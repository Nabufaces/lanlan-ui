<template>
  <article>
    <h1>Message 消息</h1>
    <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有三种提示状态可选择。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>单独使用</h3>
    <lan-row>
      <lan-button @click="handleWarning">显示警告</lan-button>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-checkbox v-model="checkboxValue"&gt复选框&lt/lan-checkbox&gt
        &ltscript&gt
          export default {
            data () {
              return {
                checkboxValue: false
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-checkbox props</h3>
    <lan-table :column="columnProps" :tableSource="sourceCheckbox" :border="true"></lan-table>

    <h3>lan-checkbox props</h3>
    <lan-table :column="columnProps" :tableSource="sourceCheckboxGroup" :border="true"></lan-table>

    <h3>lan-checkbox/lan-checkbox-group event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'message',
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
        sourceCheckbox: [{
          property: 'value',
          explain: '只在单独使用时有效。可以使用 v-model 双向绑定数据',
          type: 'Boolean',
          default: '-'
        }, {
          property: 'label',
          explain: '只在组合使用时有效。指定当前选项的 value 值',
          type: 'String | Number',
          default: '-'
        }],
        sourceCheckboxGroup: [{
          property: 'value',
          explain: '指定选中项目的集合，可以使用 v-model 双向绑定数据',
          type: 'Array',
          default: '[]'
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
          explain: '选项状态发生改变时触发',
          back: '当前状态值'
        }]
      }
    },
    methods: {
      handleWarning() {
      }
    }
  }
</script>
