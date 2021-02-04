<template>
	<div id="avtarBox">
		<image class="logo" :src="avtarUrl" @change='urlchange' @click="updateImg"></image>
	</div>
</template>

<script>
	export default {
		name : 'avtarConponent', 
		props : {
			avtarUrl:{
				type:String,
				default:"/static/cemera.png"
			},
			hasChange:false,
			enableChange:{
				type:String,
				default:"true"	
			}
		},
		methods:{
		urlchange:function(e){
			console.log(e)
			},
		updateImg:function(){
			console.log("头像被点击！")
			let that=this;
			if(this.enableChange=="true"){
				uni.chooseImage({
					count: 6, //默认9
					    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['album'], //从相册选择
					    success: function (res) {
							console.log(res.tempFilePaths)
						that.$emit("input",res.tempFilePaths[0]);
					 }
				})
			}
			}
		
		}
		
	}
</script>

<style>
#avtarBox{
	height: 200rpx;
	width: 200rpx;
	margin-top: 100rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}	
.logo {
		height: 200rpx;
		width: 200rpx;
	}
</style>
