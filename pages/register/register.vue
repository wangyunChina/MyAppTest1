<template>
	<view class="content">
		<avtarConponent v-model="avatarUrl" :avtarUrl="avatarUrl"></avtarConponent>
	
		<form @submit.prevent="submit($event)">
		<myform label="昵    称" placeHolder="请输入昵称" name="nickName"></myform>
		<myform label="姓"  name="lastName"></myform>
		<myform label="名"  name="firstName"></myform>
		<myform label="手 机 号" placeHolder="请输入手机号" name="username"></myform>
		<myform label="密    码" placeHolder="请输入密码" name="password1" type="password"></myform>
		<myform label="重复密码" placeHolder="请输入密码" name="password2" type="password"></myform>
		<button form-type="submit">注册</button>
		</form>
	</view>
</template>

<script>
	import myform from '../../components/form/myform.vue'
	import avtarConponent from '../../components/avtarConponent.vue'
	export default {
		data() {
			return {
				avatarUrl:"/static/cemera.png"
			}
		},
		onLoad() {

		},
		methods: {
			submit: function(event)
			{console.log("正在进行文件上传")
				let that=this;
				console.log(this.BaseProperties.baseUrl + this.BaseProperties.apiUploadFile)
				uni.uploadFile({
					url: this.BaseProperties.baseUrl + this.BaseProperties.apiUploadFile,
					filePath: this.avatarUrl,
					fileType: 'image',
					name: 'fileName',
					success: (res) => {
						console.log(res)
					if(res.statusCode==200){
						let response=JSON.parse(res.data)
						let headImage="";
						try{
						headImage=response.data.fileId;
					}catch(err){
						uni.showToast({
							title:"头像不能为空",
							duration:1000})
							return;
					}
						var url=this.BaseProperties.apiRegister
						var data={
							"firstname": event.detail.value.firstName,
							"lastName": event.detail.value.lastName,
							"mobile": event.detail.value.username,
							"password": event.detail.value.password1,
							"nickName":event.detail.value.nickName,
							"avatarUrl":headImage
						}
						var methods="POST"
						if(event.detail.value.passowrd1===event.detail.value.passowrd2){
							var res=that.BaseProperties.baserRequest
						    res.request(url,data,methods,function(response){
								console.log(response)
								if(response.data.code==701){
									uni.showToast({
										title:response.data.message,
										duration:1000})
								}
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
					
					},fail:(res)=>{
						
						uni.showToast({
							title:"注册失败",
							duration:1000})
					}
				})
		
			
			}
		},
		components:
		{myform,avtarConponent}
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
