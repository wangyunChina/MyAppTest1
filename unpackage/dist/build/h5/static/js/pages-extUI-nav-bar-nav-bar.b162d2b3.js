(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-nav-bar-nav-bar"],{2749:function(t,e,i){"use strict";i.r(e);var n=i("bcb4"),a=i("df0c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a1bc");var l,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"55b07a92",null,!1,n["a"],l);e["default"]=c.exports},"4d7b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout((function(){uni.stopPullDownRefresh(),console.log("stopPullDownRefresh")}),1e3)}};e.default=n},"850c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-55b07a92]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-55b07a92]{font-size:14px;line-height:inherit}.example[data-v-55b07a92]{padding:0 15px 15px}.example-info[data-v-55b07a92]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-55b07a92]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-55b07a92]{padding:0 15px}.example-info[data-v-55b07a92]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-55b07a92]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-55b07a92]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-55b07a92]{font-size:18px;color:#fff}.word-btn[data-v-55b07a92]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-55b07a92]{background-color:#4ca2ff}.uni-nav-bar-text[data-v-55b07a92]{font-size:14px}.city[data-v-55b07a92]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-left:4px}.input-view[data-v-55b07a92]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#f8f8f8;height:30px;border-radius:15px;padding:0 15px;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-uni-icon[data-v-55b07a92]{line-height:30px}.nav-bar-input[data-v-55b07a92]{height:30px;line-height:30px;\n\npadding:0 5px;font-size:14px;background-color:#f8f8f8}.example-body[data-v-55b07a92]{\ndisplay:block;\npadding:0}body.?%PAGE?%[data-v-55b07a92]{background-color:#efeff4}',""]),t.exports=e},a1bc:function(t,e,i){"use strict";var n=i("aa61"),a=i.n(n);a.a},aa61:function(t,e,i){var n=i("850c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0e1df056",n,!0,{sourceMap:!1,shadowMode:!1})},bcb4:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniNavBar:i("8754").default,uniSection:i("5884").default,uniIcons:i("7d71").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-nav-bar",{attrs:{color:"#ffffff","background-color":"#007AFF","status-bar":!0,"left-icon":"arrowleft","left-text":"返回",title:"标题"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"example-info"},[t._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")]),i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"标题"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"左右显示文字",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-nav-bar",{attrs:{"left-icon":"arrowleft","right-text":"菜单","left-text":"返回",title:"标题"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"插入slot",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.showCity.apply(void 0,arguments)},clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.scan.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"left"},slot:"left"},[i("v-uni-view",{staticClass:"city"},[i("v-uni-view",[i("v-uni-text",{staticClass:"uni-nav-bar-text"},[t._v(t._s(t.city))])],1),i("uni-icons",{attrs:{type:"arrowdown",color:"#333333",size:"22"}})],1)],1),i("v-uni-view",{staticClass:"input-view"},[i("uni-icons",{staticClass:"input-uni-icon",attrs:{type:"search",size:"22",color:"#666666"}}),i("v-uni-input",{staticClass:"nav-bar-input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}})],1)],2)],1)],1)},o=[]},df0c:function(t,e,i){"use strict";i.r(e);var n=i("4d7b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);