## 懒懒UI库

### NPM安装

#### 全局引入
      $ npm install lanlan-ui@0.1.1 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import lanlanui from 'lanlan-ui'
      Vue.use(lanlanui);
  
#### 按需引入
      $ npm install lanlan-ui@0.1.1 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import { lanButton } from 'lanlan-ui'
      new Vue({
        el: '#app',
        components: {
          lanButton
        }
      })
    
#### table 表格 lan-table
1. column           表格列设置
    1. prop         对应列内容的字段名
    2. label        对应列标题
    3. align        对应列的对齐方式
    4. width        对应列的宽度
    5. sortable     对应列排序
    6. render       自定义模块，用JSX写法
2. tableSource      表格数据源，与column.prop对应
3. height           表格高度，超出显示滚动条
4. border           表格是否带边框
5. stripe           表格是否带斑马纹


#### icon 图标 lan-icon
1. font-size: icon大小
2. type: icon名称
3. color: icon颜色


## 通知
    
#### messageBox 消息弹框 lan-messageBox
1. title          标题	
2. message	      说明文字
3. type           消息类型 (warning, error, success)
4. closeWindow    点击消息弹框区域之外是否关闭
5. event: confirm 点击确认时触发

#### message 消息 lan-message
1. message        说明文字	
2. type           消息类型 (warning, error, success)
3. duration       显示时间 (默认3000ms)
4. event: close   消息消失后触发

#### badge 标记
1. value	显示值
2. max	    最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
3. is-dot	小圆点
4. hidden   隐藏标记
