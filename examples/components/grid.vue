<template>
  <article>

    <h1>Grid 栅格</h1>
    <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
    <p>我们定义了两个概念，行<code>row</code>和列<code>col</code>，具体使用方法如下：</p>
    <ul>
      <li>使用<code>row</code>在水平方向创建一行</li>
      <li>将一组<code>col</code>插入在<code>row</code>中</li>
      <li>在每个<code>col</code>中，键入自己的内容</li>
      <li>通过设置<code>col</code>的span参数，指定跨越的范围，其范围是1到24</li>
      <li>每个<code>row</code>中的col总和应该为24</li>
    </ul>

    <h2>代码示例</h2>
    <lan-row customClass="demo-grid">
      <lan-col span="12"><div class="demo">col-12</div></lan-col>
      <lan-col span="12"><div class="demo">col-12</div></lan-col>
    </lan-row>
    <lan-row customClass="demo-grid">
      <lan-col span="8"><div class="demo">col-8</div></lan-col>
      <lan-col span="8"><div class="demo">col-8</div></lan-col>
      <lan-col span="8"><div class="demo">col-8</div></lan-col>
    </lan-row>
    <lan-row customClass="demo-grid">
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
    </lan-row>
    <lan-row customClass="demo-grid" :gutter="16">
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
      <lan-col span="6"><div class="demo">col-6</div></lan-col>
    </lan-row>
    <lan-row customClass="demo-grid">
      <lan-col span="6" :offset="2"><div class="demo">col-6 offset-2</div></lan-col>
      <lan-col span="6" :push="3"><div class="demo">col-6 push-3</div></lan-col>
    </lan-row>
    <lan-row customClass="demo-grid">
      <lan-col span="6" :push="18"><div class="demo">col-6 push-18</div></lan-col>
      <lan-col span="6" :pull="3"><div class="demo">col-6 pull-3</div></lan-col>
    </lan-row>

    <h2>API</h2>
  </article>
</template>

<script>
  export default {
    name: 'grid'
  }
</script>

<style lang="less" scoped>
  .demo-grid {
    .lan-col {
      color: #fff;
      text-align: center;
      padding: 15px 0;
      margin: 10px 0;
      background: #FF7846;
      &:nth-child(even) {
        background: #FE4B4B;
      }
    }
  }
</style>
