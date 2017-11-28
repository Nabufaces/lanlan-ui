<template>
  <article>
    <h1>Tooltip 文字提示</h1>
    <p>文字提示气泡框，在鼠标悬停时显示</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <div class="box">
      <div class="top">
        <lan-tooltip content="Top-start 提示文字" placement="top-start">
          <lan-button size="small" classType="primary">上左</lan-button>
        </lan-tooltip>
        <lan-tooltip content="Top 提示文字 Top 提示文字" placement="top" :width="100">
          <lan-button size="small" classType="primary">上边</lan-button>
        </lan-tooltip>
        <lan-tooltip content="Top-end 提示文字" placement="top-end">
          <lan-button size="small" classType="primary">上右</lan-button>
        </lan-tooltip>
      </div>
      <div class="left">
        <lan-tooltip content="Left-start 提示文字" placement="left-start"  effect='light'>
          <lan-button size="small" classType="primary">左上</lan-button>
        </lan-tooltip><br/><br/>
        <lan-tooltip content="Left 提示文字" placement="left"  effect='light'>
          <lan-button size="small" classType="primary">左边</lan-button>
        </lan-tooltip><br/><br/>
        <lan-tooltip content="Left-end 提示文字" placement="left-end"  effect='light'>
          <lan-button size="small" classType="primary">左下</lan-button>
        </lan-tooltip>
      </div>
      <div class="right">
        <lan-tooltip content="Right-start 提示文字" placement="right-start">
          <lan-button size="small" classType="primary">右上</lan-button>
        </lan-tooltip><br/><br/>
        <lan-tooltip content="Right 提示文字" placement="right">
          <lan-button size="small" classType="primary">右边</lan-button>
        </lan-tooltip><br/><br/>
        <lan-tooltip content="Right-end 提示文字" placement="right-end">
          <lan-button size="small" classType="primary">右下</lan-button>
        </lan-tooltip>
      </div>
      <div class="bottom">
        <lan-tooltip content="Bottom-start 提示文字" placement="bottom-start" effect='light'>
          <lan-button size="small" classType="primary">下左</lan-button>
        </lan-tooltip>
        <lan-tooltip content="Bottom 提示文字" placement="bottom" effect='light'>
          <lan-button size="small" classType="primary">下边</lan-button>
        </lan-tooltip>
        <lan-tooltip content="Bottom-end 提示文字" placement="bottom-end" effect='light'>
          <lan-button size="small" classType="primary">下右</lan-button>
        </lan-tooltip>
      </div>
    </div>
    <pre v-highlight>
      <code class="html">
        &ltdiv class="box"&gt
          &ltdiv class="top"&gt
            &ltlan-tooltip content="Top-start 提示文字" placement="top-start"&gt
              &ltlan-button size="small" classType="primary"&gt上左&lt/lan-button&gt
            &lt/lan-tooltip&gt
            &ltlan-tooltip content="Top 提示文字 Top 提示文字" placement="top" :width="100"&gt
              &ltlan-button size="small" classType="primary"&gt上边&lt/lan-button&gt
            &lt/lan-tooltip&gt
            &ltlan-tooltip content="Top-end 提示文字" placement="top-end"&gt
              &ltlan-button size="small" classType="primary"&gt上右&lt/lan-button&gt
            &lt/lan-tooltip&gt
          &lt/div&gt
          &ltdiv class="left"&gt
            &ltlan-tooltip content="Left-start 提示文字" placement="left-start"  effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt左上&lt/lan-button&gt
            &lt/lan-tooltip&gt&ltbr/&gt&ltbr/&gt
            &ltlan-tooltip content="Left 提示文字" placement="left"  effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt左边&lt/lan-button&gt
            &lt/lan-tooltip&gt&ltbr/&gt&ltbr/&gt
            &ltlan-tooltip content="Left-end 提示文字" placement="left-end"  effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt左下&lt/lan-button&gt
            &lt/lan-tooltip&gt
          &lt/div&gt
          &ltdiv class="right"&gt
            &ltlan-tooltip content="Right-start 提示文字" placement="right-start"&gt
              &ltlan-button size="small" classType="primary"&gt右上&lt/lan-button&gt
            &lt/lan-tooltip&gt&ltbr/&gt&ltbr/&gt
            &ltlan-tooltip content="Right 提示文字" placement="right"&gt
              &ltlan-button size="small" classType="primary"&gt右边&lt/lan-button&gt
            &lt/lan-tooltip&gt&ltbr/&gt&ltbr/&gt
            &ltlan-tooltip content="Right-end 提示文字" placement="right-end"&gt
              &ltlan-button size="small" classType="primary"&gt右下&lt/lan-button&gt
            &lt/lan-tooltip&gt
          &lt/div&gt
          &ltdiv class="bottom"&gt
            &ltlan-tooltip content="Bottom-start 提示文字" placement="bottom-start" effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt下左&lt/lan-button&gt
            &lt/lan-tooltip&gt
            &ltlan-tooltip content="Bottom 提示文字" placement="bottom" effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt下边&lt/lan-button&gt
            &lt/lan-tooltip&gt
            &ltlan-tooltip content="Bottom-end 提示文字" placement="bottom-end" effect='light'&gt
              &ltlan-button size="small" classType="primary"&gt下右&lt/lan-button&gt
            &lt/lan-tooltip&gt
          &lt/div&gt
        &lt/div&gt
        &ltstyle scoped&gt
          .box {
            width: 500px;
            margin: 100px 150px;
          }
          .box .top {
            text-align: center;
            margin-bottom: 20px;
          }
          .box .right {
            float: right;
            width: 150px;
            margin-bottom: 20px;
          }
          .box .bottom {
            clear: both;
            text-align: center;
          }
          .box .left {
            float: left;
            width: 150px;
            margin-bottom: 20px;
          }
        &lt/style&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-tooltip props</h3>
    <lan-table :column="columnProps" :tableSource="sourceSelect" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'tooltip',
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
        sourceSelect: [{
          property: 'placement',
          explain: '提示框出现的位置，可选值为top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end',
          type: 'String',
          default: 'top'
        }, {
          property: 'content',
          explain: 'Tooltip内容',
          type: 'String',
          default: '-'
        }, {
          property: 'effect',
          explain: '提供的主题，可选值dark light',
          type: 'String',
          default: 'dark'
        }, {
          property: 'delay',
          explain: '延迟出现时间',
          type: 'Number',
          default: 100
        }, {
          property: 'width',
          explain: 'Tooltip 宽度,设置后文字超出会自动换行',
          type: 'Number',
          default: '-'
        }]
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 500px;
    margin: 100px 150px;
  }
  .box .top {
    text-align: center;
    margin-bottom: 20px;
  }
  .box .right {
    float: right;
    width: 150px;
    margin-bottom: 20px;
  }
  .box .bottom {
    clear: both;
    text-align: center;
  }
  .box .left {
    float: left;
    width: 150px;
    margin-bottom: 20px;
  }
</style>
