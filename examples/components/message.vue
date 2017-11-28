<template>
  <article>
    <h1>Message 消息</h1>
    <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有三种提示状态可选择。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-row>
      <lan-button classType="primary" @click="handleWarning">显示警告</lan-button>
      <lan-button classType="primary" @click="handleError">显示错误</lan-button>
      <lan-button classType="primary" @click="handleSuccess">显示成功</lan-button>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-button classType="primary" @click="handleWarning"&gt显示警告&lt/lan-button&gt
        &ltlan-button classType="primary" @click="handleError"&gt显示错误&lt/lan-button&gt
        &ltlan-button classType="primary" @click="handleSuccess"&gt显示成功&lt/lan-button&gt
        &ltscript&gt
          export default {
            methods: {
              handleWarning() {
                this.$Message.warning('这是一条警告消息')
              },
              handleError() {
                this.$Message.error('这是一条错误消息')
              },
              handleSuccess() {
                this.$Message.success('这是一条成功消息')
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>显示时间配置</h3>
    <lan-button classType="primary" @click="handleDuration">显示1S</lan-button>
    <pre v-highlight>
      <code class="html">
        &ltlan-button classType="primary" @click="handleDuration"&gt显示1S&lt/lan-button&gt
        &ltscript&gt
          export default {
            methods: {
              handleDuration() {
                this.$Message.success({
                  message: '这是一条成功消息',
                  duration: 1000
                })
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>Message instance #</h3>
    <p>通过直接调用以下方法来使用组件：</p>
    <ul class="ul" style="margin-bottom: 40px">
      <li><code>this.$Message.success(config)</code></li>
      <li><code>this.$Message.warning(config)</code></li>
      <li><code>this.$Message.error(config)</code></li>
    </ul>
    <lan-table :column="columnProps" :tableSource="sourceMessage" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'message',
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
          property: 'message',
          explain: '提示内容',
          type: 'String',
          default: '-'
        }, {
          property: 'duration',
          explain: '自动关闭的延时',
          type: 'Number',
          default: 3000
        }]
      }
    },
    methods: {
      handleWarning() {
        this.$Message.warning('这是一条警告消息')
      },
      handleError() {
        this.$Message.error('这是一条错误消息')
      },
      handleSuccess() {
        this.$Message.success('这是一条成功消息')
      },
      handleDuration() {
        this.$Message.success({
          message: '这是一条成功消息',
          duration: 1000
        })
      }
    }
  }
</script>
