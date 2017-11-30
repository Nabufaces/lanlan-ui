<template>
  <article>
    <h1>Table 表格</h1>
    <p>主要用于展示大量结构化数据</p>
    <p>支持排序、自定义操作等复杂功能。</p>

    <h2 style="margin-top: 40px">代码示例</h2>

    <h3>基础使用</h3>
    <lan-table :column="baseColumn" :tableSource="baseSource"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="baseColumn" :tableSource="baseSource"&gt&lt/lan-table&gt
        &ltscript&gt
          export default {
            data() {
              return {
                baseColumn: [{
                  prop: "id",
                  label: "序号",
                  width: 100,
                  align: 'center'
                }, {
                  prop: "date",
                  label: "日期",
                  width: 100
                }, {
                  prop: "name",
                  label: "姓名",
                  width: 120
                }, {
                  prop: "address",
                  label: "地址",
                  width: 300
                }],
                baseSource: [{
                  id: 0,
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄',
                }, {
                  id: 1,
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  id: 2,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  id: 3,
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1516 弄'
                }, {
                  id: 4,
                  date: '2016-05-25',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1520 弄'
                }, {
                  id: 5,
                  date: '2016-07-25',
                  name: '王小二',
                  address: '上海市普陀区金沙江路 1520 弄'
                }],
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>带边框的Table</h3>
    <lan-table :column="baseColumn" :tableSource="baseSource" :border="true"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="baseColumn" :tableSource="baseSource" :border="true"&gt&lt/lan-table&gt
      </code>
    </pre>

    <h3>带斑马纹的Table</h3>
    <lan-table :column="baseColumn" :tableSource="baseSource" :stripe="true"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="baseColumn" :tableSource="baseSource" :stripe="true"&gt&lt/lan-table&gt
      </code>
    </pre>

    <h3>高度固定的Table</h3>
    <lan-table :column="baseColumn" :tableSource="baseSource" :height="200"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="baseColumn" :tableSource="baseSource" :height="200"&gt&lt/lan-table&gt
      </code>
    </pre>

    <h3>带排序的Table</h3>
    <lan-table :column="sortColumn" :tableSource="baseSource"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="sortColumn" :tableSource="baseSource"&gt&lt/lan-table&gt
        &ltscript&gt
          export default {
            data() {
              return {
                sortColumn: [{
                  prop: "id",
                  label: "序号",
                  width: 100,
                  align: 'center',
                  sortable: true
                }, {
                  prop: "date",
                  label: "日期",
                  width: 100
                }, {
                  prop: "name",
                  label: "姓名",
                  width: 120
                }, {
                  prop: "address",
                  label: "地址",
                  width: 300
                }]
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h3>自定义Table</h3>
    <lan-table :column="customColumn" :tableSource="baseSource"></lan-table>
    <pre v-highlight>
      <code class="html">
        &ltlan-table :column="sortColumn" :tableSource="baseSource"&gt&lt/lan-table&gt
        &ltscript&gt
          export default {
            data() {
              return {
                customColumn: [{
                  prop: "id",
                  label: "序号",
                  width: 150,
                  align: 'center',
                  render: (h, params) =&gt {
                    const tr = params.tr;
                    const td = params.td;
                    return (
                      &ltlan-button classType="primary"&gt
                        {tr[td.prop]}
                      &lt/lan-button&gt
                    )
                  }
                }, {
                  prop: "date",
                  label: "日期",
                  width: 100
                }, {
                  prop: "name",
                  label: "姓名",
                  width: 120
                }, {
                  prop: "address",
                  label: "地址",
                  width: 300
                }]
              }
            }
          }
        &lt/script&gt
      </code>
    </pre>

    <h2>API</h2>

    <h3>lan-table props</h3>
    <lan-table :column="columnProps" :tableSource="sourcetable" :border="true"></lan-table>


    <h3>lan-table column</h3>
    <p>列描述数据对象，是 columns 中的一项</p>
    <lan-table :column="columnProps" :tableSource="sourceColumn" :border="true"></lan-table>
  </article>
</template>

<script>

  export default {
    name: 'select',
    data() {
      return {
        baseColumn: [{
          prop: "id",
          label: "序号",
          width: 100,
          align: 'center'
        }, {
          prop: "date",
          label: "日期",
          width: 100
        }, {
          prop: "name",
          label: "姓名",
          width: 120
        }, {
          prop: "address",
          label: "地址",
          width: 300
        }],
        baseSource: [{
          id: 0,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id: 1,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 2,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 3,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 4,
          date: '2016-05-25',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1520 弄'
        }, {
          id: 5,
          date: '2016-07-25',
          name: '王小二',
          address: '上海市普陀区金沙江路 1520 弄'
        }],
        sortColumn: [{
          prop: "id",
          label: "序号",
          width: 100,
          align: 'center',
          sortable: true
        }, {
          prop: "date",
          label: "日期",
          width: 100
        }, {
          prop: "name",
          label: "姓名",
          width: 120
        }, {
          prop: "address",
          label: "地址",
          width: 300
        }],
        customColumn: [{
          prop: "id",
          label: "序号",
          width: 150,
          align: 'center',
          render: (h, params) => {
            const tr = params.tr;
            const td = params.td;
            return (
              <lan-button classType="primary">
                {tr[td.prop]}
              </lan-button>
            )
          }
        }, {
          prop: "date",
          label: "日期",
          width: 100
        }, {
          prop: "name",
          label: "姓名",
          width: 120
        }, {
          prop: "address",
          label: "地址",
          width: 300
        }],
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
        sourcetable: [{
          property: 'column',
          explain: '表格列设置，详见后文',
          type: 'Array',
          default: '-'
        }, {
          property: 'tableSource',
          explain: '表格数据源，与column.prop对应',
          type: 'Array',
          default: '-'
        }, {
          property: 'border',
          explain: '表格是否带边框',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'stripe',
          explain: '表格是否带斑马纹',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'height',
          explain: '表格高度，超出显示滚动条',
          type: 'Number',
          default: '-'
        }],
        sourceColumn: [{
          property: 'prop',
          explain: '对应列内容的字段名',
          type: 'String',
          default: '-'
        }, {
          property: 'label',
          explain: '对应列标题',
          type: 'String',
          default: '-'
        }, {
          property: 'align',
          explain: '对应列的对齐方式',
          type: 'String',
          default: 'left'
        }, {
          property: 'width',
          explain: '对应列的宽度',
          type: 'Number',
          default: '-'
        }, {
          property: 'sortable',
          explain: '对应列是否排序',
          type: 'Boolean',
          default: 'false'
        }, {
          property: 'render',
          explain: '自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 tr、td 和 index，分别指当前行数据，当前列数据，当前行索引',
          type: 'Function',
          default: '-'
        }]
      }
    }
  }
</script>
