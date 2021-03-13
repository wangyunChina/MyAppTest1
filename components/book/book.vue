<template>
	<div>
		<div id="bookBox">
			<!--封面-->
			<image id="bookFace" :src="bookFace"></image>
			<!--书名-->
			<div id="bookName">{{bookName}}</div>
			<!--状态 15个单词未学习-->
			<div id="bookStatus">{{bookStatus}}个未学习</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"book",
		props:{
			bookFace:{
				type:String,
				default:""
			},
			bookName:{
				type:String,
				default:""
			},
			bookStatus:{
				type:Number,
				default:999
			}
		},
		methods:{
			
		}
	}
</script>

<style>
 #bookBox{
	 width: 30vw;
	 height: auto;
	 margin: 10rpx 5rpx 0 5rpx;
	border-radius: 10rpx;
	-moz-box-shadow:3px 3px 4px #ccc;
	-webkit-box-shadow:3px 3px 4px #ccc;
	box-shadow:3px 3px 4px #ccc;
 }
 #bookFace{
	 height: 25vh;
	 width: 100%;
	
 }
 #bookName{
	text-align: center;
	 font-size: 30rpx;
 }
 #bookStatus{
	 text-align: right;
	  font-size: 13rpx;
	  color: #ccc;
 }
</style>
