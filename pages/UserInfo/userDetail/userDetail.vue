<template>
	<view>
		<div class="container" style="height:20%">
		  <div class="userinfo">
			<block>
			  <image  class="userinfo-avatar" :src="userInfo.avatar"  mode="cover"></image>
			  <text class="userinfo-nickname">{{userInfo.nickName}}</text>
			</block>
		  </div> 
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			userInfo:{},
			isEdit:false
			}
		},
		methods: {
			onReady(){
				this.getUserInfo()
			},
			getUserInfo(){
				uni.showLoading({
					title:"数据加载中..."
				})
				console.log(this.BaseProperties.userSite)
				this.userInfo=this.BaseProperties.userSite;
				
				uni.hideLoading();
			},
			onNavigationBarButtonTap(e){
				            //#ifdef APP-PLUS
							var currentWebview = this.$mp.page.$getAppWebview();
				                if (e.text === "编辑"&&!this.isEdit) {  
									
				                    currentWebview.setTitleNViewButtonStyle(0, {  
				                        text: "完成",  
				                    });
				                    this.isEdit = true;  
				                } else if(this.isEdit) {  
									this.saveUserInof();
				                   currentWebview.setTitleNViewButtonStyle(0, {  
				                        text: "编辑",  
				                    });  
				                    this.isEdit = false;  
				                }  
							// #endif
				            
			},
			saveUserInof(){}
		}
	}
</script>

<style>
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
</style>
