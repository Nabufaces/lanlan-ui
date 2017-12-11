<template>
  <article>
    <h1>Pagination 分页</h1>
    <p>当数据量较多时，使用分页可以快速进行数据切换。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-row>
      <lan-pagination :total="16"></lan-pagination>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-pagination :total="16"&gt&lt/lan-pagination&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-Pagination props</h3>
    <lan-table :column="columnProps" :tableSource="sourceProps" :border="true"></lan-table>

    <h3>lan-Pagination event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'backTop',
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
        sourceProps: [{
          property: 'total',
          explain: '总页数',
          type: 'Number',
          default: '必填'
        }, {
          property: 'is-ellipsis',
          explain: '是否展示总页数',
          type: 'Boolean',
          default: true
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
          explain: '页数改变时触发',
          back: '当前页'
        }]
      }
    }
  }
</script>

<style scoped>
  .top{
    padding: 10px;
    background: #1BAEFF;
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
