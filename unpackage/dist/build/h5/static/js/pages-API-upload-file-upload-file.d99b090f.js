(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{"0d9e":function(e,t,n){var a=n("6e05");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("111b7e92",a,!0,{sourceMap:!1,shadowMode:!1})},2731:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={pageHead:n("8a31").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"demo"},[e.imageSrc?[n("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},u=[]},"601b":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-page-head"},[n("v-uni-view",{staticClass:"uni-page-head-title"},[e._v(e._s(e.title))])],1)},u=[]},"66eb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"page-head",props:{title:{type:String,default:""}}};t.default=a},"6e05":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".image[data-v-79207c37]{width:100%}.demo[data-v-79207c37]{background:#fff;padding:%?50?%}",""]),e.exports=t},7604:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var n=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:n,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=n},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};t.default=a},"8a31":function(e,t,n){"use strict";n.r(t);var a=n("601b"),i=n("a2e1");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var o,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},"9e84":function(e,t,n){"use strict";n.r(t);var a=n("2731"),i=n("f306");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("e653");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"79207c37",null,!1,a["a"],o);t["default"]=s.exports},a2e1:function(e,t,n){"use strict";n.r(t);var a=n("66eb"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},e653:function(e,t,n){"use strict";var a=n("0d9e"),i=n.n(a);i.a},f306:function(e,t,n){"use strict";n.r(t);var a=n("7604"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a}}]);