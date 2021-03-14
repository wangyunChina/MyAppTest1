<template>
	<view>
		<button style="margin-top: 16px;" @click="logout()">切换账户</button>
		<button v-if="isApp" @click="exit()" style="margin-top: 16px;background-color: #EE0A24;color: #fff;">退出</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isApp:false
			}
		},
		onShow(){
			if(process.env.NODE_ENV != "development"){
				this.isApp=true;
			}
		},
		methods: {
			logout:function(){
				this.BaseProperties.isLogin=false;
				this.BaseProperties.userSite.cid="";
				this.BaseProperties.userSite.Authorization="";
				this.BaseProperties.userSite.avatar="";
				this.BaseProperties.userSite.expireTime="";
				this.BaseProperties.userSite.mobile="";
				this.BaseProperties.userSite.nickName="";
				uni.reLaunch({
					url:"/pages/login/login"
				})
			},
			exit:function(){
				plus.runtime.quit()
			}
		}
	}
</script>

<style>

</style>
