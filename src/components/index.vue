<template>
  <div class="mn">

    <label class="title">Button</label>
    <div class="group">
      <lan-btn size="tiny" classType="default">tiny default</lan-btn>&nbsp;
      <lan-btn size="small" classType="primary">small primary</lan-btn>&nbsp;
      <lan-btn size="normal" classType="success">normal success</lan-btn>&nbsp;
      <lan-btn size="normal" classType="warning">normal warning</lan-btn>&nbsp;
      <lan-btn size="normal" classType="danger">normal danger</lan-btn>&nbsp;
      <lan-btn :disabled="true">disabled</lan-btn>&nbsp;
      <lan-btn size="normal" classType="warning" :disabled="true">disabled</lan-btn>&nbsp;
      <lan-btn size="large" classType="info">large info</lan-btn>
    </div>

    <label class="title">Switch</label>
    <div class="group">
      <lan-switch :switchType="true"></lan-switch>&nbsp;
      <lan-switch :switchType="false"></lan-switch>&nbsp;
      <lan-switch :switchType="true" activeColor="#0EDE00"></lan-switch>&nbsp;
      <lan-switch :switchType="false" inactiveColor="#FF4949"></lan-switch>&nbsp;
      <lan-switch :switchType="true" onText="开" offText="关"></lan-switch>&nbsp;
      <lan-switch :switchType="false" offText="关"></lan-switch>
    </div>

    <label class="title">Input</label>
    <div class="group">
      <lan-input customClass="ipt-wd"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容" :disabled="true"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容" prefixIcon="search"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容" suffixIcon="less"></lan-input>&nbsp;
      <lan-input placeholder="请输入内容">
        <template slot="prepend">
          <span>Http://</span>
        </template>
        <template slot="append">
          <i class="iconfont icon-search"></i>
        </template>
      </lan-input>
    </div>

    <label class="title">Select</label>
    <div class="group">
      <lan-select :source="source" placeholder="选择内容" :readonly="true">
      </lan-select>
    </div>

    <label class="title">Modal</label>
    <div class="group">
      <lan-btn size="small" classType="primary" @click="handleModal">点击打开modal</lan-btn>&nbsp;
      <lan-modal title="标题" :showModal="showModal" @close="showModal = false">
        <span>这是modal模板</span>
      </lan-modal>
    </div>

    <label class="title">Message</label>
    <div class="group">
      <lan-btn size="small" classType="primary" @click="handleMessageBox">点击打开messageBox</lan-btn>&nbsp;
      <lan-btn size="small" classType="primary" @click="handleMessage">点击打开message</lan-btn>&nbsp;
      <lan-message :showMessage="showMessageBox" type="warning" title="标题" :isModal="true" message="这是一条消息"
          @confirm="showMessageBox = false"></lan-message>
      <lan-message :showMessage="showMessage" type="warning" :isModal="false" message="这是一条消息"></lan-message>
    </div>

    <label class="title">Pagination</label>
    <div class="group">
      <lan-pagination :total="16" :isEllipsis="true"></lan-pagination>
    </div>

    <label class="title">Table</label>
    <div class="group">
      <lan-table :tableSource="tableSource" :height="150">
        <lan-table-column prop="date" label="日期" :width="100"
        ></lan-table-column>
        <lan-table-column prop="name" label="姓名" :width="120"
        ></lan-table-column>
        <lan-table-column prop="address" label="地址" :width="300" align="center"
        ></lan-table-column>
      </lan-table>

    </div>
  </div>
</template>

<script>
  import lanBtn from './lan-btn/lan-btn'
  import lanSwitch from './lan-switch/lan-switch'
  import lanInput from './lan-input/lan-input'
  import lanSelect from './lan-select/lan-select'
  import lanModal from './lan-modal/lan-modal'
  import lanMessage from './lan-message/lan-message'
  import lanPagination from './lan-pagination/lan-pagination'
  import lanTable from './lan-table/lan-table'
  import LanTableColumn from "./lan-table/lan-table-column";

  export default {
    data () {
      return {
        source: [{
          value: 0,
          name: '黄金糕'
        }, {
          value: 1,
          name: '双皮奶'
        }, {
          value: 2,
          name: '蚵仔煎',
          disabled: true
        }, {
          value: 3,
          name: '龙须面'
        }, {
          value: 4,
          name: '北京烤鸭'
        }],
        showModal: false,
        showMessageBox: false,
        showMessage: false,
        tableSource: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-25',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1520 弄'
        }]
      }
    },
    components: {
      LanTableColumn,
      lanBtn,
      lanSwitch,
      lanInput,
      lanSelect,
      lanModal,
      lanMessage,
      lanPagination,
      lanTable
    },
    methods: {
      handleModal(){
        this.showModal = true;
      },
      handleMessageBox(){
        this.showMessageBox = true;
      },
      handleMessage(){
        this.showMessage = true;
//        new lanMessage({
//          showMessage: true,
//          type: "warning",
//          isModal: false,
//          message: "这是一条消息"
//        }).$mount(document.body);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  label.title{
    font-size: 40px;
    display: block;
    margin: 20px auto;
  }
  .group {
    display: flex;
    flex-wrap: wrap;
  }
  .ipt-wd {
    width: 500px;
  }
</style>
