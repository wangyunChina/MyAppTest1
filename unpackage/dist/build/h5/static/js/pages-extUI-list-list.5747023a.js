(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-list"],{"04cb":function(t,i,e){"use strict";e.r(i);var n=e("767f"),a=e("9de2");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("b9a5");var l,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"f019d2ba",null,!1,n["a"],l);i["default"]=s.exports},"0754":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uniSection:e("5884").default,uniList:e("11c4").default,uniListItem:e("04cb").default,uniBadge:e("cf00").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")]),e("uni-section",{attrs:{title:"基础用法",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"列表文字",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"禁用列表",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"展示箭头",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字"}}),e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"点击反馈",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"弹窗提示",clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"页面跳转",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"关闭当前页面打开新页面",link:"redirectTo",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"打开错误页面(查看控制台)",link:"redirectTo",to:"./chats"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"不显示分割线",type:"line"}}),e("uni-list",{attrs:{border:!1}},[e("uni-list-item",{attrs:{title:"列表文字"}}),e("uni-list-item",{attrs:{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{border:!0,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"文字溢出隐藏",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{ellipsis:1,title:"列表 title 超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),e("uni-list-item",{attrs:{ellipsis:2,title:"列表 title 超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表 title 全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"显示图标或图片",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png","thumb-size":"sm",rightText:"小图"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png","thumb-size":"base",rightText:"默认"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png","thumb-size":"lg",rightText:"大图"}}),e("uni-list-item",{attrs:{"show-extra-icon":!0,showArrow:!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}})],1),e("uni-section",{attrs:{title:"右侧显示 switch/badge",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-badge":!0,"badge-text":"99",showArrow:!0,title:"禁用状态"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,title:"列表右侧带 switch"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{disabled:!0,"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,"switch-checked":!0,title:"禁用状态"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"使用插槽",type:"line"}}),e("uni-list",[e("uni-list-item",[e("v-uni-view",{staticClass:"slot-box",attrs:{slot:"body"},slot:"body"},[e("v-uni-text",{staticClass:"slot-text"},[t._v("默认插槽")]),e("uni-badge",{attrs:{text:"2",type:"primary"}})],1)],1),e("uni-list-item",{attrs:{title:"自定义右侧插槽",note:"列表描述信息",link:!0}},[e("template",{slot:"header"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)],2),e("uni-list-item",[e("v-uni-view",{staticClass:"slot-box",attrs:{slot:"header"},slot:"header"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1),e("v-uni-text",{staticClass:"slot-box slot-text",attrs:{slot:"body"},slot:"body"},[t._v("自定义左侧插槽")]),e("template",{slot:"footer"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)],2)],1),e("uni-section",{attrs:{title:"列表扩展",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"聊天列表",link:!0,to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(i,1)}}})],1)],1)},o=[]},"1c00":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.uni-list-item[data-v-f019d2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nfont-size:16px;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-list-item--disabled[data-v-f019d2ba]{opacity:.3}.uni-list-item--hover[data-v-f019d2ba]{background-color:#f1f1f1}.uni-list-item__container[data-v-f019d2ba]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:12px 15px;padding-left:15px;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.container--right[data-v-f019d2ba]{padding-right:0}.uni-list--border[data-v-f019d2ba]{position:absolute;top:0;right:0;left:0;\n}\n.uni-list--border[data-v-f019d2ba]:after{position:absolute;top:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-list-item__content[data-v-f019d2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding-right:8px;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3b4144;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow:hidden}.uni-list-item__content--center[data-v-f019d2ba]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-list-item__content-title[data-v-f019d2ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-f019d2ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-list-item__extra[data-v-f019d2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__header[data-v-f019d2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon[data-v-f019d2ba]{margin-right:%?18?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon-img[data-v-f019d2ba]{\ndisplay:block;\nheight:26px;width:26px}.uni-icon-wrapper[data-v-f019d2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px}.flex--direction[data-v-f019d2ba]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:initial;-webkit-align-items:initial;align-items:normal}.flex--justify[data-v-f019d2ba]{-webkit-box-pack:initial;-webkit-justify-content:initial;justify-content:normal}.uni-list--lg[data-v-f019d2ba]{height:40px;width:40px}.uni-list--base[data-v-f019d2ba]{height:26px;width:26px}.uni-list--sm[data-v-f019d2ba]{height:20px;width:20px}.uni-list-item__extra-text[data-v-f019d2ba]{color:#999;font-size:12px}.uni-ellipsis-1[data-v-f019d2ba]{\noverflow:hidden;white-space:nowrap;text-overflow:ellipsis;\n}.uni-ellipsis-2[data-v-f019d2ba]{\noverflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;\n}',""]),t.exports=i},"1dcd":function(t,i,e){"use strict";var n=e("f5a5"),a=e.n(n);a.a},"22e1":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".uni-badge[data-v-bfa59010]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;overflow:hidden;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-bfa59010]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-bfa59010]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-bfa59010]{color:#999;background-color:initial}.uni-badge--primary[data-v-bfa59010]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-bfa59010]{color:#007aff;background-color:initial}.uni-badge--success[data-v-bfa59010]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-bfa59010]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-bfa59010]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-bfa59010]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-bfa59010]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-bfa59010]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-bfa59010]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=i},"767f":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uniIcons:e("7d71").default,uniBadge:e("cf00").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-list-item",class:{"uni-list-item--disabled":t.disabled},attrs:{"hover-class":!t.clickable&&!t.link||t.disabled||t.showSwitch?"":"uni-list-item--hover"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}},[t.isFirstChild?t._e():e("v-uni-view",{staticClass:"border--left",class:{"uni-list--border":t.border}}),e("v-uni-view",{staticClass:"uni-list-item__container",class:{"container--right":t.showArrow||t.link,"flex--direction":"column"===t.direction}},[t._t("header",[e("v-uni-view",{staticClass:"uni-list-item__header"},[t.thumb?e("v-uni-view",{staticClass:"uni-list-item__icon"},[e("v-uni-image",{staticClass:"uni-list-item__icon-img",class:["uni-list--"+t.thumbSize],attrs:{src:t.thumb}})],1):t.showExtraIcon?e("v-uni-view",{staticClass:"uni-list-item__icon"},[e("uni-icons",{attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type}})],1):t._e()],1)]),t._t("body",[e("v-uni-view",{staticClass:"uni-list-item__content",class:{"uni-list-item__content--center":t.thumb||t.showExtraIcon||t.showBadge||t.showSwitch}},[t.title?e("v-uni-text",{staticClass:"uni-list-item__content-title",class:[0!==t.ellipsis&&t.ellipsis<=2?"uni-ellipsis-"+t.ellipsis:""]},[t._v(t._s(t.title))]):t._e(),t.note?e("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.note))]):t._e()],1)]),t._t("footer",[t.rightText||t.showBadge||t.showSwitch?e("v-uni-view",{staticClass:"uni-list-item__extra",class:{"flex--justify":"column"===t.direction}},[t.rightText?e("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e(),t.showBadge?e("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText}}):t._e(),t.showSwitch?e("v-uni-switch",{attrs:{disabled:t.disabled,checked:t.switchChecked},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.onSwitchChange.apply(void 0,arguments)}}}):t._e()],1):t._e()])],2),t.showArrow||t.link?e("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,color:"#bbb",type:"arrowright"}}):t._e()],1)},o=[]},8550:function(t,i,e){"use strict";e.r(i);var n=e("d5ec"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"970b":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.text?e("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},o=[]},"9de2":function(t,i,e){"use strict";e.r(i);var n=e("f04e"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},af8a:function(t,i,e){"use strict";var n=e("e01b"),a=e.n(n);a.a},b342:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};i.default=n},b34e:function(t,i,e){"use strict";e.r(i);var n=e("0754"),a=e("8550");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("af8a");var l,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6e4a5885",null,!1,n["a"],l);i["default"]=s.exports},b9a5:function(t,i,e){"use strict";var n=e("f5c1"),a=e.n(n);a.a},cf00:function(t,i,e){"use strict";e.r(i);var n=e("970b"),a=e("eb4e");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("1dcd");var l,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"bfa59010",null,!1,n["a"],l);i["default"]=s.exports},d5ec:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={components:{},data:function(){return{extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}},methods:{onClick:function(t){console.log("执行click事件",t.data),uni.showToast({title:"点击反馈"})},switchChange:function(t){uni.showToast({title:"change:"+t.value,icon:"none"})}}};i.default=n},e01b:function(t,i,e){var n=e("f7ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ae998fcc",n,!0,{sourceMap:!1,shadowMode:!1})},eb4e:function(t,i,e){"use strict";e.r(i);var n=e("b342"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},f04e:function(t,i,e){"use strict";var n=e("4ea4");e("c975"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("7d71")),o=n(e("cf00")),l={name:"UniListItem",components:{uniIcons:a.default,uniBadge:o.default},props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}},border:{type:Boolean,default:!0}},inject:["list"],data:function(){return{isFirstChild:!1}},mounted:function(){this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0)},methods:{onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange:function(t){this.$emit("switchChange",t.detail)},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(t){var i=this;uni[t]({url:this.to,success:function(t){i.$emit("click",{data:t})},fail:function(t){i.$emit("click",{data:t}),console.error(t.errMsg)}})}}};i.default=l},f5a5:function(t,i,e){var n=e("22e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("c2b01b04",n,!0,{sourceMap:!1,shadowMode:!1})},f5c1:function(t,i,e){var n=e("1c00");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("58a7708a",n,!0,{sourceMap:!1,shadowMode:!1})},f7ed:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-6e4a5885]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-6e4a5885]{font-size:14px;line-height:inherit}.example[data-v-6e4a5885]{padding:0 15px 15px}.example-info[data-v-6e4a5885]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-6e4a5885]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-6e4a5885]{padding:0 15px}.example-info[data-v-6e4a5885]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-6e4a5885]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-6e4a5885]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-6e4a5885]{font-size:18px;color:#fff}.word-btn[data-v-6e4a5885]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-6e4a5885]{background-color:#4ca2ff}.slot-box[data-v-6e4a5885]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.slot-image[data-v-6e4a5885]{\ndisplay:block;\nmargin-right:10px;width:30px;height:30px}.slot-text[data-v-6e4a5885]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#4cd964;margin-right:10px}body.?%PAGE?%[data-v-6e4a5885]{background-color:#efeff4}',""]),t.exports=i}}]);