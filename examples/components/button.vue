<template>
  <article>
    <h1>Button 按钮</h1>
    <p>基础组件，触发业务逻辑时使用。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>按钮类型</h3>
    <lan-row>
      <lan-button classType="default">default</lan-button>&nbsp;
      <lan-button classType="primary">primary</lan-button>&nbsp;
      <lan-button classType="success">success</lan-button>&nbsp;
      <lan-button classType="warning">warning</lan-button>&nbsp;
      <lan-button classType="danger">danger</lan-button>&nbsp;
      <lan-button classType="info">info</lan-button>&nbsp;
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-button classType="default"&gtdefault&lt/lan-button&gt&nbsp;
        &ltlan-button classType="primary"&gtprimary&lt/lan-button&gt&nbsp;
        &ltlan-button classType="success"&gtsuccess&lt/lan-button&gt&nbsp;
        &ltlan-button classType="warning"&gtwarning&lt/lan-button&gt&nbsp;
        &ltlan-button classType="danger"&gtdanger&lt/lan-button&gt&nbsp;
        &ltlan-button classType="info"&gtinfo&lt/lan-button&gt
      </code>
    </pre>

    <h3>按钮大小</h3>
    <lan-row>
      <lan-button size="tiny">tiny</lan-button>&nbsp;
      <lan-button size="small">small</lan-button>&nbsp;
      <lan-button size="normal">normal</lan-button>&nbsp;
      <lan-button size="large">large</lan-button>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-button size="size"&gtsize&lt/lan-button&gt&nbsp;
        &ltlan-button size="small"&gtsmall&lt/lan-button&gt&nbsp;
        &ltlan-button size="normal"&gtnormal&lt/lan-button&gt&nbsp;
        &ltlan-button size="large"&gtlarge&lt/lan-button&gt
      </code>
    </pre>

    <h3>按钮禁用 自定义</h3>
    <lan-row>
      <lan-button disabled>disabled</lan-button>
      <lan-button classType="primary">
        <lan-icon name="search"></lan-icon>&nbsp;自定义
      </lan-button>
      <lan-button classType="success">
        自定义&nbsp;<lan-icon name="add"></lan-icon>
      </lan-button>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-button disabled&gtdisabled&lt/lan-button&gt
        &ltlan-button classType="primary"&gt
          &ltlan-icon name="search"&gt&lt/lan-icon&gt&nbsp;自定义
        &lt/lan-button&gt
        &ltlan-button classType="success"&gt
          自定义&nbsp;&ltlan-icon name="add"&gt&lt/lan-icon&gt
        &lt/lan-button&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-button props</h3>
    <lan-table :column="columnProps" :tableSource="sourceProps" :border="true"></lan-table>

    <h3>lan-button event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'button',
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
            if(tr.property === 'classType') {
              return (
                <span>
                  按钮类型 <code>primary</code> <code>success</code> <code>warning</code> <code>info</code> <code>danger</code> <code>default</code>
                </span>
              )
            } else if(tr.property === 'size') {
              return (
                <span>
                按钮大小 <code>tiny</code> <code>small</code> <code>normal</code> <code>large</code>
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
        sourceProps: [{
          property: 'classType',
          type: 'String',
          default: 'default'
        }, {
          property: 'size',
          type: 'String',
          default: 'normal'
        }, {
          property: 'disabled',
          explain: '设置按钮为禁用状态',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'customClass',
          explain: '样式扩展',
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
          width: 100
        }],
        sourceEvents: [{
          eventName: 'click',
          explain: '按钮点击时触发',
          back: '-'
        }]
      }
    }
  }
</script>
