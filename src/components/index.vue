<template>
  <div class="mn">

    <label class="title">Button</label>
    <div class="group">
      <lan-button size="tiny" classType="default">tiny default</lan-button>&nbsp;
      <lan-button size="small" classType="primary">small primary</lan-button>&nbsp;
      <lan-button size="normal" classType="success">normal success</lan-button>&nbsp;
      <lan-button size="normal" classType="warning">normal warning</lan-button>&nbsp;
      <lan-button size="normal" classType="danger">normal danger</lan-button>&nbsp;
      <lan-button :disabled="true">disabled</lan-button>&nbsp;
      <lan-button size="normal" classType="warning" :disabled="true">disabled</lan-button>&nbsp;
      <lan-button size="large" classType="info">large info</lan-button>
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
      <lan-button size="small" classType="primary" @click="handleModal">点击打开modal</lan-button>&nbsp;
      <lan-modal title="标题" :showModal="showModal" @close="showModal = false">
        <span>这是modal模板</span>
      </lan-modal>
    </div>

    <label class="title">MessageBox</label>
    <div class="group">
      <lan-button size="small" classType="primary" @click="handleMessageBox">点击打开messageBox</lan-button>
      <lan-message-box :visible="showMessageBox" type="warning" title="标题" message="这是消息弹框"
                   @confirm="showMessageBox = false"></lan-message-box>
    </div>

    <label class="title">Message</label>
    <div class="group">
      <lan-button size="small" classType="primary" @click="handleMessage">点击打开message</lan-button>&nbsp;
      <lan-message v-if="showMessage" type="error" message="这是一条消息"
                   @close="showMessage = false"></lan-message>
    </div>

    <label class="title">Pagination</label>
    <div class="group">
      <lan-pagination :total="16" :isEllipsis="true"></lan-pagination>
    </div>

    <label class="title">Table</label>
    <div class="group">
      <lan-table :column="column" :tableSource="tableSource" :border="true" :stripe="true" :height="250"></lan-table>
    </div>

    <label class="title">Tooltip</label>
    <div class="group">
      <div class="box">
        <div class="top">
          <lan-tooltip content="Top 提示文字" placement="top">
            <lan-button size="small" classType="primary">上</lan-button>
          </lan-tooltip>
        </div>
        <div class="left">
          <lan-tooltip content="Left 提示文字" placement="left">
            <lan-button size="small" classType="primary">左</lan-button>
          </lan-tooltip>
        </div>
        <div class="right">
          <lan-tooltip content="Right 提示文字" placement="right">
            <lan-button size="small" classType="primary">右</lan-button>
          </lan-tooltip>
        </div>
        <div class="bottom">
          <lan-tooltip content="Bottom 提示文字" placement="bottom" effect='light'>
            <lan-button size="small" classType="primary">下</lan-button>
          </lan-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import lanButton from './lan-button/lan-button'
  import lanSwitch from './lan-switch/lan-switch'
  import lanInput from './lan-input/lan-input'
  import lanSelect from './lan-select/lan-select'
  import lanModal from './lan-modal/lan-modal'
  import lanMessageBox from './lan-messageBox/lan-messageBox'
  import lanMessage from './lan-message/lan-message'
  import lanPagination from './lan-pagination/lan-pagination'
  import lanTable from './lan-table/lan-table'
  import LanTooltip from "./lan-tooltip/lan-tooltip"

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
        column: [{
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
        }, {
          label: "操作",
          render: (h) => {
            return h(lanButton, {
              props: {
                size: 'small',
                classType: 'primary'
              },
              on: {
                click: (value) => {
                  console.log('Button Click!')
                }
              }
           },'操作');
          }
        }],
        tableSource: [{
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
        }]
      }
    },
    components: {
      lanButton,
      lanSwitch,
      lanInput,
      lanSelect,
      lanModal,
      lanMessageBox,
      lanMessage,
      lanPagination,
      lanTable,
      LanTooltip
    },
    methods: {
      handleModal(){
        this.showModal = true;
      },
      handleMessageBox(){
        this.showMessageBox = true;
      },
      handleMessage() {
        this.showMessage = true;
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
  .box {
    width: 500px;
    margin: 100px 150px;
  }
  .box .top {
    text-align: center;
  }
  .box .left {
    float: left;
    width: 100px;
  }
  .box .right {
    float: right;
    width: 100px;
  }
  .box .bottom {
    clear: both;
    text-align: center;
  }

</style>
