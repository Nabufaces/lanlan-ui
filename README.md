## Basic

#### button 按钮 lan-btn 
1. classType 样式选择
    1. primary
    2. success
    3. warning
    4. info
    5. danger
    6. default（default)
2. size 按钮尺寸大小
    1. tiny
    2. small
    3. normal（default)
    4. large
3. imageIcon: 选项icon（可选） 
4. disabled: 是否禁用（可选） 
5. customClass 样式扩展（可选）
6. event: click

#### switch 开关 lan-switch
1. switchType 开关状态(必填)
    1.true    开
    2.false   关
2. activeColor 开启背景颜色
3. inactiveColor 关闭背景颜色
4. onText switch打开时的文字
5. offText switch关闭时的文字
6. event: change

#### icon 图标 lan-icon
1. font-size: icon大小
2. type: icon名称
3. color: icon颜色

#### toolTip 文字提示 lan-toolTip
1. placement tooltip的出现位置
    - top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
2. customClass 样式扩展（可选）

#### popper 弹出框 lan-popper
1. title 标题
2. content	显示的内容，也可以通过 slot 传入 DOM
3. placement tooltip的出现位置
    - top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
4. customClass 样式扩展（可选）

#### progress 进度条 lan-progress
1. percentage  百分比（0-100, 必填）
2. type	进度条类型  line/circle
3. size 进度条的尺寸
4. active 进度条激活，进度条激活时显示动画

#### modal 模态框 lan-modal
1. title    模态框标题
2. content    模态框内容
3. okButton     是否显示确定按钮
4. cancelButton     是否显示取消按钮
5. closeButton    是否显示关闭按钮
6. closeWindow     点击模态框区域之外是否关闭
7. minHeight    内容区域最小高度
8. maxHeight    内容区域最大高度，超出则显示滚动条
9. contentTemplate  内容模板标志,true时可用content插槽
10. footerTemplate  底部模板标志,true时可用footer插槽
11. event: 
    1. ok   确定
    2. cancel   取消
    3. close 关闭模态框

#### scrollend 滚动加载 lan-scrollend
1. hasMore 是否还有数据加载
2. hasError  加载报错
3. showLoading  显示加载icon
4. showEnd  显示加载到底
5. scrollDistance: 加载距离, 默认400px
5. event: 
    1. loadMore: 加载数据
    2. scrollEnd: 滚动到底
    
#### upload 文件上传 lan-upload


## 表单

#### checkGroup 复选组  lan-checkGroup
1. source 数据源 
    1. name: 选项名
    2. value: 选项值
    3. readonly: 是否可读
    4. disabled: 是否禁用
    5. checked: 是否被选中
```
    source: [
        {name: '北京', value: 1, readonly: false, disabled: false, checked: false},
        {name: '上海', value: 2}
    ]
```
2. min 最少选几项
3. max 最多选几项
4. block 多行显示
5. event: doChecked

#### input 输入框 lan-input
1. value	 文本框的值
2. type   文本框的类型, 6种类型：int, float, char，password ,email, url
3. placeholder     占位符
4. width    组件宽度
5. size     组件大小, sm/md/lg
6. maxlength  文本框最大输入长度
7. minlength  文本框最小输入长度
8. readonly   是否只读
9. disabled   是否禁用
10. required   是否必填
11. message   验证失败时，提示的消息
12. event:
    1. keyup
    2. blur
    3. focus
    4. change
    5. input

#### select 下拉选择 lan-select
1. source 数据源 
    1. name: 选项名
    2. value: 选项值
    3. readonly: 是否可读
    4. disabled: 是否禁用
    5. imageIcon: 选项icon
```
    source: [
        {name: '北京', value: 1, disabled: false, imageIcon: ''},
        {name: '上海', value: 2}
    ]
```
2. selected  当前选择项
3. width    组件宽度
4. size     组件大小, sm/md/lg
5. placeholder  默认项的文字，如果placeholder为空并且没有选择项时，将会自动选中第一项
6. multiple  是否多选
7. maxShowCount  最大展示条数
8. required     是否必填 
9. event:
    1. change: 选中值发生变化时触发

#### Cascader 级联选择 lan-Cascader
1. source 数据源 
    1. name: 选项名
    2. value: 选项值
    3. readonly: 是否可读
    4. disabled: 是否禁用
    5. imageIcon: 选项icon
    6. children: 下一级选项
```
    source: [
        {name: '北京', value: 1, disabled: false, imageIcon: '', children: []},
        {name: '上海', value: 2}
    ]
```
2. selected  当前选择项
3. width    组件宽度
4. size     组件大小, sm/md/lg
5. placeholder  默认项的文字，如果placeholder为空并且没有选择项时，将会自动选中第一项
6. multiple  是否多选
7. maxShowCount  最大展示条数
8. required     是否必填 
9. event:
    1. change: 选中值发生变化时触发
    
#### timePicker 时间选择 lan-timePicker
1. start    开始时间
2. end	    结束时间
3. step	    间隔时间
4. minTime	最小时间，小于该时间的时间段将被禁用
5. maxTime	最大时间，大于该时间的时间段将被禁用
6. placeholder  默认项的时间
7. default-value	选择器打开时默认显示的时间
8. event: selected

#### datePicker 日期选择 lan-datePicker
1. minDate	    最小日期
2. maxDate	    最大日期
3. placeholder  默认项的日期，时间
4. showTime     是否显示时间（参数参考timePicker）
8. event: selected


## 导航

#### pagination 分页 lan-pagination
1. current  当前页
2. total    总页数
3. sumTotal     总个数
4. pageSize     每页数
5. isEllipsis   是否展示总条数
6. step    每页条数选择步长
7. event: selected: 选择时掉用

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
    
#### message 消息 lan-message
1. title   标题	
2. message	  说明文字
3. imageIcon: 选项icon
4. duration  message停留毫秒数
5. useInnerHtml   自定义内容标志  boolean
6. innerHtml    自定义内容，与useInnerHtml联用
7. showClose	是否显示关闭按钮
8. event: close:  message消失

#### badge 标记
1. value	显示值
2. max	    最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
3. is-dot	小圆点
4. hidden   隐藏标记
