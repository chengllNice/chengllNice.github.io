(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c354"],{f1f9:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-article monkey-ui-doc"},[n("h1",[t._v("Message 全局提示")]),n("p",[t._v("信息反馈。在顶部居中显示并自动消失。有多种提示状态可选择。")]),t._m(0),n("code-wrap",{attrs:{id:"JCYF"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("普通提示，默认3秒后消失。显示位置距离视口顶部20px。可选类型提示 "),n("code",[t._v("info")]),n("code",[t._v("success")]),n("code",[t._v("warning")]),n("code",[t._v("error")]),t._v(" 。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),n("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-ui-demo0")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Button type="info" @click="openMessage(\'info\')">info</Button>\n    <Button type="success" @click="openMessage(\'success\')">success</Button>\n    <Button type="warning" @click="openMessage(\'warning\')">warning</Button>\n    <Button type="danger" @click="openMessage(\'error\')">error</Button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        openMessage(type){\n          this.$Message[type](`this is a ${type} message`);\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),n("code-wrap",{attrs:{id:"JZZ"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("loading状态。异步在某个合适的时机移除。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("加载中 "),n("a",{attrs:{href:"#JZZ","data-title":"加载中"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-ui-demo1")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <Button @click=\"loading\">loading</Button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        loading(){\n            let msg = this.$Message.loading({\n              duration: 0,\n              content: 'this is a loading message',\n            });\n            setTimeout(()=>{\n              msg.close();\n            },3000)\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),n("code-wrap",{attrs:{id:"DBJSDTS"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("background")]),t._v("属性可以实现带有背景色的提示。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("带背景色的提示 "),n("a",{attrs:{href:"#DBJSDTS","data-title":"带背景色的提示"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-ui-demo2")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Button type="info" @click="openMessage(\'info\')">info</Button>\n    <Button type="success" @click="openMessage(\'success\')">success</Button>\n    <Button type="warning" @click="openMessage(\'warning\')">warning</Button>\n    <Button type="danger" @click="openMessage(\'error\')">error</Button>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        openMessage(type){\n            this.$Message[type]({\n                content: `this is a ${type} backgroundColor`,\n                background: true,\n            })\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),n("code-wrap",{attrs:{id:"PD"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[n("code",[t._v("content")]),t._v("属性支持配置HTML片段。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("HTML片段 "),n("a",{attrs:{href:"#PD","data-title":"HTML片段"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-ui-demo3")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <Button @click=\"configMessage\">自定义配置</Button>\n</template>\n<script>\n    export default {\n        methods: {\n            configMessage(){\n                this.$Message.info({\n                    duration: 3000,\n                    content: '<b>this is a config message</b>',\n                    // 触发关闭时的回调\n                    onClose(){\n                        console.log('message close');\n                    }\n                });\n            }\n        }\n    }\n<\/script>\n\n")])])])],2),t._m(1),t._m(2),n("p",[t._v("直接通过一下方法来使用组件：")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("另外提供全局配置的方法：")]),t._m(6),t._m(7),t._m(8)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),n("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"api"}},[t._v("API "),n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"message-instance"}},[t._v("Message instance "),n("a",{staticClass:"header-anchor",attrs:{href:"#message-instance"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[n("code",[t._v("this.$Message.info(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Message.success(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Message.warning(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Message.error(config)")])])]),n("li",[n("p",[n("code",[t._v("this.$Message.loading(config)")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("参数"),n("code",[t._v("config")]),t._v("可以是字符串或对象。当为字符串时为提示内容，可以配置第二个参数，此参数为时间，如："),n("code",[t._v("this.$Message.info('this a message', 3000)")]),t._v("。当为对象时具体配置如下：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("content")]),n("td",[t._v("String")]),n("td",[t._v("提示内容，支持html字符串")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("Number")]),n("td",[t._v("自动关闭的延时，单位秒，值为0时不关闭")]),n("td",[t._v("3000")])]),n("tr",[n("td",[t._v("background")]),n("td",[t._v("Boolean")]),n("td",[t._v("是否显示背景色")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("Boolean")]),n("td",[t._v("是否显示关闭按钮")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("onClose")]),n("td",[t._v("Function")]),n("td",[t._v("关闭时的回调")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("this.$Message.config(config)")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("参数"),n("code",[t._v("config")]),t._v("为对象。具体配置如下：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("top")]),n("td",[t._v("Number")]),n("td",[t._v("提示组件距离顶部的距离，单位px")]),n("td",[t._v("20")])]),n("tr",[n("td",[t._v("duration")]),n("td",[t._v("Number")]),n("td",[t._v("自动关闭的延时，单位毫秒，值为0时不关闭")]),n("td",[t._v("3000")])])])])}],r=(n("5ab2"),n("6d57"),n("e10e"),n("9bef"));function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={name:"component-doc",components:{"monkey-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Button",{attrs:{type:"info"},on:{click:function(e){return t.openMessage("info")}}},[t._v("info")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(e){return t.openMessage("success")}}},[t._v("success")]),t._v(" "),n("Button",{attrs:{type:"warning"},on:{click:function(e){return t.openMessage("warning")}}},[t._v("warning")]),t._v(" "),n("Button",{attrs:{type:"danger"},on:{click:function(e){return t.openMessage("error")}}},[t._v("error")])]],2)},e=[],n={data:function(){return{}},methods:{openMessage:function(t){this.$Message[t]("this is a ".concat(t," message"))}}};return i({render:t,staticRenderFns:e},n)}(),"monkey-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Button",{on:{click:t.loading}},[t._v("loading")])]],2)},e=[],n={data:function(){return{}},methods:{loading:function(){var t=this.$Message.loading({duration:0,content:"this is a loading message"});setTimeout((function(){t.close()}),3e3)}}};return i({render:t,staticRenderFns:e},n)}(),"monkey-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Button",{attrs:{type:"info"},on:{click:function(e){return t.openMessage("info")}}},[t._v("info")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(e){return t.openMessage("success")}}},[t._v("success")]),t._v(" "),n("Button",{attrs:{type:"warning"},on:{click:function(e){return t.openMessage("warning")}}},[t._v("warning")]),t._v(" "),n("Button",{attrs:{type:"danger"},on:{click:function(e){return t.openMessage("error")}}},[t._v("error")])]],2)},e=[],n={data:function(){return{}},methods:{openMessage:function(t){this.$Message[t]({content:"this is a ".concat(t," backgroundColor"),background:!0})}}};return i({render:t,staticRenderFns:e},n)}(),"monkey-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Button",{on:{click:t.configMessage}},[t._v("自定义配置")])]],2)},e=[],n={methods:{configMessage:function(){this.$Message.info({duration:3e3,content:"<b>this is a config message</b>",onClose:function(){console.log("message close")}})}}};return i({render:t,staticRenderFns:e},n)}()}},l=c,u=n("9ca4"),d=Object(u["a"])(l,s,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d22c354.525e1e16.js.map