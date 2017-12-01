<template>
  <div class="m-wrapper">
    <div class="m-hd">
      <img src="../../static/img/logo.png" class="m-hd-logo"/>
      <lan-tabs :activeLabel="1" @change="toRepository">
        <lan-tab-pane :label="1"><router-link to="/affix" tag="span">组件</router-link></lan-tab-pane>
        <lan-tab-pane :label="2">
          <lan-icon name="github"></lan-icon>&emsp;Github
        </lan-tab-pane>
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
            <router-link to="/icon" class="menu-item" tag="li">Icon 图标</router-link>
            <li class="menu-group">Form</li>
            <router-link to="/switch" class="menu-item" tag="li">Switch 开关</router-link>
            <router-link to="/radio" class="menu-item" tag="li">Radio 单选框</router-link>
            <router-link to="/checkbox" class="menu-item" tag="li">Checkbox 复选框</router-link>
            <router-link to="/input" class="menu-item" tag="li">Input 输入框</router-link>
            <router-link to="/select" class="menu-item" tag="li">Select 选择器</router-link>
            <router-link to="/timePicker" class="menu-item" tag="li">TimePicker 时间选择器</router-link>
            <router-link to="/datePicker" class="menu-item" tag="li">DatePicker 日期选择器</router-link>
            <router-link to="/table" class="menu-item" tag="li">Table 表格</router-link>
            <li class="menu-group">View</li>
            <router-link to="/message" class="menu-item" tag="li">Message 消息</router-link>
            <router-link to="/messageBox" class="menu-item" tag="li">MessageBox 消息框</router-link>
            <router-link to="/modal" class="menu-item" tag="li">Modal 模态框</router-link>
            <router-link to="/tooltip" class="menu-item" tag="li">Tooltip 提示</router-link>
            <router-link to="/loadingBar" class="menu-item" tag="li">LoadingBar 加载进度条</router-link>
            <li class="menu-group">Other</li>
            <router-link to="/tabs" class="menu-item" tag="li">Tabs 标签</router-link>
            <router-link to="/badge" class="menu-item" tag="li">Badge 徽标</router-link>
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
    methods: {
      toRepository(value) {
        if(value === 2) {
          window.location.href = 'https://github.com/Nabufaces/lanlan-ui'
        }
      }
    }
  }
</script>

<style lang="less" src='../styles/index.less'></style>
