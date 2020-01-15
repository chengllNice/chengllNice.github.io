(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217498"],{c5a1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"doc-article cl-ui-doc"},[r("h1",[t._v("Drawer 抽屉")]),r("p",[t._v("屏幕边缘滑出的浮层面板。")]),t._m(0),r("code-wrap",{attrs:{id:"JCCT"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("基础抽屉，点击触发按钮从右侧滑出抽屉，点击遮罩层关闭。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础抽屉 "),r("a",{attrs:{href:"#JCCT","data-title":"基础抽屉"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo0")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-button type="primary" @click="drawerBase = true">Open</cl-button>\n    <cl-drawer v-model="drawerBase" title="Base Drawer">\n        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n    </cl-drawer>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          drawerBase: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),r("code-wrap",{attrs:{id:"BTWZHCDCT"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("通过设置 "),r("code",[t._v("placement")]),t._v("属性可以控制抽屉滑出的位置。可选值为 "),r("code",[t._v("left")]),r("code",[t._v("right")]),r("code",[t._v("top")]),r("code",[t._v("bottom")]),t._v("。垂直方向滑出时默认height为260px。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("不同位置滑出的抽屉 "),r("a",{attrs:{href:"#BTWZHCDCT","data-title":"不同位置滑出的抽屉"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo1")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-button type="primary" @click="openDrawer(\'left\')">Left Open</cl-button>\n    <cl-button type="primary" @click="openDrawer(\'right\')">Right Open</cl-button>\n    <cl-button type="primary" @click="openDrawer(\'top\')">Top Open</cl-button>\n    <cl-button type="primary" @click="openDrawer(\'bottom\')">Bottom Open</cl-button>\n    <cl-drawer v-model="drawerPosition" title="Position Drawer" :placement="placement">\n        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n    </cl-drawer>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          placement: \'right\',\n          drawerPosition: false,\n        }\n      },\n      methods: {\n        openDrawer(placement){\n            this.placement = placement;\n            this.drawerPosition = true;\n          }\n      }\n    }\n<\/script>\n\n')])])])],2),r("code-wrap",{attrs:{id:"DCCT"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("多层抽屉。在抽屉内打开新的抽屉。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("多层抽屉 "),r("a",{attrs:{href:"#DCCT","data-title":"多层抽屉"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo2")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-button type="primary" @click="drawerMore = true">Open</cl-button>\n    <cl-drawer width="500" v-model="drawerMore" title="One-Level Drawer">\n        <cl-button type="primary" @click="drawerMoreTwo = true">Open TwoDrawer</cl-button>\n    </cl-drawer>\n    <cl-drawer v-model="drawerMoreTwo" title="Two-Level Drawer">\n        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n    </cl-drawer>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          drawerMore: false,\n          drawerMoreTwo: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),r("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{attrs:{id:"api"}},[t._v("API "),r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"drawer-props"}},[t._v("Drawer props "),r("a",{staticClass:"header-anchor",attrs:{href:"#drawer-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")])])]),r("tbody",[r("tr",[r("td",[t._v("width")]),r("td",[t._v("String, Number")]),r("td",[t._v("设置抽屉的宽度，"),r("code",[t._v("placement")]),t._v("为"),r("code",[t._v("top")]),r("code",[t._v("bottom")]),t._v("时无效")]),r("td",[t._v("260")])]),r("tr",[r("td",[t._v("height")]),r("td",[t._v("String, Number")]),r("td",[t._v("设置抽屉的高度，"),r("code",[t._v("placement")]),t._v("为"),r("code",[t._v("left")]),r("code",[t._v("right")]),t._v("时无效")]),r("td",[t._v("260")])]),r("tr",[r("td",[t._v("placement")]),r("td",[t._v("String")]),r("td",[t._v("抽屉滑出的位置，可选值"),r("code",[t._v("left")]),r("code",[t._v("right")]),r("code",[t._v("top")]),r("code",[t._v("bottom")])]),r("td",[t._v("right")])]),r("tr",[r("td",[t._v("value")]),r("td",[t._v("Boolean")]),r("td",[t._v("抽屉是否显示，可以使用v-model双向绑定数据")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("footerHide")]),r("td",[t._v("Boolean")]),r("td",[t._v("是否隐藏抽屉的页脚")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("closable")]),r("td",[t._v("Boolean")]),r("td",[t._v("是否显示右上角的关闭按钮")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("cancelText")]),r("td",[t._v("String")]),r("td",[t._v("取消按钮的文字")]),r("td",[t._v("取消")])]),r("tr",[r("td",[t._v("okText")]),r("td",[t._v("String")]),r("td",[t._v("确定按钮的文字")]),r("td",[t._v("确定")])]),r("tr",[r("td",[t._v("styles")]),r("td",[t._v("Object")]),r("td",[t._v("抽屉中间层的样式")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("title")]),r("td",[t._v("String")]),r("td",[t._v("抽屉的标题")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("loading")]),r("td",[t._v("Boolean")]),r("td",[t._v("异步加载的抽屉，点击确定按钮时会显示loading效果，此时需要手动关闭抽屉")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("coverClosable")]),r("td",[t._v("Boolean")]),r("td",[t._v("点击遮罩层是否允许关闭")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("coverShow")]),r("td",[t._v("Boolean")]),r("td",[t._v("是否显示抽屉的遮罩层")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("renderHtml")]),r("td",[t._v("HTMLElement, Boolean")]),r("td",[t._v("指定抽屉挂载的 HTML 节点，false为当前节点")]),r("td",[t._v("document.body")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"drawer-event"}},[t._v("Drawer event "),r("a",{staticClass:"header-anchor",attrs:{href:"#drawer-event"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("事件名")]),r("th",[t._v("说明")]),r("th",[t._v("返回值")])])]),r("tbody",[r("tr",[r("td",[t._v("ok")]),r("td",[t._v("点击确定按钮时触发")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("cancel")]),r("td",[t._v("点击取消按钮时触发")]),r("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"drawer-slot"}},[t._v("Drawer slot "),r("a",{staticClass:"header-anchor",attrs:{href:"#drawer-slot"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("事件名")]),r("th",[t._v("说明")]),r("th",[t._v("返回值")])])]),r("tbody",[r("tr",[r("td",[t._v("close")]),r("td",[t._v("自定义右上角的关闭按钮")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("header")]),r("td",[t._v("自定义标题栏内容")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("footer")]),r("td",[t._v("自定义抽屉页脚内容")]),r("td",[t._v("-")])])])])}],a=(r("5ab2"),r("6d57"),r("e10e"),r("9d37"));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-button",{attrs:{type:"primary"},on:{click:function(e){t.drawerBase=!0}}},[t._v("Open")]),t._v(" "),r("cl-drawer",{attrs:{title:"Base Drawer"},model:{value:t.drawerBase,callback:function(e){t.drawerBase=e},expression:"drawerBase"}},[r("p",[t._v("Some contents...Some contents...Some contents...Some contents...Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")])])]],2)},e=[],r={data:function(){return{drawerBase:!1}}};return s({render:t,staticRenderFns:e},r)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDrawer("left")}}},[t._v("Left Open")]),t._v(" "),r("cl-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDrawer("right")}}},[t._v("Right Open")]),t._v(" "),r("cl-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDrawer("top")}}},[t._v("Top Open")]),t._v(" "),r("cl-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDrawer("bottom")}}},[t._v("Bottom Open")]),t._v(" "),r("cl-drawer",{attrs:{title:"Position Drawer",placement:t.placement},model:{value:t.drawerPosition,callback:function(e){t.drawerPosition=e},expression:"drawerPosition"}},[r("p",[t._v("Some contents...Some contents...Some contents...Some contents...Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")])])]],2)},e=[],r={data:function(){return{placement:"right",drawerPosition:!1}},methods:{openDrawer:function(t){this.placement=t,this.drawerPosition=!0}}};return s({render:t,staticRenderFns:e},r)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-button",{attrs:{type:"primary"},on:{click:function(e){t.drawerMore=!0}}},[t._v("Open")]),t._v(" "),r("cl-drawer",{attrs:{width:"500",title:"One-Level Drawer"},model:{value:t.drawerMore,callback:function(e){t.drawerMore=e},expression:"drawerMore"}},[r("cl-button",{attrs:{type:"primary"},on:{click:function(e){t.drawerMoreTwo=!0}}},[t._v("Open TwoDrawer")])],1),t._v(" "),r("cl-drawer",{attrs:{title:"Two-Level Drawer"},model:{value:t.drawerMoreTwo,callback:function(e){t.drawerMoreTwo=e},expression:"drawerMoreTwo"}},[r("p",[t._v("Some contents...Some contents...Some contents...Some contents...Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")]),t._v(" "),r("p",[t._v("Some contents...")])])]],2)},e=[],r={data:function(){return{drawerMore:!1,drawerMoreTwo:!1}}};return s({render:t,staticRenderFns:e},r)}()}},d=l,i=r("5511"),v=Object(i["a"])(d,n,o,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d217498.03e23490.js.map