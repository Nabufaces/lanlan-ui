webpackJsonp([0],{110:function(t,n,l){"use strict";function e(t){l(150)}Object.defineProperty(n,"__esModule",{value:!0});var a=l(152),o=l.n(a),p=l(153),r=l(39),i=e,s=r(o.a,p.a,!1,i,"data-v-4032de9c",null);n.default=s.exports},150:function(t,n,l){var e=l(151);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);l(94)("04e8a48e",e,!0)},151:function(t,n,l){n=t.exports=l(93)(void 0),n.push([t.i,".box[data-v-4032de9c]{width:500px;margin:100px 150px}.box .top[data-v-4032de9c]{text-align:center;margin-bottom:20px}.box .right[data-v-4032de9c]{float:right;width:150px;margin-bottom:20px}.box .bottom[data-v-4032de9c]{clear:both;text-align:center}.box .left[data-v-4032de9c]{float:left;width:150px;margin-bottom:20px}",""])},152:function(t,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"tooltip",data:function(){this.$createElement;return{columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明",render:function(t,n){var l=n.tr;return"placement"===l.property?t("span",null,["提示框出现的位置，可选值为",t("code",null,["top"]),t("code",null,["top-start"]),t("code",null,["top-end"]),t("code",null,["bottom"]),t("code",null,["bottom-start"]),t("code",null,["bottom-end"]),t("code",null,["left"]),t("code",null,["left-start"]),t("code",null,["left-end"]),t("code",null,["right"]),t("code",null,["right-start"]),t("code",null,["right-end"])]):"effect"===l.property?t("span",null,["提供的主题，可选值 ",t("code",null,["dark"])," ",t("code",null,["light"])]):t("span",null,[l.explain])}},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourceSelect:[{property:"placement",type:"String",default:"top"},{property:"content",explain:"Tooltip内容",type:"String",default:"-"},{property:"effect",type:"String",default:"dark"},{property:"delay",explain:"延迟出现时间",type:"Number",default:100},{property:"width",explain:"Tooltip 宽度,设置后文字超出会自动换行",type:"Number",default:"-"}]}}}},153:function(t,n,l){"use strict";var e=function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("article",[l("h1",[t._v("Tooltip 文字提示")]),t._v(" "),l("p",[t._v("文字提示气泡框，在鼠标悬停时显示")]),t._v(" "),l("h2",{staticStyle:{"margin-top":"40px"}},[t._v("代码示例")]),t._v(" "),l("h3",[t._v("基础使用")]),t._v(" "),l("div",{staticClass:"box"},[l("div",{staticClass:"top"},[l("lan-tooltip",{attrs:{content:"Top-start 提示文字",placement:"top-start"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("上左")])],1),t._v(" "),l("lan-tooltip",{attrs:{content:"Top 提示文字 Top 提示文字",placement:"top",width:100}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("上边")])],1),t._v(" "),l("lan-tooltip",{attrs:{content:"Top-end 提示文字",placement:"top-end"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("上右")])],1)],1),t._v(" "),l("div",{staticClass:"left"},[l("lan-tooltip",{attrs:{content:"Left-start 提示文字",placement:"left-start",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("左上")])],1),l("br"),l("br"),t._v(" "),l("lan-tooltip",{attrs:{content:"Left 提示文字",placement:"left",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("左边")])],1),l("br"),l("br"),t._v(" "),l("lan-tooltip",{attrs:{content:"Left-end 提示文字",placement:"left-end",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("左下")])],1)],1),t._v(" "),l("div",{staticClass:"right"},[l("lan-tooltip",{attrs:{content:"Right-start 提示文字",placement:"right-start"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("右上")])],1),l("br"),l("br"),t._v(" "),l("lan-tooltip",{attrs:{content:"Right 提示文字",placement:"right"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("右边")])],1),l("br"),l("br"),t._v(" "),l("lan-tooltip",{attrs:{content:"Right-end 提示文字",placement:"right-end"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("右下")])],1)],1),t._v(" "),l("div",{staticClass:"bottom"},[l("lan-tooltip",{attrs:{content:"Bottom-start 提示文字",placement:"bottom-start",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("下左")])],1),t._v(" "),l("lan-tooltip",{attrs:{content:"Bottom 提示文字",placement:"bottom",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("下边")])],1),t._v(" "),l("lan-tooltip",{attrs:{content:"Bottom-end 提示文字",placement:"bottom-end",effect:"light"}},[l("lan-button",{attrs:{size:"small",classType:"primary"}},[t._v("下右")])],1)],1)]),t._v(" "),l("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("    "),l("code",{staticClass:"html"},[t._v('\n      <div class="box">\n        <div class="top">\n          <lan-tooltip content="Top-start 提示文字" placement="top-start">\n            <lan-button size="small" classType="primary">上左</lan-button>\n          </lan-tooltip>\n          <lan-tooltip content="Top 提示文字 Top 提示文字" placement="top" :width="100">\n            <lan-button size="small" classType="primary">上边</lan-button>\n          </lan-tooltip>\n          <lan-tooltip content="Top-end 提示文字" placement="top-end">\n            <lan-button size="small" classType="primary">上右</lan-button>\n          </lan-tooltip>\n        </div>\n        <div class="left">\n          <lan-tooltip content="Left-start 提示文字" placement="left-start"  effect=\'light\'>\n            <lan-button size="small" classType="primary">左上</lan-button>\n          </lan-tooltip><br/><br/>\n          <lan-tooltip content="Left 提示文字" placement="left"  effect=\'light\'>\n            <lan-button size="small" classType="primary">左边</lan-button>\n          </lan-tooltip><br/><br/>\n          <lan-tooltip content="Left-end 提示文字" placement="left-end"  effect=\'light\'>\n            <lan-button size="small" classType="primary">左下</lan-button>\n          </lan-tooltip>\n        </div>\n        <div class="right">\n          <lan-tooltip content="Right-start 提示文字" placement="right-start">\n            <lan-button size="small" classType="primary">右上</lan-button>\n          </lan-tooltip><br/><br/>\n          <lan-tooltip content="Right 提示文字" placement="right">\n            <lan-button size="small" classType="primary">右边</lan-button>\n          </lan-tooltip><br/><br/>\n          <lan-tooltip content="Right-end 提示文字" placement="right-end">\n            <lan-button size="small" classType="primary">右下</lan-button>\n          </lan-tooltip>\n        </div>\n        <div class="bottom">\n          <lan-tooltip content="Bottom-start 提示文字" placement="bottom-start" effect=\'light\'>\n            <lan-button size="small" classType="primary">下左</lan-button>\n          </lan-tooltip>\n          <lan-tooltip content="Bottom 提示文字" placement="bottom" effect=\'light\'>\n            <lan-button size="small" classType="primary">下边</lan-button>\n          </lan-tooltip>\n          <lan-tooltip content="Bottom-end 提示文字" placement="bottom-end" effect=\'light\'>\n            <lan-button size="small" classType="primary">下右</lan-button>\n          </lan-tooltip>\n        </div>\n      </div>\n      <style scoped>\n        .box {\n          width: 500px;\n          margin: 100px 150px;\n        }\n        .box .top {\n          text-align: center;\n          margin-bottom: 20px;\n        }\n        .box .right {\n          float: right;\n          width: 150px;\n          margin-bottom: 20px;\n        }\n        .box .bottom {\n          clear: both;\n          text-align: center;\n        }\n        .box .left {\n          float: left;\n          width: 150px;\n          margin-bottom: 20px;\n        }\n      </style>\n    ')]),t._v("\n  ")]),t._v(" "),l("h2",[t._v("API")]),t._v(" "),l("h3",[t._v("lan-tooltip props")]),t._v(" "),l("lan-table",{attrs:{column:t.columnProps,tableSource:t.sourceSelect,border:!0}})],1)},a=[],o={render:e,staticRenderFns:a};n.a=o}});