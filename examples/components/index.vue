<template>
  <div class="mn">

    <label class="title">Grid</label>
    <div class="group" style="display: block">
      <lan-row customClass="grid">
        <lan-col span="12"><div class="demo">col-12</div></lan-col>
        <lan-col span="12"><div class="demo">col-12</div></lan-col>
      </lan-row>
      <lan-row customClass="grid">
        <lan-col span="8"><div class="demo">col-8</div></lan-col>
        <lan-col span="8"><div class="demo">col-8</div></lan-col>
        <lan-col span="8"><div class="demo">col-8</div></lan-col>
      </lan-row>
      <lan-row customClass="grid">
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
      </lan-row>
      <lan-row customClass="grid" :gutter="16">
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
        <lan-col span="6"><div class="demo">col-6</div></lan-col>
      </lan-row>
      <lan-row customClass="grid">
        <lan-col span="6" :offset="2"><div class="demo">col-6 offset-2</div></lan-col>
        <lan-col span="6" :push="3"><div class="demo">col-6 push-3</div></lan-col>
      </lan-row>
      <lan-row customClass="grid">
        <lan-col span="6" :push="18"><div class="demo">col-6 push-18</div></lan-col>
        <lan-col span="6" :pull="3"><div class="demo">col-6 pull-3</div></lan-col>
      </lan-row>
    </div>

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
      <lan-switch :switchType="false" inactiveColor="#FE4B4B"></lan-switch>&nbsp;
      <lan-switch :switchType="true" onText="开" offText="关"></lan-switch>&nbsp;
      <lan-switch :switchType="false" offText="关"></lan-switch>
    </div>

    <label class="title">Radio</label>
    <div class="group">
      <lan-radio v-model="radioValue">单选框</lan-radio>
    </div>

    <label class="title">RadioGroup</label>
    <div class="group">
      <lan-radio-group v-model="radioGroup">
        <lan-radio label="apple">apple</lan-radio>
        <lan-radio label="android">android</lan-radio>
        <lan-radio label="windows">windows</lan-radio>
      </lan-radio-group>
    </div>

    <label class="title">Checkbox</label>
    <div class="group">
      <lan-checkbox v-model="checkboxValue">复选框</lan-checkbox>
    </div>

    <label class="title">CheckboxGroup</label>
    <div class="group">
      <lan-checkbox-group v-model="checkboxGroup">
        <lan-checkbox label="apple">apple</lan-checkbox>
        <lan-checkbox label="android">android</lan-checkbox>
        <lan-checkbox label="windows">windows</lan-checkbox>
      </lan-checkbox-group>
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
      <lan-select placeholder="含禁止">
        <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>
      </lan-select>&emsp;
      <lan-select placeholder="含搜索" filterable>
        <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value"></lan-option>
      </lan-select>&emsp;
      <lan-select placeholder="自定义模板">
        <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">
          <span>{{item.label}}</span><br/>
          <span>{{item.value}}</span>
        </lan-option>
      </lan-select>&emsp;
      <lan-select placeholder="含搜索的自定义模板" filterable>
        <lan-option :value="item.value" :label="item.label" :disabled="item.disabled" v-for="item in source" :key="item.value">
          <span>{{item.label}}</span><br/>
          <span>{{item.value}}</span>
        </lan-option>
      </lan-select>
    </div>

    <label class="title">TimePicker</label>
    <div class="group">
      <lan-time-picker placeholder="选择时间" :disabledHours="[1,3,6]" :disabledMinutes="[5,10]"></lan-time-picker>&emsp;
      <lan-time-picker placeholder="选择时间" format="HH时mm分ss秒"></lan-time-picker>
    </div>

    <label class="title">DatePicker</label>
    <div class="group">
      <lan-date-picker placeholder="选择日期" min="2015-09-01" max="2020-12-30"></lan-date-picker>
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

    <label class="title">Tabs</label>
    <div class="group">
      <lan-tabs :tabSource="tabSource" activeKey="标签二"></lan-tabs>
    </div>

    <label class="title">Tooltip</label>
    <div class="group">
      <div class="box">
        <div class="top">
          <lan-tooltip content="Top 提示文字 Top 提示文字 Top 提示文字" placement="top" :width="100">
            <lan-button size="small" classType="primary">上</lan-button>
          </lan-tooltip>
        </div>
        <div class="left">
          <lan-tooltip content="Left 提示文字" placement="left"  effect='light'>
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

    <!--<label class="title">Carousel</label>-->
    <!--<div class="group">-->
      <!--<lan-carousel :carouselSource="carouselSource"></lan-carousel>-->
    <!--</div>-->

    <lan-back-top></lan-back-top>
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
        tabSource: [{
          label: '标签一'
        }, {
          label: '标签二'
        }, {
          label: '标签三'
        }, {
          label: '标签四',
          icon: 'all'
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
  .grid .lan-col  {
    color: #fff;
    text-align: center;
    margin: 10px 0;
  }
  .grid .lan-col .demo {
    background: rgba(0,153,229,.9);
  }
  .grid .lan-col:nth-child(odd) .demo{
    background: rgba(0, 153, 229, .7);
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
