<template>
  <article>
    <h1>Badge 徽标</h1>
    <p>主要用于通知未读数的角标，提醒用户点击</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基本用法</h3>
    <lan-badge count="99">
      <div class="demo"></div>
    </lan-badge>
    <pre v-highlight>
      <code class="html">
        &ltlan-badge count="99"&gt
          &ltdiv class="demo"&gt&lt/div&gt
        &lt/lan-badge&gt
        &ltstyle scoped&gt
          .demo {
            width: 30px;
            height: 30px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
          }
        &lt/style&gt
      </code>
    </pre>

    <h3>小红点</h3>
    <lan-badge dot>
      <div class="demo"></div>
    </lan-badge>
    <pre v-highlight>
      <code class="html">
        &ltlan-badge dot&gt
          &ltdiv class="demo"&gt&lt/div&gt
        &lt/lan-badge&gt
      </code>
    </pre>

    <h3>封顶数字</h3>
    <lan-badge count="1000" overflowCount="999">
      <div class="demo"></div>
    </lan-badge>
    <pre v-highlight>
      <code class="html">
       &ltlan-badge count="1000" overflowCount="999"&gt
          &ltdiv class="demo"&gt&lt/div&gt
        &lt/lan-badge&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-badge props</h3>
    <lan-table :column="columnbadge" :tableSource="sourceBadge" :border="true"></lan-table>

  </article>
</template>

<script>

  export default {
    name: 'badge',
    data() {
      return {
        columnbadge: [{
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
        sourceBadge: [{
          property: 'count',
          explain: '显示的数字',
          type: 'String | Number',
          default: '-'
        }, {
          property: 'overflowCount',
          explain: '展示封顶的数字值',
          type: 'String | Number',
          default: 999
        }, {
          property: 'dot',
          explain: '不展示数字，只展示小红点',
          type: 'Boolean',
          default: 'false'
        }]
      }
    }
  }
</script>

<style scoped>
  .demo {
    width: 30px;
    height: 30px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
</style>
