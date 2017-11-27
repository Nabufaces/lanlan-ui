<template>
  <article>
    <h1>Radio 单选框</h1>
    <p>基础组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>单独使用</h3>
    <lan-row>
      <lan-radio v-model="radioValue">单选框</lan-radio>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-radio v-model="radioValue"&gt单选框&lt/lan-radio&gt
        &ltscript&gt
          export default {
            data () {
              return {
                radioValue: false
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>组合使用</h3>
    <lan-row>
      <lan-radio-group v-model="radioGroup">
        <lan-radio label="apple">apple</lan-radio>
        <lan-radio label="android">android</lan-radio>
        <lan-radio label="windows">windows</lan-radio>
      </lan-radio-group>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-radio-group v-model="radioGroup"&gt
          &ltlan-radio label="apple"&gtapple&lt/lan-radio&gt
          &ltlan-radio label="android"&gtandroid&lt/lan-radio&gt
          &ltlan-radio label="windows"&gtwindows&lt/lan-radio&gt
        &lt/lan-radio-group&gt
        &ltscript&gt
          export default {
            data () {
              return {
                radioGroup: 'apple'
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-radio props</h3>
    <lan-table :column="columnProps" :tableSource="sourceRadio" :border="true"></lan-table>

    <h3>lan-radio-group props</h3>
    <lan-table :column="columnProps" :tableSource="sourceRadioGroup" :border="true"></lan-table>

    <h3>lan-radio/lan-radio-group event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'radio',
    data() {
      return {
        radioValue: false,
        radioGroup: 'apple',
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
        sourceRadio: [{
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
        sourceRadioGroup: [{
          property: 'value',
          explain: '只在单独使用时有效。可以使用 v-model 双向绑定数据',
          type: 'Boolean',
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
          explain: '选项状态发生改变时触发',
          back: '当前状态值'
        }]
      }
    }
  }
</script>
