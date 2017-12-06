<template>
  <article>
    <h1>MessageBox 消息弹框</h1>
    <p>类似于模态框的信息反馈组件，居中显示。有三种提示状态可选择。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-button classType="primary" @click="visible = true">点击打开messageBox</lan-button>
    <lan-message-box v-if="visible" type="success" @close="visible = false">
      <template slot="title">这是messageBox的标题</template>
      <span>这是messageBox的内容</span>
    </lan-message-box>
    <pre v-highlight>
      <code class="html">
        &ltlan-button classType="primary" @click="visible = true"&gt点击打开messageBox&lt/lan-button&gt
        &ltlan-message-box v-if="visible" type="success" @close="visible = false"&gt
          &lttemplate slot="title"&gt这是messageBox的标题&lt/template&gt
          &ltspan&gt这是messageBox的内容&lt/span&gt
        &lt/lan-message-box&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-messageBox props</h3>
    <lan-table :column="columnProps" :tableSource="sourceMessageBox" :border="true"></lan-table>

    <h3>lan-messageBox event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'messageBox',
    data() {
      return {
        visible: false,
        columnProps: [{
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
                <span>
                  消息弹框类型 <code>warning</code> <code>error</code> <code>success</code>
                </span>
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
        sourceMessageBox: [{
          property: 'title',
          explain: '消息弹框标题，可通过slot配置',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'message',
          explain: '消息弹框内容，可通过slot配置',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'type',
          type: 'String',
          default: '-'
        }, {
          property: 'closeWindow',
          explain: '点击消息弹框区域之外是否关闭',
          type: 'Boolean',
          default: 'true'
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
          eventName: 'confirm',
          explain: '点击确认按钮时触发',
          back: '-'
        }, {
          eventName: 'close',
          explain: '点击确认按钮或点击消息弹框区域之外关闭时触发',
          back: '-'
        }]
      }
    }
  }
</script>
