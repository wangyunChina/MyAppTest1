(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-rich-text-rich-text"],{"1c7c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"rich-text",nodes:[{name:"div",attrs:{class:"div-class",style:"line-height: 60px; color: red; text-align:center;"},children:[{type:"text",text:"Hello&nbsp;uni-app!"}]}],strings:'<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>'}}};n.default=i},"601b":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-page-head"},[e("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},u=[]},"66eb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"page-head",props:{title:{type:String,default:""}}};n.default=i},"8a31":function(t,n,e){"use strict";e.r(n);var i=e("601b"),a=e("a2e1");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=s.exports},a2e1:function(t,n,e){"use strict";e.r(n);var i=e("66eb"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},b052:function(t,n,e){"use strict";e.r(n);var i=e("cc0f"),a=e("dab7");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=s.exports},cc0f:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={pageHead:e("8a31").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("数组类型"),e("v-uni-text",[t._v("\\nnodes属性为Array")])],1),e("v-uni-view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFF",padding:"20rpx"}},[e("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("字符串类型"),e("v-uni-text",[t._v("\\nnodes属性为String")])],1),e("v-uni-view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFF",padding:"20rpx"}},[e("v-uni-rich-text",{attrs:{nodes:t.strings}})],1)],1)],1)},u=[]},dab7:function(t,n,e){"use strict";e.r(n);var i=e("1c7c"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a}}]);