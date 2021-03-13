<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
	
		<form @submit.prevent="login($event)">
		<myform label="用 户 名" placeHolder="请输入用户名" name="username" v-model="username"></myform>
		<myform v-show="loginTypeArray[loginTypeIndex].type==1" label="密码" placeHolder="请输入密码" name="password" type="password"></myform>
		<myform v-show="loginTypeArray[loginTypeIndex].type==2" label="验证码" placeHolder="请输入验证码" name="code" type="text" enableButton="true" :buttonText="codeText" @sendCode="sendCode" v-model="code"></myform>
		<view style="text-align: center;color: blue;" @click="switchType">{{loginTypeArray[loginTypeIndex].messageZH}}</view>
		<button form-type="submit">登录</button>
		</form>
		<view class="text-navigator">
			<label>没有账号？</label><navigator url="../register/register" open-type="navigate">立即注册</navigator>
		</view>
	</view>
</template>

<script>
	import myform from '../../components/form/myform.vue'
	export default {
		data() {
			return {
			username:"",
			password:"",
			login_logo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355161828,1088477055&fm=26&gp=0.jpg",
			loginTypeArray:[{type:1,messageZH:"验证码登录",messageEN:"Login with verification Code"},{type:2,messageZH:"密码登录",messageEN:"Login with password"}],
			loginTypeIndex:0,
			code:"",
			codeSendTimes:0,
			codeResetTime:60,
			codeText:"发送",
			timerNum:""
			}
		},
		onLoad() {
			if(this.BaseProperties.isLogin===true)
			uni.switchTab({
				url:"../UserInfo/UserInfo"
			})
		},
		components:
		{myform},
		methods: {
			login:function(e){
				console.log(e);
				console.log(this.username);
				var username=e.detail.value.username;
				var password=e.detail.value.password;
				var code=e.detail.value.code;
				var mode=this.loginTypeArray[this.loginTypeIndex].type
				let that=this;
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiLogin,
					method:"POST",
					data:{
						"mobile":username,
						"password":password,
						"code":code,
						"mode":mode
					},
					success(res) {
						console.log(res)
						console.log()
						if(res.data.code===that.BaseProperties.requestSuccessStatus||res.data.code==that.BaseProperties.loginAgain)
						{
							res.data.data.avatar=that.BaseProperties.staticFilePath+that.BaseProperties.apiFileRead+res.data.data.avatar;
							
							that.BaseProperties.userSite=res.data.data;
							console.log(that.BaseProperties.userSite)
							that.BaseProperties.isLogin=true;
							that.BaseProperties.header.cid=res.data.data.cid;
							that.BaseProperties.header.Authorization="Bearer "+res.data.data.apiToken;
							uni.showToast({
								title:"登录成功",
								duration:1000,
								success: () => {
								},
								complete: () => {
									     setTimeout(function () { 
									          uni.switchTab({
									          	url:"../UserInfo/UserInfo"
									          })
									         }, 1000)
											
								}
							})
							
						}
					},
					fail: (failResponse) => {
						console.log(failResponse)
						uni.showToast({
							title:"网络异常",
							duration:500,
							image:"../../static/netWorkError.png"
						})
					}
					
					
				})
			},
			switchType:function(e){
			this.loginTypeIndex=(this.loginTypeIndex+1)%2
			},
			sendCode:function(e){
				
				console.log(e)
				let that=this;
				let mobileNum=this.username;
				console.log(this.username)
				if(this.checkPhone()){
					this.BaseProperties.request({
						url:this.BaseProperties.baseUrl+this.BaseProperties.apiSMSSendCode,
						data:{
							"mobile":mobileNum
						},
						method:"POST",
						success:(res)=>{
							if(res.data.code==200){
								that.codeSendTimes+=1;
								that.timerNum=setInterval(that.timer,1000)
							}else{
								uni.showToast({
									title:"发送验证码失败",
									duration:500,
									image:"../../static/netWorkError.png"
								})
							}
						}
					
					})
				}
			},
			checkPhone:function(){
				if(!(/^1\d{10}$/.test(this.username))){   
					uni.showToast({
						title:"手机号有误",
						duration:500,
						image:"../../static/netWorkError.png"
					})	
				        return false; 
				    }
				return true;	 
			},
			timer:function(){
				if(this.codeResetTime>0){
					this.codeResetTime-=1;
					this.codeText=this.codeResetTime+"s后可再次发送"
				}else{
					this.codeText="再次发送"
					this.codeResetTime=60;
					clearInterval(this.timerNum)
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 10px;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	button{
		margin: 16px 0;
		-webkit-box-shadow:0px 3px 3px #c8c8c8 ;
		-moz-box-shadow:0px 3px 3px #c8c8c8 ;
		box-shadow:0px 3px 3px #c8c8c8 ;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.text-navigator
	{
		display: flex;
		flex-direction: row;
	}
</style>
