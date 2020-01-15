(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da385"],{"6b58":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-article cl-ui-doc"},[n("h1",[t._v("Notice 信息通知")]),n("p",[t._v("概述：在右上角显示可关闭的全局通知提示，用于展示重要信息或者系统推送等。")]),t._m(0),n("code-wrap",{attrs:{id:"JCYF"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("基础用法。默认4.5s后自动关闭，可自定义关闭时间。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),n("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo0")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-button type="primary" @click="openNotice(true)">默认</cl-button>\n    <cl-button @click="openNotice(false)">仅标题</cl-button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        openNotice(isContent){\n          this.$Notice.open({\n            title: \'通知的标题\',\n            content: isContent && \'通知的内容\',\n            duration: 3000\n          });\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),n("code-wrap",{attrs:{id:"TZLX"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("带有默认类型通知图标的通知提示，支持四种类型 "),n("code",[t._v("info")]),n("code",[t._v("success")]),n("code",[t._v("warning")]),n("code",[t._v("error")]),t._v(" 。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("通知类型 "),n("a",{attrs:{href:"#TZLX","data-title":"通知类型"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo1")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <h4>带内容</h4>\n    <cl-button @click=\"openNotice('info', true)\">info</cl-button>\n    <cl-button @click=\"openNotice('success', true)\">success</cl-button>\n    <cl-button @click=\"openNotice('warning', true)\">warning</cl-button>\n    <cl-button @click=\"openNotice('error', true)\">error</cl-button>\n    \n    <h4>仅标题</h4>\n    <cl-button @click=\"openNotice('info', false)\">info</cl-button>\n    <cl-button @click=\"openNotice('success', false)\">success</cl-button>\n    <cl-button @click=\"openNotice('warning', false)\">warning</cl-button>\n    <cl-button @click=\"openNotice('error', false)\">error</cl-button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        openNotice(type, isContent){\n          this.$Notice[type]({\n            title: '通知的标题',\n            content: isContent && '通知的内容',\n          });\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),n("code-wrap",{attrs:{id:"DYBJSDTZ"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("background")]),t._v("属性可以实现带有背景色的通知。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("带有背景色的通知 "),n("a",{attrs:{href:"#DYBJSDTZ","data-title":"带有背景色的通知"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo2")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-button type="info" @click="openNotice(\'info\')">info</cl-button>\n    <cl-button type="success" @click="openNotice(\'success\')">success</cl-button>\n    <cl-button type="warning" @click="openNotice(\'warning\')">warning</cl-button>\n    <cl-button type="danger" @click="openNotice(\'error\')">error</cl-button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        openNotice(type){\n          this.$Notice[type]({\n            title: \'通知的标题\',\n            content: \'通知的内容\',\n            background: true\n          });\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),n("code-wrap",{attrs:{id:"ZDYWZ"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("全局配置"),n("code",[t._v("placement")]),t._v("属性可以定义"),n("code",[t._v("notice")]),t._v("出现的位置，可选值 "),n("code",[t._v("topLeft")]),n("code",[t._v("topRight")]),n("code",[t._v("bottomLeft")]),n("code",[t._v("bottomRight")]),t._v(", 默认值为"),n("code",[t._v("topRight")]),t._v(";")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义位置 "),n("a",{attrs:{href:"#ZDYWZ","data-title":"自定义位置"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo3")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-row :gutter="16">\n        <cl-col>\n            <cl-select v-model="placement" @change="placementChange">\n                <cl-option value="topLeft">topLeft</cl-option>\n                <cl-option value="topRight">topRight</cl-option>\n                <cl-option value="bottomLeft">bottomLeft</cl-option>\n                <cl-option value="bottomRight">bottomRight</cl-option>\n            </cl-select>\n        </cl-col>\n        <cl-col>\n            <cl-button type="primary" @click="openNotice">placement</cl-button>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                placement: \'topRight\'\n            }\n        },\n        methods: {\n            placementChange(value){\n                this.$Notice.config({\n                    placement: value\n                })\n            },\n            openNotice(){\n                this.$Notice.open({\n                    title: \'通知的标题\',\n                    content: \'通知的内容\',\n                });\n            }\n        }\n    }\n<\/script>\n\n')])])])],2),t._m(1),t._m(2),n("p",[t._v("直接通过一下方法来使用组件：")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("另外提供全局配置的方法：")]),t._m(6),t._m(7),t._m(8)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),n("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"api"}},[t._v("API "),n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"notice-instance"}},[t._v("Notice instance "),n("a",{staticClass:"header-anchor",attrs:{href:"#notice-instance"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[n("code",[t._v("this.$Notice.open(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Notice.info(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Notice.success(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Notice.warning(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Notice.error(config)")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("参数"),n("code",[t._v("config")]),t._v("为或对象。具体配置如下：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("title")]),n("td",[t._v("String")]),n("td",[t._v("通知标题")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("String")]),n("td",[t._v("通知内容，支持html字符串")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("Number")]),n("td",[t._v("自动关闭的延时，单位ms，值为0时不关闭")]),n("td",[t._v("4500")])]),n("tr",[n("td",[t._v("background")]),n("td",[t._v("Boolean")]),n("td",[t._v("是否显示背景色")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("onClose")]),n("td",[t._v("Function")]),n("td",[t._v("关闭时的回调")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("this.$Notice.config(config)")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("参数"),n("code",[t._v("config")]),t._v("为对象。具体配置如下：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("position")]),n("td",[t._v("Number")]),n("td",[t._v("第一个notice提示信息距离顶部或者底部的距离，单位px")]),n("td",[t._v("85")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("Number")]),n("td",[t._v("自动关闭的延时，单位ms，值为0时不关闭")]),n("td",[t._v("4500")])]),n("tr",[n("td",[t._v("noticeItemDis")]),n("td",[t._v("Number")]),n("td",[t._v("每个notice提示信息之间的距离")]),n("td",[t._v("10")])]),n("tr",[n("td",[t._v("placement")]),n("td",[t._v("String")]),n("td",[t._v("出现的位置，可选值 "),n("code",[t._v("topLeft")]),n("code",[t._v("topRight")]),n("code",[t._v("bottomLeft")]),n("code",[t._v("BottomRight")])]),n("td",[t._v("topRight")])])])])}],i=(n("5ab2"),n("6d57"),n("e10e"),n("9d37"));function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-button",{attrs:{type:"primary"},on:{click:function(e){return t.openNotice(!0)}}},[t._v("默认")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice(!1)}}},[t._v("仅标题")])]],2)},e=[],n={data:function(){return{}},methods:{openNotice:function(t){this.$Notice.open({title:"通知的标题",content:t&&"通知的内容",duration:3e3})}}};return l({render:t,staticRenderFns:e},n)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("h4",[t._v("带内容")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("info",!0)}}},[t._v("info")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("success",!0)}}},[t._v("success")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("warning",!0)}}},[t._v("warning")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("error",!0)}}},[t._v("error")]),t._v(" "),n("h4",[t._v("仅标题")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("info",!1)}}},[t._v("info")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("success",!1)}}},[t._v("success")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("warning",!1)}}},[t._v("warning")]),t._v(" "),n("cl-button",{on:{click:function(e){return t.openNotice("error",!1)}}},[t._v("error")])]],2)},e=[],n={data:function(){return{}},methods:{openNotice:function(t,e){this.$Notice[t]({title:"通知的标题",content:e&&"通知的内容"})}}};return l({render:t,staticRenderFns:e},n)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-button",{attrs:{type:"info"},on:{click:function(e){return t.openNotice("info")}}},[t._v("info")]),t._v(" "),n("cl-button",{attrs:{type:"success"},on:{click:function(e){return t.openNotice("success")}}},[t._v("success")]),t._v(" "),n("cl-button",{attrs:{type:"warning"},on:{click:function(e){return t.openNotice("warning")}}},[t._v("warning")]),t._v(" "),n("cl-button",{attrs:{type:"danger"},on:{click:function(e){return t.openNotice("error")}}},[t._v("error")])]],2)},e=[],n={data:function(){return{}},methods:{openNotice:function(t){this.$Notice[t]({title:"通知的标题",content:"通知的内容",background:!0})}}};return l({render:t,staticRenderFns:e},n)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-row",{attrs:{gutter:16}},[n("cl-col",[n("cl-select",{on:{change:t.placementChange},model:{value:t.placement,callback:function(e){t.placement=e},expression:"placement"}},[n("cl-option",{attrs:{value:"topLeft"}},[t._v("topLeft")]),t._v(" "),n("cl-option",{attrs:{value:"topRight"}},[t._v("topRight")]),t._v(" "),n("cl-option",{attrs:{value:"bottomLeft"}},[t._v("bottomLeft")]),t._v(" "),n("cl-option",{attrs:{value:"bottomRight"}},[t._v("bottomRight")])],1)],1),t._v(" "),n("cl-col",[n("cl-button",{attrs:{type:"primary"},on:{click:t.openNotice}},[t._v("placement")])],1)],1)]],2)},e=[],n={data:function(){return{placement:"topRight"}},methods:{placementChange:function(t){this.$Notice.config({placement:t})},openNotice:function(){this.$Notice.open({title:"通知的标题",content:"通知的内容"})}}};return l({render:t,staticRenderFns:e},n)}()}},a=s,u=n("5511"),p=Object(u["a"])(a,o,c,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0da385.d85e2e9e.js.map