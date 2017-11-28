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


#### icon 图标 lan-icon
1. font-size: icon大小
2. type: icon名称
3. color: icon颜色


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
