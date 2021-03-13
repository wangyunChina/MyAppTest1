<template>
	<div>
		<div class="container" style="height:20%">
		  <div class="userinfo">
			<block>
			  <image  class="userinfo-avatar" :src="userInfo.avatar"  mode="cover"></image>
			  <text class="userinfo-nickname">{{userInfo.nickName}}</text>
			</block>
		  </div> 
		</div>
		<div class="functions">
			<!--
			个人资料，
			学习记录
			记忆分析
			VIP
			设置
			关于
			-->
		<block v-for="(item,index) in functions">
		  <div class="name">
		      <image :src="item.icon" mode="aspectFit"></image>
		      <span class="function" style="font-size: 16px;margin-left: 5vw;width: 70vw;">{{item.name}}</span>
			  <image src="../../static/next.png" style="margin-right: 5vw;"></image>
		       <navigator :url="item.url">
		      </navigator>
		  </div>
		</block>	 
		</div>  
</div>
</template>

<script>
	export default {
		data() {
			return {
			userInfo:this.BaseProperties.userSite,
			header:this.BaseProperties.header,
			functions:[
				{icon:"",name:"",url:""}
			]
			}
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")   
				 uni.navigateTo({
				 	url:"recordLife/recordLife.vue"
				 })
		},
		onShow(){
			
			if(this.BaseProperties.isLogin==false){
				uni.navigateTo({
					url:"../login/login"
				})
			}
			this.userInfo=this.BaseProperties.userSite;
			this.getFunctions();
		},
		methods: {
				getFunctions:function(){
				let that=this;
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiUserFunctions,
					data:{"cid":this.BaseProperties.header.cid},
					header:this.BaseProperties.header,
					method:"POST",
					success:res=>{
						console.log("功能请求成功：",JSON.stringify(res))
						if(res.statusCode===200){
							that.functions=new Array();
							let data =  res.data.data;
							for(var i=0;i<data.length;i++){
								data[i].icon=that.BaseProperties.staticFilePath+that.BaseProperties.apiFileRead+data[i].icon;
								that.functions.push(data[i])
							}
						
							console.log(that.functions)
						}
					},
					fail:res=>{
						getFunctions();
					},
				})
			}
		}
		
	}
</script>

<style>
/**index.wxss**/
.functions{
	margin-top: 15vh;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #000;
  font-size: 20px;
}

.usermotto {
  margin-top: 200px;
}
.functions{
	width: 100vw;
}
.name{
  display: flex;
  flex-direction: row;
  height: 7vh;
  width: 90vw;
  margin: 3vh 5vw;
  align-items: center;
  -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
  -moz-box-shadow:0px 3px 3px #c8c8c8 ;	
}
.name image{
 height: 50rpx;
 width: 50rpx;
}
.name span{
  width: 35%;
  font-size: 15px;
  margin-left: 5px;
}
.function{

}
.improtant-option{
  width: 80%;
  height: 15%;
  margin: 20rpx 10%;
  -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
-moz-box-shadow:0px 3px 3px #c8c8c8 ;
box-shadow:0px 3px 3px #c8c8c8 ;
display: flex;
flex-direction: row;
padding: 2% 0;
border-radius: 20rpx 20rpx;
}
.option{
  width: 25%;
  height: 80%;
  text-align:center;
  justify-content: center;
  align-items: center;
}
.option image{
  width: 50rpx;
  height: 50rpx;
  margin-top: 40rpx;
}
.option-text{
  direction: flex;
  overflow: hidden;
  font-size: 12px;
  color: #101010;
  flex-direction: row
}
.contact-btn {
  display: inline-block;
  position: absolute;
  width: 100%;
  background: salmon;
    opacity: 0;
}
.name navigator{
   display: inline-block;
  position: absolute;
  width: 100%;
  background: salmon;
    opacity: 0;
}


</style>
