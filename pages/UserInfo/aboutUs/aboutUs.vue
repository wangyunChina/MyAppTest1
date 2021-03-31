<template>
	<view>
		<view class="logo-container">
			<image class="logo" src="../../../static/EnglishLogo.png"></image>
			<view id="version">V {{version}}</view>
		</view>
		<block>
			<div class="name" @click="getVersion()">
			    <span class="function" style="font-size: 16px;margin-left: 5vw;width: 40vw;">检查更新</span>
				<span class="function" style="font-size: 14px;margin-left: 5vw;width: 30vw;color: #ccc;">已经是最新版本</span>
				
			     <navigator>
			    </navigator>
			</div>
			<div class="name" @click="switchShow()">
			    <span class="function" style="font-size: 16px;margin-left: 5vw;width: 70vw;">功能介绍</span>
				<image src="../../../static/next.png" style="margin-right: 5vw;"></image>
			     <navigator >
			    </navigator>
			</div>
			<div v-if="isshow" class="description">
				<rich-text :nodes="desc"></rich-text>
			</div>
			<div class="name">
			    <span class="function" style="font-size: 16px;margin-left: 5vw;width: 70vw;">问题反馈</span>
				<image src="../../../static/next.png" style="margin-right: 5vw;"></image>
			     <navigator >
			    </navigator>
			</div>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version:"1.0.0",
				desc:"",
				path:"",
				newVersion:{},
				isshow:false
			}
		},
		methods: {
			onReady(){
				this.getVersion()
			},
			switchShow(){
				this.isshow=!this.isshow;
			},
			getVersion(){
				this.version="1.0.0"
				// #ifdef APP-PLUS
				if(plus.runtime.appid !== 'HBuilder'){
					this.version=plus.runtime.version
				}
				// #endif
				let that=this;
				console.log(this.BaseProperties.baseUrl+this.BaseProperties.apiVersionCheck+"?version="+this.version)
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiVersionCheck+"?version="+this.version,
					method:"GET",
					complete(res) {
						let data=res.data.data;
						if(res.data.code==200){
							console.log(data)
							that.desc=data.currentVersion.description;
							if(data.latestVersion!=null){
								uni.showModal({
								    title: '更新提示',
								    content:'发现新版本，是否选择更新',
								    success: (ee) => {
										 
								        if (ee.confirm) {
											var watiting = plus.nativeUI.showWaiting("开始下载");
											//#ifdef APP-PLUS
											console.log(data.latestVersion.path)
									var dtask = plus.downloader.createDownload( data.latestVersion.versionPath, {method:"GET"}, function ( d, status ) {  
										if ( status == 200 ) { // 下载成功  
											var path = d.filename;  
											 plus.runtime.openFile(path,{},(res)=>{console.log(res)})
											console.log(d.filename);  
										} else {//下载失败  
											alert( "Download failed: " + status );   
										}    
									}); 
									  dtask.addEventListener("statechanged",  function(task,  status)  {  
									                                     if  (!dtask)  {              
									                                         return;          
									                                     }   
									                                     switch  (task.state)  {              
									                                         case  1:  
									                                               // 开始  
									                                             break;              
									                                         case  2:  
									                                               // 已连接到服务器  
									                                             break;              
									                                         case  3: 
																			 if(task.downloadedSize % 1024==0){
																				watiting.setTitle("已下载:"+task.downloadedSize/1024+"KB");                      
																				}
									                                             break;              
									                                         case  4:  
									                                               // 下载完成  
									                                             break;  
									                                     }      
									                                 },false);   
										dtask.start();
											// #endif
										}
								    }
								})
							}
						}else{
							uni.showToast({
								title:"网络异常"
							},3000)
						}
					}
				})
			}
		}
	}
</script>

<style>
.logo-container{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 10px;
}
.logo{
	width: 30vw;
	height: calc(30vw);
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
.description{
	background: #fff;
	margin: 0vh 5vw;
	margin-top: -3vh;
}
</style>
