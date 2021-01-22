(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{641:function(t,a,r){"use strict";r.r(a);var e=r(6),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("[WIP]")]),t._v(" "),r("p",[t._v("名字就叫 finecraft 怎么样")]),t._v(" "),r("h2",{attrs:{id:"前置阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前置阅读"}},[t._v("#")]),t._v(" 前置阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/taowen/awesome-lowcode?from=from_parent_mindnote",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-lowcode"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6908502083075325959?from=from_parent_mindnote",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化拖拽组件库一些技术要点原理分析"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://h5.luban-h5.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("鲁班 H5"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/kiming209/quark-h5",target:"_blank",rel:"noopener noreferrer"}},[t._v("quark h5"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://vuegg.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuegg"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jdittrich/quickMockup",target:"_blank",rel:"noopener noreferrer"}},[t._v("quickMockup"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),r("p",[t._v("业务上：“职权” 下放，降低无开发团队进入门槛，提升效率和体验")]),t._v(" "),r("p",[t._v("打通上下游生产资料壁垒")]),t._v(" "),r("p",[t._v("低代码兼具灵活与效率，但也需要平衡好代码开发与可视化开发间的关系")]),t._v(" "),r("p",[t._v("但是复杂度是固定的，它可以转移但不可能凭空消失，既然可视化开发不能要求使用者拥有开发者一样的技能素质，其背后的工作就要仔细评估")]),t._v(" "),r("h3",{attrs:{id:"怎么做"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么做"}},[t._v("#")]),t._v(" 怎么做")]),t._v(" "),r("p",[t._v("代码用于生产零部件，可视化用于组装。形成上下游分工的产业链式结构。")]),t._v(" "),r("h3",{attrs:{id:"分析我们的需求-功能分块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析我们的需求-功能分块"}},[t._v("#")]),t._v(" 分析我们的需求 & 功能分块")]),t._v(" "),r("ul",[r("li",[t._v("页面搭建\n"),r("ul",[r("li",[t._v("物料库\n"),r("ul",[r("li",[t._v("基础通用 UI 组件")]),t._v(" "),r("li",[t._v("兼容一个市面上已有的移动端组件库")]),t._v(" "),r("li",[t._v("定制化但较为通用的 UI 模块")]),t._v(" "),r("li",[r("del",[t._v("智能组件？（利用我们的用户数据）")])])])]),t._v(" "),r("li",[r("del",[t._v("是否需要后端功能？")]),t._v(" "),r("ul",[r("li",[r("del",[t._v("serverless？")])]),t._v(" "),r("li",[r("del",[t._v("开放 API")])])])]),t._v(" "),r("li",[t._v("操作形式\n"),r("ul",[r("li",[t._v("在画布上拖拽与组合\n"),r("ul",[r("li",[t._v("细节点：缩放，拖拽，对齐，测距，吸附，分布等等")])])]),t._v(" "),r("li",[t._v("组件间的状态的共享")])])])])]),t._v(" "),r("li",[t._v("代码生成、下载")]),t._v(" "),r("li",[r("del",[t._v("自动化构建、部署")])])]),t._v(" "),r("div",{staticClass:"mermaid"},[t._v("graph LR;\n　　id1[创建项目]--\x3eid2[新建页面];\n　　id2--\x3eid3[开始搭建];\n　　id4[获取所有组件]--\x3eid3;\n　　id3--\x3eid6[选择和配置组件];\n　　id8[代码拼接压缩]--\x3eid9[下载代码];\n　　id6--\x3eid8;\n")]),r("p",[t._v("决定在开源的 H5 编辑器、vuegg 的基础上改造")]),t._v(" "),r("h2",{attrs:{id:"代码分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码分析"}},[t._v("#")]),t._v(" 代码分析")]),t._v(" "),r("h3",{attrs:{id:"前端-组件列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端-组件列表"}},[t._v("#")]),t._v(" 前端 - 组件列表")]),t._v(" "),r("h3",{attrs:{id:"前端-页面列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端-页面列表"}},[t._v("#")]),t._v(" 前端 - 页面列表")]),t._v(" "),r("h3",{attrs:{id:"前端-编辑器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端-编辑器"}},[t._v("#")]),t._v(" 前端 - 编辑器")]),t._v(" "),r("h4",{attrs:{id:"从组件列表到拖拽到画布"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从组件列表到拖拽到画布"}},[t._v("#")]),t._v(" 从组件列表到拖拽到画布")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 拖放 API"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("相对定位和绝对定位")]),t._v(" "),r("h4",{attrs:{id:"组件的拖放"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的拖放"}},[t._v("#")]),t._v(" 组件的拖放")]),t._v(" "),r("p",[t._v("单纯用 drag API 不够用了，而且也不合适，拖放的 shadow 样式和 html 元素不可控是重要原因之一")]),t._v(" "),r("p",[t._v("所以还是用 mousedown、mousemove、mouseup 来模拟这个过程")]),t._v(" "),r("h4",{attrs:{id:"图层层级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图层层级"}},[t._v("#")]),t._v(" 图层层级")]),t._v(" "),r("p",[t._v("如果只考虑简单情况，那么每个组件都是单独的一个图层")]),t._v(" "),r("p",[t._v("但是这也并不是理想情况，因为一些组件间天然有包含关系")]),t._v(" "),r("p",[t._v("利用数组的序列关系处理图层对象，图层由低到高，例如：置顶操作就是把图层对象放到数组队列最后一个")]),t._v(" "),r("h4",{attrs:{id:"画布缩放"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#画布缩放"}},[t._v("#")]),t._v(" 画布缩放")]),t._v(" "),r("p",[t._v("css 样式  "),r("code",[t._v("transform: scale(n)")])]),t._v(" "),r("h4",{attrs:{id:"组件缩放、旋转"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件缩放、旋转"}},[t._v("#")]),t._v(" 组件缩放、旋转")]),t._v(" "),r("p",[t._v("一个包裹的 "),r("code",[t._v("Shape")]),t._v("  组件")]),t._v(" "),r("p",[t._v("在上下左右和四个顶点处分别有拖拽操作的圆点")]),t._v(" "),r("h4",{attrs:{id:"撤销、重做"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#撤销、重做"}},[t._v("#")]),t._v(" 撤销、重做")]),t._v(" "),r("p",[t._v("记录几次操作得到的组件树结果就可以了，回退就是切换指向这个数组的 index")]),t._v(" "),r("p",[t._v("正常操作下，index 随着 history 数组而增加，回溯时改变 index 就好了")]),t._v(" "),r("p",[t._v("但要注意数组的拷贝，一定是深拷贝")]),t._v(" "),r("h4",{attrs:{id:"标尺、标线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标尺、标线"}},[t._v("#")]),t._v(" 标尺、标线")]),t._v(" "),r("p",[t._v("鼠标移动事件")]),t._v(" "),r("h4",{attrs:{id:"吸附"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#吸附"}},[t._v("#")]),t._v(" 吸附")]),t._v(" "),r("p",[t._v("计算所有水平、垂直的位置，遍历取最相近的")]),t._v(" "),r("p",[t._v("要注意移动 /resize 的方向和吸附标线的关系")]),t._v(" "),r("h4",{attrs:{id:"组件的事件绑定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的事件绑定"}},[t._v("#")]),t._v(" 组件的事件绑定")]),t._v(" "),r("h4",{attrs:{id:"组件的动画绑定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的动画绑定"}},[t._v("#")]),t._v(" 组件的动画绑定")]),t._v(" "),r("p",[t._v("通过一系列操作，最终前端生成的是 Json 格式的代码树")]),t._v(" "),r("h3",{attrs:{id:"后端-代码拼接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后端-代码拼接"}},[t._v("#")]),t._v(" 后端 - 代码拼接")]),t._v(" "),r("p",[t._v("Json2code")]),t._v(" "),r("h3",{attrs:{id:"后端-项目代码生成、压缩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后端-项目代码生成、压缩"}},[t._v("#")]),t._v(" 后端 - 项目代码生成、压缩")]),t._v(" "),r("p",[t._v("本质上就是字符串模板的拼接")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("技术上无特殊难点，真正的难点在于能够提供的组件物料的丰富程度")])])}),[],!1,null,null,null);a.default=_.exports}}]);