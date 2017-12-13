<template>
  <article>
    <h1>Progress 进度条</h1>
    <p>展示操作或任务的当前进度。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-row>
      <lan-progress :percent="20" style="width: 400px"></lan-progress>
    </lan-row>
    <lan-row>
      <lan-progress :percent="30" error style="width: 400px"></lan-progress>
    </lan-row>
    <lan-row>
      <lan-progress :percent="100" style="width: 400px"></lan-progress>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-row&gt
          &ltlan-progress :percent="20" style="width: 400px"&gt&lt/lan-progress&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-progress :percent="30" error style="width: 400px"&gt&lt/lan-progress&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-progress :percent="100" style="width: 400px"&gt&lt/lan-progress&gt
        &lt/lan-row&gt
      </code>
    </pre>

    <h3>配合外部使用</h3>
    <lan-row>
      <lan-progress :percent="percent" style="width: 400px"></lan-progress>
    </lan-row>
    <lan-button size="small" @click="startProgress(-1)">
      <lan-icon type="move"></lan-icon>
    </lan-button>
    <lan-button size="small" @click="startProgress(1)">
      <lan-icon type="add"></lan-icon>
    </lan-button>
    <pre v-highlight>
      <code class="html">
        &ltlan-row&gt
          &ltlan-progress :percent="percent" style="width: 400px"&gt&lt/lan-progress&gt
        &lt/lan-row&gt
        &ltlan-button size="small" @click="startProgress(-1)"&gt
          &lt<lan-icon :type="move"&gt&lt/lan-icon&gt
        &lt/lan-button&gt
        &ltlan-button size="small" @click="startProgress(1)"&gt
          &lt<lan-icon :type="add"&gt&lt/lan-icon&gt
        &lt/lan-button&gt
          export default {
            data() {
              return {
                percent: 10
              }
            },
            methods: {
              startProgress(value) {
                const temp = this.percent + 10 * value;
                if(temp >= 0 && temp <= 100) {
                  this.percent = temp;
                }
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>自定义</h3>
    <lan-row>
      <lan-progress :percent="50" :height="5" style="width: 400px"></lan-progress>
    </lan-row>
    <lan-row>
      <lan-progress :percent="100" style="width: 400px">
        <span>上传完成</span>
      </lan-progress>
    </lan-row>
    <pre v-highlight>
      <code class="html">
        &ltlan-row&gt
          &ltlan-progress :percent="30" :height="5" style="width: 400px"&gt&lt/lan-progress&gt
        &lt/lan-row&gt
        &ltlan-row&gt
          &ltlan-progress :percent="100" style="width: 400px"&gt
            &ltspan&gt上传完成&lt/span&gt
          &lt/lan-progress&gt
        &lt/lan-row&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-progress props</h3>
    <lan-table :column="columnProgress" :tableSource="sourceProgress" :border="true"></lan-table>

    <h3>lan-progress slot</h3>
    <lan-table :column="columnSlot" :tableSource="sourceSlot" :border="true"></lan-table>
  </article>
</template>

<script>

  import LanButton from "../../src/components/lan-button/lan-button";

  export default {
    components: {LanButton},
    name: 'progress',
    data() {
      return {
        percent: 10,
        columnProgress: [{
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
        sourceProgress: [{
          property: 'percent',
          explain: '百分比',
          type: 'Number',
          default: 0
        }, {
          property: 'height',
          explain: '进度条高度，单位px',
          type: 'Number',
          default: 10
        }, {
          property: 'error',
          explain: '进度条状态',
          type: 'Boolean',
          default: 'false'
        }],
        columnSlot: [{
          prop: "name",
          label: "名称",
          width: 200
        }, {
          prop: "explain",
          label: "说明"
        }],
        sourceSlot: [{
          name: '-',
          explain: '自定义显示状态内容'
        }]
      }
    },
    methods: {
      startProgress(value) {
        const temp = this.percent + 10 * value;
        if(temp >= 0 && temp <= 100) {
          this.percent = temp;
        }
      }
    }
  }
</script>
