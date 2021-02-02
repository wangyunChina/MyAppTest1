<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
	
		<form @submit.prevent="submit($event)">
		<myform label="昵    称" placeHolder="请输入昵称" name="nickName"></myform>
		<myform label="姓"  name="lastName"></myform>
		<myform label="名"  name="firstName"></myform>
		<myform label="用 户 名" placeHolder="请输入用户名" name="username"></myform>
		<myform label="密    码" placeHolder="请输入密码" name="password1" type="password"></myform>
		<myform label="重复密码" placeHolder="请输入密码" name="password2" type="password"></myform>
		<button form-type="submit">注册</button>
		</form>
	</view>
</template>

<script>
	import myform from '../../components/form/myform.vue'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			submit: function(event)
			{
				console.log(event)
				var url=this.BaseProperties.apiRegister
				var data={
					"firstname": event.detail.value.firstName,
					"lastName": event.detail.value.lastName,
					"mobile": event.detail.value.username,
					"password": event.detail.value.password1,
					"nickName":event.detail.value.nickName
				}
				var methods="POST"
				console.log(data)
				if(event.detail.value.passowrd1===event.detail.value.passowrd2){
					var res=this.BaseProperties.baserRequest
				    res.request(url,data,methods,function(response){
						if(response.data.code==200&&response.data.data==1)
						{
							uni.showToast({
								title:"注册成功",
								duration:1000,
								success: () => {
									
								},
								complete: () => {
									     setTimeout(function () { 
									            uni.redirectTo({ 
									                url: '../login/login'
									             }) 
									         }, 2000)
											
								}
							})
						}
					});
				
				}
			}
		},
		components:
		{myform}
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
</style>
