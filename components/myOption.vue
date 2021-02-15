<template>
	<view>
		<view :class="innerClass" @click="optionClicked" @change="init">
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
					this.$emit("input",true)
				}
				else{
					this.innerClass="option_no"
					this.$emit("input",false)
				}
				setTimeout(()=>{this.innerClass="option"},100)
				},
				init:function(){
					this.innerClass="option"
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
	overflow-y: hidden;
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
	overflow-y: hidden;
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
	overflow-y: hidden;
}

</style>
