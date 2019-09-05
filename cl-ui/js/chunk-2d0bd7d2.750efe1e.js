(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd7d2"],{"2be1":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"doc-article cl-ui-doc"},[a("h1",[t._v("Switch 开关")]),a("p",[t._v("在两种状态之间切换。")]),t._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("可以使用v-model进行双向绑定。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo0")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-switch v-model="valueBase"></cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueBase: false\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),a("code-wrap",{attrs:{id:"CC"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("size")]),t._v("属性控制大小，可选值 "),a("code",[t._v("small")]),a("code",[t._v("large")]),t._v("或者不设置。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("尺寸 "),a("a",{attrs:{href:"#CC","data-title":"尺寸"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo1")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-switch v-model="valueSmall" size="small"></cl-switch>\n    <cl-switch v-model="valueDefault"></cl-switch>\n    <cl-switch v-model="valueLarge" size="large"></cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueSmall: false,\n          valueDefault: true,\n          valueLarge: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),a("code-wrap",{attrs:{id:"JY"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("disabled")]),t._v("属性禁用。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("禁用 "),a("a",{attrs:{href:"#JY","data-title":"禁用"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo2")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-switch v-model="valueDisabled" disabled></cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueDisabled: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),a("code-wrap",{attrs:{id:"WZHTB"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("自定义内容。两个字时使用"),a("code",[t._v("large")]),t._v("尺寸的更合适。更多字时设置"),a("code",[t._v("width")]),t._v("属性显示效果更好。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("文字和图标 "),a("a",{attrs:{href:"#WZHTB","data-title":"文字和图标"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo3")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-switch>\n        <span slot="open"><i class="cl-icon-check"></i></span>\n        <span slot="close"><i class="cl-icon-close"></i></span>\n    </cl-switch>\n    <cl-switch>\n        <span slot="open">开</span>\n        <span slot="close">关</span>\n    </cl-switch>\n    <cl-switch size="large">\n        <span slot="open">打开</span>\n        <span slot="close">关闭</span>\n    </cl-switch>\n    <cl-switch width="80px">\n        <span slot="open">已经开启</span>\n        <span slot="close">已经关闭</span>\n    </cl-switch>\n</template>\n\n')])])])],2),a("code-wrap",{attrs:{id:"ZDYBJS"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("checkedColor")]),t._v("定义选中时的背景色。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义背景色 "),a("a",{attrs:{href:"#ZDYBJS","data-title":"自定义背景色"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo4")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-switch checkedColor="red"></cl-switch>\n</template>\n\n')])])])],2),a("code-wrap",{attrs:{id:"JZZ"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("loading")]),t._v("属性定义加载中的状态。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("加载中 "),a("a",{attrs:{href:"#JZZ","data-title":"加载中"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo5")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <cl-switch loading></cl-switch>\n</template>\n\n")])])])],2),a("code-wrap",{attrs:{id:"DYXZZHQXXZDZ"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("trueValue")]),t._v("和"),a("code",[t._v("falseValue")]),t._v("属性分别定义选中时返回的值和取消选中时返回的值。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("定义选中值和取消选中的值 "),a("a",{attrs:{href:"#DYXZZHQXXZDZ","data-title":"定义选中值和取消选中的值"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo6")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <cl-switch v-model=\"value\" trueValue=\"1\" falseValue=\"0\" @change=\"handlerChange\"></cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          value: '0'\n        }\n      },\n      methods: {\n        handlerChange(value){\n          let tip = value === '0' ? '取消选中' : '选中';\n          this.$Message.info(tip + value)\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"api"}},[t._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"switch-props"}},[t._v("Switch props "),a("a",{staticClass:"header-anchor",attrs:{href:"#switch-props","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[t._v("属性")]),a("th",[t._v("类型")]),a("th",[t._v("说明")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("value")]),a("td",[t._v("String, Number, Boolean")]),a("td",[t._v("指定当前是否选中，可以使用v-model双向绑定")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("trueValue")]),a("td",[t._v("String, Number, Boolean")]),a("td",[t._v("指定选中时的值")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("falseValue")]),a("td",[t._v("String, Number, Boolean")]),a("td",[t._v("指定没有选中时的值")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("String")]),a("td",[t._v("原生name属性")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td",[t._v("尺寸，可选值"),a("code",[t._v("small")]),a("code",[t._v("default")]),a("code",[t._v("large")]),t._v("或者不设置")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("checkedColor")]),a("td",[t._v("String")]),a("td",[t._v("可以自定义选中时的颜色")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("uncheckedColor")]),a("td",[t._v("String")]),a("td",[t._v("可以自定义没有选中时的颜色")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[t._v("禁用选项")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("width")]),a("td",[t._v("String, Number")]),a("td",[t._v("定义宽度。建议当文字比较多时设置此项")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("loading")]),a("td",[t._v("Boolean")]),a("td",[t._v("加载中的开关")]),a("td",[t._v("value")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"switch-event"}},[t._v("Switch event "),a("a",{staticClass:"header-anchor",attrs:{href:"#switch-event","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[t._v("事件名")]),a("th",[t._v("说明")]),a("th",[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("change")]),a("td",[t._v("开关状态变化时触发，返回当前状态")]),a("td",[t._v("value")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"switch-slot"}},[t._v("Switch slot "),a("a",{staticClass:"header-anchor",attrs:{href:"#switch-slot","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("open")]),a("td",[t._v("自定义打开时的文字内容")])]),a("tr",[a("td",[t._v("close")]),a("td",[t._v("自定义关闭时的文字内容")])])])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86"));function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,l)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var i={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{model:{value:t.valueBase,callback:function(e){t.valueBase=e},expression:"valueBase"}})]],2)},e=[],a={data:function(){return{valueBase:!1}}};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{attrs:{size:"small"},model:{value:t.valueSmall,callback:function(e){t.valueSmall=e},expression:"valueSmall"}}),t._v(" "),a("cl-switch",{model:{value:t.valueDefault,callback:function(e){t.valueDefault=e},expression:"valueDefault"}}),t._v(" "),a("cl-switch",{attrs:{size:"large"},model:{value:t.valueLarge,callback:function(e){t.valueLarge=e},expression:"valueLarge"}})]],2)},e=[],a={data:function(){return{valueSmall:!1,valueDefault:!0,valueLarge:!1}}};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{attrs:{disabled:""},model:{value:t.valueDisabled,callback:function(e){t.valueDisabled=e},expression:"valueDisabled"}})]],2)},e=[],a={data:function(){return{valueDisabled:!1}}};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",[a("span",{attrs:{slot:"open"},slot:"open"},[a("i",{staticClass:"cl-icon-check"})]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[a("i",{staticClass:"cl-icon-close"})])]),t._v(" "),a("cl-switch",[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])]),t._v(" "),a("cl-switch",{attrs:{size:"large"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("打开")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),t._v(" "),a("cl-switch",{attrs:{width:"80px"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("已经开启")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("已经关闭")])])]],2)},e=[],a={};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{attrs:{checkedColor:"red"}})]],2)},e=[],a={};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo5":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{attrs:{loading:""}})]],2)},e=[],a={};return c({render:t,staticRenderFns:e},a)}(),"cl-ui-demo6":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-switch",{attrs:{trueValue:"1",falseValue:"0"},on:{change:t.handlerChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]],2)},e=[],a={data:function(){return{value:"0"}},methods:{handlerChange:function(t){var e="0"===t?"取消选中":"选中";this.$Message.info(e+t)}}};return c({render:t,staticRenderFns:e},a)}()}},o=i,d=a("2877"),v=Object(d["a"])(o,l,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0bd7d2.750efe1e.js.map