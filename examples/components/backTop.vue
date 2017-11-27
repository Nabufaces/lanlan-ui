<template>
  <article>
    <h1>BackTop 返回顶部</h1>
    <p>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-row>
      <lan-back-top></lan-back-top>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-back-top&gt&lt/lan-back-top&gt
      </code>
    </pre>

    <h3>自定义样式</h3>
    <lan-row>
      <lan-back-top :bottom="150">
        <div class="top">返回顶端</div>
      </lan-back-top>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-back-top :bottom="150"&gt
          &ltdiv class="top"&gt返回顶端&lt/div&gt
        &lt/lan-back-top&gt
        &ltstyle scoped&gt
          .top{
            padding: 10px;
            background: #1BAEFF;
            color: #fff;
            text-align: center;
            border-radius: 2px;
          }
        &lt/style&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-backTop props</h3>
    <lan-table :column="columnProps" :tableSource="sourceProps" :border="true"></lan-table>

    <h3>lan-backTop event</h3>
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
          property: 'height',
          explain: '页面滚动高度达到该值时显示',
          type: 'Number',
          default: 400
        }, {
          property: 'bottom',
          explain: '组件距离底部的距离',
          type: 'Number',
          default: 30
        }, {
          property: 'right',
          explain: '组件距离右部的距离',
          type: 'Number',
          default: 30
        }, {
          property: 'duration',
          explain: '滚动动画持续时间',
          type: 'Number',
          default: 1000
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
          explain: '点击时触发',
          back: '-'
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
