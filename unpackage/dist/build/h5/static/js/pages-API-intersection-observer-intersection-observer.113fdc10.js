(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-intersection-observer-intersection-observer"],{"16b5":function(t,e,a){"use strict";var n=a("c824"),i=a.n(n);i.a},4015:function(t,e,a){"use strict";a.r(e);var n=a("8df7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"412a":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".scroll-view[data-v-4f08a7a7]{height:%?400?%;background:#fff;border:1px solid #ccc;box-sizing:border-box}.scroll-area[data-v-4f08a7a7]{height:%?1300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notice[data-v-4f08a7a7]{margin-top:%?150?%;margin:%?150?% 0 %?400?% 0}.ball[data-v-4f08a7a7]{width:%?200?%;height:%?200?%;background:#4cd964;border-radius:50%}",""]),t.exports=e},"557a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={pageHead:a("8a31").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v(t._s(t.appear?"小球出现":"小球消失"))]),a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"scroll-area"},[a("v-uni-text",{staticClass:"notice"},[t._v("向下滚动让小球出现")]),a("v-uni-view",{staticClass:"ball"})],1)],1)],1)],1)},r=[]},"601b":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-page-head"},[a("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},r=[]},"66eb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};e.default=n},"8a31":function(t,e,a){"use strict";a.r(e);var n=a("601b"),i=a("a2e1");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var c,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=u.exports},"8df7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,i={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var t=this;n=uni.createIntersectionObserver(this),n.relativeTo(".scroll-view").observe(".ball",(function(e){e.intersectionRatio>0&&!t.appear?t.appear=!0:!e.intersectionRatio>0&&t.appear&&(t.appear=!1)}))},onUnload:function(){n&&n.disconnect()}};e.default=i},a2e1:function(t,e,a){"use strict";a.r(e);var n=a("66eb"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c824:function(t,e,a){var n=a("412a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("61bcbdc2",n,!0,{sourceMap:!1,shadowMode:!1})},d26a:function(t,e,a){"use strict";a.r(e);var n=a("557a"),i=a("4015");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("16b5");var c,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4f08a7a7",null,!1,n["a"],c);e["default"]=u.exports}}]);