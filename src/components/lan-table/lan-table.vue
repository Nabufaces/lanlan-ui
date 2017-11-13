<template>
  <div class="lan-table">
    <div class="lan-table-header">
      <table>
        <colgroup>
          <col v-for="item in columns" :width="item.width">
        </colgroup>
        <thead>
        <th v-for="item in columns" :align="item.align ? item.align: 'left'"
            :class="[
              border ? 'border': '',
              item.sortType ? 'pointer' : ''
            ]"
            @click="handleSort(item)">
          <span>{{item.label}}</span>
          <span class="sort" v-if="item.sortable">
            <i class="iconfont icon-less" :class="item.sortType === 2 ? 'chosen' : ''"></i>
            <i class="iconfont icon-moreunfold" :class="item.sortType === 1 ? 'chosen' : ''"></i>
          </span>
        </th>
        </thead>
      </table>
    </div>

    <div class="lan-table-body" :style="{ height: height + 'px'}">
      <table>
        <colgroup>
          <col v-for="item in columns" :width="item.width">
        </colgroup>
        <tbody>
        <tr v-for="item, index in tableSource" :key="index" :class="stripe ? 'stripe': ''">
          <td v-for="td in columns" :align="td.align ? td.align : 'left'"  :class="border ? 'border': ''">
            <template v-if="td.render">
              <lan-table-expand :render="td.render"></lan-table-expand>
            </template>
            <span v-else>{{item[td.prop]}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  import lanTableExpand from './lan-table-expand.js';

  export default{
    name: 'lan-table',
    props: {
      column: {
        type: Array,
        require: true
      },
      tableSource: {
        type: Array,
        require: true
      },
      height: Number,
      border: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        columns: [],
        source: []
      }
    },
    components: {
      lanTableExpand
    },
    created() {
      let columns = this.columns = this.column;
      this.source = this.tableSource;
      columns.forEach((item) => {
        if(item.sortable) {
          // 1 为从小到大， 2 为从大到小， 3 为不排序
          this.$set(item, 'sortType', 3);
        }
      });
    },
    methods: {
      handleSort(item) {
        if(item.sortable) {
          item.sortType = (item.sortType === 2 || item.sortType === 3) ? 1 : 2;
          let source = this.source;
          const prop = item.prop;
          source.sort((a, b) => {
            if(item.sortType === 1) {
              return a[prop] - b[prop];
            } else {
              return b[prop] - a[prop];
            }
          });
        }
      }
    }
  }
</script>

<style src="./lan-table.css" scoped></style>

