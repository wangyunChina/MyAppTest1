(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"1bbd":function(t,a,n){"use strict";var i=n("573f"),e=n.n(i);e.a},"2ad0":function(t,a,n){"use strict";function i(t){var a=t.x,n=t.y,i=t.vx,e=t.vy,s=t.canvasWidth,r=t.canvasHeight,c=t.ctx;this.canvasWidth=s,this.canvasHeight=r,this.ctx=c,this.x=a,this.y=n,this.vx=i,this.vy=e,this.radius=5}function e(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}n("cb29"),n("4160"),n("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},i.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var s={methods:{start:function(t,a,n,s){for(var r=s.getDataset().width,c=s.getDataset().height,u=document.querySelectorAll(".canvas>canvas")[0],o=u.getContext("2d"),f=3,d=[],v=3,h=20,l=0;l<v;l++)for(var p=e(r/2,c/2)/v*l,b=0;b<h;b++){var x=2*b*Math.PI/h,y=Math.sin(x),g=Math.cos(x),w=p*g+r/2,M=p*y+c/2,m=f*g,_=f*y;d.push(new i({x:w,y:M,vx:m,vy:_,canvasWidth:r,canvasHeight:c,ctx:o,radius:5}))}function W(t){o.clearRect(0,0,u.width,u.height),t.forEach((function(t){t.move(),t.draw()})),requestAnimationFrame((function(){W(t)}))}W(d)}}};a.default=s},4915:function(t,a,n){"use strict";n.r(a);var i=n("2ad0"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},"573f":function(t,a,n){var i=n("d2fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("f9c60398",i,!0,{sourceMap:!1,shadowMode:!1})},"601b":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-page-head"},[n("v-uni-view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))])],1)},s=[]},"66eb":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"page-head",props:{title:{type:String,default:""}}};a.default=i},"8a31":function(t,a,n){"use strict";n.r(a);var i=n("601b"),e=n("a2e1");for(var s in e)"default"!==s&&function(t){n.d(a,t,(function(){return e[t]}))}(s);var r,c=n("f0c5"),u=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);a["default"]=u.exports},"8f57":function(t,a,n){"use strict";n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}));var i={pageHead:n("8a31").default},e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"page-body-wrapper"},[n("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},s=[]},"96cb":function(t,a,n){"use strict";n("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().select(".canvas").boundingClientRect((function(a){t.canvasWidth=a.width,t.startStatus=!0})).exec()}))}};a.default=i},a2e1:function(t,a,n){"use strict";n.r(a);var i=n("66eb"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},c2cd:function(t,a,n){"use strict";n.r(a);var i=n("96cb"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},cb29:function(t,a,n){var i=n("23e7"),e=n("81d5"),s=n("44d2");i({target:"Array",proto:!0},{fill:e}),s("fill")},d2fd:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".page-body-wrapper[data-v-26f93635]{text-align:center}.canvas[data-v-26f93635]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""]),t.exports=a},ef74:function(t,a,n){"use strict";n.r(a);var i=n("8f57"),e=n("4915");for(var s in e)"default"!==s&&function(t){n.d(a,t,(function(){return e[t]}))}(s);var r=n("c2cd");for(var s in r)"default"!==s&&function(t){n.d(a,t,(function(){return r[t]}))}(s);n("1bbd");var c=n("f0c5");e["default"].__module="animate";var u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"26f93635",null,!1,i["a"],e["default"]);a["default"]=u.exports}}]);