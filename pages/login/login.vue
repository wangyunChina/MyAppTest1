<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
	
		<form @submit.prevent="login($event)">
		<myform label="用 户 名" placeHolder="请输入用户名" name="username"></myform>
		<myform label="密码" placeHolder="请输入密码" name="password" type="password"></myform>
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
			login_logo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355161828,1088477055&fm=26&gp=0.jpg"
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
				let that=this;
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiLogin,
					method:"POST",
					data:{
						"mobile":username,
						"password":password
					},
					success(res) {
						console.log(res)
						console.log()
						if(res.data.code===that.BaseProperties.requestSuccessStatus||res.data.code==that.BaseProperties.loginAgain)
						{
							res.data.data.avatar=that.BaseProperties.baseUrl+that.BaseProperties.apiFileRead+res.data.data.avatar;
							that.BaseProperties.userSite=res.data.data;
							that.BaseProperties.isLogin=true;
							that.BaseProperties.setHeader(res.data.data);
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
