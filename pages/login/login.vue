<template>
	<div id="login_box">
		<div class="logo_box">
		<image id="logo" :src="login_logo">
			
		</image>
		</div>
		<form>
			<div class="forminput">
				<label>手机号</label>
				<input class="uni-input" v-model="username" type="text"/>
			</div>
			<div class="forminput">
				<label>密&nbsp;&nbsp;&nbsp;码</label>
				<input class="uni-input" v-model="password" type="password"/>
			</div>
			<button type="warn" @click="login()">登录</button>
			
		</form>
		
		<div id="navigate_register"><label>没有账号？</label><a>立即注册</a></div>	
	</div>
</template>

<script>
	import base from '../../common/baseCommon.js'
	export default {
		data() {
			return {
			username:"",
			password:"",
			login_logo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355161828,1088477055&fm=26&gp=0.jpg"
			}
		},
		methods: {
			login:function(){
				console.log(this.password);
				console.log(this.username);
				uni.request({
					url:base.baseUrl+base.apiLogin,
					method:"POST",
					data:{
						"username":this.username,
						"password":this.password
					},
					success(res) {
						if(res.getCode().eq(requestSuccessStatus))
						{
							uni.setStorage({
								key:"userInfo",
								data:res.getData(),
								success: (storeResponse) => {
									console.log(storeResponse)
								}
							})
						}
						else{
							uni.showToast({
								title:"登录失败",
								duration:500
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
#login_box{
	height: 100vw;
	padding:20vw 15px;
}
#login_box button{
	margin-top: 30px;
}
.forminput{
	display: flex;
	flex-direction: row;
	margin: 5px 0;
}
.forminput label{
	width: 15vw;
	text-align: center;
	font-size: 16px;
	align-self: center;
}
uni-input{
	border-radius: calc(12px);
	border: #0062CC solid 1px;
}
#logo{
	width: 100px;
	height: 100px;
	border-radius: calc(50px);
	 display: table-cell;
	text-align: center;
	vertical-align: middle;
}
.logo_box{
	display: table-cell;
	text-align: center;
	vertical-align: middle;
	padding: 50px 30vw;
}
 #navigate_register{
	text-align: center;
	width: 100vw;
	margin-top: 16px;
}
</style>
