<template>
  <article>
    <h1>LoadingBar 加载进度条</h1>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基本用法</h3>
    <lan-row>
      <lan-button @click="handleStart">start</lan-button>
      <lan-button @click="handleFinish">finish</lan-button>
      <lan-button @click="handleEnd">error</lan-button>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-button @click="handleStart"&gtstart&lt/lan-button&gt
        &ltlan-button @click="handleFinish"&gtfinish&lt/lan-button&gt
        &ltlan-button @click="handleEnd"&gterror&lt/lan-button&gt
        &ltscript&gt
          export default {
            methods: {
              handleStart() {
                this.$LoadingBar.start()
              },
              handleFinish() {
                this.$LoadingBar.finish()
              },
              handleEnd() {
                this.$LoadingBar.error()
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>LoadingBar instance #</h2>

    <p>直接通过调用以下方法来使用组件：</p>
    <ul class="ul" style="margin-bottom: 30px">
      <li class="li"><code>this.$LoadingBar.start()</code></li>
      <li class="li"><code>this.$LoadingBar.finish()</code></li>
      <li class="li"><code>this.$LoadingBar.error()</code></li>
    </ul>
    <p>另外提供了全局配置和全局销毁的方法：</p>
    <ul class="ul" style="margin-bottom: 20px">
      <li class="li"><code>this.$LoadingBar.config(options)</code></li>
      <li class="li"><code>this.$LoadingBar.destroy()</code></li>
    </ul>
    <pre v-highlight>
      <code class="html">
        this.$Loading.config({
            color: '#FF7846',
            failColor: '#FE4B4B',
            height: 3
        });
      </code>
    </pre>
    <h3 style="margin-bottom: 20px">config配置：</h3>
    <lan-table :column="columnProps" :tableSource="sourceMessage" :border="true"></lan-table>

  </article>
</template>

<script>

  export default {
    name: 'loadingBar',
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
        sourceMessage: [{
          property: 'color',
          explain: '进度条的颜色',
          type: 'String',
          default: '#FF7846'
        }, {
          property: 'failColor',
          explain: '失败时的进度条颜色',
          type: 'String',
          default: '#FE4B4B'
        }, {
          property: 'height',
          explain: '进度条高度，单位 px',
          type: 'Number',
          default: 2
        }]
      }
    },
    methods: {
      handleStart() {
        this.$LoadingBar.start()
      },
      handleFinish() {
        this.$LoadingBar.finish()
      },
      handleEnd() {
        this.$LoadingBar.error()
      }
    }
  }
</script>
