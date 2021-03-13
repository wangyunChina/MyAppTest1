<template>
	<view>
		<view>
		    <uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    @change="change"
			:selected="recordLine"
		     />
		</view>
		<view v-if="button.disabled" class="button-absolute">
				<button class="button" @click="setRecord()" style="vertical-align:middle"><span>点击签到 </span></button>
		</view>
		<view v-else class="">
			
		</view>
	</view>
</template>

<script>
	/*
	接口一：签到历史
	接口二：签到
	接口三：当天学习记录
	*/
	export default {
		data() {
			return {
				button:{
					text:"已签到",
					disabled:true
				},
				recordLine:[
					{
					date: '2021-3-12', 
					info: '已签到'
					}
					]
			};
		},
		onShow() {
			if(this.recordLine.length!=0){
				this.hasRecord()
			}else{
				//@todo 获取打卡记录；
			}
		},
		methods:{
			hasRecord:function(){
				var date = new Date();
				var year=date.getUTCFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				var toDay=year+"-"+month+"-"+day;
				console.log(toDay)
				for(var i=0;i<this.recordLine.length;i++){
					if(this.recordLine[i].date==toDay){
						
						this.button.disabled=false;	
						return toDay;
					}
				}
				this.button.disabled=true;
				return toDay;
			},
			setRecord:function(){
				var toDay=this.hasRecord();
				if(this.button.disabled){
					this.recordLine.push({
						date: toDay,
						info: '已签到'
					})
					this.button.disabled=false;
					this.change({fulldate:toDay})
				}
			},
			change:async function(res){
				console.log(res)
			}
		}
	}
</script>

<style>
.button-absolute{
	 padding-top:15vh ;
	 height: 15vh;
	 align-items: center;
}
.button{
	background-color: #000000;
	color: #fff;
}

</style>
