<template>
	<div id="inputBox">
		<div id="inputBox_label">{{label}}</div>	
		<div id="inputBox_input">
			<input :type="type" :name="name" id="" :placeholder="placeHolder" v-on:input="valInput"></input>
			<div style="width: 50vw;text-align: center;" v-if="enableButton=='true'" v-on:click="buttonFunctin">{{buttonText}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'myform', 
		props : {
			label:{
				type:String,
				default:""
			},
			placeHolder:{
				type:String,
				default:""
			},
			name:{
				type:String,
				default:""	
			},
			type:{
				type:String,
				default:"text"	
			},
			enableButton:{
				type:String,
				default:"false"
			},
	
			buttonText:{
				type:String,
				default:""
			}
		},
		methods:{
			buttonFunctin:function(e){
				this.$emit('sendCode',e)
			},
			valInput:function(e){
				this.$emit('input',e.detail.value)
			}
		}
		
	}
</script>

<style>
#inputBox{
	width: 90vw;
	height: 30px;
	padding: 16px 5vw;
	display: flex;
	flex-direction: row;
}
#inputBox_label{
	width: 25vw;
	font-size: 18px;
	color: #000;
	padding: 0 2vw;
}
#inputBox_input{
	width: 70vw;
	height: 28px;
	border:solid 1px #2C405A;
	box-shadow: #ccc 0.5px;
	border-radius:10px;
	display: flex;
	flex-direction: row;
	line-height:28px
}
#inputBox_input input{
height: 28px;
}
</style>
