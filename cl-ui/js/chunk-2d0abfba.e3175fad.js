(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abfba"],{1830:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"doc-article cl-ui-doc"},[i("h1",[t._v("List 列表")]),i("p",[t._v("基础的列表展示。")]),t._m(0),i("code-wrap",{attrs:{id:"JCYF"}},[i("div",{attrs:{slot:"description"},slot:"description"},[i("p",[t._v("基础列表。设置"),i("code",[t._v("size")]),t._v("属性控制尺寸，设置"),i("code",[t._v("border")]),t._v("属性控制是否显示边框，"),i("code",[t._v("header")]),t._v("和"),i("code",[t._v("footer")]),t._v("分别定义列表头部和底部。")])]),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),i("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),i("template",{slot:"source"},[i("cl-ui-demo0")],1),i("p"),i("template",{slot:"highlight"},[i("pre",{pre:!0},[i("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>迷你型列表</h4>\n    <cl-list size="mini" header="列表头部" footer="列表底部">\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n    <h4>小型列表</h4>\n    <cl-list size="small" header="列表头部" footer="列表底部">\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n    <h4>默认大小</h4>\n    <cl-list header="列表头部" footer="列表底部">\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n    <h4>大型列表</h4>\n    <cl-list size="large" header="列表头部" footer="列表底部">\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n    <h4>添加border</h4>\n    <cl-list border header="列表头部" footer="列表底部">\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n    <h4>slot模式定义header和footer</h4>\n    <cl-list size="large">\n        <div slot="header">slot列表头部</div>\n        <div slot="footer">slot列表底部</div>\n        <cl-list-item>这是一段文本1。</cl-list-item>\n        <cl-list-item>这是一段文本2。</cl-list-item>\n        <cl-list-item>这是一段文本3。</cl-list-item>\n    </cl-list>\n</template>\n\n')])])])],2),i("code-wrap",{attrs:{id:"BTLXDJCLB"}},[i("div",{attrs:{slot:"description"},slot:"description"},[i("p",[t._v("设置属性"),i("code",[t._v('type="meta"')]),t._v("实现不同类型的列表。")])]),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("不同类型的基础列表 "),i("a",{attrs:{href:"#BTLXDJCLB","data-title":"不同类型的基础列表"}},[t._v("#")])]),i("template",{slot:"source"},[i("cl-ui-demo1")],1),i("p"),i("template",{slot:"highlight"},[i("pre",{pre:!0},[i("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-list type="meta" border header="音乐列表">\n        <cl-list-item avatar="http://p1.music.126.net/-6osWky_WObfAydYYiTvpA==/3236962232773608.jpg?param=130y130"\n                      title="暗里着迷"\n                      description="刘德华">\n            可不可不要这么样徘徊在目光内\n                        \n            你会察觉到我根本寂寞难耐\n            \n            即使千多百个深夜曾在梦境内\n            \n            我有吻过你这毕竟并没存在\n            \n            人声车声开始消和逝\n            \n            无声挣扎有个情感奴隶\n            \n            是我多么的想她\n            \n            但我偏偏只得无尽叹谓\n            \n            其实每次见你我也着迷\n            \n            无奈你我各有角色范围\n            <div slot="extra">\n                <cl-button type="text" size="mini">编辑</cl-button>\n                <cl-button type="text" size="mini">删除</cl-button>\n            </div>\n        </cl-list-item>\n        <cl-list-item avatar="http://p1.music.126.net/YxKEZCPUWrvvZf6qeV2_xg==/78065325577755.jpg?param=130y130"\n                      title="天龙八部之宿敌"\n                      description="许嵩">\n                    会在何处见到你\n                    莫非前尘已注定\n                    飞过时空的距离\n                    却囿于刀剑光影\n                    三月春花渐次醒\n                    迢迢年华谁老去\n                    是劫是缘随我心\n                    除了你万敌不侵\n                    当恩怨各一半\n                    我怎么圈揽\n                    看灯笼血红染\n            <div slot="extra">\n                <cl-button type="text" size="mini">编辑</cl-button>\n                <cl-button type="text" size="mini">删除</cl-button>\n            </div>\n        </cl-list-item>\n        <cl-list-item>\n            <div slot="avatar"><img src="http://p2.music.126.net/emWwYFceRZ2plNWgnGUDfg==/109951163333175426.jpg?param=130y130" alt=""></div>\n            <div slot="title">浪子回头</div>\n            <div slot="description">茄子蛋</div>\n            烟一支一支一支地点\n            酒一杯一杯一杯地干\n            请你要体谅我\n            我酒量不好别给我挖坑\n            时间一天一天一天的走\n            汗一滴一滴一滴的流\n            有一天我们都老\n            带妻子一起\n            浪子回头\n            亲爱的 可爱的 英俊的 朋友\n            垃圾的 没品的 没出息的 朋友\n            <div slot="extra">\n                <cl-button type="text" size="mini">编辑</cl-button>\n                <cl-button type="text" size="mini">删除</cl-button>\n            </div>\n        </cl-list-item>\n    </cl-list>\n</template>\n\n')])])])],2),i("code-wrap",{attrs:{id:"SFXSFGX"}},[i("div",{attrs:{slot:"description"},slot:"description"},[i("p",[t._v("是否显示分割线")])]),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("是否显示分割线 "),i("a",{attrs:{href:"#SFXSFGX","data-title":"是否显示分割线"}},[t._v("#")])]),i("template",{slot:"source"},[i("cl-ui-demo2")],1),i("p"),i("template",{slot:"highlight"},[i("pre",{pre:!0},[i("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-list type="meta" border :split="false" header="我的音乐列表">\n        <cl-list-item title="感谢你曾来过" description="周思涵/Ayo97">\n            <div slot="extra">\n                <cl-button type="text" size="mini"><i class="cl-icon-heart"></i></cl-button>\n                <cl-button type="text" size="mini"><i class="cl-icon-plus"></i></cl-button>\n            </div>\n        </cl-list-item>\n        <cl-list-item title="孤单心事" description="颜人中">\n            <div slot="extra">\n                <cl-button type="text" size="mini"><i class="cl-icon-heart"></i></cl-button>\n                <cl-button type="text" size="mini"><i class="cl-icon-plus"></i></cl-button>\n            </div>\n        </cl-list-item>\n        <cl-list-item title="云烟成雨" description="房东的猫">\n            <div slot="extra">\n                <cl-button type="text" size="mini"><i class="cl-icon-heart"></i></cl-button>\n                <cl-button type="text" size="mini"><i class="cl-icon-plus"></i></cl-button>\n            </div>\n        </cl-list-item>\n    </cl-list>\n</template>\n\n')])])])],2),i("code-wrap",{attrs:{id:"XQLB"}},[i("div",{attrs:{slot:"description"},slot:"description"},[i("p",[t._v("详情列表。")])]),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("详情列表 "),i("a",{attrs:{href:"#XQLB","data-title":"详情列表"}},[t._v("#")])]),i("template",{slot:"source"},[i("cl-ui-demo3")],1),i("p"),i("template",{slot:"highlight"},[i("pre",{pre:!0},[i("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-list size="large" header="详情列表">\n        <cl-list-row v-for="(itemRow, indexRow) in dataList" :key="indexRow">\n            <cl-list-item v-for="item in itemRow" :key="item.id" :label="item.label" :value="item.value"></cl-list-item>\n        </cl-list-row>\n    </cl-list>\n    <cl-list :split="false" :hover="false" header="详情列表">\n        <cl-list-row v-for="(itemRow, indexRow) in dataList" :key="indexRow">\n            <cl-list-item v-for="item in itemRow" :key="item.id" :label="item.label" :value="item.value"></cl-list-item>\n        </cl-list-row>\n    </cl-list>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                dataList: [],\n            }\n        },\n        mounted(){\n            this.$nextTick(()=>{\n                this.loadData();\n            })\n        },\n        methods: {\n            loadData(){\n                setTimeout(()=>{\n                    for (let row = 0; row < 3; row++){\n                        let rowList = [];\n                        for(let col = 0; col < 3; col++){\n                            rowList.push({\n                                id: row + \'\' + col,\n                                label: `label${row}-${col}:`,\n                                value: `value${row}-${col}`\n                            })\n                        }   \n                        this.dataList.push(rowList)        \n                    } \n                }, 1000);\n            },\n        }\n    }\n<\/script>\n\n')])])])],2),i("code-wrap",{attrs:{id:"YBJZSJ"}},[i("div",{attrs:{slot:"description"},slot:"description"},[i("p",[t._v("设置"),i("code",[t._v("loading")]),t._v("属性可以显示加载中的动画。")])]),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("异步加载数据 "),i("a",{attrs:{href:"#YBJZSJ","data-title":"异步加载数据"}},[t._v("#")])]),i("template",{slot:"source"},[i("cl-ui-demo4")],1),i("p"),i("template",{slot:"highlight"},[i("pre",{pre:!0},[i("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-list type="meta" border :split="false" :loading="loading" header="异步加载列表">\n        <cl-list-item v-for="item in dataList" :key="item.id" :title="item.title" :description="item.description">\n            <div slot="extra">\n                <cl-button type="text" size="mini"><i class="cl-icon-delete" @click="deleteData(item)"></i></cl-button>\n            </div>\n        </cl-list-item>\n    </cl-list>\n    <cl-button v-if="!noMore" block :disabled="loading" @click="loadData">加载更多</cl-button>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                dataList: [],\n                loading: false,\n                noMore: false,\n            }\n        },\n        mounted(){\n            this.$nextTick(()=>{\n                this.loadData();\n            })\n        },\n        methods: {\n            loadData(){\n                this.loading = true;\n                setTimeout(()=>{\n                    let len = this.dataList.length;\n                    let startId = len ? (this.dataList[len - 1].id + 1) : 0;\n                    for (let i = startId; i < startId + 3; i++){\n                        this.dataList.push({\n                            id: i,\n                            title: \'title\' + i,\n                            description: \'description\' + i\n                        })\n                    } \n                    this.loading = false;\n                    this.dataList.length > 20 && (this.noMore = true);\n                }, 1000);\n            },\n            deleteData(data){\n                let index = this.dataList.findIndex(item=>{\n                    return item.id === data.id\n                });\n                if(index > -1){\n                    this.dataList.splice(index, 1);\n                    this.$Message.info(`id为${data.id}删除成功`);\n                }\n            }\n        }\n    }\n<\/script>\n\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),i("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{attrs:{id:"api"}},[t._v("API "),i("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"list-props"}},[t._v("List props "),i("a",{staticClass:"header-anchor",attrs:{href:"#list-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("属性")]),i("th",[t._v("类型")]),i("th",[t._v("说明")]),i("th",[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("border")]),i("td",[t._v("Boolean")]),i("td",[t._v("是否显示边框")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("hover")]),i("td",[t._v("Boolean")]),i("td",[t._v("是否需要hover效果")]),i("td",[t._v("true")])]),i("tr",[i("td",[t._v("split")]),i("td",[t._v("Boolean")]),i("td",[t._v("是否显示item的分割线")]),i("td",[t._v("true")])]),i("tr",[i("td",[t._v("header")]),i("td",[t._v("String")]),i("td",[t._v("列表头部信息")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("footer")]),i("td",[t._v("String")]),i("td",[t._v("列表低部信息")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("type")]),i("td",[t._v("String")]),i("td",[t._v("列表类型，可选值 "),i("code",[t._v("meta")]),t._v("。详情列表时无效")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("size")]),i("td",[t._v("String")]),i("td",[t._v("列表尺寸，可选值 "),i("code",[t._v("mini")]),i("code",[t._v("small")]),i("code",[t._v("mini")]),i("code",[t._v("default")])]),i("td",[t._v("default")])]),i("tr",[i("td",[t._v("loading")]),i("td",[t._v("Boolean")]),i("td",[t._v("数据加载中")]),i("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"listitem-props"}},[t._v("ListItem props "),i("a",{staticClass:"header-anchor",attrs:{href:"#listitem-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("属性")]),i("th",[t._v("类型")]),i("th",[t._v("说明")]),i("th",[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("type")]),i("td",[t._v("String")]),i("td",[t._v("列表类型，可选值 "),i("code",[t._v("meta")])]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("title")]),i("td",[t._v("String")]),i("td",[t._v("列表项标题，列表或者item的 "),i("code",[t._v("type")]),t._v(" 值为"),i("code",[t._v("meta")]),t._v("时可用。详情列表时无效")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("description")]),i("td",[t._v("String")]),i("td",[t._v("列表项描述，列表或者item的 "),i("code",[t._v("type")]),t._v(" 值为"),i("code",[t._v("meta")]),t._v("时可用。详情列表时无效")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("avatar")]),i("td",[t._v("String")]),i("td",[t._v("列表项图片，列表或者item的 "),i("code",[t._v("type")]),t._v(" 值为"),i("code",[t._v("meta")]),t._v("时可用")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("label")]),i("td",[t._v("String")]),i("td",[t._v("详情列表时有效")]),i("td",[t._v("-")])]),i("tr",[i("td",[t._v("value")]),i("td",[t._v("String")]),i("td",[t._v("详情列表时有效")]),i("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"listitem-slot"}},[t._v("ListItem slot "),i("a",{staticClass:"header-anchor",attrs:{href:"#listitem-slot"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"doc-table"},[i("thead",[i("tr",[i("th",[t._v("名称")]),i("th",[t._v("说明")])])]),i("tbody",[i("tr",[i("td",[t._v("-")]),i("td",[t._v("列表项内容")])]),i("tr",[i("td",[t._v("avatar")]),i("td",[t._v("自定义列表项图片信息，详情列表时无效")])]),i("tr",[i("td",[t._v("title")]),i("td",[t._v("自定义列表项标题信息，详情列表时无效")])]),i("tr",[i("td",[t._v("description")]),i("td",[t._v("自定义列表项描述信息，详情列表时无效")])]),i("tr",[i("td",[t._v("label")]),i("td",[t._v("详情列表时有效")])]),i("tr",[i("td",[t._v("value")]),i("td",[t._v("详情列表时有效")])]),i("tr",[i("td",[t._v("extra")]),i("td",[t._v("自定义列表项额外扩展，详情列表时无效")])])])])}],s=(i("5ab2"),i("6d57"),i("e10e"),i("e204"),i("9d37"));function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var o={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("h4",[t._v("迷你型列表")]),t._v(" "),i("cl-list",{attrs:{size:"mini",header:"列表头部",footer:"列表底部"}},[i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1),t._v(" "),i("h4",[t._v("小型列表")]),t._v(" "),i("cl-list",{attrs:{size:"small",header:"列表头部",footer:"列表底部"}},[i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1),t._v(" "),i("h4",[t._v("默认大小")]),t._v(" "),i("cl-list",{attrs:{header:"列表头部",footer:"列表底部"}},[i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1),t._v(" "),i("h4",[t._v("大型列表")]),t._v(" "),i("cl-list",{attrs:{size:"large",header:"列表头部",footer:"列表底部"}},[i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1),t._v(" "),i("h4",[t._v("添加border")]),t._v(" "),i("cl-list",{attrs:{border:"",header:"列表头部",footer:"列表底部"}},[i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1),t._v(" "),i("h4",[t._v("slot模式定义header和footer")]),t._v(" "),i("cl-list",{attrs:{size:"large"}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v("slot列表头部")]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("slot列表底部")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本1。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本2。")]),t._v(" "),i("cl-list-item",[t._v("这是一段文本3。")])],1)]],2)},e=[],i={};return r({render:t,staticRenderFns:e},i)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("cl-list",{attrs:{type:"meta",border:"",header:"音乐列表"}},[i("cl-list-item",{attrs:{avatar:"http://p1.music.126.net/-6osWky_WObfAydYYiTvpA==/3236962232773608.jpg?param=130y130",title:"暗里着迷",description:"刘德华"}},[t._v("\n            可不可不要这么样徘徊在目光内\n                        \n            你会察觉到我根本寂寞难耐\n            \n            即使千多百个深夜曾在梦境内\n            \n            我有吻过你这毕竟并没存在\n            \n            人声车声开始消和逝\n            \n            无声挣扎有个情感奴隶\n            \n            是我多么的想她\n            \n            但我偏偏只得无尽叹谓\n            \n            其实每次见你我也着迷\n            \n            无奈你我各有角色范围\n            "),i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("编辑")]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("删除")])],1)]),t._v(" "),i("cl-list-item",{attrs:{avatar:"http://p1.music.126.net/YxKEZCPUWrvvZf6qeV2_xg==/78065325577755.jpg?param=130y130",title:"天龙八部之宿敌",description:"许嵩"}},[t._v("\n                    会在何处见到你\n                    莫非前尘已注定\n                    飞过时空的距离\n                    却囿于刀剑光影\n                    三月春花渐次醒\n                    迢迢年华谁老去\n                    是劫是缘随我心\n                    除了你万敌不侵\n                    当恩怨各一半\n                    我怎么圈揽\n                    看灯笼血红染\n            "),i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("编辑")]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("删除")])],1)]),t._v(" "),i("cl-list-item",[i("div",{attrs:{slot:"avatar"},slot:"avatar"},[i("img",{attrs:{src:"http://p2.music.126.net/emWwYFceRZ2plNWgnGUDfg==/109951163333175426.jpg?param=130y130",alt:""}})]),t._v(" "),i("div",{attrs:{slot:"title"},slot:"title"},[t._v("浪子回头")]),t._v(" "),i("div",{attrs:{slot:"description"},slot:"description"},[t._v("茄子蛋")]),t._v("\n            烟一支一支一支地点\n            酒一杯一杯一杯地干\n            请你要体谅我\n            我酒量不好别给我挖坑\n            时间一天一天一天的走\n            汗一滴一滴一滴的流\n            有一天我们都老\n            带妻子一起\n            浪子回头\n            亲爱的 可爱的 英俊的 朋友\n            垃圾的 没品的 没出息的 朋友\n            "),i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("编辑")]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[t._v("删除")])],1)])],1)]],2)},e=[],i={};return r({render:t,staticRenderFns:e},i)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("cl-list",{attrs:{type:"meta",border:"",split:!1,header:"我的音乐列表"}},[i("cl-list-item",{attrs:{title:"感谢你曾来过",description:"周思涵/Ayo97"}},[i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-heart"})]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-plus"})])],1)]),t._v(" "),i("cl-list-item",{attrs:{title:"孤单心事",description:"颜人中"}},[i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-heart"})]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-plus"})])],1)]),t._v(" "),i("cl-list-item",{attrs:{title:"云烟成雨",description:"房东的猫"}},[i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-heart"})]),t._v(" "),i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-plus"})])],1)])],1)]],2)},e=[],i={};return r({render:t,staticRenderFns:e},i)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("cl-list",{attrs:{size:"large",header:"详情列表"}},t._l(t.dataList,(function(e,l){return i("cl-list-row",{key:l},t._l(e,(function(t){return i("cl-list-item",{key:t.id,attrs:{label:t.label,value:t.value}})})),1)})),1),t._v(" "),i("cl-list",{attrs:{split:!1,hover:!1,header:"详情列表"}},t._l(t.dataList,(function(e,l){return i("cl-list-row",{key:l},t._l(e,(function(t){return i("cl-list-item",{key:t.id,attrs:{label:t.label,value:t.value}})})),1)})),1)]],2)},e=[],i={data:function(){return{dataList:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.loadData()}))},methods:{loadData:function(){var t=this;setTimeout((function(){for(var e=0;e<3;e++){for(var i=[],l=0;l<3;l++)i.push({id:e+""+l,label:"label".concat(e,"-").concat(l,":"),value:"value".concat(e,"-").concat(l)});t.dataList.push(i)}}),1e3)}}};return r({render:t,staticRenderFns:e},i)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("cl-list",{attrs:{type:"meta",border:"",split:!1,loading:t.loading,header:"异步加载列表"}},t._l(t.dataList,(function(e){return i("cl-list-item",{key:e.id,attrs:{title:e.title,description:e.description}},[i("div",{attrs:{slot:"extra"},slot:"extra"},[i("cl-button",{attrs:{type:"text",size:"mini"}},[i("i",{staticClass:"cl-icon-delete",on:{click:function(i){return t.deleteData(e)}}})])],1)])})),1),t._v(" "),t.noMore?t._e():i("cl-button",{attrs:{block:"",disabled:t.loading},on:{click:t.loadData}},[t._v("加载更多")])]],2)},e=[],i={data:function(){return{dataList:[],loading:!1,noMore:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.loadData()}))},methods:{loadData:function(){var t=this;this.loading=!0,setTimeout((function(){for(var e=t.dataList.length,i=e?t.dataList[e-1].id+1:0,l=i;l<i+3;l++)t.dataList.push({id:l,title:"title"+l,description:"description"+l});t.loading=!1,t.dataList.length>20&&(t.noMore=!0)}),1e3)},deleteData:function(t){var e=this.dataList.findIndex((function(e){return e.id===t.id}));e>-1&&(this.dataList.splice(e,1),this.$Message.info("id为".concat(t.id,"删除成功")))}}};return r({render:t,staticRenderFns:e},i)}()}},c=o,d=i("5511"),v=Object(d["a"])(c,l,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0abfba.e3175fad.js.map