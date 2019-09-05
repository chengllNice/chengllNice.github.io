(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c949f"],{5905:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"doc-article cl-ui-doc"},[l("h1",[t._v("Slider 滑块")]),l("p",[t._v("拖动划款在某一个指定的区间内进行选择，不支持范围选择。")]),t._m(0),l("code-wrap",{attrs:{id:"JCYF"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("可以使用v-model进行双向绑定。")]),l("p",[t._v("设置"),l("code",[t._v("disabled")]),t._v("属性实现禁用。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),l("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo0")],1),l("p"),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueBase"></cl-slider>\n    <cl-slider v-model="valueBase1" :disabled="disabledBase"></cl-slider>\n    <cl-switch v-model="disabledBase" width="50">\n        <span slot="open">禁用</span>\n        <span slot="close">启用</span>\n    </cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueBase: 20,\n          valueBase1: 50,\n          disabledBase: true\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"BC"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("step")]),t._v("控制每次改变的间隔大小。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("步长 "),l("a",{attrs:{href:"#BC","data-title":"步长"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo1")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueStep" :step="10"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueStep: 5,\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"XZFW"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("min")]),t._v("控制最小值。\n设置"),l("code",[t._v("max")]),t._v("控制最大值。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("限制范围 "),l("a",{attrs:{href:"#XZFW","data-title":"限制范围"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo2")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueLimit" :min="20" :max="80"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueLimit: 30,\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"CZ"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("vertical")]),t._v("垂直显示滑块。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("垂直 "),l("a",{attrs:{href:"#CZ","data-title":"垂直"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo3")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider class="doc-slider-vertical" v-model="valueVertical" vertical></cl-slider>\n    <cl-slider class="doc-slider-vertical" v-model="valueVerticalStep" vertical :step="10"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueVertical: 30,\n          valueVerticalStep: 30,\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"ZDYTS"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("tipFormat")]),t._v("格式化提示值。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义提示 "),l("a",{attrs:{href:"#ZDYTS","data-title":"自定义提示"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo4")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueFormat" :tipFormat="tipFormat"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueFormat: 30,\n        }\n      },\n      methods: {\n        tipFormat(value){\n          return value + \'%\'\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"ZDYYS"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("railColor")]),t._v("设置轨道颜色。\n设置"),l("code",[t._v("barColor")]),t._v("设置滑块颜色。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义颜色 "),l("a",{attrs:{href:"#ZDYYS","data-title":"自定义颜色"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo5")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueColor" railColor="#ccc" barColor="red"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueColor: 30,\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"XXTSFS"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[t._v("设置"),l("code",[t._v("tooltipVisible=always")]),t._v("设置提示信息一直存在。\n设置"),l("code",[t._v("tooltipVisible=never")]),t._v("设置提示信息一直不存在。\n默认鼠标悬停或者拖动时显示提示信息。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("信息提示方式 "),l("a",{attrs:{href:"#XXTSFS","data-title":"信息提示方式"}},[t._v("#")])]),l("template",{slot:"source"},[l("cl-ui-demo6")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-slider v-model="valueTip1"></cl-slider>\n    <cl-slider v-model="valueTip2" tooltipVisible="always"></cl-slider>\n    <cl-slider v-model="valueTip3" tooltipVisible="never"></cl-slider>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueTip1: 30,\n          valueTip2: 30,\n          valueTip3: 30,\n        }\n      }\n    }\n<\/script>\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},r=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),l("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h2",{attrs:{id:"api"}},[t._v("API "),l("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h3",{attrs:{id:"slider-props"}},[t._v("Slider props "),l("a",{staticClass:"header-anchor",attrs:{href:"#slider-props","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[t._v("属性")]),l("th",[t._v("类型")]),l("th",[t._v("说明")]),l("th",[t._v("默认值")])])]),l("tbody",[l("tr",[l("td",[t._v("value")]),l("td",[t._v("Number, Array")]),l("td",[t._v("Array类型暂时不支持。滑块选定的值，可以只用v-model双向绑定")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("min")]),l("td",[t._v("Number")]),l("td",[t._v("最小值")]),l("td",[t._v("0")])]),l("tr",[l("td",[t._v("max")]),l("td",[t._v("Number")]),l("td",[t._v("最大值")]),l("td",[t._v("100")])]),l("tr",[l("td",[t._v("step")]),l("td",[t._v("Number")]),l("td",[t._v("步长。取值建议能被(max-min)整除")]),l("td",[t._v("1")])]),l("tr",[l("td",[t._v("range")]),l("td",[t._v("Boolean")]),l("td",[t._v("双滑块模式。暂不支持")]),l("td",[t._v("1")])]),l("tr",[l("td",[t._v("disabled")]),l("td",[t._v("Boolean")]),l("td",[t._v("禁用")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("vertical")]),l("td",[t._v("Boolean")]),l("td",[t._v("垂直slider")]),l("td",[t._v("-")])]),l("tr",[l("td",[t._v("tooltipVisible")]),l("td",[t._v("String")]),l("td",[t._v("tooltip的显示时机。可选值"),l("code",[t._v("hover")]),l("code",[t._v("always")]),l("code",[t._v("never")]),t._v("。hover时鼠标悬停显示，always时总是显示，never时总不显示")]),l("td",[t._v("hover")])]),l("tr",[l("td",[t._v("tipFormat")]),l("td",[t._v("String")]),l("td",[t._v("格式化tooltip的显示内容")]),l("td",[t._v("value")])]),l("tr",[l("td",[t._v("railColor")]),l("td",[t._v("String")]),l("td",[t._v("自定义rail轨道的颜色")]),l("td",[t._v("value")])]),l("tr",[l("td",[t._v("barColor")]),l("td",[t._v("String")]),l("td",[t._v("自定义滑块的颜色")]),l("td",[t._v("value")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h3",{attrs:{id:"slider-event"}},[t._v("Slider event "),l("a",{staticClass:"header-anchor",attrs:{href:"#slider-event","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[t._v("事件名")]),l("th",[t._v("说明")]),l("th",[t._v("返回值")])])]),l("tbody",[l("tr",[l("td",[t._v("change")]),l("td",[t._v("松开滑块并且值改变时触发，在滑动过程中不会触发")]),l("td",[t._v("value")])])])])}],i=(l("8e6e"),l("ac6a"),l("456d"),l("bd86"));function s(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),l.push.apply(l,a)}return l}function n(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?s(l,!0).forEach(function(e){Object(i["a"])(t,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):s(l).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))})}return t}var o={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{model:{value:t.valueBase,callback:function(e){t.valueBase=e},expression:"valueBase"}}),t._v(" "),l("cl-slider",{attrs:{disabled:t.disabledBase},model:{value:t.valueBase1,callback:function(e){t.valueBase1=e},expression:"valueBase1"}}),t._v(" "),l("cl-switch",{attrs:{width:"50"},model:{value:t.disabledBase,callback:function(e){t.disabledBase=e},expression:"disabledBase"}},[l("span",{attrs:{slot:"open"},slot:"open"},[t._v("禁用")]),t._v(" "),l("span",{attrs:{slot:"close"},slot:"close"},[t._v("启用")])])]],2)},e=[],l={data:function(){return{valueBase:20,valueBase1:50,disabledBase:!0}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{attrs:{step:10},model:{value:t.valueStep,callback:function(e){t.valueStep=e},expression:"valueStep"}})]],2)},e=[],l={data:function(){return{valueStep:5}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{attrs:{min:20,max:80},model:{value:t.valueLimit,callback:function(e){t.valueLimit=e},expression:"valueLimit"}})]],2)},e=[],l={data:function(){return{valueLimit:30}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{staticClass:"doc-slider-vertical",attrs:{vertical:""},model:{value:t.valueVertical,callback:function(e){t.valueVertical=e},expression:"valueVertical"}}),t._v(" "),l("cl-slider",{staticClass:"doc-slider-vertical",attrs:{vertical:"",step:10},model:{value:t.valueVerticalStep,callback:function(e){t.valueVerticalStep=e},expression:"valueVerticalStep"}})]],2)},e=[],l={data:function(){return{valueVertical:30,valueVerticalStep:30}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{attrs:{tipFormat:t.tipFormat},model:{value:t.valueFormat,callback:function(e){t.valueFormat=e},expression:"valueFormat"}})]],2)},e=[],l={data:function(){return{valueFormat:30}},methods:{tipFormat:function(t){return t+"%"}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo5":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{attrs:{railColor:"#ccc",barColor:"red"},model:{value:t.valueColor,callback:function(e){t.valueColor=e},expression:"valueColor"}})]],2)},e=[],l={data:function(){return{valueColor:30}}};return n({render:t,staticRenderFns:e},l)}(),"cl-ui-demo6":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("cl-slider",{model:{value:t.valueTip1,callback:function(e){t.valueTip1=e},expression:"valueTip1"}}),t._v(" "),l("cl-slider",{attrs:{tooltipVisible:"always"},model:{value:t.valueTip2,callback:function(e){t.valueTip2=e},expression:"valueTip2"}}),t._v(" "),l("cl-slider",{attrs:{tooltipVisible:"never"},model:{value:t.valueTip3,callback:function(e){t.valueTip3=e},expression:"valueTip3"}})]],2)},e=[],l={data:function(){return{valueTip1:30,valueTip2:30,valueTip3:30}}};return n({render:t,staticRenderFns:e},l)}()}},c=o,d=l("2877"),v=Object(d["a"])(c,a,r,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c949f.c0cb6675.js.map