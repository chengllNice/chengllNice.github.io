(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4d7b"],{"3d0d":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("section",{staticClass:"doc-article cl-ui-doc"},[a("h1",[e._v("Select 选择框")]),a("p",[e._v("表单组件。使用下拉菜单展示选项内容。模拟原生选择器。支持单选、多选、搜索。")]),e._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("可以使用v-model实现双向数据绑定。默认宽度100%。使用方式有两种，可以自己实现slot模式的，也可以传入数据 "),a("code",[e._v("option")]),e._v("内部自动实现。单选是 "),a("code",[e._v("value")]),e._v("接受字符串和数字类型的数据。组件会自动根据option的数据选中指定的value数据。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo0")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row :gutter=\"10\">\n        <cl-col>\n            <h4>slot模式</h4>\n            <cl-select v-model=\"valueBase\">\n                <cl-option v-for=\"item in valueBaseOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\">{{item.label}}</cl-option>\n            </cl-select>\n        </cl-col>\n        <cl-col>\n            <h4>option模式</h4>\n            <cl-select v-model=\"valueBase1\" :option=\"valueBaseOption\"></cl-select>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueBase: '',\n          valueBase1: '',\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"CC"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("size")]),e._v("属性可以控制尺寸大小，可选值 "),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v("或者不设置。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("尺寸 "),a("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo1")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row :gutter=\"10\">\n        <cl-col>\n            <cl-select v-model=\"valueSizeSmall\" :option=\"valueBaseOption\" size=\"small\"></cl-select>\n        </cl-col>\n        <cl-col>\n            <cl-select v-model=\"valueSizeDefault\" :option=\"valueBaseOption\"></cl-select>\n        </cl-col>\n        <cl-col>\n            <cl-select v-model=\"valueSizeLarge\" :option=\"valueBaseOption\" size=\"large\"></cl-select>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueSizeSmall: '',\n          valueSizeDefault: '',\n          valueSizeLarge: '',\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"JY"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("disabled")]),e._v("属性可以实现禁用。单独给 "),a("code",[e._v("option")]),e._v("设置 "),a("code",[e._v("disabled")]),e._v("可以实现某项的禁用。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("禁用 "),a("a",{attrs:{href:"#JY","data-title":"禁用"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo2")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row :gutter=\"10\">\n        <cl-col>\n            <cl-select v-model=\"valueDisabled\" :option=\"valueBaseOption\" disabled></cl-select>\n        </cl-col>\n        <cl-col>\n            <cl-select v-model=\"valueDisabled1\" :option=\"valueBaseOption\"></cl-select>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueDisabled: '',\n          valueDisabled1: '',\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"KQK"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("clearable")]),e._v("属性可以实现选中值之后点击清空按钮清空选中项。仅用于单选模式。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("可清空 "),a("a",{attrs:{href:"#KQK","data-title":"可清空"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo3")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-select v-model=\"valueClearable\" :option=\"valueBaseOption\" clearable></cl-select>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueClearable: '',\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n              disabled: true,\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ],\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"FZ"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("使用 "),a("code",[e._v("option-group")]),e._v("组件可使用分组模式。同时接受 "),a("code",[e._v("option")]),e._v("数据格式为 "),a("code",[e._v("[{label: 'group-label', option: [{label: 'option-label', value: 'option-value', disabled: true}]}]")]),e._v("的数据实现分组。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("分组 "),a("a",{attrs:{href:"#FZ","data-title":"分组"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo4")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row :gutter=\"10\">\n        <cl-col>\n            <h4>slot模式</h4>\n            <cl-select v-model=\"valueGroup1\">\n                <cl-option-group v-for=\"(groupItem, groupIndex) in GroupOption\" :key=\"groupIndex\" :label=\"groupItem.label\">\n                    <cl-option v-for=\"item in groupItem.option\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n                </cl-option-group>\n            </cl-select>\n        </cl-col>\n        <cl-col>\n            <h4>option模式</h4>\n            <cl-select v-model=\"valueGroup2\" :option=\"GroupOption\"></cl-select>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueGroup1: '',\n          valueGroup2: '',\n          GroupOption: [\n            {\n              label: 'group1',\n              option: [\n                {\n                  label: 'Fruit',\n                  value: 'fruit',\n                },\n                {\n                  label: 'Apple',\n                  value: 'apple',\n                  disabled: true,\n                },\n                {\n                  label: 'Banana',\n                  value: 'banana',\n                },\n              ]\n            },\n            {\n              label: 'group2',\n              option: [\n                {\n                  label: 'Orange',\n                  value: 'orange',\n                },\n                {\n                  label: 'Pear',\n                  value: 'pear',\n                },\n                {\n                  label: 'Peach',\n                  value: 'peach',\n                },\n              ]\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"ZDYMB"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("自定义模板不支持 "),a("code",[e._v("option")]),e._v("数据模式，需要使用 "),a("code",[e._v("slot")]),e._v("数据模式自定义实现。此时必须传 "),a("code",[e._v("label")]),e._v("属性用于选择时展示被选项。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("自定义模板 "),a("a",{attrs:{href:"#ZDYMB","data-title":"自定义模板"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo5")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-select v-model=\"valueModel\">\n        <cl-option v-for=\"item in valueModelOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\">\n            <i :class=\"item.icon\" style=\"margin-right: 10px;\"></i>\n            <span>{{item.label}}</span>\n        </cl-option>\n    </cl-select>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueModel: '',\n          valueModelOption: [\n            {\n              icon: 'cl-icon-home',\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              icon: 'cl-icon-star',\n              label: 'Apple',\n              value: 'apple',\n              disabled: true,\n            },\n            {\n              icon: 'cl-icon-button',\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              icon: 'cl-icon-sound',\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              icon: 'cl-icon-setting',\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              icon: 'cl-icon-user',\n              label: 'Peach',\n              value: 'peach',\n            },\n          ],\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"DX"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("multiple")]),e._v("属性实现多选。多选模式下 "),a("code",[e._v("value")]),e._v("类型为数组格式，返回值也为数组格式。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("多选 "),a("a",{attrs:{href:"#DX","data-title":"多选"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo6")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-select v-model=\"valueMultiple\" multiple>\n        <cl-option v-for=\"item in valueBaseOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n    </cl-select>\n    <p>{{valueMultiple}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueMultiple: [],\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"KSS"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("filterable")]),e._v("属性实现可搜索模式，在option数据中搜索。单选多选都支持搜索模式。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("可搜索 "),a("a",{attrs:{href:"#KSS","data-title":"可搜索"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo7")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-row :gutter=\"10\">\n        <cl-col>\n            <h4>单选搜索</h4>\n            <cl-select v-model=\"valueSearch\" filterable>\n                <cl-option v-for=\"item in valueBaseOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n            </cl-select>\n        </cl-col>\n        <cl-col>\n            <h4>多选搜索</h4>\n            <cl-select v-model=\"valueSearchMultiple\" multiple filterable>\n                <cl-option v-for=\"item in valueBaseOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n            </cl-select>\n        </cl-col>\n    </cl-row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueSearch: '',\n          valueSearchMultiple: [],\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"YCSS"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("同时设置 "),a("code",[e._v("filterable")]),a("code",[e._v("remote")]),a("code",[e._v("loading")]),e._v("属性实现远程搜索模式，其中 "),a("code",[e._v("loading")]),e._v("属性用于展示加载中状态，emit方法"),a("code",[e._v("remote-change")]),e._v("在搜索值发生改变时触发。返回搜索值。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("远程搜索 "),a("a",{attrs:{href:"#YCSS","data-title":"远程搜索"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo8")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-select v-model=\"valueRemoteSearch\" filterable remote :loading=\"remoteLoading\" @remote-change=\"handlerChangeRemote\">\n        <cl-option v-for=\"item in valueRemoteOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n    </cl-select>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueRemoteSearch: '',\n          remoteLoading: false,\n          valueRemoteOption: [],\n          valueRemoteAllOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n              disabled: true,\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ],\n        }\n      },\n      methods: {\n        handlerChangeRemote(value){\n          this.valueRemoteOption = [];\n          this.remoteLoading = true;\n          setTimeout(()=>{\n            this.valueRemoteOption = this.valueRemoteAllOption.filter(item=>{\n              return item.label.includes(value)\n            });\n            this.remoteLoading = false;\n          },500);\n        }\n      }\n    }\n<\/script>\n")])])])],2),a("code-wrap",{attrs:{id:"DYFHZ"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("默认返回值只有 "),a("code",[e._v("value")]),e._v("。可以通过设置 "),a("code",[e._v("value-lable")]),e._v("属性定义返回值类型为value-lable，及把value和label同时返回。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("定义返回值 "),a("a",{attrs:{href:"#DYFHZ","data-title":"定义返回值"}},[e._v("#")])]),a("template",{slot:"source"},[a("cl-ui-demo9")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <cl-select v-model=\"valueLabel\" value-lable @change=\"handlerValueLabelChange\">\n        <cl-option v-for=\"item in valueBaseOption\" :key=\"item.value\" :value=\"item.value\" :label=\"item.label\" :disabled=\"item.disabled\"></cl-option>\n    </cl-select>\n    <p>{{valueLabel}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueLabel: '',\n          valueBaseOption: [\n            {\n              label: 'Fruit',\n              value: 'fruit',\n            },\n            {\n              label: 'Apple',\n              value: 'apple',\n            },\n            {\n              label: 'Banana',\n              value: 'banana',\n            },\n            {\n              label: 'Orange',\n              value: 'orange',\n            },\n            {\n              label: 'Pear',\n              value: 'pear',\n            },\n            {\n              label: 'Peach',\n              value: 'peach',\n            },\n          ]\n        }\n      },\n      methods: {\n        handlerValueLabelChange(value){\n          this.$Message.info(`返回值为--${JSON.stringify(value)}`);\n        }\n      }\n    }\n<\/script>\n")])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)],1)},n=[function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h2",{attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h2",{attrs:{id:"api"}},[e._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h3",{attrs:{id:"select-props"}},[e._v("Select props "),a("a",{staticClass:"header-anchor",attrs:{href:"#select-props"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("name")]),a("td",[e._v("String")]),a("td",[e._v("原生name属性")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("String, Number, Array")]),a("td",[e._v("绑定的值，可以使用v-model进行双向绑定。多选时值为数组类型。")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("Boolean")]),a("td",[e._v("禁用")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("String")]),a("td",[e._v("占位文本")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("size")]),a("td",[e._v("String")]),a("td",[e._v("尺寸，可选值 "),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v("或者不设置")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("option")]),a("td",[e._v("Array")]),a("td",[e._v("select的选项列表。设置此项后不用再插入Option组件。不设置分组时值类型如："),a("code",[e._v("[{value: '', label: '', disabled: true}]")]),e._v(",其中value为选中时的返回值，label为展示信息，disabled控制是否可选")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("transition")]),a("td",[e._v("String")]),a("td",[e._v("可自定义下拉框的动画效果")]),a("td",[e._v("fade")])]),a("tr",[a("td",[e._v("multiple")]),a("td",[e._v("Boolean")]),a("td",[e._v("多选")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("Boolean")]),a("td",[e._v("开启清除")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("emptyText")]),a("td",[e._v("String")]),a("td",[e._v("数据为空时的显示文本")]),a("td",[e._v("暂无数据")])]),a("tr",[a("td",[e._v("filterable")]),a("td",[e._v("Boolean")]),a("td",[e._v("开始搜索（option数据搜索）")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("remote")]),a("td",[e._v("Boolean")]),a("td",[e._v("开启远程搜索（需要自己控制数据）")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("loading")]),a("td",[e._v("Boolean")]),a("td",[e._v("远程搜索时显示loading加载中的效果")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("maxHeight")]),a("td",[e._v("String, Number")]),a("td",[e._v("设置下拉框的最大高度，超出后滚动")]),a("td",[e._v("200px")])]),a("tr",[a("td",[e._v("placement")]),a("td",[e._v("String")]),a("td",[e._v("设置下拉框显示的位置")]),a("td",[e._v("bottom-start")])]),a("tr",[a("td",[e._v("valueLable")]),a("td",[e._v("Boolean")]),a("td",[e._v("默认返回值只有value。设置此项返回值为value,label组成的对象")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("dropdownMatchSelectWidth")]),a("td",[e._v("Boolean")]),a("td",[e._v("下拉框宽度默认和选择框同宽，文本超出后省略。设置此项后当内容比较长时下拉框宽度自动拉伸。下拉框最小和选择框同宽")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("renderHtml")]),a("td",[e._v("HTMLElement, Boolean")]),a("td",[e._v("指定下拉框所在的元素, true时添加到body中")]),a("td",[e._v("false")])])])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h3",{attrs:{id:"select-event"}},[e._v("Select event "),a("a",{staticClass:"header-anchor",attrs:{href:"#select-event"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("事件名")]),a("th",[e._v("说明")]),a("th",[e._v("返回值")])])]),a("tbody",[a("tr",[a("td",[e._v("change")]),a("td",[e._v("选中option变化时触发，默认返回value，如需返回label，详见属性valueLabel")]),a("td",[e._v("选中项value值")])]),a("tr",[a("td",[e._v("remote-change")]),a("td",[e._v("远程搜索搜索词变化时触发")]),a("td",[e._v("搜索词")])]),a("tr",[a("td",[e._v("clear")]),a("td",[e._v("点击清空按钮时触发")]),a("td",[e._v("-")])])])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h3",{attrs:{id:"option-props"}},[e._v("Option props "),a("a",{staticClass:"header-anchor",attrs:{href:"#option-props"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value")]),a("td",[e._v("String, Number")]),a("td",[e._v("选项值")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("label")]),a("td",[e._v("String, Number")]),a("td",[e._v("选项显示的内容。默认在无slot内容时显示此项的内容。在通过slot自定义option显示内容时，此项为必填项。默认根据此项进行搜索")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("Boolean")]),a("td",[e._v("禁用")]),a("td",[e._v("-")])])])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("h3",{attrs:{id:"optiongroup-props"}},[e._v("OptionGroup props "),a("a",{staticClass:"header-anchor",attrs:{href:"#optiongroup-props"}},[e._v("#")])])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("label")]),a("td",[e._v("String")]),a("td",[e._v("分组的组名")]),a("td",[e._v("-")])])])])}],r=(a("5ab2"),a("6d57"),a("e10e"),a("ed63"),a("8cf2"),a("9d37"));function o(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?o(Object(a),!0).forEach((function(l){Object(r["a"])(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}var v={name:"component-doc",components:{"cl-ui-demo0":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-row",{attrs:{gutter:10}},[a("cl-col",[a("h4",[e._v("slot模式")]),e._v(" "),a("cl-select",{model:{value:e.valueBase,callback:function(l){e.valueBase=l},expression:"valueBase"}},e._l(e.valueBaseOption,(function(l){return a("cl-option",{key:l.value,attrs:{value:l.value,label:l.label}},[e._v(e._s(l.label))])})),1)],1),e._v(" "),a("cl-col",[a("h4",[e._v("option模式")]),e._v(" "),a("cl-select",{attrs:{option:e.valueBaseOption},model:{value:e.valueBase1,callback:function(l){e.valueBase1=l},expression:"valueBase1"}})],1)],1)]],2)},l=[],a={data:function(){return{valueBase:"",valueBase1:"",valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo1":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-row",{attrs:{gutter:10}},[a("cl-col",[a("cl-select",{attrs:{option:e.valueBaseOption,size:"small"},model:{value:e.valueSizeSmall,callback:function(l){e.valueSizeSmall=l},expression:"valueSizeSmall"}})],1),e._v(" "),a("cl-col",[a("cl-select",{attrs:{option:e.valueBaseOption},model:{value:e.valueSizeDefault,callback:function(l){e.valueSizeDefault=l},expression:"valueSizeDefault"}})],1),e._v(" "),a("cl-col",[a("cl-select",{attrs:{option:e.valueBaseOption,size:"large"},model:{value:e.valueSizeLarge,callback:function(l){e.valueSizeLarge=l},expression:"valueSizeLarge"}})],1)],1)]],2)},l=[],a={data:function(){return{valueSizeSmall:"",valueSizeDefault:"",valueSizeLarge:"",valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo2":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-row",{attrs:{gutter:10}},[a("cl-col",[a("cl-select",{attrs:{option:e.valueBaseOption,disabled:""},model:{value:e.valueDisabled,callback:function(l){e.valueDisabled=l},expression:"valueDisabled"}})],1),e._v(" "),a("cl-col",[a("cl-select",{attrs:{option:e.valueBaseOption},model:{value:e.valueDisabled1,callback:function(l){e.valueDisabled1=l},expression:"valueDisabled1"}})],1)],1)]],2)},l=[],a={data:function(){return{valueDisabled:"",valueDisabled1:"",valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo3":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-select",{attrs:{option:e.valueBaseOption,clearable:""},model:{value:e.valueClearable,callback:function(l){e.valueClearable=l},expression:"valueClearable"}})]],2)},l=[],a={data:function(){return{valueClearable:"",valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple",disabled:!0},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo4":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-row",{attrs:{gutter:10}},[a("cl-col",[a("h4",[e._v("slot模式")]),e._v(" "),a("cl-select",{model:{value:e.valueGroup1,callback:function(l){e.valueGroup1=l},expression:"valueGroup1"}},e._l(e.GroupOption,(function(l,t){return a("cl-option-group",{key:t,attrs:{label:l.label}},e._l(l.option,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1)})),1)],1),e._v(" "),a("cl-col",[a("h4",[e._v("option模式")]),e._v(" "),a("cl-select",{attrs:{option:e.GroupOption},model:{value:e.valueGroup2,callback:function(l){e.valueGroup2=l},expression:"valueGroup2"}})],1)],1)]],2)},l=[],a={data:function(){return{valueGroup1:"",valueGroup2:"",GroupOption:[{label:"group1",option:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple",disabled:!0},{label:"Banana",value:"banana"}]},{label:"group2",option:[{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo5":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-select",{model:{value:e.valueModel,callback:function(l){e.valueModel=l},expression:"valueModel"}},e._l(e.valueModelOption,(function(l){return a("cl-option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[a("i",{class:l.icon,staticStyle:{"margin-right":"10px"}}),e._v(" "),a("span",[e._v(e._s(l.label))])])})),1)]],2)},l=[],a={data:function(){return{valueModel:"",valueModelOption:[{icon:"cl-icon-home",label:"Fruit",value:"fruit"},{icon:"cl-icon-star",label:"Apple",value:"apple",disabled:!0},{icon:"cl-icon-button",label:"Banana",value:"banana"},{icon:"cl-icon-sound",label:"Orange",value:"orange"},{icon:"cl-icon-setting",label:"Pear",value:"pear"},{icon:"cl-icon-user",label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo6":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-select",{attrs:{multiple:""},model:{value:e.valueMultiple,callback:function(l){e.valueMultiple=l},expression:"valueMultiple"}},e._l(e.valueBaseOption,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1),e._v(" "),a("p",[e._v(e._s(e.valueMultiple))])]],2)},l=[],a={data:function(){return{valueMultiple:[],valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo7":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-row",{attrs:{gutter:10}},[a("cl-col",[a("h4",[e._v("单选搜索")]),e._v(" "),a("cl-select",{attrs:{filterable:""},model:{value:e.valueSearch,callback:function(l){e.valueSearch=l},expression:"valueSearch"}},e._l(e.valueBaseOption,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1)],1),e._v(" "),a("cl-col",[a("h4",[e._v("多选搜索")]),e._v(" "),a("cl-select",{attrs:{multiple:"",filterable:""},model:{value:e.valueSearchMultiple,callback:function(l){e.valueSearchMultiple=l},expression:"valueSearchMultiple"}},e._l(e.valueBaseOption,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1)],1)],1)]],2)},l=[],a={data:function(){return{valueSearch:"",valueSearchMultiple:[],valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo8":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-select",{attrs:{filterable:"",remote:"",loading:e.remoteLoading},on:{"remote-change":e.handlerChangeRemote},model:{value:e.valueRemoteSearch,callback:function(l){e.valueRemoteSearch=l},expression:"valueRemoteSearch"}},e._l(e.valueRemoteOption,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1)]],2)},l=[],a={data:function(){return{valueRemoteSearch:"",remoteLoading:!1,valueRemoteOption:[],valueRemoteAllOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple",disabled:!0},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}},methods:{handlerChangeRemote:function(e){var l=this;this.valueRemoteOption=[],this.remoteLoading=!0,setTimeout((function(){l.valueRemoteOption=l.valueRemoteAllOption.filter((function(l){return l.label.includes(e)})),l.remoteLoading=!1}),500)}}};return i({render:e,staticRenderFns:l},a)}(),"cl-ui-demo9":function(){var e=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[[a("cl-select",{attrs:{"value-lable":""},on:{change:e.handlerValueLabelChange},model:{value:e.valueLabel,callback:function(l){e.valueLabel=l},expression:"valueLabel"}},e._l(e.valueBaseOption,(function(e){return a("cl-option",{key:e.value,attrs:{value:e.value,label:e.label,disabled:e.disabled}})})),1),e._v(" "),a("p",[e._v(e._s(e.valueLabel))])]],2)},l=[],a={data:function(){return{valueLabel:"",valueBaseOption:[{label:"Fruit",value:"fruit"},{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"}]}},methods:{handlerValueLabelChange:function(e){this.$Message.info("返回值为--".concat(JSON.stringify(e)))}}};return i({render:e,staticRenderFns:l},a)}()}},u=v,c=a("5511"),s=Object(c["a"])(u,t,n,!1,null,null,null);l["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0c4d7b.8866f4f9.js.map