(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"048c":function(e,t,i){"use strict";i.r(t);var n=i("897f"),o=i("9d62");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("1527");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"73d518c6",null,!1,n["a"],r);t["default"]=c.exports},1527:function(e,t,i){"use strict";var n=i("edc7"),o=i.n(n);o.a},"184b":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".content[data-v-73d518c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 10px}.logo[data-v-73d518c6]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}uni-button[data-v-73d518c6]{margin:16px 0;-webkit-box-shadow:0 3px 3px #c8c8c8;-moz-box-shadow:0 3px 3px #c8c8c8;box-shadow:0 3px 3px #c8c8c8}.text-area[data-v-73d518c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-73d518c6]{font-size:%?36?%;color:#8f8f94}.text-navigator[data-v-73d518c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}",""]),e.exports=t},"1e46":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("938c")),a={data:function(){return{username:"",password:"",login_logo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355161828,1088477055&fm=26&gp=0.jpg",loginTypeArray:[{type:1,messageZH:"验证码登录",messageEN:"Login with verification Code"},{type:2,messageZH:"密码登录",messageEN:"Login with password"}],loginTypeIndex:0,code:"",codeSendTimes:0,codeResetTime:60,codeText:"发送",timerNum:""}},onLoad:function(){!0===this.BaseProperties.isLogin&&uni.switchTab({url:"../UserInfo/UserInfo"})},components:{myform:o.default},methods:{login:function(e){console.log(e),console.log(this.username);var t=e.detail.value.username,i=e.detail.value.password,n=e.detail.value.code,o=this.loginTypeArray[this.loginTypeIndex].type,a=this;uni.request({url:this.BaseProperties.baseUrl+this.BaseProperties.apiLogin,method:"POST",data:{mobile:t,password:i,code:n,mode:o},success:function(e){console.log(e),console.log(),e.data.code!==a.BaseProperties.requestSuccessStatus&&e.data.code!=a.BaseProperties.loginAgain||(e.data.data.avatar=a.BaseProperties.staticFilePath+a.BaseProperties.apiFileRead+e.data.data.avatar,a.BaseProperties.userSite=e.data.data,console.log(a.BaseProperties.userSite),a.BaseProperties.isLogin=!0,a.BaseProperties.header.cid=e.data.data.cid,a.BaseProperties.header.Authorization="Bearer "+e.data.data.apiToken,uni.showToast({title:"登录成功",duration:1e3,success:function(){},complete:function(){setTimeout((function(){uni.switchTab({url:"../UserInfo/UserInfo"})}),1e3)}}))},fail:function(e){console.log(e),uni.showToast({title:"网络异常",duration:500,image:"../../static/netWorkError.png"})}})},switchType:function(e){this.loginTypeIndex=(this.loginTypeIndex+1)%2},sendCode:function(e){console.log(e);var t=this,i=this.username;console.log(this.username),this.checkPhone()&&this.BaseProperties.request({url:this.BaseProperties.baseUrl+this.BaseProperties.apiSMSSendCode,data:{mobile:i},method:"POST",success:function(e){200==e.data.code?(t.codeSendTimes+=1,t.timerNum=setInterval(t.timer,1e3)):uni.showToast({title:"发送验证码失败",duration:500,image:"../../static/netWorkError.png"})}})},checkPhone:function(){return!!/^1\d{10}$/.test(this.username)||(uni.showToast({title:"手机号有误",duration:500,image:"../../static/netWorkError.png"}),!1)},timer:function(){this.codeResetTime>0?(this.codeResetTime-=1,this.codeText=this.codeResetTime+"s后可再次发送"):(this.codeText="再次发送",this.codeResetTime=60,clearInterval(this.timerNum))}}};t.default=a},2072:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"#inputBox[data-v-e0e552ac]{width:90vw;height:30px;padding:16px 5vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}#inputBox_label[data-v-e0e552ac]{width:25vw;font-size:18px;color:#000;padding:0 2vw}#inputBox_input[data-v-e0e552ac]{width:70vw;height:28px;border:solid 1px #2c405a;box-shadow:#ccc .5px;border-radius:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;line-height:28px}#inputBox_input uni-input[data-v-e0e552ac]{height:28px}",""]),e.exports=t},"3e13":function(e,t,i){var n=i("2072");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("18053e0a",n,!0,{sourceMap:!1,shadowMode:!1})},"49ec":function(e,t,i){"use strict";var n=i("3e13"),o=i.n(n);o.a},8466:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"myform",props:{label:{type:String,default:""},placeHolder:{type:String,default:""},name:{type:String,default:""},type:{type:String,default:"text"},enableButton:{type:String,default:"false"},buttonText:{type:String,default:""}},methods:{buttonFunctin:function(e){this.$emit("sendCode",e)},valInput:function(e){this.$emit("input",e.detail.value)}}};t.default=n},"897f":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),i("v-uni-form",{on:{submit:function(t){t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.login(t)}}},[i("myform",{attrs:{label:"用 户 名",placeHolder:"请输入用户名",name:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),i("myform",{directives:[{name:"show",rawName:"v-show",value:1==e.loginTypeArray[e.loginTypeIndex].type,expression:"loginTypeArray[loginTypeIndex].type==1"}],attrs:{label:"密码",placeHolder:"请输入密码",name:"password",type:"password"}}),i("myform",{directives:[{name:"show",rawName:"v-show",value:2==e.loginTypeArray[e.loginTypeIndex].type,expression:"loginTypeArray[loginTypeIndex].type==2"}],attrs:{label:"验证码",placeHolder:"请输入验证码",name:"code",type:"text",enableButton:"true",buttonText:e.codeText},on:{sendCode:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),i("v-uni-view",{staticStyle:{"text-align":"center",color:"blue"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.switchType.apply(void 0,arguments)}}},[e._v(e._s(e.loginTypeArray[e.loginTypeIndex].messageZH))]),i("v-uni-button",{attrs:{"form-type":"submit"}},[e._v("登录")])],1),i("v-uni-view",{staticClass:"text-navigator"},[i("v-uni-label",[e._v("没有账号？")]),i("v-uni-navigator",{attrs:{url:"../register/register","open-type":"navigate"}},[e._v("立即注册")])],1)],1)},a=[]},"938c":function(e,t,i){"use strict";i.r(t);var n=i("b6b1"),o=i("d9da");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("49ec");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"e0e552ac",null,!1,n["a"],r);t["default"]=c.exports},"9d62":function(e,t,i){"use strict";i.r(t);var n=i("1e46"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},b6b1:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"inputBox"}},[i("div",{attrs:{id:"inputBox_label"}},[e._v(e._s(e.label))]),i("div",{attrs:{id:"inputBox_input"}},[i("v-uni-input",{attrs:{type:e.type,name:e.name,id:"",placeholder:e.placeHolder},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.valInput.apply(void 0,arguments)}}}),"true"==e.enableButton?i("div",{staticStyle:{width:"50vw","text-align":"center"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonFunctin.apply(void 0,arguments)}}},[e._v(e._s(e.buttonText))]):e._e()],1)])},a=[]},d9da:function(e,t,i){"use strict";i.r(t);var n=i("8466"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},edc7:function(e,t,i){var n=i("184b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("3c2b53f8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);