<template>
  <article>
    <h1>Grid 栅格</h1>
    <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
    <p>我们定义了两个概念，行<code>row</code>和列<code>col</code>，具体使用方法如下：</p>
    <ul class="ul">
      <li class="li">使用<code>row</code>在水平方向创建一行</li>
      <li class="li">将一组<code>col</code>插入在<code>row</code>中</li>
      <li class="li">在每个<code>col</code>中，键入自己的内容</li>
      <li class="li">通过设置<code>col</code>的span参数，指定跨越的范围，其范围是1到24</li>
      <li class="li">每个<code>row</code>中的col总和应该为24</li>
    </ul>

    <h2 style="margin-top: 40px">代码示例</h2>
    <lan-row>
      <lan-col span="12"><div class="demo1">col-12</div></lan-col>
      <lan-col span="12"><div class="demo2">col-12</div></lan-col>
    </lan-row>
    <lan-row>
      <lan-col span="8"><div class="demo1">col-8</div></lan-col>
      <lan-col span="8"><div class="demo2">col-8</div></lan-col>
      <lan-col span="8"><div class="demo1">col-8</div></lan-col>
    </lan-row>
    <lan-row>
      <lan-col span="6"><div class="demo1">col-6</div></lan-col>
      <lan-col span="6"><div class="demo2">col-6</div></lan-col>
      <lan-col span="6"><div class="demo1">col-6</div></lan-col>
      <lan-col span="6"><div class="demo2">col-6</div></lan-col>
    </lan-row>
    <lan-row :gutter="16">
      <lan-col span="6"><div class="demo1">col-6</div></lan-col>
      <lan-col span="6"><div class="demo2">col-6</div></lan-col>
      <lan-col span="6"><div class="demo1">col-6</div></lan-col>
      <lan-col span="6"><div class="demo2">col-6</div></lan-col>
    </lan-row>
    <lan-row>
      <lan-col span="6" :offset="2"><div class="demo1">col-6 offset-2</div></lan-col>
      <lan-col span="6" :push="3"><div class="demo2">col-6 push-3</div></lan-col>
    </lan-row>
    <lan-row>
      <lan-col span="6" :push="18"><div class="demo1">col-6 push-18</div></lan-col>
      <lan-col span="6" :pull="3"><div class="demo2">col-6 pull-3</div></lan-col>
    </lan-row>

    <pre v-highlight>
      <code class="html">
        &ltlan-row&gt
          &ltlan-col span="12"&gt&ltdiv class="demo1"&gtcol-12&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="12"&gt&ltdiv class="demo2"&gtcol-12&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-col span="8"&gt&ltdiv class="demo1"&gtcol-8&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="8"&gt&ltdiv class="demo2"&gtcol-8&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="8"&gt&ltdiv class="demo1"&gtcol-8&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-col span="6"&gt&ltdiv class="demo1"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo2"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo1"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo2"&gtcol-6&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltlan-row :gutter="16"&gt
          &ltlan-col span="6"&gt&ltdiv class="demo1"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo2"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo1"&gtcol-6&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6"&gt&ltdiv class="demo2"&gtcol-6&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-col span="6" :offset="2"&gt&ltdiv class="demo1"&gtcol-6 offset-2&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6" :push="3"&gt&ltdiv class="demo2"&gtcol-6 push-3&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-col span="6" :push="18"&gt&ltdiv class="demo1"&gtcol-6 push-18&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6" :pull="3"&gt&ltdiv class="demo2"&gtcol-6 pull-3&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
        &ltstyle scoped&gt
          .demo1, .demo2 {
            color: #fff;
            text-align: center;
            padding: 15px 0;
            margin: 10px 0;
          }
          .demo1 {
            background: #FF7846;
          }
          .demo2 {
            background: #FE4B4B;
          }
        &lt/style&gt
      </code>
    </pre>

    <h2>API</h2>
    <h3>lan-row props</h3>
    <lan-table :column="column" :tableSource="sourceRow" :border="true"></lan-table>

    <h3>lan-col props</h3>
    <lan-table :column="column" :tableSource="sourceCol" :border="true"></lan-table>
  </article>
</template>

<script>
  export default {
    name: 'grid',
    data() {
      return {
        column: [{
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
      sourceRow: [{
        property: 'gutter',
        explain: '栅格间距，单位 px，左右平分',
        type: 'Number',
        default: 0
      }, {
        property: 'custom-class',
        explain: '样式扩展',
        type: 'String',
        default: '-'
      }],
      sourceCol: [{
        property: 'span',
        explain: '栅格的占位格数，可选值为0~24的整数',
        type: 'Number | String',
        default: '-'
      }, {
        property: 'offset',
        explain: '栅格左侧的间隔格数，间隔内不可以有栅格',
        type: 'Number | String',
        default: '-'
      }, {
        property: 'push',
        explain: '栅格向右移动格数',
        type: 'Number | String',
        default: '-'
      }, {
        property: 'pull',
        explain: '栅格向左移动格数',
        type: 'Number | String',
        default: '-'
      }, {
        property: 'custom-class',
        explain: '样式扩展',
        type: 'String',
        default: '-'
      }]
      }
    }
  }
</script>


<style scoped>
  .demo1, .demo2 {
    color: #fff;
    text-align: center;
    padding: 15px 0;
    margin: 10px 0;
  }
  .demo1 {
    background: #FF7846;
  }
  .demo2 {
    background: #FE4B4B;
  }
</style>
