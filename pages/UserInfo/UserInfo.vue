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
		<div class="improtant-option">
			<div class="option">
			  <image src=""></image>
			  <div class="option-text">每日推荐</div>
			</div>
			<div class="option">
			  <image src=""></image>
			  <div class="option-text">通知</div>
			</div>
			 <div class="option">
			  <image src=""></image>
			  <div class="option-text">收藏</div>
			</div>
			 <div class="option"> 		  
			   <image src=""></image>
			   <div class="option-text">我的培训</div>
			 </div>
		</div>
		
		<myCard titleImage="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" headerImage="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></myCard>
</div>
</template>

<script>
	import myCard from "../../components/myCard/myCard.vue"
	export default {
		data() {
			return {
			userInfo:this.BaseProperties.userSite,
			header:this.BaseProperties.header
			}
		},
		components:{myCard},
		onLoad() {
			console.log(this.header)
			if(this.BaseProperties.isLogin==false)
			uni.showToast({
				title:"你没有登录请先登录！",
				duration:1000,
				success: () => {
				},
				complete: () => {
					     setTimeout(function () { 
					       uni.navigateTo({
					       		url:"../login/login"
					       	})
					         }, 1000)
							
				}
			})
			
			console.log(this.userInfo)
			console.log(this.BaseProperties.isLogin)
			
		},
		methods: {
			
		}
	}
</script>

<style>
/**index.wxss**/
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
.name{
  display: flex;
  flex-direction: row;
  height: 8%;
  margin-left: 10px;
  width: 100%;
  margin: 3% 5%;
}
.name image{
 height: 50rpx;
 width: 50rpx;
}
.name text{
  width: 35%;
  font-size: 15px;
  margin-left: 5px;
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
