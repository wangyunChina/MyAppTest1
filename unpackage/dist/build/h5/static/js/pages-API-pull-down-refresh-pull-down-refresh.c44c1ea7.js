(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-pull-down-refresh-pull-down-refresh"],{"2e36":function(t,a,e){var n=e("9eec");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("63823457",n,!0,{sourceMap:!1,shadowMode:!1})},3740:function(t,a,e){"use strict";e.r(a);var n=e("98a2"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"601b":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-page-head"},[e("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},o=[]},"66eb":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};a.default=n},7630:function(t,a,e){"use strict";var n=e("2e36"),i=e.n(n);i.a},"7e73":function(t,a,e){"use strict";e.r(a);var n=e("a404"),i=e("3740");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("7630");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"6485c3b7",null,!1,n["a"],r);a["default"]=s.exports},"8a31":function(t,a,e){"use strict";e.r(a);var n=e("601b"),i=e("a2e1");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);var r,u=e("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);a["default"]=s.exports},"98a2":function(t,a,e){"use strict";e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout((function(){t.setListData()}),300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var t=this;setTimeout((function(){t.max=0,t.data=[];var a=[];t.max+=10;for(var e=t.max-9;e<t.max+1;e++)a.push(e);t.data=t.data.concat(a),uni.stopPullDownRefresh()}),300)},setListData:function(){var t=[];this.max+=10;for(var a=this.max-9;a<this.max+1;a++)t.push(a);this.data=this.data.concat(t)}}};a.default=n},"9eec":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".text[data-v-6485c3b7]{margin:%?16?% 0;width:100%;background-color:#fff;height:%?120?%;line-height:%?120?%;text-align:center;color:#555;border-radius:%?8?%}",""]),t.exports=a},a2e1:function(t,a,e){"use strict";e.r(a);var n=e("66eb"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},a404:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={pageHead:e("8a31").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t._l(t.data,(function(a,n){return e("v-uni-view",{key:n,staticClass:"text"},[t._v("list - "+t._s(a))])})),t.showLoadMore?e("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)],1)},o=[]}}]);