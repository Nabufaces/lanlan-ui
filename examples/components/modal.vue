<template>
  <article>
    <h1>Modal 模态框</h1>
    <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-button size="small" classType="primary" @click="handleModal">点击打开modal</lan-button>
    <lan-modal title="标题" :showModal="showModal" @close="showModal = false">
      <span>这是modal模板</span>
    </lan-modal>
    <pre v-highlight>
      <code class="html">
        &ltlan-button size="small" classType="primary" @click="handleModal"&gt点击打开modal&lt/lan-button&gt
        &ltlan-modal title="标题" :showModal="showModal" @close="showModal = false"&gt
          &ltspan&gt这是modal模板&lt/span&gt
        &lt/lan-modal&gt
        &ltscript&gt
          export default {
            data() {
              return {
                showModal: false
              }
            },
            methods: {
              handleModal(){
                this.showModal = true;
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-modal props</h3>
    <lan-table :column="columnModal" :tableSource="sourceModal" :border="true"></lan-table>

    <h3>lan-modal slot</h3>
    <lan-table :column="columnSlot" :tableSource="sourceSlot" :border="true"></lan-table>

    <h3>lan-modal event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'modal',
    data() {
      return {
        showModal: false,
        columnModal: [{
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
        sourceModal: [{
          property: 'show-modal',
          explain: '是否显示模态框',
          type: 'Boolean',
          default: '必填'
        }, {
          property: 'title',
          explain: '模态框标题',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'width',
          explain: '模态框宽度',
          type: 'Number',
          default: 400
        }, {
          property: 'show-close',
          explain: '是否显示关闭按钮',
          type: 'Boolean',
          default: 'true'
        }, {
          property: 'close-window',
          explain: '点击模态框区域之外是否关闭',
          type: 'Boolean',
          default: 'true'
        }],
        columnSlot: [{
          prop: "name",
          label: "名称",
          width: 300
        }, {
          prop: "explain",
          label: "说明"
        }],
        sourceSlot: [{
          name: 'title',
          explain: '模态框标题'
        }, {
          name: 'default',
          explain: '模态框内容'
        }, {
          name: 'footer',
          explain: '模态框页脚'
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
          explain: '关闭模态框时触发',
          back: '-'
        }, {
          eventName: 'cancel',
          explain: '点击取消按钮时触发',
          back: '-'
        }, {
          eventName: 'confirm',
          explain: '点击确定按钮时触发',
          back: '-'
        }]
      }
    },
    methods: {
      handleModal(){
        this.showModal = true;
      }
    }
  }
</script>
