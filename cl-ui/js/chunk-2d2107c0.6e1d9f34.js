(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2107c0"],{b7a6:function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"doc-article cl-ui-doc"},[t("h1",[e._v("Checkbox 复选框")]),t("p",[e._v("s\n复选框。一组可选项中进行多选。也可单独使用，表示某种状态的切换。")]),e._m(0),t("code-wrap",{attrs:{id:"DDSY"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("可以使用v-model实现双向数据绑定。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("单独使用 "),t("a",{attrs:{href:"#DDSY","data-title":"单独使用"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo0")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <cl-checkbox v-model="single">Checkbox</cl-checkbox>\n        <p>{{single}}</p>\n    </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          single: false,\n        }\n      }\n    }\n<\/script>\n')])])])],2),t("code-wrap",{attrs:{id:"ZDYXZDZ"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("单独使用时，可以通过设置 "),t("code",[e._v("true-value")]),e._v("属性和 "),t("code",[e._v("false-value")]),e._v("属性控制选中和取消选中的值。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("自定义选中的值 "),t("a",{attrs:{href:"#ZDYXZDZ","data-title":"自定义选中的值"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo1")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <cl-checkbox v-model="singleCustom" true-value="1" false-value="0">自定义选中和取消选中的值</cl-checkbox>\n    <p>{{singleCustom}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          singleCustom: \'0\',\n        }\n      }\n    }\n<\/script>\n')])])])],2),t("code-wrap",{attrs:{id:"ZHSY"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("使用 "),t("code",[e._v("checkboxGroup")]),e._v("组件把多个 "),t("code",[e._v("checkbox")]),e._v("组件组合起来使用，只需要在 Group 组件上绑定 "),t("code",[e._v("v-model")]),e._v("即可，此时需要绑定 "),t("code",[e._v("Array")]),e._v("类型的 "),t("code",[e._v("v-model")]),e._v("。此时"),t("code",[e._v("checkbox")]),e._v("的 "),t("code",[e._v("label")]),e._v("属性是该项的对应的值，若此标签中没有内容，该 "),t("code",[e._v("label")]),e._v("属性的值即作为内容。如果 Group的 "),t("code",[e._v("v-model")]),e._v("有对应 "),t("code",[e._v("checkbox")]),e._v("的 "),t("code",[e._v("label")]),e._v("的值，表明为选中状态，否则不选中。"),t("code",[e._v("checkboxGroup")]),e._v("组件可以使用 "),t("code",[e._v("options")]),e._v("属性绑定数据实现多选框组合，值类型如："),t("code",[e._v("[{label: '', value: '', disabled: true}]")]),e._v("的形式，label为展示内容，value为选中时的值，disabled可选，禁用控制。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("组合使用 "),t("a",{attrs:{href:"#ZHSY","data-title":"组合使用"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo2")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row>\n        <cl-col>\n            <cl-checkbox-group v-model=\"group\">\n                <cl-checkbox label=\"apple\">Apple</cl-checkbox>\n                <cl-checkbox label=\"orange\">Orange</cl-checkbox>\n                <cl-checkbox label=\"banana\">Banana</cl-checkbox>\n                <cl-checkbox label=\"melon\">Melon</cl-checkbox>\n            </cl-checkbox-group>\n            <p>{{group}}</p>\n        </cl-col>\n        <cl-col>\n            <cl-checkbox-group v-model=\"group1\" :options=\"groupOptions\"></cl-checkbox-group>\n            <p>{{group1}}</p>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          group: ['orange'],\n          group1: ['banana'],\n          groupOptions: [\n            {\n              label: '苹果',\n              value: 'apple'\n            },\n            {\n              label: '橘子',\n              value: 'orange'\n            },\n            {\n              label: '香蕉',\n              value: 'banana'\n            },\n            {\n              label: '西瓜',\n              value: 'melon'\n            }\n          ]\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),t("code-wrap",{attrs:{id:"ZT"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("设置 "),t("code",[e._v("disbaled")]),e._v("属性可以实现禁用。可以给 "),t("code",[e._v("checkbox")]),e._v("组件添加 "),t("code",[e._v("disabled")]),e._v("属性实现禁用。组合使用时可以给 Group 组件添加 "),t("code",[e._v("disabled")]),e._v("属性实现该组合下的所有子项禁用；也可以单独给某个子项设置 "),t("code",[e._v("disabled")]),e._v("属性实现某一项的禁用。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("disable状态 "),t("a",{attrs:{href:"#ZT","data-title":"disable状态"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo3")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>单独使用禁用</h4>\n    <cl-checkbox disabled  v-model="disabledSingle">DisabledCheckbox</cl-checkbox>\n    <p>{{disabledSingle}}</p>\n\n    <h4>组合使用禁用</h4>\n    <cl-checkbox-group disabled v-model="disabledGroup" :options="disabledGroupOptions"></cl-checkbox-group>\n    <p>{{disabledGroup}}</p>\n\n    <h4>组合使用禁用指定项</h4>\n    <cl-checkbox-group v-model="disabledGroup1" :options="disabledGroupOptions"></cl-checkbox-group>\n    <p>{{disabledGroup1}}</p>\n\n    <h4>组合使用禁用指定项</h4>\n    <cl-checkbox-group v-model="disabledGroup2">\n        <cl-checkbox label="apple">Apple</cl-checkbox>\n        <cl-checkbox label="orange">Orange</cl-checkbox>\n        <cl-checkbox label="banana" disabled>Banana</cl-checkbox>\n        <cl-checkbox label="melon">Melon</cl-checkbox>\n    </cl-checkbox-group>\n    <p>{{disabledGroup2}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          disabledSingle: true,\n          disabledGroup: [\'banana\'],\n          disabledGroup1: [],\n          disabledGroupOptions: [\n            {\n              label: \'苹果\',\n              value: \'apple\'\n            },\n            {\n              label: \'橘子\',\n              value: \'orange\',\n              disabled: true,\n            },\n            {\n              label: \'香蕉\',\n              value: \'banana\'\n            },\n            {\n              label: \'西瓜\',\n              value: \'melon\'\n            }\n          ],\n          disabledGroup2: [],\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),t("code-wrap",{attrs:{id:"SKD"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("和其它组件通信联动。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("受控的checkbox "),t("a",{attrs:{href:"#SKD","data-title":"受控的checkbox"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo4")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <cl-checkbox v-model="controlChecked" :disabled="controlDisabled">Checkbox</cl-checkbox>\n    <p>controlChecked: {{controlChecked}}</p>\n    <p>controlDisabled: {{controlDisabled}}</p>\n    <cl-switch width="90" v-model="controlChecked">\n        <template slot="open">Checked</template>\n        <template slot="close">UnChecked</template>\n    </cl-switch>\n    <cl-switch width="90" v-model="controlDisabled">\n        <template slot="open">Disabled</template>\n        <template slot="close">UnDisabled</template>\n    </cl-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           controlChecked: false,\n           controlDisabled: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),t("code-wrap",{attrs:{id:"QX"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("可以使用v-model实现双向数据绑定。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("全选 "),t("a",{attrs:{href:"#QX","data-title":"全选"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo5")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-checkbox v-model=\"checkboxAll\" :indeterminate=\"indeterminateAll\" @change=\"checkboxAllChange\">全选</cl-checkbox>\n    <br>\n    <cl-checkbox-group v-model=\"checkboxGroupAll\" :options=\"checkboxGroupAllOption\" @change=\"checkboxGroupAllChange\"></cl-checkbox-group>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          checkboxAll: false,\n          indeterminateAll: false,\n          checkboxGroupAll: [],\n          checkboxGroupAllOption: [\n            {\n              label: '苹果',\n              value: 'apple'\n            },\n            {\n              label: '橘子',\n              value: 'orange',\n            },\n            {\n              label: '香蕉',\n              value: 'banana'\n            },\n            {\n              label: '西瓜',\n              value: 'melon'\n            }\n          ],\n        }\n      },\n      methods: {\n        checkboxAllChange(){\n          if(this.checkboxAll){\n            this.checkboxGroupAllOption.forEach(item=>{\n              this.checkboxGroupAll.push(item.value)\n            })\n          }else{\n            this.checkboxGroupAll = [];\n            this.indeterminateAll = false;\n          }\n        },\n        checkboxGroupAllChange(){\n          if(this.checkboxGroupAll.length === this.checkboxGroupAllOption.length){\n            this.checkboxAll = true;\n          }else if(this.checkboxGroupAll.length && this.checkboxGroupAll.length !== this.checkboxGroupAllOption.length){\n            this.indeterminateAll = true;\n            this.checkboxAll = false;\n          }else{\n            this.checkboxAll = false;\n            this.indeterminateAll = false;\n          }\n        },\n      }\n    }\n<\/script>\n\n")])])])],2),t("code-wrap",{attrs:{id:"CC"}},[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",[e._v("可以通过设置 "),t("code",[e._v("size")]),e._v("属性控制尺寸大小，可选值有 "),t("code",[e._v("small")]),t("code",[e._v("large")]),e._v(" 或者不设置。")])]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("尺寸 "),t("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),t("template",{slot:"source"},[t("cl-ui-demo6")],1),t("p"),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <cl-checkbox v-model="singleMini" size="mini">Mini</cl-checkbox>\n    <cl-checkbox v-model="singleSmall" size="small">Small</cl-checkbox>\n    <cl-checkbox v-model="singleDefault">Default</cl-checkbox>\n    <cl-checkbox v-model="singleLarge" size="large">Large</cl-checkbox>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          singleMini: false,\n          singleSmall: false,\n          singleDefault: false,\n          singleLarge: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)],1)},o=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h2",{attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h2",{attrs:{id:"api"}},[e._v("API "),t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h3",{attrs:{id:"checkbox-props"}},[e._v("Checkbox props "),t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-props"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("类型")]),t("th",[e._v("说明")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("Number, String, Boolean")]),t("td",[e._v("只有单独使用是可以使用v-model绑定值，设置true-value和false-value时返回设置的值，默认返回boolean值")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("Number, String, Boolean")]),t("td",[e._v("单独使用时该项值为文字描述。组合使用时，如果使用组合的options属性，该项值为文字描述；使用slot的checkbox时，该项为判断当前项是否选中")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("indeterminate")]),t("td",[e._v("Boolean")]),t("td",[e._v("只负责样式控制，设置indeterminate状态")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("禁用")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("String")]),t("td",[e._v("原生name属性")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("trueValue")]),t("td",[e._v("Number, String, Boolean")]),t("td",[e._v("设置选中时的值")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("falseValue")]),t("td",[e._v("Number, String, Boolean")]),t("td",[e._v("设置取消选中时的值")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("String")]),t("td",[e._v("尺寸，可选值 "),t("code",[e._v("mini")]),t("code",[e._v("small")]),t("code",[e._v("large")])]),t("td",[e._v("-")])])])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h3",{attrs:{id:"checkbox-event"}},[e._v("Checkbox event "),t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-event"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("返回值")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("只有单独使用时有效。绑定的值改变时触发")]),t("td",[e._v("当前状态")])])])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h3",{attrs:{id:"checkboxgroup-props"}},[e._v("CheckboxGroup props "),t("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-props"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("类型")]),t("th",[e._v("说明")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("Array")]),t("td",[e._v("指定选中的集合，使用v-model双向绑定。使用 "),t("code",[e._v("options")]),e._v(" 属性时选中的是选项"),t("code",[e._v("value")]),e._v("的值。使用"),t("code",[e._v("slot")]),e._v("的"),t("code",[e._v("checkbox")]),e._v("时选中的是指定"),t("code",[e._v("label")]),e._v("的值。")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("组合中的所有checkbox全部禁用")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("String")]),t("td",[e._v("组合中所有checkbox的尺寸")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("Array")]),t("td",[e._v("类似"),t("code",[e._v("[{value: '0', label: 'checkbox', disabled: true}]")]),e._v("这样的数组，其中"),t("code",[e._v("value")]),e._v("指定当前项是否选中，"),t("code",[e._v("label")]),e._v("为当前项的文字描述，"),t("code",[e._v("disabled")]),e._v("可选，控制禁用状态")]),t("td",[e._v("-")])])])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("h3",{attrs:{id:"checkboxgroup-event"}},[e._v("CheckboxGroup event "),t("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-event"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("返回值")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("绑定的值改变时触发，返回当前选中值的数组")]),t("td",[e._v("[]")])])])])}],c=(t("5ab2"),t("e10e"),t("6d57"),t("9d37"));function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){Object(c["a"])(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}var s={name:"component-doc",components:{"cl-ui-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("div",[t("cl-checkbox",{model:{value:e.single,callback:function(l){e.single=l},expression:"single"}},[e._v("Checkbox")]),e._v(" "),t("p",[e._v(e._s(e.single))])],1)]],2)},l=[],t={data:function(){return{single:!1}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo1":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("cl-checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:e.singleCustom,callback:function(l){e.singleCustom=l},expression:"singleCustom"}},[e._v("自定义选中和取消选中的值")]),e._v(" "),t("p",[e._v(e._s(e.singleCustom))])]],2)},l=[],t={data:function(){return{singleCustom:"0"}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo2":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("cl-row",[t("cl-col",[t("cl-checkbox-group",{model:{value:e.group,callback:function(l){e.group=l},expression:"group"}},[t("cl-checkbox",{attrs:{label:"apple"}},[e._v("Apple")]),e._v(" "),t("cl-checkbox",{attrs:{label:"orange"}},[e._v("Orange")]),e._v(" "),t("cl-checkbox",{attrs:{label:"banana"}},[e._v("Banana")]),e._v(" "),t("cl-checkbox",{attrs:{label:"melon"}},[e._v("Melon")])],1),e._v(" "),t("p",[e._v(e._s(e.group))])],1),e._v(" "),t("cl-col",[t("cl-checkbox-group",{attrs:{options:e.groupOptions},model:{value:e.group1,callback:function(l){e.group1=l},expression:"group1"}}),e._v(" "),t("p",[e._v(e._s(e.group1))])],1)],1)]],2)},l=[],t={data:function(){return{group:["orange"],group1:["banana"],groupOptions:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange"},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}]}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo3":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("h4",[e._v("单独使用禁用")]),e._v(" "),t("cl-checkbox",{attrs:{disabled:""},model:{value:e.disabledSingle,callback:function(l){e.disabledSingle=l},expression:"disabledSingle"}},[e._v("DisabledCheckbox")]),e._v(" "),t("p",[e._v(e._s(e.disabledSingle))]),e._v(" "),t("h4",[e._v("组合使用禁用")]),e._v(" "),t("cl-checkbox-group",{attrs:{disabled:"",options:e.disabledGroupOptions},model:{value:e.disabledGroup,callback:function(l){e.disabledGroup=l},expression:"disabledGroup"}}),e._v(" "),t("p",[e._v(e._s(e.disabledGroup))]),e._v(" "),t("h4",[e._v("组合使用禁用指定项")]),e._v(" "),t("cl-checkbox-group",{attrs:{options:e.disabledGroupOptions},model:{value:e.disabledGroup1,callback:function(l){e.disabledGroup1=l},expression:"disabledGroup1"}}),e._v(" "),t("p",[e._v(e._s(e.disabledGroup1))]),e._v(" "),t("h4",[e._v("组合使用禁用指定项")]),e._v(" "),t("cl-checkbox-group",{model:{value:e.disabledGroup2,callback:function(l){e.disabledGroup2=l},expression:"disabledGroup2"}},[t("cl-checkbox",{attrs:{label:"apple"}},[e._v("Apple")]),e._v(" "),t("cl-checkbox",{attrs:{label:"orange"}},[e._v("Orange")]),e._v(" "),t("cl-checkbox",{attrs:{label:"banana",disabled:""}},[e._v("Banana")]),e._v(" "),t("cl-checkbox",{attrs:{label:"melon"}},[e._v("Melon")])],1),e._v(" "),t("p",[e._v(e._s(e.disabledGroup2))])]],2)},l=[],t={data:function(){return{disabledSingle:!0,disabledGroup:["banana"],disabledGroup1:[],disabledGroupOptions:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange",disabled:!0},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}],disabledGroup2:[]}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo4":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("cl-checkbox",{attrs:{disabled:e.controlDisabled},model:{value:e.controlChecked,callback:function(l){e.controlChecked=l},expression:"controlChecked"}},[e._v("Checkbox")]),e._v(" "),t("p",[e._v("controlChecked: "+e._s(e.controlChecked))]),e._v(" "),t("p",[e._v("controlDisabled: "+e._s(e.controlDisabled))]),e._v(" "),t("cl-switch",{attrs:{width:"90"},model:{value:e.controlChecked,callback:function(l){e.controlChecked=l},expression:"controlChecked"}},[t("template",{slot:"open"},[e._v("Checked")]),e._v(" "),t("template",{slot:"close"},[e._v("UnChecked")])],2),e._v(" "),t("cl-switch",{attrs:{width:"90"},model:{value:e.controlDisabled,callback:function(l){e.controlDisabled=l},expression:"controlDisabled"}},[t("template",{slot:"open"},[e._v("Disabled")]),e._v(" "),t("template",{slot:"close"},[e._v("UnDisabled")])],2)]],2)},l=[],t={data:function(){return{controlChecked:!1,controlDisabled:!1}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo5":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("cl-checkbox",{attrs:{indeterminate:e.indeterminateAll},on:{change:e.checkboxAllChange},model:{value:e.checkboxAll,callback:function(l){e.checkboxAll=l},expression:"checkboxAll"}},[e._v("全选")]),e._v(" "),t("br"),e._v(" "),t("cl-checkbox-group",{attrs:{options:e.checkboxGroupAllOption},on:{change:e.checkboxGroupAllChange},model:{value:e.checkboxGroupAll,callback:function(l){e.checkboxGroupAll=l},expression:"checkboxGroupAll"}})]],2)},l=[],t={data:function(){return{checkboxAll:!1,indeterminateAll:!1,checkboxGroupAll:[],checkboxGroupAllOption:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange"},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}]}},methods:{checkboxAllChange:function(){var e=this;this.checkboxAll?this.checkboxGroupAllOption.forEach((function(l){e.checkboxGroupAll.push(l.value)})):(this.checkboxGroupAll=[],this.indeterminateAll=!1)},checkboxGroupAllChange:function(){this.checkboxGroupAll.length===this.checkboxGroupAllOption.length?this.checkboxAll=!0:this.checkboxGroupAll.length&&this.checkboxGroupAll.length!==this.checkboxGroupAllOption.length?(this.indeterminateAll=!0,this.checkboxAll=!1):(this.checkboxAll=!1,this.indeterminateAll=!1)}}};return r({render:e,staticRenderFns:l},t)}(),"cl-ui-demo6":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("cl-checkbox",{attrs:{size:"mini"},model:{value:e.singleMini,callback:function(l){e.singleMini=l},expression:"singleMini"}},[e._v("Mini")]),e._v(" "),t("cl-checkbox",{attrs:{size:"small"},model:{value:e.singleSmall,callback:function(l){e.singleSmall=l},expression:"singleSmall"}},[e._v("Small")]),e._v(" "),t("cl-checkbox",{model:{value:e.singleDefault,callback:function(l){e.singleDefault=l},expression:"singleDefault"}},[e._v("Default")]),e._v(" "),t("cl-checkbox",{attrs:{size:"large"},model:{value:e.singleLarge,callback:function(l){e.singleLarge=l},expression:"singleLarge"}},[e._v("Large")])]],2)},l=[],t={data:function(){return{singleMini:!1,singleSmall:!1,singleDefault:!1,singleLarge:!1}}};return r({render:e,staticRenderFns:l},t)}()}},i=s,d=t("5511"),p=Object(d["a"])(i,n,o,!1,null,null,null);l["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2107c0.6e1d9f34.js.map