<template>
  <!--<div class="mn">-->
    <!--<label class="title">Select</label>-->
    <!--<div class="group">-->
      <!--<lan-select placeholder="含禁止">-->
        <!--<lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>-->
      <!--</lan-select>&emsp;-->
      <!--<lan-select placeholder="含搜索" filterable>-->
        <!--<lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>-->
      <!--</lan-select>&emsp;-->
      <!--<lan-select placeholder="自定义模板">-->
        <!--<lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">-->
          <!--<span>{{item.label}}</span><br/>-->
          <!--<span>{{item.value}}</span>-->
        <!--</lan-option>-->
      <!--</lan-select>&emsp;-->
      <!--<lan-select placeholder="含搜索的自定义模板" filterable>-->
        <!--<lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">-->
          <!--<span>{{item.label}}</span><br/>-->
          <!--<span>{{item.value}}</span>-->
        <!--</lan-option>-->
      <!--</lan-select>-->
    <!--</div>-->


    <!--<label class="title">Modal</label>-->
    <!--<div class="group">-->
      <!--<lan-button size="small" classType="primary" @click="handleModal">点击打开modal</lan-button>&nbsp;-->
      <!--<lan-modal title="标题" :showModal="showModal" @close="showModal = false">-->
        <!--<span>这是modal模板</span>-->
      <!--</lan-modal>-->
    <!--</div>-->

    <!--<label class="title">MessageBox</label>-->
    <!--<div class="group">-->
      <!--<lan-button size="small" classType="primary" @click="handleMessageBox">点击打开messageBox</lan-button>-->
      <!--<lan-message-box :visible="showMessageBox" type="warning" title="标题" message="这是消息弹框"-->
                   <!--@confirm="showMessageBox = false"></lan-message-box>-->
    <!--</div>-->

    <!--<label class="title">Message</label>-->
    <!--<div class="group">-->
      <!--<lan-button size="small" classType="primary" @click="handleMessage">点击打开message</lan-button>&nbsp;-->
      <!--<lan-message v-if="showMessage" type="error" message="这是一条消息"-->
                   <!--@close="showMessage = false"></lan-message>-->
    <!--</div>-->

    <!--<label class="title">Table</label>-->
    <!--<div class="group">-->
      <!--<lan-table :column="column" :tableSource="tableSource" :border="true" :stripe="true" :height="250"></lan-table>-->
    <!--</div>-->

    <!--<label class="title">Tooltip</label>-->
    <!--<div class="group">-->
      <!--<div class="box">-->
        <!--<div class="top">-->
          <!--<lan-tooltip content="Top 提示文字 Top 提示文字 Top 提示文字" placement="top" :width="100">-->
            <!--<lan-button size="small" classType="primary">上</lan-button>-->
          <!--</lan-tooltip>-->
        <!--</div>-->
        <!--<div class="left">-->
          <!--<lan-tooltip content="Left 提示文字" placement="left"  effect='light'>-->
            <!--<lan-button size="small" classType="primary">左</lan-button>-->
          <!--</lan-tooltip>-->
        <!--</div>-->
        <!--<div class="right">-->
          <!--<lan-tooltip content="Right 提示文字" placement="right">-->
            <!--<lan-button size="small" classType="primary">右</lan-button>-->
          <!--</lan-tooltip>-->
        <!--</div>-->
        <!--<div class="bottom">-->
          <!--<lan-tooltip content="Bottom 提示文字" placement="bottom" effect='light'>-->
            <!--<lan-button size="small" classType="primary">下</lan-button>-->
          <!--</lan-tooltip>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<label class="title">Carousel</label>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="group">&ndash;&gt;-->
      <!--&lt;!&ndash;<lan-carousel :carouselSource="carouselSource"></lan-carousel>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--<lan-back-top></lan-back-top>-->
  <!--</div>-->
  <div class="m-wrapper">
    <div class="m-hd">
      <img src="../../static/img/logo.png" class="m-hd-logo"/>
      <lan-tabs :activeLabel="1" @change="toRepository">
        <lan-tab-pane :label="1"><router-link to="/affix" tag="span">组件</router-link></lan-tab-pane>
        <lan-tab-pane :label="2">仓库</lan-tab-pane>
      </lan-tabs>
    </div>
    <div class="m-mn">
      <lan-row>
        <lan-col :span="4">
          <ul class="m-leftBar">
            <router-link to="/affix" class="menu-item menu-group" tag="li">安装</router-link>
            <li class="menu-group">basic</li>
            <router-link to="/gird" class="menu-item" tag="li">Grid 栅格</router-link>
            <router-link to="/button" class="menu-item" tag="li">Button 按钮</router-link>
            <li class="menu-item">Icon 图标</li>
            <li class="menu-group">Form</li>
            <router-link to="/switch" class="menu-item" tag="li">Switch 开关</router-link>
            <router-link to="/radio" class="menu-item" tag="li">Radio 单选框</router-link>
            <router-link to="/checkbox" class="menu-item" tag="li">Checkbox 复选框</router-link>
            <router-link to="/input" class="menu-item" tag="li">Input 输入框</router-link>
            <router-link to="/select" class="menu-item" tag="li">Select 选择器</router-link>
            <router-link to="/timePicker" class="menu-item" tag="li">TimePicker 时间选择器</router-link>
            <router-link to="/datePicker" class="menu-item" tag="li">DatePicker 日期选择器</router-link>
            <li class="menu-item">Table 表格</li>
            <li class="menu-group">View</li>
            <router-link to="/message" class="menu-item" tag="li">Message 消息</router-link>
            <li class="menu-item">MessageBox 消息框</li>
            <li class="menu-item">Modal 模态框</li>
            <li class="menu-item">Tooltip 提示</li>
            <li class="menu-group">Other</li>
            <router-link to="/tabs" class="menu-item" tag="li">Tabs 标签</router-link>
            <router-link to="/pagination" class="menu-item" tag="li">Pagination 分页</router-link>
            <router-link to="/backTop" class="menu-item" tag="li">BackTop 返回顶部</router-link>
          </ul>
        </lan-col>
        <lan-col :span="20">
          <div class="m-wrapper">
            <router-view></router-view>
          </div>
        </lan-col>
      </lan-row>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        source: [{
          value: 0,
          label: '黄金糕'
        }, {
          value: 1,
          label: '双皮奶'
        }, {
          value: 2,
          label: '蚵仔煎',
          disabled: true
        }, {
          value: 3,
          label: '龙须面'
        }, {
          value: 4,
          label: '北京烤鸭'
        }, {
          value: 5,
          label: '北京糖葫芦'
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
             return h('lan-button', {
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
        }],
        radioValue: false,
        radioGroup: 'apple',
        checkboxValue: false,
        checkboxGroup: ['apple'],
        carouselSource: [
          "http://oss.lanlanlife.com/3d31bd5315845d3d086834d6e9b25c90_800x800.jpg",
          "http://oss.lanlanlife.com/4b25875c82cb38e0d1596385ff787144_800x800.jpg",
          "http://oss2.lanlanlife.com/1ba41ca1974f728980e176556cecc653_800x800.jpg",
          "http://oss.lanlanlife.com/6a86cc4e9d1f9f8b8924d15bccf19b90_800x800.jpg",
          "http://oss2.lanlanlife.com/fc6210dda360119aa324d7b046f70fc2_800x800.jpg"
        ]
      }
    },

    methods: {
      toRepository(value) {
        if(value === 2) {
          window.location.href = 'https://code.aliyun.com/lanlan_xsj/lanlanFE'
        }
      },
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

<style lang="less">
  @import '../styles/index.less';
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style>-->
  <!--.box {-->
    <!--width: 500px;-->
    <!--margin: 100px 150px;-->
  <!--}-->
  <!--.box .top {-->
    <!--text-align: center;-->
  <!--}-->
  <!--.box .left {-->
    <!--float: left;-->
    <!--width: 100px;-->
  <!--}-->
  <!--.box .right {-->
    <!--float: right;-->
    <!--width: 100px;-->
  <!--}-->
  <!--.box .bottom {-->
    <!--clear: both;-->
    <!--text-align: center;-->
  <!--}-->

<!--</style>-->
