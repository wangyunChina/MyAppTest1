(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"17d0":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageHead:n("8a31").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"movable block"},[n("v-uni-movable-area",[n("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),n("v-uni-view",{staticClass:"movable"},[n("v-uni-view",{staticClass:"info"},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),n("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)})),1)],1)],1)],1)},o=[]},3561:function(t,e,n){"use strict";var i=n("dc96"),a=n.n(i);a.a},"3d93":function(t,e,n){"use strict";n.r(e);var i=n("17d0"),a=n("da78");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3561");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4be97cb5",null,!1,i["a"],r);e["default"]=u.exports},"601b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-page-head"},[n("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},o=[]},"66b0":function(t,e,n){"use strict";n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var n=e[0];if(n){var i=["left","right","top","bottom","width","height"],a=[];for(var o in i){var r=i[o];a.push({key:r,val:n[r]})}t.info=a}}))}}};e.default=i},"66eb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"page-head",props:{title:{type:String,default:""}}};e.default=i},"73e9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".movable[data-v-4be97cb5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.block[data-v-4be97cb5]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-4be97cb5]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-4be97cb5]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-4be97cb5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.b[data-v-4be97cb5]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-4be97cb5]{width:%?100?%;display:inline-block}",""]),t.exports=e},"8a31":function(t,e,n){"use strict";n.r(e);var i=n("601b"),a=n("a2e1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},a2e1:function(t,e,n){"use strict";n.r(e);var i=n("66eb"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},da78:function(t,e,n){"use strict";n.r(e);var i=n("66b0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dc96:function(t,e,n){var i=n("73e9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("71bf6f02",i,!0,{sourceMap:!1,shadowMode:!1})}}]);