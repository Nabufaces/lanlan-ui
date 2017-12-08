<template>
  <article>
    <h1>Carousel 轮播图</h1>
    <p>一组图片或卡片进行轮播展现。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>按钮类型</h3>
    <lan-row>
      <lan-col span="18">
        <lan-carousel>
          <template v-for="n in 4">
            <lan-carousel-item>
              <div class="demo">{{n}}</div>
            </lan-carousel-item>
          </template>
        </lan-carousel>
      </lan-col>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        {{code}}
      </code>
    </pre>


    <h2>API</h2>

    <h3>lan-carousel props</h3>
    <lan-table :column="columnProps" :tableSource="sourceProps" :border="true"></lan-table>

    <h3>lan-carousel event</h3>
    <lan-table :column="columnEvents" :tableSource="sourceEvents" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'carousel',
    data() {
      return {
        code: `
        <lan-row>
          <lan-col span="18">
            <lan-carousel>
              <template v-for="n in 4">
                <lan-carousel-item>
                  <div class="demo">{{n}}</div>
                </lan-carousel-item>
              </template>
            </lan-carousel>
          </lan-col>
        </lan-row>
        <style scoped>
          .demo {
            height: 200px;
            line-height: 200px;
            text-align: center;
            color: #fff;
            font-size: 20px;
            background: #FF7846;
          }
        </style>
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
        sourceProps: [{
          property: 'value',
          explain: '轮播图的索引',
          type: 'Number',
          default: 0
        }, {
          property: 'height',
          explain: '轮播图的高度，可填 auto 或具体高度数值，单位 px',
          type: 'String | Number',
          default: 'auto'
        }, {
          property: 'loop',
          explain: '是否开启循环',
          type: 'Boolean',
          default: 'true'
        }, {
          property: 'autoplay',
          explain: '是否自动切换',
          type: 'Boolean',
          default: 'true'
        }, {
          property: 'autoplay-speed',
          explain: '自动切换的时间间隔，单位为毫秒',
          type: 'Number',
          default: 4000
        }, {
          property: 'dots',
          explain: '是否显示指示器',
          type: 'Boolean',
          default: 'Boolean'
        }, {
          property: 'easing',
          explain: '动画效果',
          type: 'String',
          default: 'ease'
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
          explain: '轮播图切换时触发',
          back: '当前索引'
        }]
      }
    }
  }
</script>

<style scoped>
  .demo {
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #FF7846;
  }
</style>
