<template>
  <div class="lan-table">
    <slot></slot>
    <table class="lan-table-header">
      <colgroup>
        <col v-for="item in tableColumn" :width="item.width">
      </colgroup>
      <thead>
        <th v-for="item in tableColumn" :align="item.align">{{item.label}}</th>
      </thead>
    </table>
    <div class="lan-table-body" :style="{ height: height + 'px'}">
      <table>
        <colgroup>
          <col v-for="item in tableColumn" :width="item.width">
        </colgroup>
        <tbody>
        <tr v-for="item, index in tableSource" :key="index">
          <td v-for="td in tableColumn" :align="td.align">{{item[td.prop]}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import lanTableColumn from './lan-table-column';

  export default{
    name: 'lan-table',
    props: {
      tableSource: {
        type: Array,
        require: true
      },
      height: Number
    },
    components: {
      lanTableColumn
    },
    data: function(){
      return {
        tableColumn: []
      }
    },
    created() {
      this.tableColumn = this.$children;
    },
    methods: {

    }
  }
</script>

<style src="./lan-table.css" scoped></style>

