!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=625)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,a,u,c){var p,l="function"==typeof t?t.options:t;if(u){l.components||(l.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(l.components,d)&&(l.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=p):i&&(p=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),p)if(l.functional){l._injectStyles=p;var g=l.render;l.render=function(t,e){return p.call(e),g(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,p):[p]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={}},108:function(t,e,n){"use strict";n.r(e);var o=n(49),i=n(39);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"86237de4","16317192",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(53).default,this.options.style):Object.assign(this.options.style,n(53).default)}).call(a),e.default=a.exports},13:function(t,e,n){"use strict";n.r(e);var o=n(5),i=n(2);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"00fd241b","5314288f",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(8).default,this.options.style):Object.assign(this.options.style,n(8).default)}).call(a),e.default=a.exports},16:function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"==typeof __channelId__&&__channelId__}function r(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)},e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}},2:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},306:function(t,e,n){"use strict";n.r(e);var o=n(307),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},307:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(108)),i=r(n(627));function r(t){return t&&t.__esModule?t:{default:t}}var s={name:"UniPopup",components:{uniTransition:o.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[i.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=s},308:function(t,e){t.exports={"uni-popup":{position:"fixed"},"uni-popup__mask":{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.4)",opacity:0},"@TRANSITION":{"mask-ani":{property:"opacity",duration:200},"content-ani":{property:"transform,opacity",duration:200}},"mask-ani":{transitionProperty:"opacity",transitionDuration:200},"uni-top-mask":{opacity:1},"uni-bottom-mask":{opacity:1},"uni-center-mask":{opacity:1},"uni-popup__wrapper":{position:"absolute"},top:{top:0},bottom:{bottom:0},"uni-popup__wrapper-box":{position:"relative"},"content-ani":{transitionProperty:"transform,opacity",transitionDuration:200},"uni-top-content":{transform:"translateY(0)"},"uni-bottom-content":{transform:"translateY(0)"},"uni-center-content":{transform:"scale(1)",opacity:1}}},309:function(t,e,n){"use strict";n.r(e);var o=n(310),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},310:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=o},311:function(t,e){t.exports={"uni-popup-message":{flexDirection:"row",backgroundColor:"#e1f3d8",paddingTop:"10",paddingRight:"15",paddingBottom:"10",paddingLeft:"15",borderColor:"#eeeeee",borderStyle:"solid",borderWidth:"1"},"uni-popup-message-text":{fontSize:"14",paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},"uni-popup__success":{backgroundColor:"#e1f3d8"},"uni-popup__success-text":{color:"#67C23A"},"uni-popup__warn":{backgroundColor:"#faecd8"},"uni-popup__warn-text":{color:"#E6A23C"},"uni-popup__error":{backgroundColor:"#fde2e2"},"uni-popup__error-text":{color:"#F56C6C"},"uni-popup__info":{backgroundColor:"#F2F6FC"},"uni-popup__info-text":{color:"#909399"}}},312:function(t,e,n){"use strict";n.r(e);var o=n(313),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"uniPopupDialog",props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:"\u8bf7\u8f93\u5165\u5185\u5bb9"},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:"\u63d0\u793a"},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},inject:["popup"],watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.mkclick=!1,"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){var t=this;this.$emit("confirm",(function(){t.popup.close(),"input"===t.mode&&(t.val=t.value)}),"input"===this.mode?this.val:"")},close:function(){var t=this;this.beforeClose?this.$emit("close",(function(){t.popup.close()})):this.popup.close()}}};e.default=o},314:function(t,e){t.exports={"uni-popup-dialog":{width:"300",borderRadius:"15",backgroundColor:"#ffffff"},"uni-dialog-title":{flexDirection:"row",justifyContent:"center",paddingTop:"15",paddingBottom:"5"},"uni-dialog-title-text":{fontSize:"16",fontWeight:"500"},"uni-dialog-content":{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingTop:"5",paddingRight:"15",paddingBottom:"15",paddingLeft:"15"},"uni-dialog-content-text":{fontSize:"14",color:"#6e6e6e"},"uni-dialog-button-group":{flexDirection:"row",borderTopColor:"#f5f5f5",borderTopStyle:"solid",borderTopWidth:"1"},"uni-dialog-button":{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",height:"45"},"uni-border-left":{borderLeftColor:"#f0f0f0",borderLeftStyle:"solid",borderLeftWidth:"1"},"uni-dialog-button-text":{fontSize:"14"},"uni-button-color":{color:"#007aff"},"uni-dialog-input":{flex:1,fontSize:"14"},"uni-popup__success":{color:"#4cd964"},"uni-popup__warn":{color:"#f0ad4e"},"uni-popup__error":{color:"#dd524d"},"uni-popup__info":{color:"#909399"}}},315:function(t,e,n){"use strict";n.r(e);var o=n(316),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniPopupShare",props:{title:{type:String,default:"\u5206\u4eab\u5230"}},inject:["popup"],data:function(){return{bottomData:[{text:"\u5fae\u4fe1",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png",name:"wx"},{text:"\u652f\u4ed8\u5b9d",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png",name:"wx"},{text:"QQ",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png",name:"qq"},{text:"\u65b0\u6d6a",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png",name:"sina"},{text:"\u767e\u5ea6",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png",name:"copy"},{text:"\u5176\u4ed6",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png",name:"more"}]}},created:function(){},methods:{select:function(t,e){var n=this;this.$emit("select",{item:t,index:e},(function(){n.popup.close()}))},close:function(){this.popup.close()}}};e.default=o},317:function(t,e){t.exports={"uni-popup-share":{backgroundColor:"#ffffff"},"uni-share-title":{flexDirection:"row",alignItems:"center",justifyContent:"center",height:"40"},"uni-share-title-text":{fontSize:"14",color:"#666666"},"uni-share-content":{flexDirection:"row",justifyContent:"center",paddingTop:"10"},"uni-share-content-box":{flexDirection:"row",flexWrap:"wrap",width:"360"},"uni-share-content-item":{width:"90",flexDirection:"column",justifyContent:"center",paddingTop:"10",paddingRight:0,paddingBottom:"10",paddingLeft:0,alignItems:"center","backgroundColor:active":"#f5f5f5"},"uni-share-image":{width:"30",height:"30"},"uni-share-text":{marginTop:"10",fontSize:"14",color:"#3B4144"},"uni-share-button-box":{flexDirection:"row",paddingTop:"10",paddingRight:"15",paddingBottom:"10",paddingLeft:"15"},"uni-share-button":{flex:1,borderRadius:"50",color:"#666666",fontSize:"16","borderRadius::after":"50"}}},318:function(t,e,n){"use strict";var o=n(319),i=n.n(o);e.default=i.a},319:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{type:"top",msgType:"success",message:"\u8fd9\u662f\u4e00\u6761\u6210\u529f\u6d88\u606f\u63d0\u793a",value:"\u9ed8\u8ba4\u8f93\u5165\u7684\u5185\u5bb9"}},onReady:function(){var t=this;setTimeout((function(){t.msgType="success",t.$refs.popupDialog.open()}),500)},methods:{toggle:function(t){this.type=t,this.$refs.popup.open()},toggleMessage:function(t){switch(this.msgType=t,t){case"success":this.message="\u8fd9\u662f\u4e00\u6761\u6210\u529f\u6d88\u606f\u63d0\u793a";break;case"warn":this.message="\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u6d88\u606f\u63d0\u793a";break;case"info":this.message="\u8fd9\u662f\u4e00\u6761\u6d88\u606f\u63d0\u793a";break;case"error":this.message="\u8fd9\u662f\u4e00\u6761\u9519\u8bef\u6d88\u606f\u63d0\u793a"}this.$refs.popupDialog.open()},confirmDialog:function(){this.$refs.dialogInput.open()},confirmShare:function(){this.$refs.popupShare.open()},select:function(t,e){uni.showToast({title:"\u60a8\u9009\u62e9\u4e86\u7b2c".concat(t.index+1,"\u9879\uff1a").concat(t.item.text),icon:"none"}),e()},dialogConfirm:function(e){this.$refs.popupMessage.open(),t("log","\u70b9\u51fb\u786e\u8ba4"," at pages/extUI/popup/popup.nvue:134"),e()},dialogInputConfirm:function(e,n){uni.showLoading({title:"3\u79d2\u540e\u4f1a\u5173\u95ed"}),t("log",n," at pages/extUI/popup/popup.nvue:145"),this.value=n,setTimeout((function(){uni.hideLoading(),e()}),3e3)},dialogClose:function(t){this.msgType="info",this.message="\u70b9\u51fb\u4e86\u5bf9\u8bdd\u6846\u7684\u53d6\u6d88\u6309\u94ae",this.$refs.popupMessage.open(),t()},change:function(e){t("log","popup "+e.type+" \u72b6\u6001",e.show," at pages/extUI/popup/popup.nvue:168")}},onBackPress:function(){}};e.default=n}).call(this,n(16).default)},320:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"5",paddingRight:"15",paddingBottom:"5",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"popup-content":{backgroundColor:"#ffffff",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15"},button:{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1,height:"40",marginTop:0,marginRight:"15",marginBottom:0,marginLeft:"15"},"button-text":{color:"#ffffff",fontSize:"14"},message:{flexDirection:"row",justifyContent:"center",paddingTop:"15",paddingRight:0,paddingBottom:"15",paddingLeft:0},dialog:{paddingTop:"15",paddingRight:0,paddingBottom:"15",paddingLeft:0},"dialog-box":{marginLeft:"15",marginBottom:"15"},"dialog-text":{fontSize:"14",color:"#666666"},share:{paddingTop:"15",paddingRight:0,paddingBottom:"15",paddingLeft:0},popup__success:{color:"#ffffff",backgroundColor:"#4cd964"},popup__warn:{color:"#ffffff",backgroundColor:"#f0ad4e"},popup__error:{color:"#ffffff",backgroundColor:"#dd524d"},popup__info:{color:"#ffffff",backgroundColor:"#909399"}}},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},39:function(t,e,n){"use strict";n.r(e);var o=n(40),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},394:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniSection:n(13).default,uniPopup:n(626).default,uniPopupMessage:n(629).default,uniPopupDialog:n(630).default,uniPopupShare:n(631).default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",[n("u-text",{staticClass:["example-info"]},[t._v("\u5f39\u51fa\u5c42\u7ec4\u4ef6\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a\u8986\u76d6\u5230\u9875\u9762\u4e0a\u7684\u5185\u5bb9\uff0c\u4f7f\u7528\u573a\u666f\u5982\uff1a\u5e95\u90e8\u5f39\u51fa\u5206\u4eab\u5f39\u7a97\u3001\u9875\u9762\u63d2\u5c4f\u5e7f\u544a\u7b49\u3002")]),n("uni-section",{attrs:{title:"\u57fa\u672c\u793a\u4f8b",type:"line"}}),n("view",{staticClass:["example-body","message"]},[n("button",{staticClass:["button"],attrs:{type:"primary"},on:{click:function(e){t.toggle("top")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u9876\u90e8\u5f39\u51fa")])]),n("button",{staticClass:["button"],attrs:{type:"primary"},on:{click:function(e){t.toggle("bottom")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u5e95\u90e8\u5f39\u51fa")])]),n("button",{staticClass:["button"],attrs:{type:"primary"},on:{click:function(e){t.toggle("center")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u5c45\u4e2d\u5f39\u51fa")])])],1),n("uni-section",{attrs:{title:"\u81ea\u5b9a\u4e49\u5f39\u51fa\u5c42(dialog + message) \u793a\u4f8b",type:"line"}}),n("view",{staticClass:["example-body","message"]},[n("button",{staticClass:["button","popup__success"],on:{click:function(e){t.toggleMessage("success")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u6210\u529f")])]),n("button",{staticClass:["button","popup__error"],on:{click:function(e){t.toggleMessage("error")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u9519\u8bef")])]),n("button",{staticClass:["button","popup__warn"],on:{click:function(e){t.toggleMessage("warn")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u8b66\u544a")])]),n("button",{staticClass:["button","popup__info"],on:{click:function(e){t.toggleMessage("info")}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u4fe1\u606f")])])],1),n("uni-section",{attrs:{title:"\u63d0\u4ea4\u4fe1\u606f (input + \u5ef6\u8fdf\u5173\u95ed)",type:"line"}}),n("view",{staticClass:["example-body","dialog"]},[n("view",{staticClass:["dialog-box"]},[n("u-text",{staticClass:["dialog-text"]},[t._v("\u8f93\u5165\u5185\u5bb9\uff1a"+t._s(t.value))])]),n("button",{staticClass:["button"],attrs:{type:"primary"},on:{click:t.confirmDialog}},[n("u-text",{staticClass:["button-text"]},[t._v("\u8f93\u5165\u5bf9\u8bdd\u6846")])])],1),n("uni-section",{attrs:{title:"\u5e95\u90e8\u5206\u4eab\u793a\u4f8b",type:"line"}}),n("view",{staticClass:["example-body","share"]},[n("button",{staticClass:["button"],attrs:{type:"primary"},on:{click:t.confirmShare}},[n("u-text",{staticClass:["button-text"]},[t._v("\u5206\u4eab\u6a21\u7248\u793a\u4f8b")])])],1),n("uni-popup",{ref:"popup",attrs:{id:"popup",type:t.type,animation:!1},on:{change:t.change}},[n("view",{staticClass:["popup-content"]},[n("u-text",[t._v("popup \u5185\u5bb9\uff0c\u6b64\u793a\u4f8b\u6ca1\u6709\u52a8\u753b\u6548\u679c")])])]),n("uni-popup",{ref:"popupMessage",attrs:{id:"popupMessage",type:"message"},on:{change:t.change}},[n("uni-popup-message",{attrs:{type:t.msgType,message:t.message,duration:2e3}})],1),n("uni-popup",{ref:"popupDialog",attrs:{id:"popupDialog",type:"dialog"},on:{change:t.change}},[n("uni-popup-dialog",{attrs:{type:t.msgType,title:"\u901a\u77e5",content:"\u6b22\u8fce\u4f7f\u7528 uni-popup!",beforeClose:!0},on:{confirm:t.dialogConfirm,close:t.dialogClose}})],1),n("uni-popup",{ref:"dialogInput",attrs:{id:"dialogInput",type:"dialog"},on:{change:t.change}},[n("uni-popup-dialog",{attrs:{mode:"input",title:"\u8f93\u5165\u5185\u5bb9",value:"\u5bf9\u8bdd\u6846\u9884\u7f6e\u63d0\u793a\u5185\u5bb9!",placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9"},on:{confirm:t.dialogInputConfirm}})],1),n("uni-popup",{ref:"popupShare",attrs:{id:"popupShare",type:"share"},on:{change:t.change}},[n("uni-popup-share",{attrs:{title:"\u5206\u4eab\u5230"},on:{select:t.select}})],1)],1)])},r=[]},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flexDirection:"column",flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"14",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"12",color:"#999999"}}},40:function(t,e,n){"use strict";(function(t){function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t("animation"),s={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=o(o({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){e+=this.toLine(n)+":"+t[n]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,n=this.getTranfrom(t);this.$refs.ani&&r.transition(this.$refs.ani.ref,{styles:n,duration:this.duration,timingFunction:"ease",needLayout:!1,delay:0},(function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}))},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ")}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!=typeof e){var n="";return e.forEach((function(e){n+=e+"-"+t+","})),n.substr(0,n.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=s}).call(this,n(38).default)},41:function(t,e){t.exports={"@TRANSITION":{"uni-transition":{timingFunction:"ease",duration:300,property:"transform,opacity"}},"uni-transition":{transitionTimingFunction:"ease",transitionDuration:300,transitionProperty:"transform,opacity"},"fade-in":{opacity:0},"fade-active":{opacity:1},"slide-top-in":{transform:"translateY(-100%)"},"slide-top-active":{transform:"translateY(0)"},"slide-right-in":{transform:"translateX(100%)"},"slide-right-active":{transform:"translateX(0)"},"slide-bottom-in":{transform:"translateY(100%)"},"slide-bottom-active":{transform:"translateY(0)"},"slide-left-in":{transform:"translateX(-100%)"},"slide-left-active":{transform:"translateX(0)",opacity:1},"zoom-in-in":{transform:"scale(0.8)"},"zoom-out-active":{transform:"scale(1)"},"zoom-out-in":{transform:"scale(1.2)"}}},426:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-popup-message"],class:"uni-popup__"+[this.type]},[e("u-text",{staticClass:["uni-popup-message-text"],class:"uni-popup__"+[this.type]+"-text"},[this._v(this._s(this.message))])])},i=[]},445:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniTransition:n(108).default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("view",{staticClass:["uni-popup"],class:[t.popupstyle],on:{touchmove:t.clear}},[t.maskShow?n("uni-transition",{staticClass:["uni-mask--hook"],attrs:{modeClass:["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:t.onTap}}):t._e(),n("uni-transition",{attrs:{modeClass:t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:t.onTap}},[n("view",{staticClass:["uni-popup__wrapper-box"],on:{click:t.clear}},[t._t("default")],2)])],1):t._e()},r=[]},447:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-popup-dialog"]},[n("view",{staticClass:["uni-dialog-title"]},[n("u-text",{staticClass:["uni-dialog-title-text"],class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.title))])]),n("view",{staticClass:["uni-dialog-content"]},["base"===t.mode?n("u-text",{staticClass:["uni-dialog-content-text"]},[t._v(t._s(t.content))]):n("u-input",{staticClass:["uni-dialog-input"],attrs:{type:"text",placeholder:t.placeholder,focus:t.focus,value:t.val},on:{input:function(e){t.val=e.detail.value}}})],1),n("view",{staticClass:["uni-dialog-button-group"]},[n("view",{staticClass:["uni-dialog-button"],on:{click:t.close}},[n("u-text",{staticClass:["uni-dialog-button-text"]},[t._v("\u53d6\u6d88")])]),n("view",{staticClass:["uni-dialog-button","uni-border-left"],on:{click:t.onOk}},[n("u-text",{staticClass:["uni-dialog-button-text","uni-button-color"]},[t._v("\u786e\u5b9a")])])])])},i=[]},448:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-popup-share"]},[n("view",{staticClass:["uni-share-title"]},[n("u-text",{staticClass:["uni-share-title-text"]},[t._v(t._s(t.title))])]),n("view",{staticClass:["uni-share-content"]},[n("view",{staticClass:["uni-share-content-box"]},t._l(t.bottomData,(function(e,o){return n("view",{key:o,staticClass:["uni-share-content-item"],on:{click:function(n){t.select(e,o)}}},[n("u-image",{staticClass:["uni-share-image"],attrs:{src:e.icon,mode:"aspectFill"}}),n("u-text",{staticClass:["uni-share-text"]},[t._v(t._s(e.text))])],1)})),0)]),n("view",{staticClass:["uni-share-button-box"]},[n("button",{staticClass:["uni-share-button"],on:{click:t.close}},[t._v("\u53d6\u6d88")])],1)])},i=[]},49:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return this.isShow?e("view",{ref:"ani",staticClass:["uni-transition"],class:[this.ani.in],style:"transform:"+this.transform+";"+this.stylesObject,on:{click:this.change}},[this._t("default")],2):this._e()},i=[]},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},i=[]},53:function(t,e,n){"use strict";n.r(e);var o=n(41),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},531:function(t,e,n){"use strict";n.r(e);var o=n(308),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},532:function(t,e,n){"use strict";n.r(e);var o=n(311),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},533:function(t,e,n){"use strict";n.r(e);var o=n(314),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},534:function(t,e,n){"use strict";n.r(e);var o=n(317),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},535:function(t,e,n){"use strict";n.r(e);var o=n(320),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},625:function(t,e,n){"use strict";n.r(e);n(6);var o=n(96);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),o.default.mpType="page",o.default.route="pages/extUI/popup/popup",o.default.el="#root",new Vue(o.default)},626:function(t,e,n){"use strict";n.r(e);var o=n(445),i=n(306);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"410e5c75","7660865d",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(531).default,this.options.style):Object.assign(this.options.style,n(531).default)}).call(a),e.default=a.exports},627:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=(o=n(628))&&o.__esModule?o:{default:o};var r={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},s={data:function(){return{config:r}},mixins:[i.default]};e.default=s},628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={created:function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)},methods:{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}}},629:function(t,e,n){"use strict";n.r(e);var o=n(426),i=n(309);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"d364b576","d53f5d5e",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(532).default,this.options.style):Object.assign(this.options.style,n(532).default)}).call(a),e.default=a.exports},630:function(t,e,n){"use strict";n.r(e);var o=n(447),i=n(312);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"2f08b02f","7e0949b7",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(533).default,this.options.style):Object.assign(this.options.style,n(533).default)}).call(a),e.default=a.exports},631:function(t,e,n){"use strict";n.r(e);var o=n(448),i=n(315);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(0);var a=Object(s.a)(i.default,o.b,o.c,!1,null,"3af8cade","9da38a7e",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(534).default,this.options.style):Object.assign(this.options.style,n(534).default)}).call(a),e.default=a.exports},7:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},8:function(t,e,n){"use strict";n.r(e);var o=n(4),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},96:function(t,e,n){"use strict";var o=n(394),i=n(318),r=n(0);var s=Object(r.a)(i.default,o.b,o.c,!1,null,null,"1765a77c",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(535).default,this.options.style):Object.assign(this.options.style,n(535).default)}).call(s),e.default=s.exports}});