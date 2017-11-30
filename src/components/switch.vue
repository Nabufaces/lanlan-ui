<template>
  <article>
    <h1>Switch 开关</h1>
    <p>在两种状态间切换时用到的开关选择器。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基本用法</h3>
    <lan-row>
      <lan-switch></lan-switch>&nbsp;
      <lan-switch :switchType="false"></lan-switch>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-switch&gt&lt/lan-switch&gt&nbsp;
        &ltlan-switch :switchType="false"&gt&lt/lan-switch&gt
      </code>
    </pre>

    <h3>颜色 尺寸配置</h3>
    <lan-row>
      <lan-switch size="large"></lan-switch>
      <lan-switch :switchType="true" activeColor="#0EDE00"></lan-switch>&nbsp;
      <lan-switch :switchType="false" inactiveColor="#FE4B4B"></lan-switch>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-switch size="large"&gt&lt/lan-switch&gt
        &ltlan-switch :switchType="true" activeColor="#0EDE00"&gt&lt/lan-switch&gt&nbsp;
        &ltlan-switch :switchType="false" inactiveColor="#FE4B4B"&gt&lt/lan-switch&gt&nbsp;
      </code>
    </pre>

    <h3>文字</h3>
    <lan-row>
      <lan-switch :switchType="true" onText="开" offText="关"></lan-switch>&nbsp;
      <lan-switch :switchType="false" size="large" onText="ON" offText="OFF"></lan-switch>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-switch :switchType="true" onText="开" offText="关">&lt/lan-switch>&nbsp;
        &ltlan-switch :switchType="false" size="large" onText="ON" offText="OFF">&lt/lan-switch>
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-switch props</h3>
    <lan-table :column="columnProps" :tableSource="sourceProps" :border="true"></lan-table>

    <h3>lan-switch event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
    </article>
</template>

<script>
  export default {
    name: 'switch',
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
            const index = params.index;
            const tr = params.tr;
            const td = params.td;
            if(tr.property === 'size') {
              return (
                <span>
                  开关尺寸，可选值为 <code>normal</code> <code>large</code>
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
          property: 'switchType',
          explain: '开关状态',
          type: 'Bollean',
          default: 'true'
        }, {
          property: 'size',
          type: 'String',
          default: 'normal'
        }, {
          property: 'activeColor',
          explain: '开启背景颜色',
          type: 'String',
          default: '#FF7846'
        }, {
          property: 'inactiveColor',
          explain: '关闭背景颜色',
          type: 'Boolean',
          default: '#686E74'
        }, {
          property: 'onText',
          explain: '开启时的文字',
          type: 'String',
          default: '-'
        }, {
          property: 'offText',
          explain: '关闭时的文字',
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
          width: 180
        }],
        sourceEvents: [{
          eventName: 'change',
          explain: '开关变化时触发，返回当前的状态',
          back: 'true | false'
        }]
      }
    }
  }
</script>
