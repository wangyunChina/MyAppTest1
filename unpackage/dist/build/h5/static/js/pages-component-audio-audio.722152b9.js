(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-audio-audio"],{"601b":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-page-head"},[e("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},r=[]},"66eb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"page-head",props:{title:{type:String,default:""}}};n.default=u},7463:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{current:{poster:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg",name:"致爱丽丝",author:"暂无",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3"},audioAction:{method:"pause"}}}};n.default=u},"8a31":function(t,n,e){"use strict";e.r(n);var u=e("601b"),a=e("a2e1");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);var i,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=o.exports},9412:function(t,n,e){"use strict";e.r(n);var u=e("bf39"),a=e("a0b4");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);var i,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=o.exports},a0b4:function(t,n,e){"use strict";e.r(n);var u=e("7463"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},a2e1:function(t,n,e){"use strict";e.r(n);var u=e("66eb"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},bf39:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var u={pageHead:e("8a31").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"audio"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-center"},[e("v-uni-audio",{staticStyle:{"text-align":"left"},attrs:{src:t.current.src,poster:t.current.poster,name:t.current.name,author:t.current.author,action:t.audioAction,controls:!0}}),e("v-uni-view",{},[t._v("audio组件不再维护，建议使用能力更强的uni.createInnerAudioContext()")])],1)],1)],1)},r=[]}}]);