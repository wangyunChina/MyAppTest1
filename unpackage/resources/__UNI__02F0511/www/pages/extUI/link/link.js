!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=575)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,u,s,a,l){var c,f="function"==typeof t?t.options:t;if(a){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in a)p.call(a,d)&&!p.call(f.components,d)&&(f.components[d]=a[d])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(f.mixins||(f.mixins=[])).push(l)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(f.functional){f._injectStyles=c;var _=f.render;f.render=function(t,e){return c.call(e),_(t,e)}}else{var y=f.beforeCreate;f.beforeCreate=y?[].concat(y,c):[c]}return{exports:t,options:f}}n.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={}},13:function(t,e,n){"use strict";n.r(e);var o=n(5),i=n(2);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0);var s=Object(u.a)(i.default,o.b,o.c,!1,null,"00fd241b","5314288f",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(8).default,this.options.style):Object.assign(this.options.style,n(8).default)}).call(s),e.default=s.exports},170:function(t,e,n){"use strict";n.r(e);var o=n(171),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"\u5df2\u81ea\u52a8\u590d\u5236\u7f51\u5740\uff0c\u8bf7\u5728\u624b\u673a\u6d4f\u89c8\u5668\u91cc\u7c98\u8d34\u8be5\u7f51\u5740"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},methods:{openURL:function(){plus.runtime.openURL(this.href)}}};e.default=o},172:function(t,e){t.exports={"uni-link--withline":{textDecoration:"underline"}}},173:function(t,e,n){"use strict";var o=n(174),i=n.n(o);e.default=i.a},174:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={components:{},data:function(){return{}}}},175:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"row",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff",justifyContent:"flex-start"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"}}},2:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},377:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniSection:n(13).default,uniLink:n(576).default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"]},[e("u-text",{staticClass:["example-info"]},[this._v("\u8d85\u94fe\u63a5\u7ec4\u4ef6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u5185\u590d\u5236url\uff0c\u5728app\u5185\u6253\u5f00\u5916\u90e8\u6d4f\u89c8\u5668\uff0c\u5728h5\u7aef\u6253\u5f00\u65b0\u7f51\u9875\u3002")]),e("uni-section",{attrs:{title:"\u57fa\u672c\u793a\u4f8b",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/"}})],1),e("uni-section",{attrs:{title:"\u81ea\u5b9a\u4e49\u6837\u5f0f",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false",color:"#0000FF"}})],1)],1)])},r=[]},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},455:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("u-text",{staticClass:["uni-link"],class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:t.openURL}},[t._v(t._s(t.text))])},i=[]},487:function(t,e,n){"use strict";n.r(e);var o=n(172),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},488:function(t,e,n){"use strict";n.r(e);var o=n(175),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},i=[]},575:function(t,e,n){"use strict";n.r(e);n(6);var o=n(74);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/extUI/link/link",o.default.el="#root",new Vue(o.default)},576:function(t,e,n){"use strict";n.r(e);var o=n(455),i=n(170);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u=n(0);var s=Object(u.a)(i.default,o.b,o.c,!1,null,"387d883d","408fb652",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(487).default,this.options.style):Object.assign(this.options.style,n(487).default)}).call(s),e.default=s.exports},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},74:function(t,e,n){"use strict";var o=n(377),i=n(173),r=n(0);var u=Object(r.a)(i.default,o.b,o.c,!1,null,null,"745495bc",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(488).default,this.options.style):Object.assign(this.options.style,n(488).default)}).call(u),e.default=u.exports},8:function(t,e,n){"use strict";n.r(e);var o=n(4),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a}});