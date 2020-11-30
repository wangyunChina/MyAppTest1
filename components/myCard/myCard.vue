<template>
	<view class="example-body">
		<uni-card :isShadow="true" :title="title" :subTitle="subTitle" mode="title" :thumbnail="titleImage" :note="note">
			<view>
				<view class="image-box">
					<image class="image" mode="aspectFill" :src="headerImage" />
				</view>
				<view class="content-box">
					<text class="content-box-text">{{content}}</text>
				</view>
			</view>
			<template v-if="hasfooter" slot="footer">
				<view class="footer-box">
					<view ><text class="footer-box__item">喜欢</text></view>
					<view ><text class="footer-box__item">评论</text></view>
					<view ><text class="footer-box__item">分享</text></view>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	export default {
		name : 'mycard', 
		props : {
			title:{
				type:String,
				default:""
			},
			subTitle:{
				type:String,
				default:""
			},
			titleImage:{
				type:String,
				default:""	
			},
			headerImage:{
				type:String,
				default:""	
			},
			content:{
				type:String,
				default:""
			},
			hasfooter:{
				type: [Boolean, String],
				default: false
			},
			note:{
				type:String,
				default:""
			}
		},
		
	}
</script>

<style>
@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 1px 0;
	}

	.example-box {
		margin: 12px 0;
	}

	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350rpx;
		overflow: hidden;
	}

	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}

	.content-box {
		padding-top: 20rpx;
	}

	.content-box-text {
		font-size: 12px;
		line-height: 22px;
	}

	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;
	}

	.footer-box__item {
		align-items: center;
		padding: 2px 0;
		font-size: 12px;
		color: #666;
	}
</style>
