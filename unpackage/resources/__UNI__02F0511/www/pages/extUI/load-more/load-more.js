!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=635)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,a,u,l){var c,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(d.components,p)&&(d.components[p]=u[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var _=d.render;d.render=function(t,e){return c.call(e),_(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:d}}n.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={}},13:function(t,e,n){"use strict";n.r(e);var o=n(5),i=n(2);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"00fd241b","5314288f",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(8).default,this.options.style):Object.assign(this.options.style,n(8).default)}).call(a),e.default=a.exports},2:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},330:function(t,e,n){"use strict";n.r(e);var o=n(331),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},331:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=uni.getSystemInfoSync().platform,i={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"\u4e0a\u62c9\u663e\u793a\u66f4\u591a",contentrefresh:"\u6b63\u5728\u52a0\u8f7d...",contentnomore:"\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"}}}},data:function(){return{webviewHide:!1,platform:o}},mounted:function(){var t=this,e=getCurrentPages(),n=e[e.length-1].$getAppWebview();n.addEventListener("hide",(function(){t.webviewHide=!0})),n.addEventListener("show",(function(){t.webviewHide=!1}))},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};e.default=i},332:function(t,e){t.exports={"uni-load-more":{flexDirection:"row",height:"40",alignItems:"center",justifyContent:"center"},"uni-load-more__text":{fontSize:"15"},"uni-load-more__img":{width:"24",height:"24",marginRight:"8"},"uni-load-more__img--nvue":{color:"#666666"},"uni-load-more__img--android":{width:"24",height:"24",transform:"rotate(0deg)"},"uni-load-more__img--ios":{width:"24",height:"24",transform:"rotate(0deg)"}}},333:function(t,e,n){"use strict";var o=n(334),i=n.n(o);e.default=i.a},334:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{status:"more",statusTypes:[{value:"more",text:"\u52a0\u8f7d\u524d",checked:!0},{value:"loading",text:"\u52a0\u8f7d\u4e2d",checked:!1},{value:"noMore",text:"\u6ca1\u6709\u66f4\u591a",checked:!1}],contentText:{contentdown:"\u67e5\u770b\u66f4\u591a",contentrefresh:"\u52a0\u8f7d\u4e2d",contentnomore:"\u6ca1\u6709\u66f4\u591a"}}},methods:{onChange:function(t){this.status=t.detail.value},clickLoadMore:function(t){uni.showToast({icon:"none",title:"\u5f53\u524d\u72b6\u6001\uff1a"+t.detail.status})}}};e.default=o},335:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"6",paddingRight:"15",paddingBottom:"6",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"uni-list":{backgroundColor:"#ffffff"},"uni-list-item":{borderBottomStyle:"solid",borderBottomWidth:"1",borderBottomColor:"#e5e5e5"},"uni-list-item__container":{paddingTop:"12",paddingRight:"15",paddingBottom:"12",paddingLeft:"15",flex:1,position:"relative",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"uni-list-item__content-title":{fontSize:"16"}}},380:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniSection:n(13).default,uniLoadMore:n(636).default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",[n("u-text",{staticClass:["example-info"]},[t._v("\u52a0\u8f7d\u66f4\u591a\u7ec4\u4ef6\u7528\u4e8e\u9875\u9762\u52a0\u8f7d\u66f4\u591a\u6570\u636e\u65f6\uff0c\u9875\u9762\u5e95\u90e8\u663e\u793a\u5185\u5bb9\u7b49\u573a\u666f\u3002")]),n("uni-section",{attrs:{title:"\u57fa\u672c\u7528\u6cd5",type:"line"}}),n("view",{staticClass:["example-body"]},[n("uni-load-more",{attrs:{status:t.status}})],1),n("uni-section",{attrs:{title:"\u4fee\u6539\u9ed8\u8ba4\u6587\u5b57",type:"line"}}),n("view",{staticClass:["example-body"]},[n("uni-load-more",{attrs:{status:t.status,contentText:t.contentText}})],1),n("uni-section",{attrs:{title:"\u6539\u53d8\u989c\u8272",type:"line"}}),n("view",{staticClass:["example-body"]},[n("uni-load-more",{attrs:{color:"#007AFF",status:t.status}})],1),n("uni-section",{attrs:{title:"\u6307\u5b9a\u52a0\u8f7d\u56fe\u6807\u5927\u5c0f",type:"line"}}),n("view",{staticClass:["example-body"]},[n("uni-load-more",{attrs:{iconType:"snow",iconSize:36,status:t.status}})],1),n("uni-section",{attrs:{title:"\u70b9\u51fb\u4e8b\u4ef6",type:"line"}}),n("view",{staticClass:["example-body"]},[n("uni-load-more",{attrs:{status:t.status},on:{clickLoadMore:t.clickLoadMore}})],1),n("uni-section",{attrs:{title:"\u6539\u53d8\u7ec4\u4ef6\u72b6\u6001",type:"line"}}),n("radio-group",{staticClass:["uni-list"],on:{change:t.onChange}},t._l(t.statusTypes,(function(e,o){return n("view",{key:o,staticClass:["uni-list-item"]},[n("view",{staticClass:["uni-list-item__container"]},[n("view",{staticClass:["uni-list-item__content"]},[n("u-text",{staticClass:["uni-list-item__content-title"]},[t._v(t._s(e.text))])]),n("view",{staticClass:["uni-list-item__extra"]},[n("radio",{attrs:{value:e.value,checked:e.checked}})],1)])])})),0)],1)])},r=[]},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},453:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-load-more"],on:{click:t.onClick}},[!t.webviewHide&&"loading"===t.status&&t.showIcon?n("loading-indicator",{staticClass:["uni-load-more__img","uni-load-more__img--nvue"],style:{color:t.color,width:t.iconSize+"px",height:t.iconSize+"px"},attrs:{animating:!0}}):t._e(),n("u-text",{staticClass:["uni-load-more__text"],style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])])},i=[]},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},i=[]},539:function(t,e,n){"use strict";n.r(e);var o=n(332),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},540:function(t,e,n){"use strict";n.r(e);var o=n(335),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},635:function(t,e,n){"use strict";n.r(e);n(6);var o=n(99);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/extUI/load-more/load-more",o.default.el="#root",new Vue(o.default)},636:function(t,e,n){"use strict";n.r(e);var o=n(453),i=n(330);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"62605c56","20cef93d",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(539).default,this.options.style):Object.assign(this.options.style,n(539).default)}).call(a),e.default=a.exports},7:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},8:function(t,e,n){"use strict";n.r(e);var o=n(4),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},99:function(t,e,n){"use strict";var o=n(380),i=n(333),r=n(0);var s=Object(r.a)(i.default,o.b,o.c,!1,null,null,"1e88343c",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(540).default,this.options.style):Object.assign(this.options.style,n(540).default)}).call(s),e.default=s.exports}});