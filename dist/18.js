webpackJsonp([18],{101:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=a(132),c=a.n(o),n=a(133),r=a(39),t=r(c.a,n.a,!1,null,null,null);l.default=t.exports},132:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={name:"checkbox",data:function(){return{checkboxValue:!1,checkboxGroup:["apple"],columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明"},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourceCheckbox:[{property:"value",explain:"只在单独使用时有效。可以使用 v-model 双向绑定数据",type:"Boolean",default:"-"},{property:"label",explain:"只在组合使用时有效。指定当前选项的 value 值",type:"String | Number",default:"-"}],sourceCheckboxGroup:[{property:"value",explain:"指定选中项目的集合，可以使用 v-model 双向绑定数据",type:"Array",default:"[]"}],columnEvents:[{prop:"eventName",label:"事件名",width:200},{prop:"explain",label:"说明"},{prop:"back",label:"返回值",width:100}],sourceEvents:[{eventName:"change",explain:"选项状态发生改变时触发",back:"当前状态值"}]}}}},133:function(e,l,a){"use strict";var o=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("article",[a("h1",[e._v("Checkbox 复选框")]),e._v(" "),a("p",[e._v("基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。")]),e._v(" "),a("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),a("h3",[e._v("单独使用")]),e._v(" "),a("lan-row",[a("lan-checkbox",{model:{value:e.checkboxValue,callback:function(l){e.checkboxValue=l},expression:"checkboxValue"}},[e._v("复选框")])],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-checkbox v-model="checkboxValue">复选框</lan-checkbox>\n      <script>\n        export default {\n          data () {\n            return {\n              checkboxValue: false\n            }\n          }\n        }\n      <\/script>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("组合使用")]),e._v(" "),a("lan-row",[a("lan-checkbox-group",{model:{value:e.checkboxGroup,callback:function(l){e.checkboxGroup=l},expression:"checkboxGroup"}},[a("lan-checkbox",{attrs:{label:"apple"}},[e._v("apple")]),e._v(" "),a("lan-checkbox",{attrs:{label:"android"}},[e._v("android")]),e._v(" "),a("lan-checkbox",{attrs:{label:"windows"}},[e._v("windows")])],1)],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-checkbox-group v-model="checkboxGroup">\n        <lan-checkbox label="apple">apple</lan-checkbox>\n        <lan-checkbox label="android">android</lan-checkbox>\n        <lan-checkbox label="windows">windows</lan-checkbox>\n      </lan-checkbox-group>\n      <script>\n        export default {\n          data () {\n            return {\n              checkboxGroup: [\'apple\']\n            }\n          }\n        }\n      <\/script>\n    ')]),e._v("\n  ")]),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("lan-checkbox props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceCheckbox,border:!0}}),e._v(" "),a("h3",[e._v("lan-checkbox props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceCheckboxGroup,border:!0}}),e._v(" "),a("h3",[e._v("lan-checkbox/lan-checkbox-group event")]),e._v(" "),a("lan-table",{attrs:{column:e.columnEvents,tableSource:e.sourceEvents,border:!0}})],1)},c=[],n={render:o,staticRenderFns:c};l.a=n}});