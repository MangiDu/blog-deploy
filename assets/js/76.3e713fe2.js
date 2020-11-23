(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{597:function(t,v,_){"use strict";_.r(v);var e=_(6),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"新特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新特性"}},[t._v("#")]),t._v(" 新特性")]),t._v(" "),_("h3",{attrs:{id:"组合式api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组合式api"}},[t._v("#")]),t._v(" 组合式 API")]),t._v(" "),_("p",[t._v("考虑在极大型项目中，代码的共享与重用是非常重要的，以往的组件形式可能是不够好的。")]),t._v(" "),_("p",[t._v("使用配置式的方式（ "),_("code",[t._v("options")]),t._v(" :  "),_("code",[t._v("data")]),t._v(" ,  "),_("code",[t._v("computed")]),t._v(" ,  "),_("code",[t._v("methods")]),t._v(" ,  "),_("code",[t._v("watch")]),t._v(" ）组织组件逻辑在大多数情况下是够用的。然而当组件越来越大越来越复杂时，四处分散的逻辑代码不仅导致阅读上的困难，这种逻辑上的割裂也使得维护变得艰难。因为你为了寻找相关的逻辑就不得不在代码块间跳来跳去。")]),t._v(" "),_("p",[t._v("组合式 API 就提供了能让我们把相关逻辑搭配在一起的途径。")]),t._v(" "),_("h4",{attrs:{id:"组件选项：setup"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件选项：setup"}},[t._v("#")]),t._v(" 组件选项： "),_("code",[t._v("setup")])]),t._v(" "),_("p",[_("code",[t._v("setup")]),t._v("  在组件 created 之前被执行：一旦  "),_("code",[t._v("props")]),t._v("  可用，它就作为组件 API 的入口开始提供服务了。从 "),_("code",[t._v("setup")]),t._v("  中被返回的所有配置将被暴露给组件的其他部分。")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("由于 "),_("code",[t._v("setup")]),t._v("  执行时，组件实例还未被创建完全，所以在 "),_("code",[t._v("setup")]),t._v("  中无法使用 "),_("code",[t._v("this")]),t._v(" ，也就是说，在这个时候，除了 "),_("code",[t._v("props")]),t._v("  你无法取得任何其他在组件中声明的属性。")])]),t._v(" "),_("h4",{attrs:{id:"使用ref添加响应式的变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用ref添加响应式的变量"}},[t._v("#")]),t._v(" 使用 "),_("code",[t._v("ref")]),t._v("  添加响应式的变量")]),t._v(" "),_("p",[_("code",[t._v("ref")]),t._v("  返回一个对外暴露 "),_("code",[t._v("value")]),t._v("  属性的对象。")]),t._v(" "),_("h4",{attrs:{id:"setup内的生命周期钩子注册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#setup内的生命周期钩子注册"}},[t._v("#")]),t._v(" "),_("code",[t._v("setup")]),t._v("  内的生命周期钩子注册")]),t._v(" "),_("p",[t._v("生命周期钩子前缀： "),_("code",[t._v("on")]),t._v(" ，举例  "),_("code",[t._v("mounted")]),t._v("  ->  "),_("code",[t._v("onMounted")]),t._v(" 。")]),t._v(" "),_("h4",{attrs:{id:"使用watch对变化进行响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用watch对变化进行响应"}},[t._v("#")]),t._v(" 使用 "),_("code",[t._v("watch")]),t._v("  对变化进行响应")]),t._v(" "),_("p",[t._v("第一个参数是 "),_("code",[t._v("ref")]),t._v("  包裹的对象，第二个参数是 handler。")]),t._v(" "),_("p",[t._v("如果是 "),_("code",[t._v("props")]),t._v(" ，需要使用 "),_("code",[t._v("toRefs")]),t._v("  方法转换一下。")])])}),[],!1,null,null,null);v.default=s.exports}}]);