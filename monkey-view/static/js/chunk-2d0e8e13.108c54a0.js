(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8e13"],{"8ac7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"doc-article monkey-view-doc"},[n("h1",[e._v("快速上手")]),e._m(0),e._m(1),n("p",[e._v("必要的基础知识不可缺少，在开始之前有必要先了解以下知识点，这里我们假设您已经掌握以下内容：")]),e._m(2),e._m(3),n("p",[e._v("在 main.js 中写入以下内容：")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(4)]),e._m(5),n("p",[e._v("借助插件 babel-plugin-import可以实现按需加载组件，减少文件体积。首先安装，并在文件 .babelrc 中配置：")]),n("p",[e._v("首先，安装 babel-plugin-component：")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(6)]),n("p",[e._v("然后，将 .babelrc 修改为：")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(7)]),n("p",[e._v("然后按照自己的需求引入组件，比如 Button 和 Select 组件：")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(8)]),e._m(9),e._m(10),e._m(11),e._m(12),n("p",[e._v("该全局配置对象介绍如下：")]),e._m(13),n("p",[e._v("示例")]),e._m(14),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(15)]),e._m(16),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(17)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("本章节将介绍如何在项目中使用"),n("code",[e._v("monkey-view")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"anchor-title",attrs:{id:"kai-shi-zhi-qian"}},[e._v("开始之前 "),n("a",{staticClass:"header-anchor",attrs:{href:"#kai-shi-zhi-qian"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://www.w3school.com.cn/js/index.asp",target:"_blank"}},[e._v("javascript")])]),n("li",[n("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank"}},[e._v("vue.js")])]),n("li",[n("a",{attrs:{href:"http://nodejs.cn/",target:"_blank"}},[e._v("node.js")])]),n("li",[n("a",{attrs:{href:"https://www.webpackjs.com/",target:"_blank"}},[e._v("webpack")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"anchor-title",attrs:{id:"yin-ru-monkeyview"}},[e._v("引入 MonkeyView "),n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru-monkeyview"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue';\nimport App from './App.vue';\nimport MonkeyView from 'monkey-view';\nimport 'monkey-view/dist/styles/monkey-view.css';\n\nVue.use(MonkeyView);\n\nnew Vue({\n    el: '#app',\n    render: h => h(App)\n});\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"anchor-title",attrs:{id:"an-xu-yin-ru"}},[e._v("按需引入 "),n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"shell"}},[e._v("npm install babel-plugin-import --save-dev\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"javascript"}},[e._v('// .babelrc\n{\n  "plugins": [["import", {\n    "libraryName": "monkey-view",\n    "libraryDirectory": "src/packages"\n  }]]\n}\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import { Button, Select } from 'monkey-view';\nVue.component('Button', Button);\nVue.component('Select', Select);\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("按需引用仍然需要导入样式，即在 main.js 或根组件执行 "),n("code",[e._v("import 'monkey-view/dist/styles/monkey-view.css'")]),e._v(";")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"anchor-title",attrs:{id:"quan-ju-pei-zhi"}},[e._v("全局配置 "),n("a",{staticClass:"header-anchor",attrs:{href:"#quan-ju-pei-zhi"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("使用 "),n("code",[e._v("monkey-view")]),e._v(" 时可以使用全局配置对象进行组件属性的全局配置。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("组件优先使用"),n("code",[e._v("props")]),e._v("属性传递的属性值，如果未设置，再使用全局配置。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("size：该属性配置适用于组件 "),n("code",[e._v("Button")]),n("code",[e._v("List")]),n("code",[e._v("Tabs")]),n("code",[e._v("Input")]),n("code",[e._v("Select")]),n("code",[e._v("Cascader")]),n("code",[e._v("m-switch")]),n("code",[e._v("DatePicker")]),n("code",[e._v("TimePicker")]),n("code",[e._v("Form")]),n("code",[e._v("Table")]),n("code",[e._v("Tag")])]),n("li",[e._v("locale: 语言文件，默认中文。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("完整引入"),n("code",[e._v("monkey-view")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import MonkeyView from 'monkey-view';\nimport locale from 'monkey-view/dist/locale/en-US'\n\nVue.use(MonkeyView, {\n    size: 'small',\n    locale,\n});\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("按需引入"),n("code",[e._v("monkey-view")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue';\nimport { locale, Page } from 'monkey-view';\nimport lang from 'monkey-view/dist/locale/en-US'\n\nlocale(lang);\n\nVue.prototype.$MONKEY = { size: 'small' };\nVue.component('Page', Page);\n")])])}],i=n("9ca4"),s={},c=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e8e13.108c54a0.js.map