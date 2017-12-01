webpackJsonp([15],{105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(138),r=a.n(l),n=a(139),p=a(39),i=p(r.a,n.a,!1,null,null,null);t.default=i.exports},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"datePicker",data:function(){return{checkboxValue:!1,checkboxGroup:["apple"],columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明"},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:180}],sourceTable:[{property:"placeholder",explain:"非范围选择时的占位内容",type:"String",default:"-"},{property:"min",explain:"最小日期",type:"String",default:"1970-01-01"},{property:"max",explain:"最大日期",type:"String",default:"3016-01-01"},{property:"format",explain:"日期展示格式",type:"String",default:"yyyy-MM-dd"}],columnEvents:[{prop:"eventName",label:"事件名",width:200},{prop:"explain",label:"说明"},{prop:"back",label:"返回值",width:200}],sourceEvents:[{eventName:"confirm",explain:"日期点击确认时触发",back:"格式化后的日期"}]}}}},139:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h1",[e._v("DatePicker 日期选择器")]),e._v(" "),a("p",[e._v("选择日期，支持年、月、日等类型，支持选择范围。")]),e._v(" "),a("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),a("h3",[e._v("基础使用")]),e._v(" "),a("lan-date-picker",{attrs:{placeholder:"选择日期"}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-date-picker placeholder="选择日期"></lan-date-picker>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("含日期范围")]),e._v(" "),a("lan-row",[a("lan-date-picker",{attrs:{placeholder:"选择日期",min:"2015-09-01",max:"2020-12-30"}})],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-date-picker placeholder="选择日期" min="2015-09-01" max="2020-12-30"></lan-date-picker>\n    ')]),e._v("\n  ")]),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("lan-date-picker props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceTable,border:!0}}),e._v(" "),a("h3",[e._v("lan-date-picker event")]),e._v(" "),a("lan-table",{attrs:{column:e.columnEvents,tableSource:e.sourceEvents,border:!0}})],1)},r=[],n={render:l,staticRenderFns:r};t.a=n}});