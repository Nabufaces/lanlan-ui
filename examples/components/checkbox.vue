<template>
  <article>
    <h1>Checkbox 复选框</h1>
    <p>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>单独使用</h3>
    <lan-row>
      <lan-checkbox v-model="checkboxValue">复选框</lan-checkbox>
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

    <h3>组合使用</h3>
    <lan-row>
      <lan-checkbox-group v-model="checkboxGroup">
        <lan-checkbox label="apple">apple</lan-checkbox>
        <lan-checkbox label="android">android</lan-checkbox>
        <lan-checkbox label="windows">windows</lan-checkbox>
      </lan-checkbox-group>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-checkbox-group v-model="checkboxGroup"&gt
          &ltlan-checkbox label="apple"&gtapple&lt/lan-checkbox&gt
          &ltlan-checkbox label="android"&gtandroid&lt/lan-checkbox&gt
          &ltlan-checkbox label="windows"&gtwindows&lt/lan-checkbox&gt
        &lt/lan-checkbox-group&gt
        &ltscript&gt
          export default {
            data () {
              return {
                checkboxGroup: ['apple']
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
    name: 'radio',
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
    }
  }
</script>
