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

    <h2 style="margin-top: 40px">基础用法</h2>
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

    <h2 style="margin-top: 40px">flex布局</h2>
    <h3>子元素向左排列</h3>
    <lan-row type="flex" justify="start">
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt子元素向左排列&lt/h3&gt
        &ltlan-row type="flex" justify="start"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>子元素向右排列</h3>
    <lan-row type="flex" justify="end">
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt子元素向右排列&lt/h3&gt
        &ltlan-row type="flex" justify="end"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>子元素向中排列</h3>
    <lan-row type="flex" justify="center">
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt子元素向中排列&lt/h3&gt
        &ltlan-row type="flex" justify="center"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>子元素等宽排列</h3>
    <lan-row type="flex" justify="space-between">
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt子元素等宽排列&lt/h3&gt
        &ltlan-row type="flex" justify="space-between"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>子元素分散排列</h3>
    <lan-row type="flex" justify="space-around">
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt子元素分散排列&lt/h3&gt
        &ltlan-row type="flex" justify="space-around"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>顶部对齐</h3>
    <lan-row type="flex" justify="center" align="top">
      <lan-col span="4"><div class="demo1" style="height: 80px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 40px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1" style="height: 100px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 60px">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt顶部对齐&lt/h3&gt
        &ltlan-row type="flex" justify="center" align="top"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 80px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 40px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 100px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 60px"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>底部对齐</h3>
    <lan-row type="flex" justify="center" align="bottom">
      <lan-col span="4"><div class="demo1" style="height: 80px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 40px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1" style="height: 100px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 60px">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt底部对齐&lt/h3&gt
        &ltlan-row type="flex" justify="center" align="bottom"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 80px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 40px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 100px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 60px"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>居中对齐</h3>
    <lan-row type="flex" justify="center" align="middle">
      <lan-col span="4"><div class="demo1" style="height: 80px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 40px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo1" style="height: 100px">col-4</div></lan-col>
      <lan-col span="4"><div class="demo2" style="height: 60px">col-4</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt居中对齐&lt/h3&gt
        &ltlan-row type="flex" justify="center" align="middle"&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 80px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 40px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo1" style="height: 100px"&gtcol-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="4"&gt&ltdiv class="demo2" style="height: 60px"&gtcol-4&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
      </code>
    </pre>
    <h3>栅格顺序</h3>
    <lan-row type="flex">
      <lan-col span="6" order="4"><div class="demo1">1 | order-4</div></lan-col>
      <lan-col span="6" order="3"><div class="demo2">2 | order-3</div></lan-col>
      <lan-col span="6" order="2"><div class="demo1">3 | order-2</div></lan-col>
      <lan-col span="6" order="1"><div class="demo2">4 | order-1</div></lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &lth3&gt栅格顺序&lt/h3&gt
        &ltlan-row type="flex"&gt
          &ltlan-col span="6" order="4"&gt&ltdiv class="demo1"&gt1 | order-4&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6" order="3"&gt&ltdiv class="demo2"&gt2 | order-3&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6" order="2"&gt&ltdiv class="demo1"&gt3 | order-2&lt/div&gt&lt/lan-col&gt
          &ltlan-col span="6" order="1"&gt&ltdiv class="demo2"&gt4 | order-1&lt/div&gt&lt/lan-col&gt
        &lt/lan-row&gt
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
        label: "说明",
        render: (h, params) => {
          const tr = params.tr;
          if(tr.property === 'align') {
            return (
              <span>
                flex 布局下的垂直对齐方式，可选值为<code>top</code> <code>middle</code> <code>bottom</code>
              </span>
            )
          } else if(tr.property === 'justify') {
            return (
              <span>
                flex 布局下的水平排列方式，可选值为<code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>
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
      sourceRow: [{
        property: 'gutter',
        explain: '栅格间距，单位 px，左右平分',
        type: 'Number',
        default: 0
      }, {
        property: 'type',
        explain: '布局模式，可选值为 flex 或不选，在现代浏览器下有效',
        type: 'String',
        default: '-'
      }, {
        property: 'align',
        type: 'String',
        default: '-'
      }, {
        property: 'justify',
        type: 'String',
        default: '-'
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
        property: 'order',
        explain: '栅格的顺序，在 flex 布局模式下有效',
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
