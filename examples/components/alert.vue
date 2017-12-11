<template>
  <article>
    <h1>Alert 警告提示</h1>
    <p>静态地呈现一些警告信息，可手动关闭。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-alert type="warning" class="demo">警告提示的文案</lan-alert>
    <lan-alert type="error" class="demo">错误提示的文案</lan-alert>
    <lan-alert type="success">成功提示的文案</lan-alert>
    <pre v-highlight>
      <code class="html">
        &ltlan-alert type="warning" class="demo"&gt警告提示的文案&lt/lan-alert&gt
        &ltlan-alert type="error" class="demo"&gt错误提示的文案&lt/lan-alert&gt
        &ltlan-alert type="success"&gt成功提示的文案&lt/lan-alert&gt
        &ltstyle scoped&gt
          .demo {
            margin-bottom: 15px;
          }
        &lt/style&gt
      </code>
    </pre>

    <h3>可关闭</h3>
    <lan-alert closable>可关闭</lan-alert>
    <pre v-highlight>
      <code class="html">
        &ltlan-alert closable&gt可关闭&lt/lan-alert&gt
      </code>
    </pre>

    <h3>带Icon</h3>
    <lan-alert type="warning" show-icon class="demo">警告提示的文案</lan-alert>
    <lan-alert type="error" show-icon class="demo">错误提示的文案</lan-alert>
    <lan-alert type="success" show-icon>成功提示的文案</lan-alert>
    <pre v-highlight>
      <code class="html">
        &ltlan-alert type="warning" show-icon class="demo"&gt警告提示的文案&lt/lan-alert&gt
        &ltlan-alert type="error" show-icon class="demo"&gt错误提示的文案&lt/lan-alert&gt
        &ltlan-alert type="success"&gt成功提示的文案&lt/lan-alert&gt
      </code>
    </pre>

    <h3>文字居中</h3>
    <lan-alert type="warning" show-icon center class="demo">警告提示的文案</lan-alert>
    <lan-alert type="error" show-icon center class="demo">错误提示的文案</lan-alert>
    <lan-alert type="success" show-icon center>成功提示的文案</lan-alert>
    <pre v-highlight>
      <code class="html">
        &ltlan-alert type="warning" show-icon center class="demo"&gt警告提示的文案&lt/lan-alert&gt
        &ltlan-alert type="error" show-icon center class="demo"&gt错误提示的文案&lt/lan-alert&gt
        &ltlan-alert type="success" show-icon center&gt成功提示的文案&lt/lan-alert&gt
      </code>
    </pre>

    <h3>带有 icon 和辅助性文字介绍</h3>
    <lan-alert type="warning" show-icon center class="demo">
      <template slot="title">
        警告提示的标题
      </template>
      警告提示的文案
    </lan-alert>
    <lan-alert type="error" show-icon center class="demo">
      <template slot="title">
        错误提示的标题
      </template>
       错误提示的文案
    </lan-alert>
    <lan-alert type="success" show-icon center>
      <template slot="title">
        成功提示的标题
      </template>
        成功提示的文案
    </lan-alert>
    <pre v-highlight>
      <code class="html">
        &ltlan-alert type="warning" show-icon center class="demo"&gt
          &lttemplate slot="title"&gt
            警告提示的标题
          &lt/template&gt
          警告提示的文案
        &lt/lan-alert&gt
        &ltlan-alert type="error" show-icon center class="demo"&gt
          &lttemplate slot="title"&gt
            错误提示的标题
          &lt/template&gt
           错误提示的文案
        &lt/lan-alert&gt
        &ltlan-alert type="success" show-icon center&gt
          &lttemplate slot="title"&gt
            成功提示的标题
          &lt/template&gt
            成功提示的文案
        &lt/lan-alert&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-alert props</h3>
    <lan-table :column="columnAlert" :tableSource="sourceAlert" :border="true"></lan-table>

    <h3>lan-alert event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>

    <h3>lan-alert slot</h3>
    <lan-table :column="columnSlot" :tableSource="sourceSlot" :border="true"></lan-table>
  </article>
</template>

<script>
  export default {
    name: 'alert',
    data() {
      return {
        columnAlert: [{
          prop: "property",
          label: "属性",
          width: 200
        }, {
          prop: "explain",
          label: "说明",
          render: (h, params) => {
            const tr = params.tr;
            if(tr.property === 'type') {
              return (
                <span>警告提示样式，可选值为<code>warning</code>、<code>error</code>、<code>success</code></span>
              )
            } else {
              return (
                <span>{tr['explain']}</span>
            )
            }
          }
        }, {
          prop: "type",
          label: "类型",
          width: 180
        }, {
          prop: "default",
          label: "默认值",
          width: 100
        }],
        sourceAlert: [{
          property: 'type',
          type: 'String',
          default: 'warning'
        }, {
          property: 'closable',
          explain: '是否可关闭',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'show-icon',
          explain: '是否显示图标',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'center',
          explain: '文字是否居中',
          type: 'Boolean',
          default: 'false'
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
          eventName: 'close',
          explain: '关闭时触发',
          back: '-'
        }],
        columnSlot: [{
          prop: "name",
          label: "名称",
          width: 200
        }, {
          prop: "explain",
          label: "说明"
        }],
        sourceSlot: [{
          name: '-',
          explain: '警告提示内容'
        }, {
          name: 'title',
          explain: '警告提示标题'
        }]
      }
    }
  }
</script>

<style scoped>
  .demo {
    margin-bottom: 15px;
  }
</style>
