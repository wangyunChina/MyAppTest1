(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-canvas-canvas"],{1431:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".canvas-element-wrapper[data-v-519e41fe]{display:block;margin-bottom:%?100?%}.canvas-element[data-v-519e41fe]{width:100%;height:%?500?%;background-color:#fff}.canvas-buttons[data-v-519e41fe]{padding:%?30?% %?50?% %?10?%;width:100%;height:%?360?%;box-sizing:border-box}.canvas-button[data-v-519e41fe]{float:left;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:40px;line-height:1;width:%?300?%;margin:%?15?% %?12?%}",""]),e.exports=t},"601b":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-page-head"},[n("v-uni-view",{staticClass:"uni-page-head-title"},[e._v(e._s(e.title))])],1)},o=[]},"66eb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"page-head",props:{title:{type:String,default:""}}};t.default=a},"8a31":function(e,t,n){"use strict";n.r(t);var a=n("601b"),i=n("a2e1");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var r,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},"8e95":function(e,t,n){"use strict";var a=n("ab60"),i=n.n(a);i.a},a2e1:function(e,t,n){"use strict";n.r(t);var a=n("66eb"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},ab60:function(e,t,n){var a=n("1431");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("1b0f488e",a,!0,{sourceMap:!1,shadowMode:!1})},b665:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={pageHead:n("8a31").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas",id:"canvas"}}),n("v-uni-scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},[e._l(e.names,(function(t,a){return[n("v-uni-button",{key:a+"_0",staticClass:"canvas-button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleCanvasButton(t)}}},[e._v(e._s(t))])]})),n("v-uni-button",{staticClass:"canvas-button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toTempFilePath.apply(void 0,arguments)}}},[e._v("toTempFilePath")])],2)],1)],1)},o=[]},c9e1:function(e,t,n){"use strict";n.r(t);var a=n("e15f"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},cb29:function(e,t,n){var a=n("23e7"),i=n("81d5"),o=n("44d2");a({target:"Array",proto:!0},{fill:i}),o("fill")},db76:function(e,t,n){"use strict";n.r(t);var a=n("b665"),i=n("c9e1");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8e95");var r,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"519e41fe",null,!1,a["a"],r);t["default"]=s.exports},e15f:function(e,t,n){"use strict";n("cb29"),n("4160"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=null,i={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){a=uni.createCanvasContext("canvas",this)},methods:{toTempFilePath:function(){uni.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e.tempFilePath)},fail:function(e){console.error(JSON.stringify(e))}})},handleCanvasButton:function(e){this[e]&&this[e]()},rotate:function(){a.beginPath(),a.rotate(10*Math.PI/180),a.rect(225,75,20,10),a.fill(),a.draw()},scale:function(){a.beginPath(),a.rect(25,25,50,50),a.stroke(),a.scale(2,2),a.beginPath(),a.rect(25,25,50,50),a.stroke(),a.draw()},reset:function(){a.beginPath(),a.setFillStyle("#000000"),a.setStrokeStyle("#000000"),a.setFontSize(10),a.setGlobalAlpha(1),a.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),a.setLineCap("butt"),a.setLineJoin("miter"),a.setLineWidth(1),a.setMiterLimit(10),a.draw()},translate:function(){a.beginPath(),a.rect(10,10,100,50),a.fill(),a.translate(70,70),a.beginPath(),a.fill(),a.draw()},save:function(){a.beginPath(),a.setStrokeStyle("#00ff00"),a.save(),a.scale(2,2),a.setStrokeStyle("#ff0000"),a.rect(0,0,100,100),a.stroke(),a.restore(),a.rect(0,0,50,50),a.stroke(),a.draw()},restore:function(){[3,2,1].forEach((function(e){a.beginPath(),a.save(),a.scale(e,e),a.rect(10,10,100,100),a.stroke(),a.restore()})),a.draw()},drawImage:function(){a.drawImage("../../../static/uni.png",0,0),a.draw()},fillText:function(){a.setStrokeStyle("#ff0000"),a.beginPath(),a.moveTo(0,10),a.lineTo(300,10),a.stroke(),a.setFontSize(10),a.fillText("Hello World",0,30),a.setFontSize(20),a.fillText("Hello World",100,30),a.beginPath(),a.moveTo(0,30),a.lineTo(300,30),a.stroke(),a.draw()},fill:function(){a.beginPath(),a.rect(20,20,150,100),a.setStrokeStyle("#00ff00"),a.fill(),a.draw()},stroke:function(){a.beginPath(),a.moveTo(20,20),a.lineTo(20,100),a.lineTo(70,100),a.setStrokeStyle("#00ff00"),a.stroke(),a.draw()},clearRect:function(){a.setFillStyle("#ff0000"),a.beginPath(),a.rect(0,0,300,150),a.fill(),a.clearRect(20,20,100,50),a.draw()},beginPath:function(){a.beginPath(),a.setLineWidth(5),a.setStrokeStyle("#ff0000"),a.moveTo(0,75),a.lineTo(250,75),a.stroke(),a.beginPath(),a.setStrokeStyle("#0000ff"),a.moveTo(50,0),a.lineTo(150,130),a.stroke(),a.draw()},closePath:function(){a.beginPath(),a.setLineWidth(1),a.moveTo(20,20),a.lineTo(20,100),a.lineTo(70,100),a.closePath(),a.stroke(),a.draw()},moveTo:function(){a.beginPath(),a.moveTo(0,0),a.lineTo(300,150),a.stroke(),a.draw()},lineTo:function(){a.beginPath(),a.moveTo(20,20),a.lineTo(20,100),a.lineTo(70,100),a.stroke(),a.draw()},rect:function(){a.beginPath(),a.rect(20,20,150,100),a.stroke(),a.draw()},arc:function(){a.beginPath(),a.setLineWidth(2),a.arc(75,75,50,0,2*Math.PI,!0),a.moveTo(110,75),a.arc(75,75,35,0,Math.PI,!1),a.moveTo(65,65),a.arc(60,65,5,0,2*Math.PI,!0),a.moveTo(95,65),a.arc(90,65,5,0,2*Math.PI,!0),a.stroke(),a.draw()},quadraticCurveTo:function(){a.beginPath(),a.moveTo(20,20),a.quadraticCurveTo(20,100,200,20),a.stroke(),a.draw()},bezierCurveTo:function(){a.beginPath(),a.moveTo(20,20),a.bezierCurveTo(20,100,200,100,200,20),a.stroke(),a.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){a.setFillStyle(e),a.beginPath(),a.rect(0+75*t,0,50,50),a.fill()})),a.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){a.setStrokeStyle(e),a.beginPath(),a.rect(0+75*t,0,50,50),a.stroke()})),a.draw()},setGlobalAlpha:function(){a.setFillStyle("#000000"),[1,.5,.1].forEach((function(e,t){a.setGlobalAlpha(e),a.beginPath(),a.rect(0+75*t,0,50,50),a.fill()})),a.draw(),a.setGlobalAlpha(1)},setShadow:function(){a.beginPath(),a.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),a.rect(10,10,100,100),a.fill(),a.draw()},setFontSize:function(){[10,20,30,40].forEach((function(e,t){a.setFontSize(e),a.fillText("Hello, world",20,20+40*t)})),a.draw()},setLineCap:function(){a.setLineWidth(10),["butt","round","square"].forEach((function(e,t){a.beginPath(),a.setLineCap(e),a.moveTo(20,20+20*t),a.lineTo(100,20+20*t),a.stroke()})),a.draw()},setLineJoin:function(){a.setLineWidth(10),["bevel","round","miter"].forEach((function(e,t){a.beginPath(),a.setLineJoin(e),a.moveTo(20+80*t,20),a.lineTo(100+80*t,50),a.lineTo(20+80*t,100),a.stroke()})),a.draw()},setLineWidth:function(){[2,4,6,8,10].forEach((function(e,t){a.beginPath(),a.setLineWidth(e),a.moveTo(20,20+20*t),a.lineTo(100,20+20*t),a.stroke()})),a.draw()},setMiterLimit:function(){a.setLineWidth(4),[2,4,6,8,10].forEach((function(e,t){a.beginPath(),a.setMiterLimit(e),a.moveTo(20+80*t,20),a.lineTo(100+80*t,50),a.lineTo(20+80*t,100),a.stroke()})),a.draw()}}};t.default=i}}]);