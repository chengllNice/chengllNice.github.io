(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9cff"],{3518:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"doc-article cl-ui-doc"},[a("h1",[t._v("Page 分页")]),a("p",[t._v("当数据量比较大时，使用分页分解数据，实现快速响应。")]),t._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("基础用法。页数过多会自动折叠。默认最多显示5页。超出5页时折叠。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo0")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>不同数据总量</h4>\n    <cl-page :total="50"/>\n    <cl-page :total="100"/>\n\n    <h4>设置当前页page</h4>\n    <cl-page :total="100" :page="page" @change="pageChange"/>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                page: 5\n            }\n        },\n        methods: {\n            pageChange(page, pageSize){\n                this.$Message.info(`当前页为${page}，当前每页条数为${pageSize}`)\n            }\n        }       \n    }\n<\/script>\n\n')])])])],2),a("code-wrap",{attrs:{id:"SZPX"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("order")]),t._v("属性可以实现 总数据量"),a("code",[t._v("total")]),t._v("、分页"),a("code",[t._v("page")]),t._v("、每页条数"),a("code",[t._v("pageSize")]),t._v("、跳转"),a("code",[t._v("jump")]),t._v("之间的排序关系并展示对应的功能。")]),a("p",[t._v("设置"),a("code",[t._v("totalText")]),t._v("和"),a("code",[t._v("pageSize")]),t._v("属性可以分别控制总数据量和每页条数选择项的显示方式。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("设置排序 "),a("a",{attrs:{href:"#SZPX","data-title":"设置排序"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo1")],1),a("p"),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>只展示总数据量和分页</h4>\n    <cl-page :total="100" order="total, page"/>\n    <h4>只展示每页条数和分页</h4>\n    <cl-page :total="100" order="page, pageSize"/>\n    <h4>全部展示四项</h4>\n    <cl-page :total="100" order="total, page, pageSize, jump"/>\n    <h4>全部展示四项--不同的排序</h4>\n    <cl-page :total="100" order="page, pageSize, jump, total"/>\n    <h4>totalText和pageSize</h4>\n    <cl-page :total="100" order="total, page, pageSize, jump" totalText="总共 total 条数据" pageSizeText="每页 pageSize 条" />\n</template>\n\n')])])])],2),a("code-wrap",{attrs:{id:"DYBKHBJYSDFY"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置"),a("code",[t._v("border")]),t._v("属性可以实现带有边框的分页样式。默认不展示边框。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("带有边框和背景颜色的分页 "),a("a",{attrs:{href:"#DYBKHBJYSDFY","data-title":"带有边框和背景颜色的分页"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo2")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>显示边框</h4>\n    <cl-page :total="100" border />\n    <h4>显示背景</h4>\n    <cl-page :total="100" background />\n</template>\n\n')])])])],2),a("code-wrap",{attrs:{id:"MNLXDFY"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置属性"),a("code",[t._v('size="mini"')]),t._v("可以实现迷你类型的分页。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("迷你类型的分页 "),a("a",{attrs:{href:"#MNLXDFY","data-title":"迷你类型的分页"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo3")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-page size="mini" :total="100" />\n    <cl-page size="mini" :total="100" background />\n</template>\n\n')])])])],2),a("code-wrap",{attrs:{id:"THSYYXYYTB"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[t._v("设置属性"),a("code",[t._v('size="mini"')]),t._v("可以实现迷你类型的分页。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("替换上一页下一页图标 "),a("a",{attrs:{href:"#THSYYXYYTB","data-title":"替换上一页下一页图标"}},[t._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo4")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-page :total="100" preText="上一页" nextText="下一页" />\n</template>\n\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"api"}},[t._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"page-props"}},[t._v("Page props "),a("a",{staticClass:"header-anchor",attrs:{href:"#page-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[t._v("属性")]),a("th",[t._v("类型")]),a("th",[t._v("说明")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("page")]),a("td",[t._v("Number")]),a("td",[t._v("当前页")]),a("td",[t._v("1")])]),a("tr",[a("td",[t._v("total")]),a("td",[t._v("Number")]),a("td",[t._v("数据总量")]),a("td",[t._v("0")])]),a("tr",[a("td",[t._v("pageSize")]),a("td",[t._v("Number")]),a("td",[t._v("每页条数")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("pageSizeOption")]),a("td",[t._v("Array")]),a("td",[t._v("配置可选择的每页条数，建议不要超过4项")]),a("td",[t._v("[10, 20, 30, 40]")])]),a("tr",[a("td",[t._v("maxPage")]),a("td",[t._v("Number")]),a("td",[t._v("最多显示分页数量，超出时折叠")]),a("td",[t._v("5")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td",[t._v("分页尺寸，可选值 "),a("code",[t._v("mini")])]),a("td",[t._v("default")])]),a("tr",[a("td",[t._v("background")]),a("td",[t._v("Boolean")]),a("td",[t._v("是否显示背景色")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("border")]),a("td",[t._v("Boolean")]),a("td",[t._v("是否显示边框")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("hidenOnlySinglePage")]),a("td",[t._v("Boolean")]),a("td",[t._v("当只有一页或者数据量为0时是否显示分页，设置为true则不显示")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("preText")]),a("td",[t._v("String")]),a("td",[t._v("上一页文字，替换上一页的图标")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("nextText")]),a("td",[t._v("String")]),a("td",[t._v("下一页文字，替换下一页的图标")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("order")]),a("td",[t._v("String")]),a("td",[t._v("分页排序及显示对应功能，各值使用逗号隔开。例如："),a("code",[t._v("total, page, pageSize, jump")])]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("totalText")]),a("td",[t._v("String")]),a("td",[t._v("设置总数据量的显示方式，其中"),a("code",[t._v("total")]),t._v("为占位符，替换总数据量")]),a("td",[t._v("共 total 条")])]),a("tr",[a("td",[t._v("pageSizeText")]),a("td",[t._v("String")]),a("td",[t._v("设置每页条数选择项的显示方式，其中"),a("code",[t._v("pageSize")]),t._v("为占位符，替换总数据量")]),a("td",[t._v("pageSize 条/页")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"page-event"}},[t._v("Page event "),a("a",{staticClass:"header-anchor",attrs:{href:"#page-event"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[t._v("事件名")]),a("th",[t._v("说明")]),a("th",[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("change")]),a("td",[t._v("当前页和每页条数变化时出发")]),a("td",[t._v("page, pageSize")])])])])}],o=(a("5ab2"),a("6d57"),a("e10e"),a("9d37"));function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("h4",[t._v("不同数据总量")]),t._v(" "),a("cl-page",{attrs:{total:50}}),t._v(" "),a("cl-page",{attrs:{total:100}}),t._v(" "),a("h4",[t._v("设置当前页page")]),t._v(" "),a("cl-page",{attrs:{total:100,page:t.page},on:{change:t.pageChange}})]],2)},e=[],a={data:function(){return{page:5}},methods:{pageChange:function(t,e){this.$Message.info("当前页为".concat(t,"，当前每页条数为").concat(e))}}};return i({render:t,staticRenderFns:e},a)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("h4",[t._v("只展示总数据量和分页")]),t._v(" "),a("cl-page",{attrs:{total:100,order:"total, page"}}),t._v(" "),a("h4",[t._v("只展示每页条数和分页")]),t._v(" "),a("cl-page",{attrs:{total:100,order:"page, pageSize"}}),t._v(" "),a("h4",[t._v("全部展示四项")]),t._v(" "),a("cl-page",{attrs:{total:100,order:"total, page, pageSize, jump"}}),t._v(" "),a("h4",[t._v("全部展示四项--不同的排序")]),t._v(" "),a("cl-page",{attrs:{total:100,order:"page, pageSize, jump, total"}}),t._v(" "),a("h4",[t._v("totalText和pageSize")]),t._v(" "),a("cl-page",{attrs:{total:100,order:"total, page, pageSize, jump",totalText:"总共 total 条数据",pageSizeText:"每页 pageSize 条"}})]],2)},e=[],a={};return i({render:t,staticRenderFns:e},a)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("h4",[t._v("显示边框")]),t._v(" "),a("cl-page",{attrs:{total:100,border:""}}),t._v(" "),a("h4",[t._v("显示背景")]),t._v(" "),a("cl-page",{attrs:{total:100,background:""}})]],2)},e=[],a={};return i({render:t,staticRenderFns:e},a)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-page",{attrs:{size:"mini",total:100}}),t._v(" "),a("cl-page",{attrs:{size:"mini",total:100,background:""}})]],2)},e=[],a={};return i({render:t,staticRenderFns:e},a)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("cl-page",{attrs:{total:100,preText:"上一页",nextText:"下一页"}})]],2)},e=[],a={};return i({render:t,staticRenderFns:e},a)}()}},p=s,c=a("5511"),d=Object(c["a"])(p,r,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b9cff.36e4d5c7.js.map