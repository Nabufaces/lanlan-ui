## 懒懒UI库

### NPM安装

#### 全局引入
      $ npm install lanlan-ui@0.0.10 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import lanlanui from 'lanlan-ui'
      Vue.use(lanlanui);
  
#### 按需引入
      $ npm install lanlan-ui@0.0.10 --save
      import 'lanlan-ui/dist/lanlanui.css'
      import { lanButton } from 'lanlan-ui'
      new Vue({
        el: '#app',
        components: {
          lanButton
        }
      })
      
#### modal 模态框 lan-modal
1. showModal        是否显示模态框（必填）
2. title            模态框标题
3. width            模态框宽度，默认400px
4. showClose        是否显示关闭按钮
5. closeWindow      点击模态框区域之外是否关闭
6. slot:
    1. title        模态框标题内容
    2. default      模态框内容
    3. footer       模态框页脚内容
11. event: 
    1. close        关闭模态框
    2. cancel       点击取消按钮（同时会抛出close事件）
    3. confirm      点击确认按钮（同时会抛出close事件）
    
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

#### toolTip 文字提示 lan-toolTip
1. placement tooltip的出现位置
      1. top 
      2. left 
      3. right 
      4. bottom
2. content          tooltip内容
3. effect           提供的主题    
      1. dark(默认)
      2. light
4. delay            延迟出现
5. width            Tooltip 宽度,设置后文字超出会自动换行


#### icon 图标 lan-icon
1. font-size: icon大小
2. type: icon名称
3. color: icon颜色
 
## 表单

#### radioGroup 单选框组  lan-radioGroup
1. value	    指定当前选中的项目。可以使用 v-model 双向绑定数据
2. event: onChange  选项状态发生改变时触发

#### checkbox 复选框 lan-checkbox
1. value	    只在单独使用时有效。可以使用 v-model 双向绑定数据
2. label	    只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
3. event: onChange  选项状态发生改变时触发

#### checkboxGroup 单选框组  lan-checkboxGroup
1. value	    指定当前选中的项目。可以使用 v-model 双向绑定数据
2. event: onChange  选项状态发生改变时触发

#### input 输入框 lan-input
1. placeholder     占位符
2. readonly        是否只读
3. disabled        是否禁用
4. autofocus       自动获取焦点
5. autocomplete    自动完成
6. maxlength       文本框最大输入长度
7. prefixIcon      输入框头部图标
8. suffixIcon      输入框尾部图标
9. customClass     扩展样式
10. slot：
    1. prepend     输入框前置内容
    2. append      输入框后置内容
11. event:
    1. blur        在 tt 失去焦点时触发
    2. focus       在 Input 获得焦点时触发
    3. input       在 Input 输入值时触发
    4. change      在 Input 值改变时触发
    5. click       在 Input 点击时触发
  

#### select 下拉选择 lan-select
1. placeholder  输入框填充
2. disabled     输入框是否禁用
3. filterable   是否可搜索
4. option       结合lan-option联用
    1. label      选项显示的内容
    2. value      选项值
    3. disabled   是否禁用当前项
    4. slot       自定义模板
5. event:
    1. selected:  选中时触发
    
#### timePicker 时间选择 lan-timePicker
1. placeholder      非范围选择时的占位内容
2. format           展示的时间格式（默认 HH:mm)
3. disabledHours    禁用小时段
4. disabledMinutes  禁用分钟段
5. disabledSeconds  禁用秒段
6. event: change  时间发生变化时触发

#### datePicker 日期选择 lan-datePicker
1. placeholder	    非范围选择时的占位内容
2. min        	    最小日期（例: '2000-01-01'）
3. max              最大日期
4. format           展示的日期格式（默认 'yyyy-MM-dd')
5. event: confirm   日期确认时触发


## 导航


## 通知

#### notify 通知 lan-notify
1. message  通知内容
2. imageIcon: 选项icon
3. duration  notify停留毫秒数
4. useInnerHtml   自定义内容标志  boolean
5. innerHtml    自定义内容，与useInnerHtml联用
6. event:
    1. show:  notify出现
    2. close:  notify消失
    
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
