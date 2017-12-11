<template>
  <article>
    <h1>Input 输入框</h1>
    <p>基本表单组件</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-input placeholder="请输入内容" style="width: 200px"></lan-input>
    <pre v-highlight>
      <code class="html">
        &ltlan-input placeholder="请输入内容" style="width: 200px"&gt&lt/lan-input&gt
      </code>
    </pre>

    <h3>input禁用</h3>
    <lan-input placeholder="disabled" :disabled="true" style="width: 200px"></lan-input>
    <pre v-highlight>
      <code class="html">
        &ltlan-input placeholder="disabled" :disabled="true" style="width: 200px"&gt&lt/lan-input&gt
      </code>
    </pre>

    <h3>带Icon的input</h3>
    <lan-input prefixIcon="search" style="width: 200px"></lan-input>
    <lan-input suffixIcon="add" style="width: 200px"></lan-input>
    <pre v-highlight>
      <code class="html">
        &ltlan-input prefixIcon="search" style="width: 200px"&gt&lt/lan-input&gt
        &ltlan-input suffixIcon="add" style="width: 200px"&gt&lt/lan-input&gt
      </code>
    </pre>

    <h3>复合型输入框</h3>
    <p>通过前置和后置的 slot 可以实现复合型的输入框。</p>
    <lan-input placeholder="请输入内容" style="width: 400px">
      <template slot="prepend">
        <span>Http://</span>
      </template>
      <template slot="append">
        <lan-icon name="search"></lan-icon>&nbsp;搜索
      </template>
    </lan-input>
    <pre v-highlight>
      <code class="html">
        &ltlan-input placeholder="请输入内容" style="width: 400px"&gt
          &lttemplate slot="prepend"&gt
            &ltspan&gtHttp://&lt/span&gt
          &lt/template&gt
          &lttemplate slot="append"&gt
            &ltlan-icon name="search"&gt&lt/lan-icon&gt&nbsp;搜索
          &lt/template&gt
        &lt/lan-input&gt
      </code>
    </pre>

    <h3>输入文本框</h3>
    <lan-input type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="textarea..." style="width: 400px"></lan-input>
    <pre v-highlight>
      <code class="html">
        &ltlan-input type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="textarea..." style="width: 400px"&gt
        &lt/lan-input&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-input props</h3>
    <lan-table :column="columnProps" :tableSource="sourceTable" :border="true"></lan-table>

    <h3>lan-input event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'input',
    data() {
      return {
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
                  输入框类型，可选值为 <code>text</code> <code>password</code> <code>textarea</code> <code>url</code> <code>email</code> <code>date</code>
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
        sourceTable: [{
          property: 'value',
          explain: 'input 绑定的值，可使用 v-model 双向绑定',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'type',
          explain: '输入框类型',
          type: 'String',
          default: 'text'
        }, {
          property: 'placeholder',
          explain: '非范围选择时的占位内容',
          type: 'String',
          default: '-'
        }, {
          property: 'readonly',
          explain: '是否只读',
          type: 'Boolean',
          default: '-'
        }, {
          property: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          default: '-'
        }, {
          property: 'autofocus',
          explain: '是否自动获取焦点',
          type: 'Boolean',
          default: '-'
        }, {
          property: 'autocomplete',
          explain: '是否自动完成',
          type: 'String',
          default: 'off'
        }, {
          property: 'maxlength',
          explain: '文本框最大输入长度',
          type: 'Number',
          default: '-'
        }, {
          property: 'rows',
          explain: '文本域默认行数，仅在 textarea 类型下有效',
          type: 'Number',
          default: '2'
        }, {
          property: 'autosize',
          explain: '自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }',
          type: 'Boolean | Object',
          default: 'false'
        }, {
          property: 'prefix-icon',
          explain: '输入框头部图标',
          type: 'String',
          default: '-'
        }, {
          property: 'suffix-icon',
          explain: '输入框尾部图标',
          type: 'String',
          default: '-'
        }, {
          property: 'custom-class',
          explain: '扩展样式',
          type: 'String',
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
          width: 200
        }],
        sourceEvents: [{
          eventName: 'input',
          explain: '在 Input 输入值时触发',
          back: '变化的 value'
        }, {
          eventName: 'change',
          explain: '在 Input 值改变时触发',
          back: '变化后的 value'
        }, {
          eventName: 'blur',
          explain: '在 Input 失去焦点时触发',
          back: '-'
        }, {
          eventName: 'focus',
          explain: '在 Input 获得焦点时触发',
          back: '-'
        }, {
          eventName: 'click',
          explain: '在 Input 点击时触发',
          back: '-'
        }, {
          eventName: 'keyup',
          explain: '原生的 keyup 事件',
          back: '-'
        }, {
          eventName: 'keypress',
          explain: '原生的 keypress 事件',
          back: '-'
        }, {
          eventName: 'keydown',
          explain: '原生的 keydown 事件',
          back: '-'
        }]
      }
    }
  }
</script>
