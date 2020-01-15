(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e22f8"],{"7e2f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-article cl-ui-doc"},[n("h1",[t._v("Popover 气泡提示")]),n("p",[t._v("以卡片形式提示信息，与tooltip有很多类似的地方。")]),t._m(0),n("code-wrap",{attrs:{id:"JCYF"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("支持三种触发方式：鼠标悬停、点击、获取焦点。默认点击。")]),n("p",[t._v("注意：内容区域文本不自动换行。如需换行显示设置 "),n("code",[t._v("wordWrap")]),t._v("和"),n("code",[t._v("width")]),t._v("属性。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),n("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo0")],1),n("p"),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-popover title="提示" trigger="hover" content="content">\n        <cl-button>hover激活</cl-button>\n    </cl-popover>\n    <cl-popover title="提示" trigger="click" content="content">\n        <cl-button>click激活</cl-button>\n    </cl-popover>\n    <cl-popover title="提示" trigger="focus" content="content">\n        <cl-button>foucs激活</cl-button>\n    </cl-popover>\n    <cl-popover title="提示" trigger="focus" content="content">\n        <cl-input placeholder="input focus" />\n    </cl-popover>\n    <cl-popover title="提示" width="150px" wordWrap content="contentcontentcontentcontentcontentcontent">\n        <cl-button>换行显示</cl-button>\n    </cl-popover>\n</template>\n\n')])])])],2),n("code-wrap",{attrs:{id:"WZ"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("组件提供了12个方向显示popover，详见API。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("位置 "),n("a",{attrs:{href:"#WZ","data-title":"位置"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo1")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div class="doc-margin-l10" style="text-align: center;width: 300px">\n        <cl-popover title="提示" placement="top-start" content="content">\n            <cl-button>上左</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="top" content="content">\n            <cl-button>上边</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="top-end" content="content">\n            <cl-button>上右</cl-button>\n        </cl-popover>\n    </div>\n    <div class="doc-margin-l10 doc-popover-placement">\n        <cl-popover title="提示" placement="left-start" content="content">\n            <cl-button>左上</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="right-start" content="content">\n            <cl-button>右上</cl-button>\n        </cl-popover>\n    </div>\n    <div class="doc-margin-l10 doc-popover-placement">\n        <cl-popover title="提示" placement="left" content="content">\n            <cl-button>左边</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="right" content="content">\n            <cl-button>右边</cl-button>\n        </cl-popover>\n    </div>\n    <div class="doc-margin-l10 doc-popover-placement">\n        <cl-popover title="提示" placement="left-end" content="content">\n            <cl-button>左下</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="right-end" content="content">\n            <cl-button>右下</cl-button>\n        </cl-popover>\n    </div>\n    <div class="doc-margin-l10" style="text-align: center;width: 300px">\n        <cl-popover title="提示" placement="bottom-start" content="content">\n            <cl-button>下左</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="bottom" content="content">\n            <cl-button>下边</cl-button>\n        </cl-popover>\n        <cl-popover title="提示" placement="bottom-end" content="content">\n            <cl-button>下右</cl-button>\n        </cl-popover>\n    </div>\n</template>\n<style>\n    .doc-popover-placement{\n        width: 300px;\n    }\n    .doc-popover-placement:after{\n        content: \'\';\n        display: block;\n        clear: both;\n    }\n    .doc-popover-placement>*:first-child{\n        float: left;\n    }\n    .doc-popover-placement>*:last-child{\n        float: right;\n    }\n</style>\n\n')])])])],2),n("code-wrap",{attrs:{id:"FCNGB"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("默认只有点击浮层外部才可以关闭popover。可以通过 "),n("code",[t._v("v-model")]),t._v("来控制显示隐藏。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("浮层内关闭 "),n("a",{attrs:{href:"#FCNGB","data-title":"浮层内关闭"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo2")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n     <cl-popover v-model="visibleClose" title="提示" content="content">\n        <div slot="content">\n            <cl-button type="text" @click="visibleClose = false">close</cl-button>\n        </div>\n        <cl-button>点击close关闭</cl-button>\n    </cl-popover>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          visibleClose: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),n("code-wrap",{attrs:{id:"QRK"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("设置 "),n("code",[t._v("confirm")]),t._v("属性开启确认框模式。此模式下不支持slot形式的自定义内容。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("确认框 "),n("a",{attrs:{href:"#QRK","data-title":"确认框"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo3")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <cl-popover confirm title=\"您确定要删除这条内容么？\">\n        <cl-button>删除</cl-button>\n    </cl-popover>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        confirmCancel(){\n          this.$Message.info('confirm Cancel')\n        },\n        confirmOk(){\n          this.$Message.info('confirm Ok')\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),n("code-wrap",{attrs:{id:"ZDXRWZ"}},[n("div",{attrs:{slot:"description"},slot:"description"},[n("p",[t._v("可以通过 "),n("code",[t._v("renderHtml")]),t._v("来控制浮层元素渲染位置，在外层"),n("code",[t._v("overflow:hidden")]),t._v("的情况下可以指定渲染到"),n("code",[t._v("body")]),t._v("元素中使其不受影响。")])]),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("指定渲染位置 "),n("a",{attrs:{href:"#ZDXRWZ","data-title":"指定渲染位置"}},[t._v("#")])]),n("template",{slot:"source"},[n("cl-ui-demo4")],1),n("p"),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n     <cl-popover title="提示" content="content" :render-html="true">\n        <cl-button>渲染浮层元素到BODY中</cl-button>\n    </cl-popover>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      }\n    }\n<\/script>\n\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),n("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"api"}},[t._v("API "),n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"popover-props"}},[t._v("Popover props "),n("a",{staticClass:"header-anchor",attrs:{href:"#popover-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("placement")]),n("td",[t._v("String")]),n("td",[t._v("提示框出现的位置，可选值"),n("code",[t._v("top")]),n("code",[t._v("top-start")]),n("code",[t._v("top-end")]),n("code",[t._v("bottom")]),n("code",[t._v("bottom-start")]),n("code",[t._v("bottom-end")]),n("code",[t._v("left")]),n("code",[t._v("left-start")]),n("code",[t._v("left-end")]),n("code",[t._v("right")]),n("code",[t._v("right-start")]),n("code",[t._v("right-end")])]),n("td",[t._v("top")])]),n("tr",[n("td",[t._v("trigger")]),n("td",[t._v("String")]),n("td",[t._v("触发方式，可选值"),n("code",[t._v("hover")]),n("code",[t._v("click")]),n("code",[t._v("focus")])]),n("td",[t._v("click")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("String")]),n("td",[t._v("标题")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("String")]),n("td",[t._v("显示的正文内容，确认框模式下无效")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("String, Number")]),n("td",[t._v("宽度")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("wordWrap")]),n("td",[t._v("Boolean")]),n("td",[t._v("开启自动换行，需要配合"),n("code",[t._v("width")]),t._v("属性使用，确认框模式下无效")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("Boolean")]),n("td",[t._v("禁用")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("transition")]),n("td",[t._v("String")]),n("td",[t._v("自定义动画效果")]),n("td",[t._v("fade")])]),n("tr",[n("td",[t._v("confirm")]),n("td",[t._v("Boolean")]),n("td",[t._v("确认框模式")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("ok-text")]),n("td",[t._v("String")]),n("td",[t._v("确认框模式下，确定按钮的文字内容")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("cancel-text")]),n("td",[t._v("String")]),n("td",[t._v("确认框模式下，取消按钮的文字内容")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("renderHtml")]),n("td",[t._v("HTMLElement, Boolean")]),n("td",[t._v("自定义元素插入的位置，设置为"),n("code",[t._v("true")]),t._v("则渲染到body中，可以指定渲染元素")]),n("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"popover-event"}},[t._v("Popover event "),n("a",{staticClass:"header-anchor",attrs:{href:"#popover-event"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("cancel")]),n("td",[t._v("确认框模式下，取消按钮点击触发")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("ok")]),n("td",[t._v("确认框模式下，确定按钮点击触发")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"popover-slot"}},[t._v("Popover slot "),n("a",{staticClass:"header-anchor",attrs:{href:"#popover-slot"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("名称")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("-")]),n("td",[t._v("触发控件")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("标题")])]),n("tr",[n("td",[t._v("content")]),n("td",[t._v("提示框内容，确认框模式下无效")])])])])}],r=(n("5ab2"),n("6d57"),n("e10e"),n("9d37"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-popover",{attrs:{title:"提示",trigger:"hover",content:"content"}},[n("cl-button",[t._v("hover激活")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",trigger:"click",content:"content"}},[n("cl-button",[t._v("click激活")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",trigger:"focus",content:"content"}},[n("cl-button",[t._v("foucs激活")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",trigger:"focus",content:"content"}},[n("cl-input",{attrs:{placeholder:"input focus"}})],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",width:"150px",wordWrap:"",content:"contentcontentcontentcontentcontentcontent"}},[n("cl-button",[t._v("换行显示")])],1)]],2)},e=[],n={};return a({render:t,staticRenderFns:e},n)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticClass:"doc-margin-l10",staticStyle:{"text-align":"center",width:"300px"}},[n("cl-popover",{attrs:{title:"提示",placement:"top-start",content:"content"}},[n("cl-button",[t._v("上左")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"top",content:"content"}},[n("cl-button",[t._v("上边")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"top-end",content:"content"}},[n("cl-button",[t._v("上右")])],1)],1),t._v(" "),n("div",{staticClass:"doc-margin-l10 doc-popover-placement"},[n("cl-popover",{attrs:{title:"提示",placement:"left-start",content:"content"}},[n("cl-button",[t._v("左上")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"right-start",content:"content"}},[n("cl-button",[t._v("右上")])],1)],1),t._v(" "),n("div",{staticClass:"doc-margin-l10 doc-popover-placement"},[n("cl-popover",{attrs:{title:"提示",placement:"left",content:"content"}},[n("cl-button",[t._v("左边")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"right",content:"content"}},[n("cl-button",[t._v("右边")])],1)],1),t._v(" "),n("div",{staticClass:"doc-margin-l10 doc-popover-placement"},[n("cl-popover",{attrs:{title:"提示",placement:"left-end",content:"content"}},[n("cl-button",[t._v("左下")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"right-end",content:"content"}},[n("cl-button",[t._v("右下")])],1)],1),t._v(" "),n("div",{staticClass:"doc-margin-l10",staticStyle:{"text-align":"center",width:"300px"}},[n("cl-popover",{attrs:{title:"提示",placement:"bottom-start",content:"content"}},[n("cl-button",[t._v("下左")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"bottom",content:"content"}},[n("cl-button",[t._v("下边")])],1),t._v(" "),n("cl-popover",{attrs:{title:"提示",placement:"bottom-end",content:"content"}},[n("cl-button",[t._v("下右")])],1)],1)]],2)},e=[],n={};return a({render:t,staticRenderFns:e},n)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-popover",{attrs:{title:"提示",content:"content"},model:{value:t.visibleClose,callback:function(e){t.visibleClose=e},expression:"visibleClose"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("cl-button",{attrs:{type:"text"},on:{click:function(e){t.visibleClose=!1}}},[t._v("close")])],1),t._v(" "),n("cl-button",[t._v("点击close关闭")])],1)]],2)},e=[],n={data:function(){return{visibleClose:!1}}};return a({render:t,staticRenderFns:e},n)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-popover",{attrs:{confirm:"",title:"您确定要删除这条内容么？"}},[n("cl-button",[t._v("删除")])],1)]],2)},e=[],n={data:function(){return{}},methods:{confirmCancel:function(){this.$Message.info("confirm Cancel")},confirmOk:function(){this.$Message.info("confirm Ok")}}};return a({render:t,staticRenderFns:e},n)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("cl-popover",{attrs:{title:"提示",content:"content","render-html":!0}},[n("cl-button",[t._v("渲染浮层元素到BODY中")])],1)]],2)},e=[],n={data:function(){return{}}};return a({render:t,staticRenderFns:e},n)}()}},p=i,v=n("5511"),s=Object(v["a"])(p,o,c,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0e22f8.cbd399fc.js.map