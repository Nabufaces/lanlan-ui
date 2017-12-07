<template>
  <article>
    <h1>Select 选择器</h1>
    <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
    <p>选择器支持单选、搜索，以及键盘快捷操作。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-select v-model="selectedValue" style="width: 200px">
      <lan-option :value="item.value" :label="item.label" v-for="item in source" :key="item.value"></lan-option>
    </lan-select>
    <p>{{selectedValue}}</p>
    <pre v-highlight>
      <code class="html">
        &ltlan-select v-model="selectedValue" style="width: 200px"&gt
          &ltlan-option :value="item.value" :label="item.label" v-for="item in source" :key="item.value"&gt&lt/lan-option&gt
        &lt/lan-select&gt
        &ltscript&gt
          export default {
            data() {
              return {
                source: [{
                  value: 0,
                  label: '黄金糕'
                }, {
                  value: 1,
                  label: '双皮奶'
                }, {
                  value: 2,
                  label: '蚵仔煎',
                  disabled: true
                }, {
                  value: 3,
                  label: '龙须面'
                }, {
                  value: 4,
                  label: '北京烤鸭'
                }, {
                  value: 5,
                  label: '北京糖葫芦'
                }]
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>含禁止</h3>
    <lan-select placeholder="含禁止" style="width: 200px">
      <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>
    </lan-select>
    <pre v-highlight>
      <code class="html">
        &ltlan-select placeholder="含禁止" style="width: 200px"&gt
          &ltlan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"&gt&lt/lan-option&gt
        &lt/lan-select&gt
      </code>
    </pre>

    <h3>可搜索</h3>
    <lan-select placeholder="含搜索" filterable style="width: 200px">
      <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>
    </lan-select>
    <pre v-highlight>
      <code class="html">
        &ltlan-select placeholder="含搜索" filterable style="width: 200px"&gt
          &ltlan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"&gt&lt/lan-option&gt
        &lt/lan-select&gt
      </code>
    </pre>

    <h3>自定义模板</h3>
    <lan-select placeholder="自定义模板" style="width: 200px">
      <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">
        <span>{{item.label}}</span><br/>
        <span>{{item.value}}</span>
      </lan-option>
    </lan-select>
    <pre v-highlight>
      <code class="html">
        {{tpl}}
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-select props</h3>
    <lan-table :column="columnProps" :tableSource="sourceSelect" :border="true"></lan-table>

    <h3>lan-option props</h3>
    <lan-table :column="columnProps" :tableSource="sourceOption" :border="true"></lan-table>

    <h3>lan-select event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'select',
    watch: {
      selectedValue(value) {
        console.log(value)
      }
    },
    data() {
      return {
        selectedValue: '',
        source: [{
          value: 0,
          label: '黄金糕'
        }, {
          value: 1,
          label: '双皮奶'
        }, {
          value: 2,
          label: '蚵仔煎',
          disabled: true
        }, {
          value: 3,
          label: '龙须面'
        }, {
          value: 4,
          label: '北京烤鸭'
        }, {
          value: 5,
          label: '北京糖葫芦'
        }],
        tpl: `
        <lan-select placeholder="自定义模板" style="width: 200px">
          <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">
            <span>{{item.label}}</span><br/>
            <span>{{item.value}}</span>
          </lan-option>
        </lan-select>
        `,
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
        sourceSelect: [{
          property: 'placeholder',
          explain: '非范围选择时的占位内容',
          type: 'String',
          default: '-'
        }, {
          property: 'disabled',
          explain: '输入框是否禁用',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'filterable',
          explain: '是否支持搜索',
          type: 'Boolean',
          default: 'false'
        }],
        sourceOption: [{
          property: 'label',
          explain: '选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value',
          type: 'String',
          default: '-'
        }, {
          property: 'value',
          explain: '选项值',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'disabled',
          explain: '是否禁用当前项',
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
          width: 200
        }],
        sourceEvents: [{
          eventName: 'selected',
          explain: '选项选中时触发',
          back: '选中的 value'
        }]
      }
    }
  }
</script>
