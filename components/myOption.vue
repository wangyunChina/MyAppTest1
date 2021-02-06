<template>
	<view>
		<view :class="innerClass" @click="optionClicked">
			{{optionText}}
		</view>
	</view>
</template>

<script>
	export default {
					
			data(){return {
				innerClass:"option"
				}},
			name:"myOption",
			props:{
				optionText:{
					type:String,
					default:""
				},
				isCorrect:{
					type:Boolean,
					default:""
				}
			},
			methods:{
				optionClicked:function(res){
				if(this.isCorrect){
					this.innerClass="option_yes"
				}
				else{
					this.innerClass="option_no"
				}
				}
			}
		
	}
</script>

<style>
.option{
	width: 75vw;
	text-align: center;
	background-color: #fff;

	font-size: 20px;
	color: #000000;
	border-radius: 30rpx;
	-moz-box-shadow:3px 3px 4px #ccc;
	-webkit-box-shadow:3px 3px 4px #ccc;
	box-shadow:3px 3px 4px #ccc;
}
.option_yes{
	width: 75vw;
	text-align: center;
	background-color: green;
	font-size: 20px;
	color: #000000;
	border-radius: 30rpx;
	-moz-box-shadow:3px 3px 4px #ccc;
	-webkit-box-shadow:3px 3px 4px #ccc;
	box-shadow:3px 3px 4px #ccc;
}
@keyframes no
{
    from {background: red;}
    to {background: #ccc;}
}
 
@-webkit-keyframes no /* Safari 与 Chrome */
{
    from {background: red;}
    to {background: #ccc;}
}
.option_no{
	width: 75vw;
	text-align: center;
	font-size: 20px;
	color: #000000;
	border-radius: 30rpx;
	-moz-box-shadow:3px 3px 4px #ccc;
	-webkit-box-shadow:3px 3px 4px #ccc;
	box-shadow:3px 3px 4px #ccc;
	animation: no 200ms;
}

</style>
