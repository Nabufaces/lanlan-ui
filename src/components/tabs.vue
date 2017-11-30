<template>
  <article>
    <h1>Tabs 标签</h1>
    <p>选项卡切换组件</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础用法</h3>
    <lan-row>
      <lan-tabs :activeLabel="1">
        <lan-tab-pane :label="1">标签一</lan-tab-pane>
        <lan-tab-pane :label="2">标签二</lan-tab-pane>
        <lan-tab-pane :label="3">标签三</lan-tab-pane>
      </lan-tabs>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-tabs :activeLabel="1"&gt
          &ltlan-tab-pane :label="1"&gt标签一&lt/lan-tab-pane&gt
          &ltlan-tab-pane :label="2"&gt标签二&lt/lan-tab-pane&gt
          &ltlan-tab-pane :label="3"&gt标签三&lt/lan-tab-pane&gt
        &lt/lan-tabs&gt
      </code>
    </pre>

    <h3>自定义模板</h3>
    <lan-row>
      <lan-tabs :activeLabel="1">
        <lan-tab-pane :label="1">
          <lan-icon name="present"></lan-icon>&nbsp;标签一
        </lan-tab-pane>
        <lan-tab-pane :label="2">
          <lan-icon name="date"></lan-icon>&nbsp;标签二
        </lan-tab-pane>
        <lan-tab-pane :label="3">标签三</lan-tab-pane>
      </lan-tabs>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-tabs :activeLabel="1"&gt
          &ltlan-tab-pane :label="1"&gt
            &ltlan-icon name="present"&gt&lt/lan-icon&gt&nbsp;标签一
          &lt/lan-tab-pane&gt
          &ltlan-tab-pane :label="2"&gt
            &ltlan-icon name="date"&gt&lt/lan-icon&gt&nbsp;标签二
          &lt/lan-tab-pane&gt
          &ltlan-tab-pane :label="3"&gt标签三&lt/lan-tab-pane&gt
        &lt/lan-tabs&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-tabs props</h3>
    <lan-table :column="columnProps" :tableSource="tabsSource" :border="true"></lan-table>

    <h3>lan-tabs event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>

    <h3>lan-tab-pane props</h3>
    <lan-table :column="columnProps" :tableSource="paneSource" :border="true"></lan-table>
  </article>
</template>

<script>

  import LanIcon from "../../src/components/lan-icon/lan-icon.vue";

  export default {
    components: {LanIcon},
    name: 'tabs',
    data() {
      return {
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
        tabsSource: [{
          property: 'activeLabel',
          explain: '当前激活 tab 面板的 label',
          type: 'String | Number',
          default: '必填'
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
          width: 180
        }],
        sourceEvents: [{
          eventName: 'change',
          explain: 'tab 切换时触发',
          back: '选中 tab 的label'
        }],
        paneSource: [{
          property: 'label',
          explain: '用于标识当前面板，对应 active-label，默认为其索引值',
          type: 'String | Number',
          default: '必填'
        }]
      }
    }
  }
</script>
